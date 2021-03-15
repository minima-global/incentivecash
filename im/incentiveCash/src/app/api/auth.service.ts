import { StoreService, UserDetails } from './store.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private _StoreService: StoreService) { }

  public isAuthenticated() {
    const isLogged = localStorage.getItem('isLogged');
    return isLogged; 
  }

}
