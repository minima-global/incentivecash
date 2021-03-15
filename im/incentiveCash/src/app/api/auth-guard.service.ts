import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

  async getStatus() {
    // return Promise.resolve(this.auth.isAuthenticated().then((res:boolean) => {
    //   return res;
    // }))
  }
}
