const axios = require('axios');
const Joi = require("joi");

const config = require ('../config');
const logger = require ('../logger');

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
      loggingtype: "URL",
      data: `get ${config.uRLs.futureAddress.url}`
    }
    logger.log(ItemsService, logData, req.schema)

    const future = {
      futureAddress: `${config.futureAddress}`
    }
    return res.send(JSON.stringify(future));

	});

  //curl --silent --header "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"send","params":[13,"MxQA55QJS7EIT3I2HQWIH566QWBM3EC2OP","0xCBDE084D0A44A8F6EBDBD2CBF448D448E88E06EC008F4A0E3C004EC234A50C21E59A9CE4D7C7ECE60351FE1E90A5D1E80DA816734C2BA2C3B5363448D9245B50",""],"id":1}'  http://localhost:8055/custom/utils/trigger | jq
  //curl --silent --header "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"send","params":[15,"0x5AF1C7854D9C82EA1CC7E5DC2519ECE0FC09BA06","0x00",""],"id":1}'  http://localhost:8055/custom/utils/trigger
  //curl --silent --header "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"gimme50","params":["0x5AF1C7854D9C82EA1CC7E5DC2519ECE0FC09BA06","0x00"],"id":2}'  http://localhost:8055/custom/utils/trigger

  router.post(config.uRLs.trigger.url, (req, res, next) => {

    const { error } = triggerSchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));


    const jsonrpc = req.body.jsonrpc
    let method = req.body.method
    const params = req.body.params
    const id = req.body.id

    if ( jsonrpc == config.JSONRPCVERSION ) {

      const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
  		triggerService
  			.readByQuery({ sort: 'id', fields: ['*'] })
  			.then((results) => {

          const logData = {
            loggingtypeid: config.uRLs.getTriggers.index,
            loggingtype: "URL",
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
                command = command.trim()

                //console.log("this command ", command);

                const urlOptions = {
                  method: 'POST',
                  url: results[i].url,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  data: command
                };

                try {

                  axios(urlOptions);

                } catch (error) {

                  console.error(error.message);
                  console.error(error.message);
                  const response = {
                    jsonrpc: config.JSONRPCVERSION,
                    error: {
                      code: -32600,
                      message: error.message
                    },
                    id: id
                  };
                  return res.send(JSON.stringify(response));
                }
              }
            }
          }

          const response = {
            jsonrpc: config.JSONRPCVERSION,
            result: "OK",
            id: id
          }

          return res.send(JSON.stringify(response));

        })
  			.catch((error) => {

          console.error(error.message);
          const response = {
            jsonrpc: config.JSONRPCVERSION,
            error: {
              code: -32600,
              message: error.message
            },
            id: id
          };
          return res.send(JSON.stringify(response));

  			});

    } else {

      console.error("unknown JSON RPC version");
      console.error(error.message);
      const response = {
        jsonrpc: config.JSONRPCVERSION,
        error: {
          code: -32600,
          message: error.message
        },
        id: id
      };
      return res.send(JSON.stringify(response));
    }

  });

  router.get(config.uRLs.getTriggers.url, (req, res, next) => {

    const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
		triggerService
			.readByQuery({ sort: 'id', fields: ['*'] })
			.then((results) => {

        const logData = {
          loggingtypeid: config.uRLs.getTriggers.index,
          loggingtype: "URL",
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
          loggingtype: "URL",
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
