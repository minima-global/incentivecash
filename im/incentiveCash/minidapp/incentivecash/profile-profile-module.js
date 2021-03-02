(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let ProfilePage = class ProfilePage {
    constructor(_storeService) {
        this._storeService = _storeService;
        this.user = { email: '', refID: '', pKey: '' };
    }
    ngOnInit() {
        this._storeService.getUserDetailsOnce().then((res) => {
            this.user = res;
        });
    }
    signOut() {
        document.getElementById('sign-out-btn').style.opacity = '0.5';
        this._storeService.getUserDetailsOnce().then((res) => {
            let user = res;
            user.loginData.access_token = '';
            user.loginData.refresh_token = '';
            this._storeService.data.next(user);
            document.location.reload();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col>Contact</ion-col>\n        <ion-col>About</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"profile-list ion-no-padding\">\n    <ion-grid class=\"pre-header ion-no-padding\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          Profile\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"profile ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          <ion-icon class=\"profile-icons\" src=\"assets/emailIcon.svg\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"information\">{{ user.email }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          <ion-icon class=\"profile-icons\" src=\"assets/lastAccessIcon.svg\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"information\">\n          <h6>Last access</h6>\n          <p>Date: 2021-02-18</p>\n          <p>Time: 16:36:29</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          <ion-icon class=\"profile-icons\" src=\"assets/referralIcon.svg\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"information\">\n          <h6>My referral code</h6>\n          <p>We will be issuing referral codes later on in the program</p>\n          <ion-button disabled type=\"button\" fill=\"clear\">Copy referral code</ion-button>\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"activity ion-no-border ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button routerLink=\"/rewards\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.profile-list {\n  margin-top: 12px;\n  background-color: transparent;\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.profile-list ion-grid.pre-header ion-row ion-col {\n  margin-bottom: 0px;\n}\nion-list.profile-list ion-grid.profile ion-row {\n  border-bottom: 0.5px solid #D2E0FF;\n  padding-bottom: 21px;\n  margin-top: 21px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col ion-icon.profile-icons {\n  width: 36px;\n  height: 36px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information {\n  padding-top: 5px;\n  color: #91919d;\n  font-size: 16px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information h6 {\n  color: #031B32;\n  padding: 0;\n  padding-bottom: 5px;\n  margin: 0;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information p {\n  margin: 0;\n  padding: 0;\n  font-family: manrope-regular;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-button {\n  margin: 0;\n  margin-top: 5px;\n  width: 167px;\n  height: 35px;\n  font-size: 12px;\n  border-radius: 5px;\n  border: 1px solid #031B32;\n  color: #031B32;\n  text-transform: none;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-button:hover {\n  background-color: #031B32;\n  color: #F0F0FA;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.profile-list {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUdJO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBRE47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFITjtBQUlNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGUjtBQUlNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQUZSO0FBSU07RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUlNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFPQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5wcm9maWxlLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMnB4OyBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG4gIGlvbi1ncmlkLnByZS1oZWFkZXIge1xuICAgIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1ncmlkLnByb2ZpbGUge1xuICAgIGlvbi1yb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0QyRTBGRjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICB9XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIGlvbi1pY29uLnByb2ZpbGUtaWNvbnMgeyBcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIH1cbiAgICB9IFxuICAgIGlvbi1yb3cgaW9uLWNvbC5pbmZvcm1hdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgY29sb3I6ICM5MTkxOWQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBoNiB7XG4gICAgICAgIGNvbG9yOiAjMDMxQjMyO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgd2lkdGg6IDE2N3B4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDMxQjMyO1xuICAgICAgICBjb2xvcjogIzAzMUIzMjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMUIzMjtcbiAgICAgICAgY29sb3I6ICNGMEYwRkE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4ICkge1xuICBpb24tbGlzdC5wcm9maWxlLWxpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xuICB9XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map