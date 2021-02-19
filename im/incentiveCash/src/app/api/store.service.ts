import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Minima } from 'minima';

export interface UserDetails {
  email: string,
  refID: string,
  pKey: string,
  loginData?: {
    access_token: string
    refresh_token: string
  }
}

export interface IncentiveCash {
  index: number
  collect_date: string
  cash_amount: string
  coinid: string
  tokenid: string
  status: string
  blockno: string
  percent?: number
}

interface IncentiveTokenID {
  tokenId: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  timescript: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
  timeaddress: string = '0x73349B30EA22B0B0867C6081EE7F6B014D3C9E88';

  data: Subject<UserDetails> = new ReplaySubject<UserDetails>(1);
  cashlist: Subject<IncentiveCash[]> = new ReplaySubject<IncentiveCash[]>(1);
  tokenId: Subject<IncentiveTokenID> = new ReplaySubject<IncentiveTokenID>(1);

  constructor() {
    // track this script
    Minima.cmd('extrascript \"'+this.timescript+"\"", (res: any) => {});
    // load user's details and pass to observable
    Minima.file.load('UserDetails.txt', (res: any) => {
      if (res.success) {
        this.data.next(JSON.parse(res.data));
      }
    });

    this.fetchTokenID();
  }

  getUserDetailsOnce() {
    return this.data.pipe(take(1))
      .toPromise();
  }

  fetchTokenID() {
    const url = 'https://incentivedb.minima.global/custom/utils/token';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res: any) => {
      if (!res.ok) {
        console.log('Failed to get token');
      }
      return res.json()
      .then((data) => {
        let json = data;
        this.tokenId.next(json);
      })
    })
  }

  pollCash() {
    Minima.cmd('coins relevant address:'+this.timeaddress, (res: any) => {
      //console.log(res);     
      this.tokenId.subscribe((token: IncentiveTokenID) => {
        if (res.status) {
          let temp: IncentiveCash[] = [];
          res.response.coins.forEach((coin, i) => {
            if (coin.data.coin.tokenid === token.tokenId) {
              if (coin.data.prevstate[1] && (coin.data.prevstate[1].data > Minima.block)) {
                temp.push({index: i, collect_date: '...', cash_amount: coin.data.coin.amount, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Not Ready', blockno: coin.data.prevstate[1].data})
              } else if ((coin.data.prevstate[0] && coin.data.prevstate[1]) && (coin.data.prevstate[1].data <= Minima.block)) {
                let diff = coin.data.prevstate[1].data - Minima.block;
                let percent = 100/diff;
                temp.push({index: i, collect_date: '...', cash_amount: coin.data.coin.amount, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Ready', blockno: coin.data.prevstate[1].data, percent: percent})  
              }
            }
          });
          this.cashlist.next(temp);
        }
      });
    });
  }
}
