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
  constructor(public jwtHelper: JwtHelperService, private _StoreService: StoreService) { }

  public isAuthenticated(): boolean {
    return !!this.checkSessions();  
  }

  async checkSessions() {    
    await this._StoreService.getUserDetailsOnce().then((user: UserDetails) => {
      this.currentTime = new Date().getTime();
      this.sessionEnd = user.loginData.sessions.sessionEnd.getTime();

      this.session = this.sessionEnd - this.currentTime;
      
      return this.session;
    })
  }
}
