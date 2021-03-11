const axios = require('axios');
const Joi = require("joi");

const config = require ('../config');
const helpers = require ('../helpers');
const logger = require ('../logger');

const keySchema = Joi.object({
  userid: Joi.string().required(),
  publickey: Joi.string().required(),
  address: Joi.string().required()
});

const cmdSchema = Joi.object({
  cmd: Joi.string().required()
});

const getUserSchema = Joi.object({
  userid: Joi.string().required()
});

const postRewardSchema = Joi.object({
  userid: Joi.string().required(),
  amount: Joi.number().required(),
  reason: Joi.string().required(),
  extrainfo: Joi.string()
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

  router.get(config.uRLs.referral.url, (req, res, next) => {

    const { error } = getUserSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const userid = req.body.userid;

    const referralService = new ItemsService(config.tables.referral.table, { schema: req.schema });
    referralService
      .readByQuery({ sort: 'userid', fields: ['*'] })
      .then(results => {

        let userReferrals = [];
        for (let i = 0; i < results.length; i++) {
          if ( results[i].userid == userid ) {
            //console.log("Userid: ", results[i].userid );
            userReferrals.push(results[i]);
          }
        }

        const logData = {
          loggingtypeid: config.uRLs.referral.index,
          loggingtype: "URL",
          data: `get ${config.uRLs.referral.url} ${userid}`
        }
        logger.log(ItemsService, logData, req.schema)

        return res.send(JSON.stringify(userReferrals));
      })
      .catch(function (error) {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      })
    //return res.send(JSON.stringify(token));
	});

  router.get(config.uRLs.reward.url, (req, res, next) => {

    const { error } = getUserSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const userid = req.body.userid;

    const rewardService = new ItemsService(config.tables.reward.table, { schema: req.schema });
    rewardService
      .readByQuery({ sort: 'userid', fields: ['*'] })
      .then(results => {

        let userRewards = [];
        for (let i = 0; i < results.length; i++) {
          if ( results[i].userid == userid ) {
            //console.log("Userid: ", results[i].userid );
            userRewards.push(results[i]);
          }
        }

        const logData = {
          loggingtypeid: config.uRLs.reward.index,
          loggingtype: "URL",
          data: `get ${config.uRLs.reward.url} ${userid}`
        }
        logger.log(ItemsService, logData, req.schema)
        return res.send(JSON.stringify(userRewards));
      })
      .catch(function (error) {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      })
    //return res.send(JSON.stringify(token));
	});

  router.post(config.uRLs.reward.url, (req, res, next) => {

    const { error } = postRewardSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const userid = req.body.userid;
    const amount = req.body.amount;
    const reason = req.body.reason;
    const extrainfo = req.body.extrainfo ? req.body.extrainfo : "";

    const rewardService = new ItemsService(config.tables.reward.table, { schema: req.schema });
    rewardService
       .create({'userid': userid, 'amount': amount, 'reason': reason, 'extrainfo': extrainfo})
       .then(id => {

         const logData = {
           loggingtypeid: id,
           loggingtype: "Reward",
           data: userid
         }
         logger.log(ItemsService, logData, req.schema)

         return res.json("OK");

       })
       .catch((error) => {

         console.error(error.message, userid, amount, reason, extrainfo)
         return next(new ServiceUnavailableException(error.message));

       });
    //return res.send(JSON.stringify(token));
	});

  router.get(config.uRLs.token.url, (req, res, next) => {

    const token = {
      tokenId: config.tokenID,
      scaleFactor: scaleFactor
    }

    const logData = {
      loggingtypeid: config.uRLs.token.index,
      loggingtype: "URL",
      data: `get ${config.uRLs.token.url}`
    }
    logger.log(ItemsService, logData, req.schema)

    return res.send(JSON.stringify(token));
	});

  router.post(config.uRLs.cmd.url, (req, res, next) => {

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

        const logData = {
          loggingtypeid: config.uRLs.cmd.index,
          loggingtype: "URL",
          data: `post ${config.uRLs.cmd.url} ${cmd}`
        }
        logger.log(ItemsService, logData, req.schema)

        return res.send(JSON.stringify(response.data.response));

      })
      .catch(function (error) {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      });
  });

  router.post(config.uRLs.key.url, (req, res, next) => {

    const { error } = keySchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const userid = req.body.userid;
    const publickey = req.body.publickey;
    const address = req.body.address;

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
          const numBatches = numTokens / config.tokenBatches;
          //const numBatches = 3;

          let thisBlockTime = blockTime;
          for ( let i = 0; i < numBatches; i++ ) {

            thisBlockTime += config.blocksPerBatch;
            maxBlockTime = thisBlockTime + config.blockWindow;
            const sendString = `sendpoll ${config.tokenBatches} ${config.futureAddress} ${config.tokenID} 0:${publickey}#1:${thisBlockTime}#2:${maxBlockTime}`;
            //console.log("sendString: ", sendString);

            axios({
              method: 'POST',
              url: config.cmdURL,
              headers: {
                'Content-Type': 'application/json'
              },
              data: sendString
            })
            .then(function (response) {

              if ( i == numBatches - 1 ) {

                const walletService = new ItemsService(config.tables.wallet.table, { schema: req.schema });
                walletService
                   .create({'userid': userid, 'publickey': publickey, 'address': address})
                   .then(id => {

                     const logData = {
                       loggingtypeid: id,
                       loggingtype: "Wallet",
                       data: userid
                     }
                     logger.log(ItemsService, logData, req.schema)

                     return res.json("OK");

                   })
                   .catch((error) => {

                     console.error(error.message, userid, publickey, address)
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
      })
      .catch((error) => {

        console.error(error.message)
        return next(new ServiceUnavailableException(error.message));
      });
	});

  router.post(config.uRLs.txn.url, (req, res, next) => {

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

              const rewardService = new ItemsService(config.tables.reward.table, { schema: req.schema });
              rewardService
                .create(rewardCreate)
                .then(id => {

                  const logData = {
                    loggingtypeid: id,
                    loggingtype: "Reward",
                    data: `Claimed ${uid}`
                  }
                  logger.log(ItemsService, logData, req.schema)

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
