import { Injectable } from '@angular/core';
import { Minima } from 'minima';


@Injectable({
  providedIn: 'root'
})
export class MinimaService {

  constructor() {
    Minima.init(() => {});
  }
}
