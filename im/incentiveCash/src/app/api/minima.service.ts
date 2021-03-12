import { StoreService, UserDetails } from './store.service';
import { Injectable } from '@angular/core';
import { Minima } from 'minima';


@Injectable({
  providedIn: 'root'
})
export class MinimaService {  
  constructor(private _StoreService: StoreService) {
    Minima.init((msg: any) => {
      if (msg.event === 'newblock') {
        this._StoreService.pollCash(); 
      }
    });
  }
}
