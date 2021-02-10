import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  referenceID = '';
  cashdummy = [
    {index: '#1', date:'07 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#2', date:'14 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#3', date:'28 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#4', date:'7 - 03, 2021', status:'<span fill="clear">Collect</span>'},
  ]
  cashlist = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.referenceID = params.get('id');
    });
  }

  collectCash() {
    
  }

}
