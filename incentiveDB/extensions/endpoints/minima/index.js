const axios = require('axios');

module.exports = function registerEndpoint(router, { services, exceptions }) {

  const { ItemsService } = services;
	const { ServiceUnavailableException } = exceptions;

  const devNull = "0xEEFFEEFFEE";
  const futureAddress = "0x73349B30EA22B0B0867C6081EE7F6B014D3C9E88";
  const tokenID = "0x9F667936E1043EE952DC3BD0C2D7606B7AC2E0262D2C6835DED62D9914870ACC3DB079014226B7EF217CD55A7CAED962F736B1C6C62C24C082BBAD918C3C3723";
  const  serverTokenAddress = "0x277F71693E6C438BED0F3513738B8B04F857C41F";
  let blockTime = 119400;

  //curl --header "Content-Type: application/json"   --request POST --data '{"userid":"f45177e7-ce7b-43ff-849c-e498662617ba", "publickey":"0xD3CFE4279A33162D70FC3240CA6605F6824F1AE2"}' https://incentivedb.minima.global/custom/minima/key
  //curl --header "Content-Type: application/json" --request GET 'https://incentivedb.minima.global/custom/minima/key?userid="f45177e7-ce7b-43ff-849c"&publickey="0xD3CFE4279A33162D70FC3240CA6605F6824F1AE2"'

  /*router.get('/address', (req, res) => {

    axios({
        method: 'POST',
        url: 'http://localhost:9002/cmd',
        headers: {
          'Content-Type': 'application/json'
        },
        data: 'newaddress'
      })
      .then(function (response) {
        serverTokenAddress = response.data.response.address.hexaddress
        console.log("Got address", serverTokenAddress);
      })
      .catch(function (error) {
        console.log(error);
      });

    return (
      res.send("OK")
    )

	});*/

  router.post('/key', (req, res) => {

    const userid = req.body.userid
    const publickey = req.body.publickey

    if ( userid && publickey ) {

      //console.log("token address: ", address)

      const walletService = new ItemsService('wallet', { schema: req.schema });
  		walletService
  			.create({'userid': userid, 'publickey': publickey})
  			.then((results) => res.json(results))
  			.catch((error) => {
  				throw new ServiceUnavailableException(error.message);
  			});

      const sendString = `sendpoll 1 ${futureAddress} ${tokenID} state:0:[${publickey}]#1:${blockTime}`;
      //const sendString = `send 10 ${publickey}`;
      //const sendString = `send 10 0xA2B49CF90A82DD76BE4E3D81A2C99357A9792595`;

      console.log(sendString)

      axios({
          method: 'POST',
          url: 'http://localhost:9002/cmd',
          headers: {
            'Content-Type': 'application/json'
          },
          data: `${sendString}`
        })
        .then(function (response) {
          console.log("sendString: ", sendString, " from: ", serverTokenAddress, " response: ", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

	});

  router.post('/tx', (req, res) => {

    //console.log("tx: ", req.body)

    if ( req.body.event === "newtxpow" ) {

      console.log("newtxpow: ", req.body.txpow.body.txn.outputs)

      if ( req.body.txpow.body.txn.outputs.hexaddress === devNull ) {

        /*const rewardCreate = {
          userid: `${user.uid}`,
          amount: "1",
          reason: "Claimed",
          extrainfo: `${user.referral} ${user.email}`
        }

        const rewardService = new ItemsService('reward', { schema: req.schema });
        rewardService
          .create(rewardCreate)
          .then((results) => res.json(results))
          .catch((error) => {
            throw new ServiceUnavailableException(error.message);
          });*/
      }

    } else if (req.body.event == "newblock") {

        blockTime = parseInt(req.body.txpow.header.block, 10) + 20;
    }

	});

};
