import { StoreService, UserDetails } from './store.service';
import { Injectable } from '@angular/core';
import { Minima } from 'minima';


@Injectable({
  providedIn: 'root'
})
export class MinimaService {

  constructor(private _StoreService: StoreService) {
    Minima.init((msg: any) => {
      if (msg.event === 'newblock') {
        this._StoreService.pollCash();
        this._StoreService.getUserDetailsOnce().then((res: UserDetails) => {
          this._StoreService.fetchRewards(res.refID, res.loginData.access_token);
        });
      }
    });
  }
}
