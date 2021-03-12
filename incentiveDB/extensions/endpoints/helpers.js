const axios = require('axios');
const config = require ('./config');

function getNumTokens( toDate ) {

  const timeDifference = config.mainnetLaunch.getTime() - toDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const numTokens = config.tokensPerDay * daysDifference;
  const remainder = config.tokenBatches - (numTokens % config.tokenBatches);
  return numTokens + remainder;

}

async function postMinimaRPC( command ) {

  const urlOptions = {
    method: 'POST',
    url: config.cmdURL,
    headers: {
      'Content-Type': 'application/json'
    },
    data: command
  };

  try {

    const response = await axios(urlOptions);
    return response.data;

  } catch (error) {

    console.error(error.message);
    return {};
  }

}

exports.getNumTokens = getNumTokens;
exports.postMinimaRPC = postMinimaRPC;
