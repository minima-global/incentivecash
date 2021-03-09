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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Program\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"welcome-container\">\n    <ion-row>\n      <ion-col class=\"ion-text-center welcome\">\n        Welcome to the<br>\n        Minima Incentive Program\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"has\">\n      <ion-col>\n        <div class=\"blue-ruler\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"has\">\n      <ion-col class=\"m-t7 ion-text-center welcome-subtitle\">\n        If you have already signed up for our<br>Incentive Program, please sign in using <br>\n        your email & password below.\n        <br><br>\n        Or click here to <a>register</a> now\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"getReferenceID()\" >\n    <ion-list>\n      <ion-item class=\"ion-no-padding no-ripple\" lines=\"none\">\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input clearInput=\"true\" formControlName=\"uName\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding no-ripple\" lines=\"none\">\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input clearInput=\"true\" formControlName=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n\n      \n      <ion-button #getReferenceButton class=\"sign-up-btn\" fill=\"clear\" expand=\"block\" type=\"submit\">\n        Sign in\n      </ion-button>\n\n    </ion-list>\n  </form> \n\n  <ion-grid>\n    <ion-row class=\"has\">\n      <ion-col class=\"forgot ion-text-center\">\n        Forgot password?\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"login-status-wrapper\" [hidden]=\"loginStatus.length === 0\">\n    <ion-row class=\"has\">\n      <ion-col class=\"login-status ion-text-center\">\n        {{ loginStatus }}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"loginStatus !== 'Sign in failed! Check your sign in details.'\" class=\"has ion-justify-content-center ion-align-items-center\">\n      <ion-col class=\"progress ion-text-center\">\n        <ion-progress-bar color=\"primary\" type=\"indeterminate\"></ion-progress-bar> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"content\">\n    &#169; Copyright 2021 Minima GmbH\n  </div>\n</ion-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-top: 25px;\n  --padding-start: 25px;\n  --padding-end: 25px;\n}\n\nion-list {\n  background-color: transparent;\n  padding: 0;\n}\n\nion-list ion-item {\n  --background: transparent;\n  --background-color: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 7px;\n  margin-left: 20px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  color: #AAAABE;\n  font-family: manrope-medium;\n}\n\nion-input {\n  font-size: 16px;\n  color: #000;\n  border: 1px solid #D1D1DE;\n  background-color: #fff;\n  padding-left: 20px !important;\n}\n\nion-grid.login-status-wrapper {\n  margin-top: 50px;\n}\n\n@media only screen and (max-height: 797px) {\n  ion-grid.login-status-wrapper {\n    margin-top: 0px;\n  }\n}\n\nion-col.login-status {\n  letter-spacing: -0.02em;\n  font-family: manrope-regular;\n  padding: 0;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\nion-col.welcome {\n  font-size: 20px;\n  font-family: manrope-regular;\n  color: #91919d;\n}\n\nion-col.welcome-subtitle {\n  font-size: 14px;\n  font-family: manrope-regular;\n  color: #91919d;\n}\n\nion-col.welcome-subtitle a {\n  color: #001D33;\n  font-family: manrope-bold;\n}\n\nion-col.welcome-subtitle a:hover {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\nion-col div.blue-ruler {\n  max-width: 164px;\n  margin: auto;\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n\n@media only screen and (min-width: 990px) {\n  ion-col div.blue-ruler {\n    max-width: 376px;\n  }\n\n  ion-content {\n    --padding-start: 95px;\n    --padding-end: 95px ;\n  }\n}\n\nion-row.has ion-col.forgot {\n  font-size: 18px;\n  color: #AAAABE;\n  font-family: manrope-medium;\n}\n\nion-row.has ion-col.forgot:hover {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\nion-row.has ion-col.progress {\n  max-width: 120px;\n}\n\nion-row.has ion-col.progress ion-progress-bar {\n  margin: 0;\n  padding: 0;\n  --buffer-background: #FAFAFF;\n}\n\nion-row.has ion-col.failure {\n  font-family: manrope-bold;\n  font-size: 30px;\n  color: #031B32;\n}\n\nion-footer {\n  height: 51px;\n  position: relative;\n}\n\nion-footer div.content {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxlQUFBO0VBTUY7QUFDRjs7QUFKQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBUUY7O0FBUEU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQU5BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFTRjs7QUFQQTtFQUNFO0lBQ0UsZ0JBQUE7RUFVRjs7RUFSQTtJQUNFLHFCQUFBO0lBQ0Esb0JBQUE7RUFXRjtBQUNGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQVdGOztBQVRBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBWUY7O0FBVkE7RUFDRSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQWNGOztBQVpBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWVGOztBQVpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBZUY7O0FBZEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFnQkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNXB4O1xuICAtLXBhZGRpbmctZW5kOiAyNXB4O1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNBQUFBQkU7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbn1cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxREU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xufVxuaW9uLWdyaWQubG9naW4tc3RhdHVzLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzk3cHgpIHtcbiAgaW9uLWdyaWQubG9naW4tc3RhdHVzLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxufVxuaW9uLWNvbC5sb2dpbi1zdGF0dXMge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbC53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1yZWd1bGFyO1xuICBjb2xvcjogIzkxOTE5ZDtcbn1cbmlvbi1jb2wud2VsY29tZS1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgY29sb3I6ICM5MTkxOWQ7XG4gIGEge1xuICAgIGNvbG9yOiAjMDAxRDMzO1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbmlvbi1jb2wgZGl2LmJsdWUtcnVsZXIgeyAgXG4gIG1heC13aWR0aDogMTY0cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkwcHgpIHtcbiAgaW9uLWNvbCBkaXYuYmx1ZS1ydWxlciB7XG4gICAgbWF4LXdpZHRoOiAzNzZweDtcbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA5NXB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDk1cHhcbiAgfVxufVxuaW9uLXJvdy5oYXMgaW9uLWNvbC5mb3Jnb3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjQUFBQUJFO1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG59XG5pb24tcm93LmhhcyBpb24tY29sLmZvcmdvdDpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1yb3cuaGFzIGlvbi1jb2wucHJvZ3Jlc3Mge1xuICBtYXgtd2lkdGg6IDEyMHB4XG59XG5pb24tcm93LmhhcyBpb24tY29sLnByb2dyZXNzIGlvbi1wcm9ncmVzcy1iYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC0tYnVmZmVyLWJhY2tncm91bmQ6ICNGQUZBRkY7XG59XG5pb24tcm93LmhhcyBpb24tY29sLmZhaWx1cmUge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDMxQjMyO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpdi5jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */");

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
                            this.lastAccess();
                            minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].file.load('first.txt', (res) => {
                                if (res.success) {
                                    this.router.navigate(['/rewards']);
                                }
                                else {
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
            })
                .catch(error => {
                alert(error.message);
            });
        });
    }
    postAKey(uid) {
        const url = 'https://incentivedb.minima.global/custom/minima/key';
        minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('keys new; newaddress', (response) => {
            if (minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].util.checkAllResponses(response)) {
                const data = {
                    userid: uid,
                    publickey: response[0].response.key.publickey,
                    address: response[1].response.address.hexaddress
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
                        this.loginStatus = 'Login failed!  Public key could not be posted!';
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
                    this.lastAccess();
                    minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].file.load('first.txt', (res) => {
                        if (res.success) {
                            this.router.navigate(['/rewards']);
                        }
                        else {
                            this.router.navigate(['/welcome']);
                        }
                    });
                    this.loginForm.reset();
                    this.loginStatus = '';
                    this._storeService.getUserDetailsOnce().then((user) => {
                        //console.log('Stored new pubkey');
                        let temp = user;
                        temp.pKey = response[0].response.key.publickey;
                        this._storeService.data.next(temp);
                    });
                })
                    .catch(error => {
                    alert(error.message);
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
                this.loginStatus = 'Sign in failed! Check your sign in details.';
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
                if (data && data.data.id.length !== 0) {
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
                }
                else {
                    console.log('Failed to retrieve user details from server..');
                }
            });
            this.getPubKey();
        })
            .catch(error => {
            alert(error.message);
        })
            .catch(error => {
            alert(error.message);
        });
        this.getReferenceButton.disabled = false;
        this.loginStatus = '';
    }
    lastAccess() {
        // GET CURRENT TIME
        let date = new Date();
        let ms = date.getTime();
        this._storeService.lastAccess.next({ milliseconds: ms });
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