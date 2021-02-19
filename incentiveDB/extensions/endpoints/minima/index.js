const axios = require('axios');
const Joi = require("joi");

const config = require ('../config');

const keySchema = Joi.object({
  userid: Joi.string().required(),
  publickey: Joi.string().required(),
});

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { InvalidPayloadException, ServiceUnavailableException } = exceptions;

  let blockTime = "122500";

  router.post('/key', (req, res, next) => {

    const { error } = keySchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const userid = req.body.userid;
    const publickey = req.body.publickey;

    const userService = new UsersService({ schema: req.schema });
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

        if (!found) {

          return next(new ServiceUnavailableException(`Invalid userid: ${userid}`));

        } else {

          const maxSend = 3;
          for (let i = 0; i < maxSend; i++) {

            //console.log("block ", blockTime);

            let thisBlock = +blockTime + (i * maxSend);
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

                if( i == maxSend - 1) {

                  const walletService = new ItemsService('wallet', { schema: req.schema });
                  walletService
                     .create({'userid': userid, 'publickey': publickey})
                     .then((createResults) => {

                       return res.json("OK");

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
        }

      })
      .catch((error) => {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      });
	});

  router.post('/txn', (req, res, next) => {

    if ( req.body.event == "newtxpow" ) {

      //console.log("newtxpow: ", req.body.txpow.body)

      const txOutputs = req.body.txpow.body.txn.outputs

      if ( ( Array.isArray(txOutputs) ) &&
           ( txOutputs.length ) &&
           ( txOutputs[0].address == config.devNull ) &&
           ( txOutputs[0].tokenid == config.tokenID ) &&
           ( req.body.txpow.body.txn.state ) ) {

        //console.log("has outputs: ", txOutputs)
        let uid = req.body.txpow.body.txn.state[0].data.replace(/\[/g,'');
        uid = uid.replace(/\]/g,'');
        const thisAmount = config.scaleFactor * txOutputs[0].amount

        const userService = new UsersService({ schema: req.schema });
        userService
          .readByQuery({ sort: 'id', fields: ['*'] })
          .then((results) => {
            //super inefficient, but I can't get .readByKey working :(
            //console.log("My results: ", results)

            let found = false;
            for (let i = 0; i < results.length; i++) {

              if (results[i].id == uid ) {
                found = true;
                break;
              }
            }

            if (!found) {

              console.error(`Invalid userid: ${uid}`)
              return next(new ServiceUnavailableException(`Invalid userid: ${uid}`));

            } else {

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

                  return res.send("OK");
                })
                .catch((error) => {

                  console.error(error.message)
                  return next(new ServiceUnavailableException(error.message));

                });
              }
            })
            .catch((error) => {

              console.error(error.message)
              return next(new ServiceUnavailableException(error.message));
            });
      } else {

        return res.send("OK");
      }

    } else if (req.body.event == "newblock") {

      blockTime = parseInt(req.body.txpow.header.block, 10) + 3;
      return res.send("OK");

    } else {

      return res.send("OK");
    }

	});

};

/*const walletService = new ItemsService('wallet', { schema: req.schema });
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
  })
  .catch(function (error) {

    console.error(error.message)
    return next(new ServiceUnavailableException(error.message));
  });*/
