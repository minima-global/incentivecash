import { StoreService, UserDetails } from './../api/store.service';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Minima } from 'minima';
import { IonButton } from '@ionic/angular';
import { SlowBuffer } from 'buffer';

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
    this.loginStatus = 'Logging in...';
    this.getReferenceButton.disabled = true;
    this.login(user);
  }

  getPubKey() {
    this._storeService.getUserDetailsOnce().then((user: UserDetails) => {
      const data = {
        userid: user.refID
      }
      const url = 'https://incentivedb.minima.global/custom/utils/getKey';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer `+user.loginData.access_token
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          this.loginStatus = 'Login failed!  Public key not found!';
          const statusText = response.statusText;
          return response.json()
          .then((data) => {
            throw new Error(statusText)
          })
        }
        return response.json()
      })
      .then(data => {
        // check if current key exists on server
        if (data.publickeys && data.publickeys.length === 0) {
          // post a new key
          this.postAKey(user.refID);
        } else {
          // check current keys with remote keys to find a match
          let nodeKeys = [];
          let serverKeys = data.publickeys;

          Minima.cmd('keys', (res: any) => {
            if (res.status) {
              // console.log(res);
              res.response.publickeys.forEach(element => {
                nodeKeys.push(element);
              });
            }
            // matching keys found
            const intersection = nodeKeys.filter(element => serverKeys.includes(element.publickey));
            if (intersection.length === 0) {
              this.postAKey(user.refID);
            } else {
              this.loginStatus = 'Login successful!';
              this.router.navigate(['/cash']);
              let temp = user;
              temp.pKey = intersection[0].publickey;
              this._storeService.data.next(temp);
            }
          });
        }
      })
    });
  }

  postAKey(uid: string) {
    const url = 'https://incentivedb.minima.global/custom/minima/key';
    Minima.cmd('keys new', (response: any) => {
      if (response.status) {
        const data = {
          userid: uid,
          publickey: response.response.key.publickey
        }
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => {
          if (!res.ok) {
            this.loginStatus = 'Login failed!  Public key not found!';
            const statusText = response.statusText;
            return res.json()
            .then((data) => {
              throw new Error(statusText);
            })
          }
          return res.json()
        })
        .then(data => {
          this.loginStatus = 'Login successful!';
          this.router.navigate(['/cash']);
          this._storeService.getUserDetailsOnce().then((user: UserDetails) => {
            //console.log('Stored new pubkey');
            let temp = user;
            temp.pKey = response.response.key.publickey;
            this._storeService.data.next(temp);
          });
        })
        .catch(error => {
          alert(error);
        })
      }
    });
  }

  login(user: User) {
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

        let statusText = res.statusText;
        return res.json()
        .then((data) => {
          throw new Error(statusText)
        })
      }
      return res.json()
    })
    .then(data => {
      this.loginStatus = 'Authenticated!  Checking public key...';
      // accessToken
      const token = {
        accessToken: data.data.access_token,
        refreshToken: data.data.refresh_token,
        info: {}
      }
      const url = 'https://incentivedb.minima.global/users/me?access_token='+token.accessToken+'';
      Minima.net.GET(url, (res: any) => {
        let plainResponse = decodeURIComponent(res.result);
        let data = JSON.parse(plainResponse);
        
        let user: UserDetails = {
          email: this.username.value,
          pKey: '',
          refID: data.data.id,
          loginData: {
            access_token: token.accessToken,
            refresh_token: token.refreshToken
          }
        }
        this._storeService.data.next(user);
      });
      this.getPubKey();

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
