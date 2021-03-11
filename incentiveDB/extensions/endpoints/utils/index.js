const Joi = require("joi");

const config = require ('../config');
const logger = require ('../logger');

const keySchema = Joi.object({
  userid: Joi.string().required()
});

const triggerSchema = Joi.object({
  userid: Joi.string().required()
});

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { InvalidPayloadException, ServiceUnavailableException } = exceptions;

  router.get(config.uRLs.futureAddress.url, (req, res) => {

    const future = {
      futureAddress: `${config.futureAddress}`
    }

    return res.send(JSON.stringify(future));

	});

  router.post(config.uRLs.trigger.url, (req, res, next) => {

    const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
		triggerService
			.readByQuery({ sort: 'id', fields: ['*'] })
			.then((results) => {

        let triggers = [];
        for (let i = 0; i < results.length; i++) {
          triggers.push({
            id: results[i].id,
            method: results[i].method,
            params: results[i].params
          });
        }

        const logData = {
          loggingtypeid: config.uRLs.getTriggers.index,
          loggingtype: "URL",
          data: `get ${config.uRLs.getTriggers.url}`
        }
        logger.log(ItemsService, logData, req.schema)

        return res.send(JSON.stringify(triggers));

      })
			.catch((error) => {

        console.error(error.message);
        return next(new ServiceUnavailableException(error.message));

			});


  });

  router.get(config.uRLs.getTriggers.url, (req, res, next) => {

    const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
		triggerService
			.readByQuery({ sort: 'id', fields: ['*'] })
			.then((results) => {

        let triggers = [];
        for (let i = 0; i < results.length; i++) {
          triggers.push({
            id: results[i].id,
            method: results[i].method,
            params: results[i].params
          });
        }

        const logData = {
          loggingtypeid: config.uRLs.getTriggers.index,
          loggingtype: "URL",
          data: `get ${config.uRLs.getTriggers.url}`
        }
        logger.log(ItemsService, logData, req.schema)

        return res.send(JSON.stringify(triggers));

      })
			.catch((error) => {

        console.error(error.message);
        return next(new ServiceUnavailableException(error.message));

			});


  });

  router.post(config.uRLs.triggers.url, (req, res, next) => {

    const triggerService = new ItemsService(config.tables.trigger.table, { schema: req.schema });
		triggerService
			.readByQuery({ sort: 'id', fields: ['*'] })
			.then((results) => {

        let triggers = [];
        for (let i = 0; i < results.length; i++) {
          triggers.push({
            id: results[i].id,
            method: results[i].method,
            params: results[i].params
          });
        }

        const logData = {
          loggingtypeid: config.uRLs.getTriggers.index,
          loggingtype: "URL",
          data: `get ${config.uRLs.getTriggers.url}`
        }
        logger.log(ItemsService, logData, req.schema)

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
