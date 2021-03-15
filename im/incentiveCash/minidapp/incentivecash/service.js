var tokenid = ''; var uid = '';
function fetchTokenID() {
  const url = 'https://incentivedb.minima.global/custom/minima/token';
  Minima.net.GET(url, function(res) {
    tokenid = res.result.tokenId;
    Minima.log(tokenid);
  });
  // fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
  // .then(function(res) {
  //   if (!res.ok) {
  //     console.log('Failed to get token');
  //   }
  //   return res.json()
  //   .then((data) => {
  //     if (data && data.tokenId.length > 0) {
  //       tokenid = data.tokenId;
  //     }
  //   })
  // })
}
function getUID() {
  Minima.file.load('uid.txt', function(res) {
    if (res.success) {
      const data = JSON.parse(res.data);
      uid = data.uid;
    }
  });
}
function postTransaction(coinid, amount, pKey, tokenid, uid) {
  // if (document.getElementById('collect-btn'+coinid)) {
  //   document.getElementById('collect-btn'+coinid).style.opacity = '0.5';
  //   document.getElementById('row'+coinid).style.opacity = '0.5';
  //   document.getElementById('collect-btn'+coinid).textContent = 'Collecting...';
  // }
  

  const post_Transaction = 
  "txncreate "+txnID+";"+
  "txninput "+txnID+" "+coinid+";"+
  "txnoutput "+txnID+" "+amount+" "+devNull+" "+tokenid+";"+
  "txnstate "+txnID+" 0 \""+uid+"\";"+
  "txnsign "+txnID+" "+pKey+";"+
  "txnpost "+txnID+";"+
  "txndelete "+txnID;

  Minima.cmd(post_Transaction, function(res) {
    //console.log(res);
    if ( Minima.util.checkAllResponses(res) ) {
      // if (document.getElementById('collect-btn'+coinid)) {
      //   document.getElementById('collect-btn'+coinid).textContent = 'Collected!';
      //   document.getElementById('collect-btn'+coinid).style.backgroundColor = '#42CBB6';
      // }
    }
  });
}

function getCash() {
  var timeaddress = '0xA9D9272A6D69466A2905796F7381F789DEE48C06';
  Minima.cmd('coins relevant address:'+timeaddress, function(res) {

    if (res.status) {
      Minima.log('Looking for relevant transactions...');

      res.response.coins.forEach(function(coin, i) {

        if (coin.data.coin.tokenid == "0x00") {

          if ((coin.data.prevstate[0] && coin.data.prevstate[1] && coin.data.prevstate[2]) && coin.data.prevstate[1].data <= Minima.block && coin.data.prevstate[2].data >= Minima.block) {
            Minima.log('Posting Incentive Cash...');
            postTransaction(coin.data.coin.coinid, coin.data.coin.amount, coin.data.prevstate[0], tokenid, uid);              

          }

        }

      });

    }

  });
}
function pollCash(block) {
  //Minima.log('Trying to post.');
  if (block % 20 == false) {
    getCash();
  }
}

Minima.init(function(msg){
  if(msg.event == 'connected') {

  } else if(msg.event == 'newblock') {
    if (uid && uid.length === 0) {
      getUID();
    }

    if (tokenid && tokenid.length === 0) {    
      fetchTokenID();
    }
    pollCash(msg.info.txpow.header.block);
  }
});
