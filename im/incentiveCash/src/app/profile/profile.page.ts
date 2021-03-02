import { StoreService, UserDetails } from './../api/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: UserDetails = {email: '', refID: '', pKey: ''};

  constructor(private _storeService: StoreService ) { }

  ngOnInit() {
    this._storeService.getUserDetailsOnce().then((res: UserDetails) => {
      this.user = res;
    })
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

}
