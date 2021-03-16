import { Router } from '@angular/router';
import { DirectusService } from './directus.service';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Minima } from 'minima';
import { AlertController } from '@ionic/angular';

interface JWT {
  access_token: string
  expires: number
  refresh_token: string
  sessions: {
    sessionStart: Date 
    sessionEnd: Date
  }
}

interface IncentiveTokenID {
  tokenId: string
  scaleFactor: number
}

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
  amount: number,
  date_created: any,
  extrainfo: string,
  reason: string
}

export interface UserDetails {
  email: string,
  refID: string,
  pKey: string,
  loginData?: JWT
}

export interface IncentiveCash {
  index: number
  collect_date: string
  millisecond: any
  cash_amount: string
  scale: number
  coinid: string
  tokenid: string
  status: string
  blockno: string
  percent?: number
}

export interface ReferralCode {
  date_created: string
  id: number 
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  timescript: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
  timescript_v2: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) LET maxtime = PREVSTATE ( 2 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time AND @BLKNUM LTE maxtime';
  timeaddress_v2: string = '0xA9D9272A6D69466A2905796F7381F789DEE48C06';
  timeaddress: string = '0x73349B30EA22B0B0867C6081EE7F6B014D3C9E88';

  data: Subject<UserDetails> = new ReplaySubject<UserDetails>(1);
  cashlist: Subject<IncentiveCash[]> = new ReplaySubject<IncentiveCash[]>(1);
  tokenId: Subject<IncentiveTokenID> = new ReplaySubject<IncentiveTokenID>(1);
  rewards: Subject<Rewards[]> = new ReplaySubject<Rewards[]>(1);
  referralCode: Subject<ReferralCode[]> = new ReplaySubject<ReferralCode[]>(1);
  lastAccess: Subject<LastAccess> = new ReplaySubject<LastAccess>(1);
  userRewards: Subject<string> = new ReplaySubject<string>(1);

  constructor(private _directus: DirectusService, private route: Router, public alertController: AlertController) {
    // track this script
    Minima.cmd('extrascript \"'+this.timescript_v2+"\"", (res: any) => {});
    this.getUserDetailsOnce().then((res: UserDetails) => {
      this.fetchRewards(res.refID);
      this.fetchRerral(res.refID);
      this.fetchTokenID();
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Session Expired!',
      message: 'You have been signed out.',
      buttons: ['OK']
    });
    await alert.present();
  }

  checkRefreshToken() {
    console.log('CHECK REFRESH TOKEN');

    this.getUserDetailsOnce().then((res: UserDetails) => {
      let expiry_time = res.loginData.sessions.sessionEnd.getTime();
      let current_time = new Date().getTime();
      let refresh_token = res.loginData.refresh_token;

      let time_apart = expiry_time - current_time;
      console.log(time_apart);
      if (time_apart === 0) {
        this.signOffUser();
      } else if (time_apart <= 300000) {
        console.log('LESS THAN 5 mins LEFT, Time to update access_token');
        // time to get a new access_token
        this.updateAccessToken(refresh_token);
        
      }


    });
  }

  async signOffUser() {
    await this.presentAlert();
    
    await this.getUserDetailsOnce().then((res: UserDetails) => {
      let user = res;
      user.loginData.access_token = '';
      user.loginData.refresh_token = '';
      this.data.next(user);
      this.route.navigate(['/home']);
    });
  }

  updateAccessToken(refresh_token: string) {
    console.log('UPDATINGACCESSTOKEN');
    const data = {
      refresh_token: refresh_token
    }
    console.log(data);
    const url = 'https://incentivedb.minima.global/auth/refresh';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (!response.ok) {
        console.log('Failed to get a new token');
        let status = response.status;
        let statusText = response.statusText;
        return response.json()
        .then((data) => {
          throw new Error('Error '+ status+' '+statusText);
        })
      }
      return response.json()
    }).then(data => {
      console.log(data);

      this.getUserDetailsOnce().then((user: UserDetails) => {
        let temp = user;
        console.log('Old User Data'); 
        console.log(temp);
        temp.loginData.access_token = data.data.access_token;
        temp.loginData.refresh_token = data.data.refresh_token;
        temp.loginData.expires = data.data.expires;
        // update session times
        let sessionStart = new Date();
        let currentTime = sessionStart.getTime();
        let expiryTime = currentTime + temp.loginData.expires;
        let sessionEnd = new Date(expiryTime);
        temp.loginData.sessions.sessionStart = sessionStart;
        temp.loginData.sessions.sessionEnd = sessionEnd;

        this.data.next(temp);
        console.log(temp);
      }).catch(err => {
        console.log(err);
      })

    })
  }

  getUserDetailsOnce() {
    return this.data.pipe(take(1))
      .toPromise();
  }

  fetchRewards(uid: string) {
    console.log('Getting Rewards');
    this._directus.fetchRewards(uid)
    .then((res: any) => {
      if (!res.ok) {
        console.log('minima/getRewards failed to fetch resources.');
      }
      return res.json()
    }).then(data => {
      console.log(data);
      if (data.errors) {
        console.log(data.errors)
      } else {
        console.log('Observable rewards updated.');
        this.rewards.next(data);
        const json = JSON.stringify(data);
        this.userRewards.next(json);
      }
    }).catch((error) => {
      alert('Session expired!  You have been signed out!');
      this.route.navigate(['/home']);
      console.log(error);
    });
  }

  fetchTokenID() {

    const url = 'https://incentivedb.minima.global/custom/minima/token';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ` + token // if access_token is available        
      }
    }).then(response => {
      console.log(response);

      return response.json()

    }).then(data => {
      console.log(data);
      let json = JSON.stringify(data);
      Minima.file.save(json, 'tokenid.txt', (res: any) => {});
      this.tokenId.next(data);
    }).catch(error => {
      console.log(error);
    })
  }

  fetchRerral(uid: string) {
    this._directus.getReferral(uid)
    .then((res: any) => {
      if (!res.ok) {
        console.log('/minima/utils/getReferral failed to fetch resources');
        console.log(res);
      }
      return res.json()
    }).then(data => {
      console.log(data);
      if (data.errors) {
        console.log(data.errors);
      } else {
        console.log('Observable referralCode has been updated');
        this.referralCode.next(data);
      }
      this.referralCode.next(data);
    }).catch(error => {
      console.log(error);
    });
  }
  
  pollCash() {
    Minima.cmd('coins relevant address:'+this.timeaddress_v2, (res: any) => {   
      this.tokenId.subscribe((token: IncentiveTokenID) => {
        if (res.status) {
          console.log(res);
          let temp: IncentiveCash[] = [];
          res.response.coins.forEach((coin, i) => {
            // scaleFactor
            let scale = coin.data.coin.amount * token.scaleFactor;
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
              let state0 = coin.data.prevstate[0];
              let state1 = coin.data.prevstate[1];
              let state2 = coin.data.prevstate[2];
              if (state0 && state1 && state2 && state1.data.length > 0 && state0.data.length > 0 && state2.data.length > 0) {
                let unlocktime = coin.data.prevstate[1].data;
                let window = coin.data.prevstate[2].data;
                if (unlocktime > Minima.block) {
                  temp.push({index: i+1, collect_date: '...', millisecond: difference, cash_amount: coin.data.coin.amount, scale: scale, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Not Ready', blockno: coin.data.prevstate[1].data, percent: percent});
                } else if (unlocktime <= Minima.block && window >= Minima.block) {
                  temp.push({index: i+1, collect_date: '...', millisecond: difference, cash_amount: coin.data.coin.amount, scale: scale, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Ready', blockno: coin.data.prevstate[1].data, percent: percent});
                } else if (Minima.block > window) {
                  temp.push({index: i+1, collect_date: '...', millisecond: difference, cash_amount: coin.data.coin.amount, scale: scale, coinid: coin.data.coin.coinid, tokenid: coin.data.coin.tokenid, status: 'Missed', blockno: coin.data.prevstate[1].data, percent: percent});    
                }
              }
            }
          });
          this.cashlist.next(temp);
        }
      });
    });
  }
}
