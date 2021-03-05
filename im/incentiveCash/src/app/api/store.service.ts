import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Minima } from 'minima';

export interface LastAccess {
  milliseconds: number
}

export interface Reward {
  amount: number,
  date_created: any,
  extrainfo: string,
  reason: string
}

export interface Rewards {
  data: Reward[]
}
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
  millisecond: any
  cash_amount: string
  coinid: string
  tokenid: string
  status: string
  blockno: string
  percent?: number
}

interface IncentiveTokenID {
  tokenId: string
  scaleFactor: number
}

interface Referral {
  date_created: string
  id: number 
  name: string
}
export interface ReferralCode {
  data: Referral[];
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
  rewards: Subject<Rewards> = new ReplaySubject<Rewards>(1);
  referralCode: Subject<ReferralCode> = new ReplaySubject<ReferralCode>(1);
  lastAccess: Subject<LastAccess> = new ReplaySubject<LastAccess>(1);

  constructor() {
    // track this script
    Minima.cmd('extrascript \"'+this.timescript+"\"", (res: any) => {});
    this.getUserDetailsOnce().then((res: UserDetails) => {
      this.fetchRewards(res.refID, res.loginData.access_token);
      this.fetchRerral(res.refID, res.loginData.access_token);
    })
    this.fetchTokenID();
  }

  getUserDetailsOnce() {
    return this.data.pipe(take(1))
      .toPromise();
  }

  fetchRewards(uid: string, tkn: string) {
    const url = 'https://incentivedb.minima.global/items/reward?filter={ "Userid": { "_eq": "'+uid+'"}}';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `+tkn
      }
    })
    .then((res: any) => {
      if (!res.ok) {
        console.log('Failed to retrieve '+uid+'\'s rewards');
      }
      return res.json()
      .then((data: Rewards) => {
        let json = data;
        this.rewards.next(json);
      })
    })
  }

  fetchTokenID() {
    const url = 'https://incentivedb.minima.global/custom/minima/token';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

  fetchRerral(uid: string, tkn: string) {
    const url = 'https://incentivedb.minima.global/items/referral?filter={ "Userid": { "_eq": "'+uid+'"}}';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `+tkn
      }
    })
    .then((res: any) => {
      if (!res.ok) {
        console.log('Failed to get referral code');
      }
      return res.json()
      .then((data) => {
        let json = data; 
        this.referralCode.next(json);
      })
    })
  }

  pollCash() {
    Minima.cmd('coins relevant address:'+this.timeaddress, (res: any) => {   
      this.tokenId.subscribe((token: IncentiveTokenID) => {
        if (res.status) {
          let temp: IncentiveCash[] = [];
          res.response.coins.forEach((coin, i) => {
            // scaleFactor
            coin.data.coin.amount = coin.data.coin.amount * token.scaleFactor;
            // progressBar
            let percent = ((Minima.block/coin.data.prevstate[1].data)*10)/10;
            // actualTime
            let diff = coin.data.prevstate[1].data - Minima.block;
            let today = new Date();
            // todays milliseconds
            let ms = today.getTime();
            // difference milliseconds
            let diff_ms = diff*20;
            // total ms
            let total_ms = diff_ms + ms;
            // difference
            let difference = total_ms - ms;

            if (coin.data.coin.tokenid === token.tokenId) {
              if (coin.data.prevstate[1] && (coin.data.prevstate[1].data > Minima.block)) {
                temp.push({index: i+1, collect_date: '...', millisecond: difference, cash_amount: coin.data.coin.amount, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Not Ready', blockno: coin.data.prevstate[1].data, percent: percent})
              } else if ((coin.data.prevstate[0] && coin.data.prevstate[1]) && (coin.data.prevstate[1].data <= Minima.block)) {                
                temp.push({index: i+1, collect_date: '...', millisecond: difference, cash_amount: coin.data.coin.amount, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Ready', blockno: coin.data.prevstate[1].data, percent: percent})  
              }
            }
          });
          this.cashlist.next(temp);
        }
      });
    });
  }
}
