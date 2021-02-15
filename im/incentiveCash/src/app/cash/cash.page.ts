import { StoreService, UserDetails } from './../api/store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  data: UserDetails;
  referenceID = '';
  cashdummy = [
    {index: '10', date:'07 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'14 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'28 - 02 - 2021', status:'<span fill="clear">Collect</span>'},
    {index: '10', date:'07 - 03 - 2021', status:'<span fill="clear">Collect</span>'},
  ]
  cashlist = [];

  constructor(private route: ActivatedRoute, private _storeService: StoreService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.referenceID = params.get('id');
    });

    this._storeService.data.subscribe((res: any) => {
      this.data = res;
    })
    
  }

  collectCash() {
    
  }

}
