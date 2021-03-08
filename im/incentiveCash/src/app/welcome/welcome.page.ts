import { Minima } from 'minima';
import { StoreService, UserDetails } from './../api/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
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

  firstTime() {
    const json = { first: true };
    Minima.file.save(JSON.stringify(json), 'first.txt', (res: any) => {
      if (res.success) {}
    });
  }

}
