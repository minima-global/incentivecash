const axios = require('axios');

const config = require ('../config');

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { ServiceUnavailableException } = exceptions;

  let blockTime = "122500";

  router.post('/key', (req, res, next) => {

    const userid = req.body.userid;
    const publickey = req.body.publickey;

    if ( userid && publickey ) {

      const userService = new UsersService({ schema: req.schema })
      userService
        .readByQuery({ sort: 'id', fields: ['*'] })
        .then((results) => {

          //super inefficient, but I can't get .readByKey working :(
          //console.log("My results: ", results)

          let found = false;
          for (let i = 0; i < results.length; i++) {

            if (results[i].id == userid ) {
              found = true;
              break;
            }
          }

          //console.log("User?:", found)

          if ( found ) {

            const walletService = new ItemsService('wallet', { schema: req.schema });
            walletService
              .readByQuery({ sort: 'userid', fields: ['*'] })
              .then((walletResults) => {

                found = false;
                for (let j = 0; j < walletResults.length; j++) {
                  if ( ( walletResults[j].userid == userid ) &&
                       ( walletResults[j].publickey ==  publickey ) ) {
                    found = true;
                    break;
                  }
                }

                //console.log("Did I find you?: ", found)
                if ( !found ) {

                  walletService
                    .create({'userid': userid, 'publickey': publickey})
                    .then((createResults) => {

                      for (let i = 0; i < 3; i++) {

                        //console.log("block ", blockTime);

                        let thisBlock = +blockTime + (i * 3);
                        const sendString = `sendpoll 1 ${config.futureAddress} ${config.tokenID} 0:${publickey}#1:${thisBlock}`;
                        //console.log("sendString: ", sendString)

                        axios({
                            method: 'POST',
                            url: 'http://localhost:9002/cmd',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            data: `${sendString}`
                          })
                          .then(function (response) {
                            console.log("success", sendString);
                          })
                          .catch(function (error) {

                            console.error(error.message)
                            return next(new ServiceUnavailableException(error.message));
                          });
                       }

                    })
                    .catch((error) => {

                      console.error(error.message)
                      return next(new ServiceUnavailableException(error.message));

                    });
                }

              })
              .catch(function (error) {

                console.error(error.message)
                return next(new ServiceUnavailableException(error.message));
              });
          }

          return res.json("OK");

        })
        .catch((error) => {

          console.error(error.message)
          return next(new ServiceUnavailableException(error.message));
        });

    } else {

      console.error("POST key error");
      return next(new ServiceUnavailableException("POST key error"));
    }

	});

  router.post('/txn', (req, res, next) => {

    if ( req.body.event == "newtxpow" ) {

      //console.log("newtxpow: ", req.body.txpow.body)

      const txOutputs = req.body.txpow.body.txn.outputs

      if ( Array.isArray(txOutputs) ) {
        if ( txOutputs.length ) {
          if ( ( txOutputs[0].address == config.devNull ) &&
               ( txOutputs[0].tokenid == config.tokenID ) &&
               ( req.body.txpow.body.txn.state ) ) {

            //console.log("has outputs: ", txOutputs)
            let uid = req.body.txpow.body.txn.state[0].data.replace(/\[/g,'');
            uid = uid.replace(/\]/g,'');
            const thisAmount = 100000000 * txOutputs[0].amount

            //console.log("uid: ", uid);
            //console.log("amount: ", txOutputs[0].amount);
            //console.log("this amount: ", thisAmount);

            const rewardCreate = {
              userid: `${uid}`,
              amount: `${thisAmount}`,
              reason: "Claimed",
              extrainfo: `txpowid: ${req.body.txpow.txpowid}`
            }

            const rewardService = new ItemsService('reward', { schema: req.schema });
            rewardService
              .create(rewardCreate)
              .then(function (response) {
                console.log("response: ", response);
              })
              .catch((error) => {

                  console.error(error.message)
                  return next(new ServiceUnavailableException(error.message));

              });

          }
        }
      }

    } else if (req.body.event == "newblock") {

        blockTime = parseInt(req.body.txpow.header.block, 10) + 3;
        return res.send("OK");
    }

    return res.send("OK");
	});

};
