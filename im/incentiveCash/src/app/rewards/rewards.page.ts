import { IonSegment } from '@ionic/angular';
import { StoreService, Rewards, UserDetails } from './../api/store.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['../cash/cash.page.scss'],
})
export class RewardsPage implements OnInit {
  
  @ViewChild('claimedSegment', {static: false}) claimedSegment: IonSegment;
  rewardList: Rewards[] = [];
  totalClaimed = 0;
  shownSegments = 'unclaimed';

  constructor(private _storeService: StoreService) { }

  ionViewWillEnter() {
    this._storeService.getUserDetailsOnce().then((user: UserDetails) => {
      this._storeService.fetchRewards(user.refID);
    });
    this._storeService.checkRefreshToken();
  }

  ngOnInit() {
    this._storeService.rewards.subscribe((res: Rewards[]) => {
      this.rewardList = [];
      this.totalClaimed = 0;
      // console.log(res);
      if (res) {
        res.forEach((reward: Rewards) => {
          let date = new Date(reward.date_created);
          let ms = date.getTime();
          let format = moment(ms).format('DD-MM-YYYY HH:mm:ss');
          reward.date_created = format;
          this.rewardList.push(reward);
          this.totalClaimed += reward.amount;
        })
      }
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
