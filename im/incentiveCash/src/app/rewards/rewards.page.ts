import { IonSegment } from '@ionic/angular';
import { StoreService, Reward, UserDetails } from './../api/store.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  

  @ViewChild('claimedSegment', {static: false}) claimedSegment: IonSegment;
  rewardList: Reward[] = [];
  totalClaimed: number = 0
  totalUnclaimed: number = 0;
  shownSegments = 'unclaimed';

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.rewards.subscribe((res: any) => {
      this.rewardList = [];
      this.totalClaimed = 0;
      this.totalUnclaimed = 0;
      res.data.forEach((reward: Reward) => {
        if (reward.reason !== 'Claimed') {
          this.rewardList.push(reward);
          this.totalUnclaimed += reward.amount;
        } else {
          this.totalClaimed += reward.amount;
        }
      })
    });
  }

  signOut() {
    document.getElementById('sign-out-btn').style.opacity = '0.5';
    this._storeService.getUserDetailsOnce().then((res: UserDetails) => {
      let user = res;
      user.loginData.access_token = '';
      user.loginData.refresh_token = '';
      this._storeService.data.next(user);
      document.location.reload();
    })
  }

  segmentChanged(ev: any) {
    this.shownSegments = ev.detail.value;
  }

}
