const axios = require('axios');
const Joi = require("joi");

const config = require ('../config');
const helpers = require ('../helpers');

const keySchema = Joi.object({
  userid: Joi.string().required(),
  publickey: Joi.string().required(),
});

const cmdSchema = Joi.object({
  cmd: Joi.string().required()
});

module.exports = async function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { InvalidPayloadException, ServiceUnavailableException } = exceptions;

  let blockTime = config.defaultBlockTime;
  let scaleFactor = config.defaultScaleFactor;
  const tokenInfo = await helpers.getTokenInfo();
  if ( tokenInfo.hasOwnProperty('response') ) {

    tokenInfo.response.tokens.forEach(token => {

      if ( token.tokenid == config.tokenID ) {

        scaleFactor = token.scalefactor;
        //console.log("Got scale factor!", token.scalefactor);
      }
    });
  };

  router.get('/token', (req, res) => {

    const token = {
      tokenId: config.tokenID,
      scaleFactor: scaleFactor
    }

    return res.send(JSON.stringify(token));
	});

  router.post('/cmd', (req, res, next) => {

    const { error } = cmdSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const cmd = req.body.cmd;

    axios({
        method: 'POST',
        url: config.cmdURL,
        headers: {
          'Content-Type': 'application/json'
        },
        data: cmd
      })
      .then(function (response) {

        return res.send(JSON.stringify(response.data.response));

      })
      .catch(function (error) {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      });
  });

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

          const numTokens = helpers.getNumTokens(new Date());
          const numWeeksToSend = numTokens / config.tokensPerWeek;

          let thisBlockTime = blockTime;
          for ( let i = 0; i < numWeeksToSend; i++ ) {
            thisBlockTime += config.blocksPerWeek;
            for ( let j = 0; j < config.tokensPerWeek; j++ ) {

              let newBlockTime = thisBlockTime + j;
              const sendString = `sendpoll 1 ${config.futureAddress} ${config.tokenID} 0:${publickey}#1:${newBlockTime}`;

              axios({
                  method: 'POST',
                  url: config.cmdURL,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data: sendString
                })
                .then(function (response) {

                  if( ( i == numWeeksToSend - 1 ) &&
                      ( j == config.tokensPerWeek - 1 ) ) {

                    const walletService = new ItemsService('wallet', { schema: req.schema });
                    walletService
                       .create({'userid': userid, 'publickey': publickey})
                       .then((createResults) => {

                         return res.json("OK");

                       })
                       .catch((error) => {

                         console.error(error.message, userid, publickey)
                         return next(new ServiceUnavailableException(error.message));

                       });
                  }
                })
                .catch(function (error) {

                  console.error(error.message, sendString)
                  return next(new ServiceUnavailableException(error.message));
                });
            }
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
        const thisAmount = scaleFactor * txOutputs[0].amount

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

      blockTime = parseInt(req.body.txpow.header.block, 10);
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
