import { StoreService, UserDetails } from './../api/store.service';
import { Component, ViewChild } from '@angular/core';
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
          // console.log(data);
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
          console.log(this.username);
          const publicKey = res.response.key.publickey;
          const url = 'https://incentivedb.minima.global/users/me?access_token='+userData.accessToken+'';
          Minima.net.GET(url, (res: any) => {
            let plainResponse = decodeURIComponent(res.result);
            let data = JSON.parse(plainResponse);
            
            let user: UserDetails = {
              email: this.username.value,
              pKey: publicKey,
              refID: data.data.id,
              loginData: {
                access_token: userData.accessToken,
                refresh_token: userData.refreshToken
              }
            }
            this._storeService.data.next(user);
          });
        }
      });

      this._storeService.data.subscribe((user: UserDetails) => { 
        const _User = user;
        // save to minima.file
        Minima.file.save(JSON.stringify(_User), 'userDetails.txt', (res: any) => {
          if (res.success) { 
            this.router.navigate(['/cash', _User.refID]);
          }
        });
        const url = 'https://incentivedb.minima.global/custom/minima/key';
        const data = {
          userid: user.refID,
          publickey: user.pKey
        }
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) 
        })
        .then(response => {
          if (!response.ok) {
            const status = response.status;
            const statusText = response.statusText;
            return response.json()
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
        })
        .then(data => {
          const txData = {
            code: "200",
            summary: data,
            time: Date.now()
          }
          
            })
          });
        })
        .catch(error => {
          alert(error);
        })
    .catch(error => {
      alert(error);
    })

    this.getReferenceButton.disabled = false;
    this.loginStatus = '';
    //this.loginForm.reset();
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
