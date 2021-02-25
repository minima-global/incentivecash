import { MinimaService } from './../api/minima.service';
import { StoreService, UserDetails, IncentiveCash, Reward } from './../api/store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Minima } from 'minima';
import { IonSegment, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  @ViewChild('claimedSegment', {static: false}) claimedSegment: IonSegment;
  shownSegments = 'claimed';
  
  rewards: Reward[] = [];
  totalClaimed: number = 0;
  totalUnclaimed: number = 0;
  timescript: string = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
  data: UserDetails = {
    email: '',
    refID: '',
    pKey: ''
  };
  referenceID = '';
  cashdummy = [
    {index: '1', percent: 0.3, cash_amount: '10', coinid: '', tokenid: '', date:'07 - 02 - 2021', blockno: '555532', status:'Ready'},
    {index: '2', percent: 0.1, cash_amount: '10', coinid: '', tokenid: '', date:'14 - 02 - 2021', blockno: '12351', status:'Ready'},
    {index: '3', percent: 0.7, cash_amount: '10', coinid: '', tokenid: '', date:'28 - 02 - 2021', blockno: '12351', status:'Not Ready'},
    {index: '4', percent: 0.9, cash_amount: '10', coinid: '', tokenid: '', date:'07 - 03 - 2021', blockno: '12351', status:'Not Ready'},
  ]
  cashlist: IncentiveCash[];

  constructor(
    private route: ActivatedRoute,
    private _storeService: StoreService,
    private _Minima: MinimaService,
    public toastController: ToastController) { }

  ngOnInit() {
    this._storeService.pollCash();
    this._storeService.data.subscribe((res: any) => {
      this.data = res;
    });
    this._storeService.cashlist.subscribe((res: IncentiveCash[]) => {
      this.cashlist = res;
    });
    this._storeService.rewards.subscribe((res: any) => {

      console.log(res);
      res.data.forEach((reward: Reward) => {
        if (reward.reason !== 'Claimed') {
          this.totalUnclaimed += reward.amount;
        } else {
          this.totalClaimed += reward.amount;
        }
      })
      console.log(this.rewards);
    });
  }

  segmentChanged(ev: any) {
    this.shownSegments = ev.detail.value;
  }

  collectCash(coinid: string, amount: string, pKey: string, tokenid: string, uid: string) {
    document.getElementById('collect-btn'+coinid).style.opacity = '0.5';
    document.getElementById('row'+coinid).style.opacity = '0.5';
    document.getElementById('collect-btn'+coinid).textContent = 'Collecting...';

    let txnID = Math.floor(Math.random()*1000000000);
    let devNull = '0xEEFFEEFFEE';

    const post_Transaction = 
      "txncreate "+txnID+";"+
      "txninput "+txnID+" "+coinid+";"+
      "txnoutput "+txnID+" "+amount+" "+devNull+" "+tokenid+";"+
      "txnstate "+txnID+" 0 \""+uid+"\";"+
      "txnsign "+txnID+" "+pKey+";"+
      "txnpost "+txnID+";"+
      "txndelete "+txnID;

    Minima.cmd(post_Transaction, (res: any) => {
      console.log(res);
      if (Minima.util.checkAllResponses(res)) {
        document.getElementById('collect-btn'+coinid).textContent = 'Collected!';
        document.getElementById('collect-btn'+coinid).style.backgroundColor = '#42CBB6';
        this.presentToast('Incentive Cash', 'Your cash has been collected and your reward has been registered, thank you!');
      } else {
        this.presentToast('Incentive Cash', 'Something went wrong with your collection, please try again!');
      }
    });

  }

  async presentToast(hdr: string, msg: string) {
    const toast = await this.toastController.create({
      header: hdr,
      message: msg,
      duration: 2000,
      position: 'bottom',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => {
            
          }
        }
      ]
    });
    toast.present();
  }

}
