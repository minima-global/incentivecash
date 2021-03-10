(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "+riw":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./welcome.page.html */ "4lQF");
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.page.scss */ "lRqQ");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "Kmpd");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let WelcomePage = class WelcomePage {
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
    firstTime() {
        const json = { first: true };
        minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].file.save(JSON.stringify(json), 'first.txt', (res) => {
            if (res.success) { }
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
];
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WelcomePage);



/***/ }),

/***/ "4lQF":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Program\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders ion-text-left\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"no-borders\" class=\"sign-out\">\n            <span (click) = 'signOut()'>\n              Sign out\n            </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid class=\"welcome ion-no-padding ion-text-center\">\n    <ion-row class=\"first ion-no-padding\">\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <span>Congratulations.</span><br>\n        You are now part of the<br>\n        Minima Incentive Program\n        <div class=\"line\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"line ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <div></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"second ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        Your participation will help us build a<br>\n        network for individuals to freely<br>\n        transmit information and value.<br><br>\n        All you have to do now is<br>\n        <span>earn coins...</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"button ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-button (click)=\"firstTime()\" routerLink=\"/rewards\" type=\"button\" fill=\"clear\">Enter</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"subtitle ion-no-paddiong\">\n      <ion-col class=\"ion-no-padding\">\n        Please look at the FAQs in the navigation bar<br>\n        for answers to any questions you may have.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border ion-no-padding ion-text-center\">\n  <ion-toolbar class=\"activity ion-no-padding\">\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "f1L3":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "+riw");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "lRqQ":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid.welcome {\n  font-family: manrope-regular;\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.first ion-col {\n  font-size: 20px;\n  color: #91919D;\n  padding-bottom: 15px;\n}\nion-grid.welcome ion-row.first ion-col span {\n  color: var(--ion-color-primary);\n  font-size: 28px;\n}\nion-grid.welcome ion-row.line ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-grid.welcome ion-row.line ion-col div {\n  width: 100px;\n  height: 2px;\n  background: var(--ion-color-primary);\n}\nion-grid.welcome ion-row.second {\n  margin-top: 15px;\n}\nion-grid.welcome ion-row.second ion-col {\n  font-size: 14px;\n  color: #91919D;\n}\nion-grid.welcome ion-row.second ion-col span {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\nion-grid.welcome ion-row.button {\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.button ion-col ion-button {\n  font-family: manrope-regular;\n  width: 164px;\n  height: 44px;\n  background-color: var(--ion-color-primary);\n  border-radius: 15px;\n  color: #fff;\n  text-transform: none;\n}\nion-grid.welcome ion-row.button ion-col ion-button:hover {\n  background-color: #346FE6;\n}\nion-grid.welcome ion-row.subtitle {\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.subtitle ion-col {\n  color: var(--ion-color-primary);\n  font-family: manrope-regular;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0k7RUFLRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSE47QUFITTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQUtSO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUROO0FBRU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBQVI7QUFJRTtFQUNFLGdCQUFBO0FBRko7QUFHSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRE47QUFFTTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBSU07RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUZSO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBTUU7RUFDRSxnQkFBQTtBQUpKO0FBS0k7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQUhOIiwiZmlsZSI6IndlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQud2VsY29tZSB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGlvbi1yb3cuZmlyc3Qge1xuICAgIGlvbi1jb2wge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAgIzkxOTE5RDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxuICBpb24tcm93LmxpbmUge1xuICAgIGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLXJvdy5zZWNvbmQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzkxOTE5RDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1yb3cuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGlvbi1jb2wge1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gICAgICAgIHdpZHRoOiAxNjRweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2RkU2O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tcm93LnN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIGlvbi1jb2wge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXJlZ3VsYXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59Il19 */");

/***/ }),

/***/ "pi15":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "f1L3");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "+riw");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map