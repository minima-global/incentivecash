import { StoreService, UserDetails } from './store.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private _StoreService: StoreService) { }

  public isAuthenticated(): boolean {
    var token = '';
    this._StoreService.data.subscribe((user: UserDetails) => {
      token = user.loginData.access_token;

      if (token.length > 0) {
        return true;
      }
    });

    if (token.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
