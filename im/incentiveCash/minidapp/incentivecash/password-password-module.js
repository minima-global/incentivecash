(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "6hpP":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/password/password.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Program\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar class=\"page-header ion-no-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"header ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          Change your password\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"profile-list ion-no-padding\">\n    <ion-grid class=\"profile ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          <ion-icon class=\"profile-icons\" src=\"assets/passwordIcon.svg\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"information\">\n          <h6>Old password:</h6>\n          <ion-input type=\"password\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          \n        </ion-col>\n        <ion-col class=\"information\">\n          <h6>New password:</h6>\n          <ion-input type=\"password\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          \n        </ion-col>\n        <ion-col class=\"information\">\n          <h6>Retype new password:</h6>\n          <ion-input type=\"password\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"2\" class=\"ion-no-padding ion-text-left\">\n          \n        </ion-col>\n        <ion-col class=\"information\">\n          <ion-button type=\"button\" fill=\"clear\">Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-padding ion-no-border ion-text-center\">\n  <ion-toolbar class=\"activity\">\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "W3Gh":
/*!*****************************************************!*\
  !*** ./src/app/password/password-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageRoutingModule", function() { return PasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.page */ "zvak");




const routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_3__["PasswordPage"]
    }
];
let PasswordPageRoutingModule = class PasswordPageRoutingModule {
};
PasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordPageRoutingModule);



/***/ }),

/***/ "eeds":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.profile-list {\n  margin-top: 12px;\n  background-color: transparent;\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.profile-list ion-grid.pre-header ion-row ion-col {\n  margin-bottom: 0px;\n}\nion-list.profile-list ion-grid.profile ion-row:first-child {\n  margin-top: 21px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col ion-icon.profile-icons {\n  width: 36px;\n  height: 36px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information {\n  padding-top: 5px;\n  color: #91919d;\n  font-size: 16px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information h6 {\n  font-family: manrope-medium;\n  color: #031B32;\n  padding: 0;\n  padding-bottom: 5px;\n  margin: 0;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information p {\n  margin: 0;\n  padding: 0;\n  font-family: manrope-regular;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-button {\n  margin: 0;\n  margin-top: 15px;\n  width: 88px;\n  height: 35px;\n  font-size: 12px;\n  border-radius: 5px;\n  color: #fff;\n  background-color: var(--ion-color-primary);\n  text-transform: none;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-button:hover {\n  opacity: 0.8;\n  color: #F0F0FA;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-label {\n  margin-bottom: 5px;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information ion-input {\n  border-radius: 5px;\n  border: 1px solid #aaaabe;\n  width: 100%;\n  height: 48px;\n  background: #FFF;\n  font-size: 16px;\n  padding: 10px;\n  letter-spacing: 0.2em;\n  white-space: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-list.profile-list ion-grid.profile ion-row ion-col.information input:hover {\n  cursor: pointer;\n  background-color: #031B32;\n  color: #F0F0FA;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.profile-list {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n\n  ion-header ion-toolbar.page-header {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFHSTtFQUNFLGdCQUFBO0FBRE47QUFJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRlI7QUFLSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFITjtBQUlNO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUZSO0FBSU07RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBRlI7QUFJTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUlNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFGUjtBQUlNO0VBQ0Usa0JBQUE7QUFGUjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRlI7QUFJTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFGUjtBQU9BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBSkY7O0VBT0U7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBSko7QUFDRiIsImZpbGUiOiJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5wcm9maWxlLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMnB4OyBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG4gIGlvbi1ncmlkLnByZS1oZWFkZXIge1xuICAgIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1ncmlkLnByb2ZpbGUge1xuICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICB9XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIGlvbi1pY29uLnByb2ZpbGUtaWNvbnMgeyBcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIH1cbiAgICB9IFxuICAgIGlvbi1yb3cgaW9uLWNvbC5pbmZvcm1hdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgY29sb3I6ICM5MTkxOWQ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgICAgICAgY29sb3I6ICMwMzFCMzI7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgY29sb3I6ICNGMEYwRkE7XG4gICAgICB9XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICBpb24taW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICAgIGlucHV0OmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxQjMyO1xuICAgICAgICBjb2xvcjogI0YwRjBGQTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHggKSB7XG4gIGlvbi1saXN0LnByb2ZpbGUtbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XG4gIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIucGFnZS1oZWFkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "k6Cy":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-routing.module */ "W3Gh");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "zvak");







let PasswordPageModule = class PasswordPageModule {
};
PasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _password_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordPageRoutingModule"]
        ],
        declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
    })
], PasswordPageModule);



/***/ }),

/***/ "zvak":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./password.page.html */ "6hpP");
/* harmony import */ var _password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.page.scss */ "eeds");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let PasswordPage = class PasswordPage {
    constructor(_storeService) {
        this._storeService = _storeService;
    }
    ngOnInit() {
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
    changePassword(newpassword, oldpassword) {
    }
};
PasswordPage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
PasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-password',
        template: _raw_loader_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PasswordPage);



/***/ })

}]);
//# sourceMappingURL=password-password-module.js.map