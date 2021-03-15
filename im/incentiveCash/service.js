var tokenid = ''; var uid = '';
function fetchTokenID() {
  Minima.file.load('tokenid.txt', function(res) {
    // Minima.log(res.data);
    const data = JSON.parse(res.data);
    if (res.success) {
      tokenid = data.tokenId;
    }
  });
}
function getUID() {
  Minima.file.load('uid.txt', function(res) {
    // Minima.log(res.data);
    if (res.success) {
      const data = JSON.parse(res.data);
      uid = data.uid;
    }
  });
}
function postTransaction(coinid, amount, pKey, tokenid, uid) {
  var txnID = Math.floor(Math.random()*1000000000);
  var devNull = '0xEEFFEEFFEE';
  const post_Transaction = 
  "txncreate "+txnID+";"+
  "txninput "+txnID+" "+coinid+";"+
  "txnoutput "+txnID+" "+amount+" "+devNull+" "+tokenid+";"+
  "txnstate "+txnID+" 0 \""+uid+"\";"+
  "txnsign "+txnID+" "+pKey+";"+
  "txnpost "+txnID+";"+
  "txndelete "+txnID;

  Minima.cmd(post_Transaction, function(res) {
    if ( Minima.util.checkAllResponses(res) ) {
      
    }
  });
}

function getCash() {
  var timeaddress = '0xA9D9272A6D69466A2905796F7381F789DEE48C06';
  Minima.cmd('coins relevant address:'+timeaddress, function(res) {

    if (res.status) {
      // Minima.log('Looking for relevant transactions...');

      res.response.coins.forEach(function(coin, i) {

        if (coin.data.coin.tokenid == tokenid) {

          if ((coin.data.prevstate[0] && coin.data.prevstate[1] && coin.data.prevstate[2]) && coin.data.prevstate[1].data <= Minima.block && coin.data.prevstate[2].data >= Minima.block) {
            Minima.log('Posting Incentive Cash...');
            postTransaction(coin.data.coin.coinid, coin.data.coin.amount, coin.data.prevstate[0].data, tokenid, uid);              

          }

        }

      });

    }

  });
}
function pollCash(block) {
  //Minima.log('Trying to post.');
  if (block % 5 == false) {
    getCash();
  }
}

Minima.init(function(msg){
  if(msg.event == 'connected') {

  } else if(msg.event == 'newblock') {
    getUID();
    fetchTokenID();
    
    pollCash(msg.info.txpow.header.block);
  }
});
