import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

export interface UserDetails {
  email: string,
  refID: string,
  pKey: string,
  loginData?: {
    access_token: string
    refresh_token: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: Subject<UserDetails> = new ReplaySubject<UserDetails>(1);

  constructor() {}
}
