import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  async canActivate(): Promise<boolean> {
    return Promise.resolve(
      this.auth.isAuthenticated().then((res: boolean) => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['/home']);
          return false;
        }
      }));
  }

  async getStatus() {
    return Promise.resolve(this.auth.isAuthenticated().then((res:boolean) => {
      return res;
    }))
  }
}
