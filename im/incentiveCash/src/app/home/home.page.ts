import { DirectusService } from './../api/directus.service';
import { LoginService } from './../api/login.service';
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
    private _loginService: LoginService,
    private _directus: DirectusService,
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
    console.log('GETTING USER ID');
    const user = {
      email: this.username.value, 
      password: this.password.value
    };
    this.loginStatus = 'Logging in...';
    this.getReferenceButton.disabled = true;
    this.login(user);
  }

  getPubKey(user: UserDetails) {
    // console.log('GETTING PUB KEY');
    this._directus.getKey(user.refID)
    .then((res: any) => {
        if (!res.ok) {
          this.loginStatus = 'Login Failed! Public key not found.';
          this.getReferenceButton.disabled = false;
        }
        return res.json()
    }).then(data => {
      console.log(data);
      if (data.errors) {
        this.loginStatus = data.errors[0].message;
      } else if (data.publickeys) {
       this.checkPubKey(user, data); 
      }
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      this.loginStatus = '';
      this.getReferenceButton.disabled = false;
    });
  }

  checkPubKey(user: UserDetails, data: any) {
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
          this.lastAccess();

          Minima.file.load('first.txt', (res: any) => {
            if (res.success) {
              this.router.navigate(['/rewards']);
            } else {
              this.router.navigate(['/welcome']);
            }
          });
          
          this.loginForm.reset();
          this.loginStatus = '';
          let temp = user;
          temp.pKey = intersection[0].publickey;
          this._storeService.data.next(temp);
        }
      });
    }
  }

  postAKey(uid: string) {
    const url = 'https://incentivedb.minima.global/custom/minima/key';
    Minima.cmd('keys new; newaddress', (response: any) => {
      if (Minima.util.checkAllResponses(response)) {
        if (uid && uid.length > 0 && response[0] && response[1] && response[0].response.key.publickey && response[1].response.address.hexaddress) {
          const data = {
            userid: uid,
            publickey: response[0].response.key.publickey,
            address: response[1].response.address.hexaddress
          }

          this._directus.postAKey(data)
          .then(res => {

          })

          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => {
            console.log(res);
            if (!res.ok) {
              this.loginStatus = 'Login failed!  Public key could not be posted!';
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
            this.lastAccess();

            Minima.file.load('first.txt', (res: any) => {
              if (res.success) {
                this.router.navigate(['/rewards']);
              } else {
                this.router.navigate(['/welcome']);
              }
            });
            
            this.loginForm.reset();
            this.loginStatus = '';
            this._storeService.getUserDetailsOnce().then((user: UserDetails) => {
              let temp = user;
              temp.pKey = response[0].response.key.publickey;
              this._storeService.data.next(temp);
              // save this for service.js
              Minima.file.save(JSON.stringify({uid: user.refID}), 'uid.txt',  (res: any) => {});
            });
          })
          .catch(errors => {
            alert(errors);
          })
        }
      } else {
        alert('POSTING FAILED!  Payload is wrong');
      }
    });
  }

  login(user: User) {
    console.log('LOGGING IN');
    this._loginService.login(user)
      .then((res: any) => {
        if (!res.ok) {
          this.loginStatus = 'Sign in failed! Check your sign in details.';
          this.getReferenceButton.disabled = false;
        }
        return res.json()
      }).then(data => {
        //console.log(data);
        if (data.errors) {
          this.loginStatus = data.errors[0].message;
        } else if (data.data.access_token) {
          this.loginStatus = 'Authenticated!  Checking public key...';
          const token = {
            access_token: data.data.access_token,
            refresh_token: data.data.refresh_token,
            expires: data.data.expires
          }
          this.updateUserData(token);
        }
      })
      .catch(error => console.warn(error))
      .finally(() => {
        setTimeout(() => {
          this.getReferenceButton.disabled = false;
          this.loginStatus = '';
        }, 5000);
      })
  }

  async updateUserData(token: any) {
    const url = 'https://incentivedb.minima.global/users/me?access_token='+token.access_token+'';
    Minima.net.GET(url, (res: any) => {
      //console.log(res);
      // create sessions
      let sessionStart = new Date();
      let currentTime = sessionStart.getTime();
      let expiryTime = currentTime + token.expires;
      let sessionEnd = new Date(expiryTime);
      let plainResponse = decodeURIComponent(res.result);
      //console.log(plainResponse);
      let data = JSON.parse(plainResponse);
      
      if (data && data.data.id.length !== 0) {
        let user: UserDetails = {
          email: this.username.value,
          pKey: '',
          refID: data.data.id,
          loginData: {
            access_token: token.access_token,
            refresh_token: token.refresh_token,
            expires: token.expires,
            sessions: {
              sessionStart: sessionStart,
              sessionEnd: sessionEnd
            }
          }
        };
        this._storeService.data.next(user);
        this.getPubKey(user);
      } else {
        console.log('Failed to retrieve user details from server..');
      }
    });
  }

  lastAccess() {
    // GET CURRENT TIME
    let date = new Date();
    let ms = date.getTime();
    this._storeService.lastAccess.next({milliseconds: ms});
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
