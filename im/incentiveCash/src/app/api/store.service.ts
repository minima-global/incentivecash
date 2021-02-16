import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
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

interface IncentiveCash {
  index: number
  collect_date: string
  status: string
  blockno: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  timescript: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
  timeaddress: string = '0x73349B30EA22B0B0867C6081EE7F6B014D3C9E88';
  data: Subject<UserDetails> = new ReplaySubject<UserDetails>(1);
  cashlist: Subject<IncentiveCash[]> = new ReplaySubject<IncentiveCash[]>(1);

  constructor() {
    // track this script
    Minima.cmd('extrascript \"'+this.timescript+"\"", (res: any) => {});
    // load user's details and pass to observable
    Minima.file.load('UserDetails.txt', (res: any) => {
      if (res.success) {
        this.data.next(JSON.parse(res.data));
      }
    });
  }

  pollCash() {
    Minima.cmd('coins relevant address:'+this.timeaddress, (res: any) => {
      if (res.status) {
        console.log(res);
        res.response.coins.forEach((coin, i) => {
          let temp: IncentiveCash[] = [];
          console.log('coin.data.prevstate[1]:'+coin.data.prevstate[1].data+' Minima.block'+Minima.block);
          if (coin.data.prevstate[1].data > Minima.block) {
            temp.push({index: i, collect_date: coin.data.prevstate[2].data, status: 'Not Ready', blockno: coin.data.prevstate[1].data})
          } else {
            temp.push({index: i, collect_date: coin.data.prevstate[2].data, status: 'Ready', blockno: coin.data.prevstate[1].data})  
          }

          this.cashlist.next(temp);
        });

      }
    });

    console.log('current block:'+ Minima.block);
    this.cashlist.subscribe((cash: any) => {
      console.log(cash);
    })
  }
}
