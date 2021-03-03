const axios = require('axios');
const config = require ('./config');

function getNumTokens( toDate ) {

  const timeDifference = config.mainnetLaunch.getTime() - toDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const numTokens = config.tokensPerDay * daysDifference;
  const remainder = config.tokensPerWeek - (numTokens % config.tokensPerWeek);
  return numTokens + remainder;

}

async function getScaleFactor() {

  let scaleFactor = config.defaultScaleFactor;
  const header = "'Content-Type': 'application/json'";

  await axios({
      method: 'POST',
      url: config.cmdURL,
      headers: { header },
      data: "tokens"
    })
    .then(function (response) {

      if ( response.data.response.tokens ) {

        response.data.response.tokens.forEach(token => {

          if ( token.tokenid == config.tokenID ) {

            scaleFactor = token.scalefactor;
          }
        });
      }

    })
    .catch(function (error) {

      console.log(error.message);
    });

    return scaleFactor;
}

exports.getNumTokens = getNumTokens;
exports.getScaleFactor = getScaleFactor;
