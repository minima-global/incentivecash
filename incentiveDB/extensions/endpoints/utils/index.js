const Joi = require("joi");

const config = require ('../config');

const keySchema = Joi.object({
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

  router.post(config.uRLs.getKey.url, (req, res, next) => {

    const { error } = keySchema.validate(req.body);
    if (error) return next(new InvalidPayloadException(error.message));
    const userid = req.body.userid

    const walletService = new ItemsService(config.tables.wallet.table, { schema: req.schema });
		walletService
			.readByQuery({ sort: 'userid', fields: ['*'] })
			.then((results) => {

        //console.log("got users: ", results)

        let pubkeys = [];
        for (let i = 0; i < results.length; i++) {

          if (results[i].userid == userid ) {
            pubkeys.push(results[i].publickey);
          }
        }

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
