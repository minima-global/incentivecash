import { StoreService, UserDetails } from './../api/store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  timescript: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
  data: UserDetails = {
    email: '',
    refID: '',
    pKey: ''
  };
  referenceID = '';
  cashdummy = [
    {index: '10', date:'07 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'14 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'28 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'07 - 03 - 2021', status:'<span fill="clear">Collect</span>'},
  ]

  constructor(private route: ActivatedRoute, private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.data.subscribe((res: any) => {
      // console.log(res);
      this.data = res;
    })
  }

  collectCash() {
    
  }

}
