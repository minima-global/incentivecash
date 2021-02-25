(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"welcome-container\">\n    <ion-row>\n      <ion-col class=\"ion-text-center welcome\">\n        Welcome to the Minima <br>\n        Incentive Cash MiniDapp\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"has\">\n      <ion-col>\n        <div class=\"blue-ruler\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"has\">\n      <ion-col class=\"m-t7 ion-text-center welcome-subtitle\">\n        If you have already signed up for <br> incentive cash, please sign in with <br>\n        your username & password below.\n        <br><br>\n        Or click here to <a>register</a> now\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"getReferenceID()\" >\n    <ion-list>\n      <ion-item class=\"ion-no-padding no-ripple\" lines=\"none\">\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input clearInput=\"true\" formControlName=\"uName\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding no-ripple\" lines=\"none\">\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input clearInput=\"true\" formControlName=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n\n      \n      <ion-button #getReferenceButton class=\"sign-up-btn\" fill=\"clear\" expand=\"block\" type=\"submit\">\n        Sign in\n      </ion-button>\n\n    </ion-list>\n  </form> \n\n  <ion-grid>\n    <ion-row class=\"has\">\n      <ion-col class=\"forgot ion-text-center\">\n        Forgot password?\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"login-status-wrapper\" [hidden]=\"loginStatus.length === 0\">\n    <ion-row class=\"has\">\n      <ion-col class=\"login-status ion-text-center\">\n        {{ loginStatus }}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"loginStatus !== 'Sign in failed! Please check your username and password.'\" class=\"has ion-justify-content-center ion-align-items-center\">\n      <ion-col class=\"progress ion-text-center\">\n        <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-text-center\">\n  &#169; Copyright 2021 Minima GmbH\n</ion-footer>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 25px;\n  --padding-start: 25px;\n  --padding-end: 25px;\n}\n\nion-list {\n  background-color: transparent;\n  padding: 0;\n}\n\nion-list ion-item {\n  --background: transparent;\n  --background-color: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 7px;\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  color: #AAAABE;\n  font-family: manrope-medium;\n}\n\nion-input {\n  font-size: 16px;\n  color: #000;\n  border: 1px solid #D1D1DE;\n  background-color: #fff;\n  padding-left: 20px !important;\n}\n\nion-grid.login-status-wrapper {\n  margin-top: 50px;\n}\n\n@media only screen and (max-height: 797px) {\n  ion-grid.login-status-wrapper {\n    margin-top: 0px;\n  }\n}\n\nion-col.login-status {\n  letter-spacing: -0.02em;\n  font-family: manrope-regular;\n  padding: 0;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\nion-col.welcome {\n  font-size: 20px;\n  font-family: manrope-regular;\n  color: #91919d;\n}\n\nion-col.welcome-subtitle {\n  font-size: 14px;\n  font-family: manrope-regular;\n  color: #91919d;\n}\n\nion-col.welcome-subtitle a {\n  color: #001D33;\n  font-family: manrope-bold;\n}\n\nion-col.welcome-subtitle a:hover {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\nion-col div.blue-ruler {\n  max-width: 164px;\n  margin: auto;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n@media only screen and (min-width: 990px) {\n  ion-col div.blue-ruler {\n    max-width: 376px;\n  }\n\n  ion-content {\n    --padding-start: 95px;\n    --padding-end: 95px ;\n  }\n}\n\nion-row.has ion-col.forgot {\n  font-size: 18px;\n  color: #AAAABE;\n  font-family: manrope-medium;\n}\n\nion-row.has ion-col.forgot:hover {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\nion-row.has ion-col.progress {\n  max-width: 120px;\n}\n\nion-row.has ion-col.progress ion-progress-bar {\n  margin: 0;\n  padding: 0;\n  --buffer-background: #FAFAFF;\n}\n\nion-row.has ion-col.failure {\n  font-family: manrope-bold;\n  font-size: 30px;\n  color: #031B32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0VBTUY7QUFDRjs7QUFKQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBUUY7O0FBUEU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFTRjs7QUFQQTtFQUNFO0lBQ0UsZ0JBQUE7RUFVRjs7RUFSQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFXRjtBQUNGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQVdGOztBQVRBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQWNGOztBQVpBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWVGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjVweDtcbiAgLS1wYWRkaW5nLWVuZDogMjVweDtcbn1cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQUFBQUJFO1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG59XG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMURFO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbmlvbi1ncmlkLmxvZ2luLXN0YXR1cy13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc5N3B4KSB7XG4gIGlvbi1ncmlkLmxvZ2luLXN0YXR1cy13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbmlvbi1jb2wubG9naW4tc3RhdHVzIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb2wud2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgY29sb3I6ICM5MTkxOWQ7XG59XG5pb24tY29sLndlbGNvbWUtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIGNvbG9yOiAjOTE5MTlkO1xuICBhIHtcbiAgICBjb2xvcjogIzAwMUQzMztcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5pb24tY29sIGRpdi5ibHVlLXJ1bGVyIHsgIFxuICBtYXgtd2lkdGg6IDE2NHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MHB4KSB7XG4gIGlvbi1jb2wgZGl2LmJsdWUtcnVsZXIge1xuICAgIG1heC13aWR0aDogMzc2cHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogOTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiA5NXB4XG4gIH1cbn1cbmlvbi1yb3cuaGFzIGlvbi1jb2wuZm9yZ290IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0FBQUFCRTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xufVxuaW9uLXJvdy5oYXMgaW9uLWNvbC5mb3Jnb3Q6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tcm93LmhhcyBpb24tY29sLnByb2dyZXNzIHtcbiAgbWF4LXdpZHRoOiAxMjBweFxufVxuaW9uLXJvdy5oYXMgaW9uLWNvbC5wcm9ncmVzcyBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiAjRkFGQUZGO1xufVxuaW9uLXJvdy5oYXMgaW9uLWNvbC5mYWlsdXJlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAzMUIzMjtcbn0iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! minima */ "Kmpd");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_7__);








let HomePage = class HomePage {
    constructor(formBuilder, router, _storeService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this._storeService = _storeService;
        this.loginStatus = '';
    }
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
        this._storeService.getUserDetailsOnce().then((user) => {
            const data = {
                userid: user.refID
            };
            const url = 'https://incentivedb.minima.global/custom/utils/getKey';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ` + user.loginData.access_token
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                if (!response.ok) {
                    this.loginStatus = 'Login failed!  Public key not found!';
                    const statusText = response.statusText;
                    return response.json()
                        .then((data) => {
                        throw new Error(statusText);
                    });
                }
                return response.json();
            })
                .then(data => {
                // check if current key exists on server
                if (data.publickeys && data.publickeys.length === 0) {
                    // post a new key
                    this.postAKey(user.refID);
                }
                else {
                    // check current keys with remote keys to find a match
                    let nodeKeys = [];
                    let serverKeys = data.publickeys;
                    minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('keys', (res) => {
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
                        }
                        else {
                            this.loginStatus = 'Login successful!';
                            this.router.navigate(['/cash']);
                            this.loginForm.reset();
                            this.loginStatus = '';
                            let temp = user;
                            temp.pKey = intersection[0].publickey;
                            this._storeService.data.next(temp);
                        }
                    });
                }
            });
        });
    }
    postAKey(uid) {
        const url = 'https://incentivedb.minima.global/custom/minima/key';
        minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('keys new', (response) => {
            if (response.status) {
                const data = {
                    userid: uid,
                    publickey: response.response.key.publickey
                };
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
                        });
                    }
                    return res.json();
                })
                    .then(data => {
                    this.loginStatus = 'Login successful!';
                    this.router.navigate(['/cash']);
                    this.loginForm.reset();
                    this.loginStatus = '';
                    this._storeService.getUserDetailsOnce().then((user) => {
                        //console.log('Stored new pubkey');
                        let temp = user;
                        temp.pKey = response.response.key.publickey;
                        this._storeService.data.next(temp);
                    });
                })
                    .catch(error => {
                    alert(error);
                });
            }
        });
    }
    login(user) {
        const url = 'https://incentivedb.minima.global/auth/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
            if (!res.ok) {
                this.loginStatus = 'Sign in failed! Please check your username and password.';
                this.getReferenceButton.disabled = false;
                let statusText = res.statusText;
                return res.json()
                    .then((data) => {
                    throw new Error(statusText);
                });
            }
            return res.json();
        })
            .then(data => {
            this.loginStatus = 'Authenticated!  Checking public key...';
            // accessToken
            const token = {
                accessToken: data.data.access_token,
                refreshToken: data.data.refresh_token,
                info: {}
            };
            const url = 'https://incentivedb.minima.global/users/me?access_token=' + token.accessToken + '';
            minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].net.GET(url, (res) => {
                let plainResponse = decodeURIComponent(res.result);
                let data = JSON.parse(plainResponse);
                let user = {
                    email: this.username.value,
                    pKey: '',
                    refID: data.data.id,
                    loginData: {
                        access_token: token.accessToken,
                        refresh_token: token.refreshToken
                    }
                };
                this._storeService.data.next(user);
            });
            this.getPubKey();
        })
            .catch(error => {
            alert(error);
        })
            .catch(error => {
            alert(error);
        });
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
};
HomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
HomePage.propDecorators = {
    getReferenceButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['getReferenceButton', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map