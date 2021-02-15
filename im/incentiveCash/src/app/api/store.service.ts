import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

export interface UserDetails {
  refID: string,
  pKey: string
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: Subject<UserDetails> = new ReplaySubject<UserDetails>(1);

  constructor() {}
}
