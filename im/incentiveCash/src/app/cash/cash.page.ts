import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  cashdummy = [
    {index: '#1', date:'07 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#2', date:'14 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#3', date:'28 - 02, 2021', status:'<span fill="clear">Collect</span>'},
    {index: '#4', date:'7 - 03, 2021', status:'<span fill="clear">Collect</span>'},
  ]
  cashlist = [];

  constructor() { }

  ngOnInit() {
  }

  collectCash() {
    
  }

}
