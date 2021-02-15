import { StoreService, UserDetails } from './../api/store.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Minima } from 'minima';
import { IonButton } from '@ionic/angular';

interface User {
  email: string
  password: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage  {

  @ViewChild('getReferenceButton', {static: false}) getReferenceButton: IonButton;

  public loginForm: FormGroup;
  loginStatus = '';

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private _storeService: StoreService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uName: '',
      password: '',
      pKey: ''
    });
  }

  getReferenceID() {
    const user = {
      email: this.username.value, 
      password: this.password.value
    };
    this.login(user);
  }

  login(user: User) {
    this.loginStatus = 'Logging in...';
    this.getReferenceButton.disabled = true;
    const url = 'https://incentivedb.minima.global/auth/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res: any) => {
      if (!res.ok) {
        this.loginStatus = 'Login failed, please check your username and password.';
        this.getReferenceButton.disabled = false;
        const status = res.status;
        const statusText = res.statusText;
        return res.json()
        .then((data) => {
          console.log(data);
          const txData = {
            code: status.toString(),
            summary: statusText,
            time: Date.now()
          }
          throw new Error(statusText)
        })
      }
      return res.json();
    })
    .then(data => {
      this.loginStatus = 'Login successful!';
      console.log(data);
      const txData = {
        code: "200",
        summary: data,
        time: Date.now()
      }
      const userData = {
        accessToken: data.data.access_token,
        refreshToken: data.data.refresh_token,
        info: {}
      }

      Minima.cmd('keys new', (res: any) => {
        if(res.status) {
          const username = this.username.value;
          const publicKey = res.response.key.publickey;
          const refID = '';
          const url = 'https://incentivedb.minima.global/items/directus_users?filter={ "email": { "_eq": "'+username+'" }}?access_token='+userData.accessToken+'';
          const url2 = 'https://incentivedb.minima.global/users/me?access_token='+userData.accessToken+'';
          Minima.net.GET(url2, (res: any) => {
            let plainResponse = decodeURIComponent(res.result)
            console.log(plainResponse);
          });
  
          // Minima.file.save(JSON.stringify(userDetails), 'userDetails.txt', (res: any) => {
          //   if (res.success) {  
          //     this._storeService.data.next(userDetails);
          //     this.router.navigate(['/cash', userDetails.refID]);
      
          //   } else {
          //     console.log('Failed to save reference id.');
          //   }
          // });
        }
        this.getReferenceButton.disabled = false;
      });
    })
    .catch(error => {
      alert(error);
   })
  }

  get username() {
    return this.loginForm.get('uName');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get publickey() {
    return this.loginForm.get('pKey');
  }

}
