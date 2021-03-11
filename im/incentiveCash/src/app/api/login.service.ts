import { DirectusService } from './directus.service';
import { Injectable } from '@angular/core';


interface User {
  email: string 
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _directus: DirectusService) { }

  async login(user: User) {
    const url = "https://incentivedb.minima.global/auth/login";
    return this._directus.post(url, user);
  }


}
