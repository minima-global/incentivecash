const Joi = require("joi");

const config = require ('../config');
const logger = require ('../logger');
const helpers = require ('../helpers');

const keySchema = Joi.object({
  userid: Joi.string().required()
});

const triggerSchema = Joi.object({
  jsonrpc: Joi.string().required(),
  method: Joi.string().required(),
  params: Joi.array(),
  id: Joi.number().required()
});

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { InvalidPayloadException, ServiceUnavailableException } = exceptions;

  router.get(config.uRLs.futureAddress.url, (req, res) => {

    const logData = {
      loggingtypeid: config.uRLs.futureAddress.index,
      loggingtype: config.logTypes.URL,
      data: `get ${config.uRLs.futureAddress.url}`
    }
    logger.log(ItemsService, logData, req.schema)

    const future = {
      futureAddress: `${config.futureAddress}`
    }
    return res.send(JSON.stringify(future));

	});

  router.post(config.uRLs.trigger.url, (req, res, next) => {

    const { error } = triggerSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));

    const jsonrpc = req.body.jsonrpc
    let method = req.body.method
    const params = req.body.params
    const id = req.body.id

    const bad = {
      jsonrpc: config.JSONRPCVERSION,
      error: {
        code: -32600,
        message: ""
      },
      id: id
    };

    const good = {
      jsonrpc: config.JSONRPCVERSION,
      result: "OK",
      id: id
    }

    if ( jsonrpc == config.JSONRPCVERSION ) {

      const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
  		triggerService
  			.readByQuery({ sort: 'id', fields: ['*'] })
  			.then( async (results) => {

          const logData = {
            loggingtypeid: config.uRLs.getTriggers.index,
            loggingtype: config.logTypes.TRIGGER,
            data: `post ${config.uRLs.trigger.url} ${id}`
          }
          logger.log(ItemsService, logData, req.schema)

          for (let i = 0; i < results.length; i++) {
            if ( ( results[i].id == id ) &&
                 ( results[i].method == method ) ) {

              let command = results[i].command
              //console.log("command ", command);

              if ( results[i].protocol == config.minimaRPC ) {

                const setParams = results[i].setparams ? results[i].setparams + " " : " "
                command += " " + setParams
                for (let j = 0; j < params.length; j++) {
                  command += params[j] + " "
                }

                const data = await helpers.postMinimaRPC(command.trim());
                if ( data.hasOwnProperty('response') ) {

                  return res.send(JSON.stringify(good));

                } else {

                  return res.send(JSON.stringify(bad));
                }
              }
            }
          }

          return res.send(JSON.stringify(good));

        })
  			.catch((error) => {

          console.error(error.message);
          bad.message = error.message;
          return res.send(JSON.stringify(bad));

  			});

    } else {

      return res.send(JSON.stringify(bad));
    }

  });

  router.get(config.uRLs.getTriggers.url, (req, res, next) => {

    const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
		triggerService
			.readByQuery({ sort: 'id', fields: ['*'] })
			.then((results) => {

        const logData = {
          loggingtypeid: config.uRLs.getTriggers.index,
          loggingtype: config.logTypes.TRIGGER,
          data: `get ${config.uRLs.getTriggers.url}`
        }
        logger.log(ItemsService, logData, req.schema)

        let triggers = [];
        for (let i = 0; i < results.length; i++) {
          triggers.push({
            id: results[i].id,
            method: results[i].method,
            params: results[i].params
          });
        }

        return res.send(JSON.stringify(triggers));
      })
			.catch((error) => {

        console.error(error.message);
        return next(new ServiceUnavailableException(error.message));

			});
  });

  router.post(config.uRLs.getKey.url, (req, res, next) => {

    const { error } = keySchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));
    const userid = req.body.userid

    const walletService = new ItemsService(config.tables.wallet.table, { schema: req.schema });
		walletService
			.readByQuery({ sort: 'userid', fields: ['*'] })
			.then((results) => {

        let pubkeys = [];
        for (let i = 0; i < results.length; i++) {

          if (results[i].userid == userid ) {
            pubkeys.push(results[i].publickey);
          }
        }

        const logData = {
          loggingtypeid: config.uRLs.getKey.index,
          loggingtype: config.logTypes.URL,
          data: `post ${config.uRLs.getKey.url} userid`
        }
        logger.log(ItemsService, logData, req.schema)

        const userKeys = {
          publickeys: pubkeys
        }
        return res.send(JSON.stringify(userKeys));

      })
			.catch((error) => {

        console.error(error.message);
        return next(new ServiceUnavailableException(error.message));

			});
	});

};
