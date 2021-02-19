const config = require ('../config');

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService, UsersService } = services;
	const { ServiceUnavailableException } = exceptions;

  router.get('/futureAddress', (req, res) => {

    const future = {
      futureAddress: `${config.futureAddress}`
    }

    return res.send(JSON.stringify(future));

	});

  router.get('/token', (req, res) => {

    const token = {
      tokenId: `${config.tokenID}`
    }

    return res.send(JSON.stringify(token));

	});

  router.post('/getKey', (req, res, next) => {

    const userid = req.body.userid

    if ( userid ) {

      const walletService = new ItemsService('wallet', { schema: req.schema });
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
    } else {

      console.error("GET key error");
      return next(new ServiceUnavailableException("GET key error"));
    }
	});

};
