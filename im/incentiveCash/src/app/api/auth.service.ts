import { StoreService, UserDetails } from './store.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session = 0; 
  currentTime = 0;
  sessionEnd = 0;
  a_token: string;
  constructor(public jwtHelper: JwtHelperService, private _StoreService: StoreService) { }

  public async isAuthenticated(): Promise<boolean> {
    const token = await this.getToken(); 
    return !this.jwtHelper.isTokenExpired(token);
  }

  async getToken() {
    return Promise.resolve(this._StoreService.getUserDetailsOnce().then((usr: UserDetails) => {
      return usr.loginData.access_token;
    }));
  }

}
