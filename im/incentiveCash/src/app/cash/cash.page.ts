import { MinimaService } from './../api/minima.service';
import { StoreService, UserDetails, IncentiveCash } from './../api/store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Minima } from 'minima';
import { ToastController } from '@ionic/angular';

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
      console.log(res);
      this.cashlist = res;
    });
  }

  collectCash(coinid: string, amount: string, pKey: string, tokenid: string, uid: string) {
    
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
        this.presentToast('Incentive Cash', 'Your cash has been collected and your reward has been registered, thank you!');
        this._storeService.pollCash();
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
