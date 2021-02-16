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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding ion-align-self-center ion-text-left\">\n            <ion-icon class=\"icon ion-align-self-center\" src=\"assets/icon/minima-logo-landscape-dark.svg\"></ion-icon>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-text-right\">\n            Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"getReferenceID()\" >\n    <ion-list>\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n        <ion-label position=\"stacked\">Username/Email</ion-label>\n        <ion-input placeholder=\"Enter a valid username or email\" clearInput=\"true\" formControlName=\"uName\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\" lines=\"none\">\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input placeholder=\"Enter your password\" clearInput=\"true\" formControlName=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\" class=\"no-ripple ion-no-padding\">\n        <ion-button #getReferenceButton class=\"sign-up-btn\" slot=\"end\" fill=\"clear\" type=\"submit\">\n          Get Reference ID\n        </ion-button>\n      </ion-item>\n      <ion-item [hidden]=\"loginStatus.length === 0\" class=\"login-status\" lines=\"none\">\n        <ion-note slot=\"end\">{{ loginStatus }}</ion-note>\n      </ion-item>\n\n      <p class=\"notes\">\n        Welcome to <span>the Incentive Cash MiniDapp.</span>\n      </p>\n      <p class=\"notes\">\n        If you have already signed up for incentive cash, please login with your username & password.\n      </p>\n      <p class=\"notes\">\n        Otherwise, click <a>here</a> to register now!\n      </p>\n    </ion-list>\n  </form> \n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  background-color: transparent;\n  background: #f0f0fa;\n}\n\nion-item ion-label {\n  margin-bottom: 7px;\n  font-size: 16px;\n  font-family: manrope-bold;\n}\n\nion-input {\n  font-size: 12px;\n  color: #000;\n  background-color: #fff;\n  border: 1px solid #f0f0fa;\n  padding-left: 2% !important;\n}\n\nion-item.login-status ion-note {\n  font-family: manrope-medium;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtFQUNBLFVBQUE7QUFHRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogI2YwZjBmYTtcbn1cbmlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmYTtcbiAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0ubG9naW4tc3RhdHVzIGlvbi1ub3RlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */");

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
        this.login(user);
    }
    login(user) {
        this.loginStatus = 'Logging in...';
        this.getReferenceButton.disabled = true;
        const url = 'https://incentivedb.minima.global/auth/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((res) => {
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
                    };
                    throw new Error(statusText);
                });
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
            };
            const userData = {
                accessToken: data.data.access_token,
                refreshToken: data.data.refresh_token,
                info: {}
            };
            minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd('keys new', (res) => {
                if (res.status) {
                    const username = this.username.value;
                    const publicKey = res.response.key.publickey;
                    const refID = '';
                    const url = 'https://incentivedb.minima.global/items/directus_users?filter={ "email": { "_eq": "' + username + '" }}?access_token=' + userData.accessToken + '';
                    const url2 = 'https://incentivedb.minima.global/users/me?access_token=' + userData.accessToken + '';
                    minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].net.GET(url2, (res) => {
                        let plainResponse = decodeURIComponent(res.result);
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
        });
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