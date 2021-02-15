import { StoreService, UserDetails } from './../api/store.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Minima } from 'minima';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private _storeService: StoreService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uName: '',
      pKey: ''
    });
  }

  getReferenceID() {

    alert('Your reference ID is: 0x00');

    const referenceID = '0x00'; // this will be queried from directus 
    // Minima.net.get to get the reference ID

    Minima.cmd('keys new', (res: any) => {
      if(res.status) {
        const publicKey = res.response.key.publickey;
        const userDetails: UserDetails = { refID: referenceID, pKey: publicKey };

        Minima.file.save(JSON.stringify(userDetails), 'userDetails.txt', (res: any) => {
          if (res.success) {  
            this._storeService.data.next(userDetails);
            this.router.navigate(['/cash', userDetails.refID]);
    
          } else {
            console.log('Failed to save reference id.');
          }
        });
      }
    });
  }

  get username() {
    return this.loginForm.get('uName');
  }

  get publickey() {
    return this.loginForm.get('pKey');
  }

}
