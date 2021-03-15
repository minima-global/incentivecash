import { StoreService, UserDetails } from './../api/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this._storeService.checkRefreshToken();
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

  changePassword(newpassword: string, oldpassword: string) {

  }



}
