import { ToastController } from '@ionic/angular';
import { StoreService, UserDetails, ReferralCode, LastAccess } from './../api/store.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: UserDetails = {email: '', refID: '', pKey: ''};
  referralCode: ReferralCode[]; 
  lastAccess: LastAccess;
  date: string;
  time: string;

  constructor(private _storeService: StoreService, public toastController: ToastController ) { }

  ngOnInit() {
    this._storeService.checkRefreshToken();

    this._storeService.getUserDetailsOnce().then((res: UserDetails) => {
      this.user = res;
    });
    this._storeService.referralCode.subscribe((res: ReferralCode[]) => {
      this.referralCode = res;
    });
    this._storeService.lastAccess.subscribe((res: LastAccess) => {
      this.lastAccess = res;
      this.date = moment(this.lastAccess.milliseconds).format('DD-MM-YYYY');
      this.time = moment(this.lastAccess.milliseconds).format('HH:mm:ss');
    });
  }

  async fetchUserDetails() {
    await this._storeService.getUserDetailsOnce().then((res: UserDetails) => {
      this.user = res;

      if (this.user.email.length === 0) {
        
      }
    });
  }

  copy(code: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', code);
      this.presentToast('Copied To Clipboard', 'primary', 'bottom');
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');

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

  async presentToast(msg: string, clr: string, posn: "top" | "bottom" | "middle") {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: clr,
      position: posn,
      buttons: ['cancel']
    });
    await toast.present();
  }

}
