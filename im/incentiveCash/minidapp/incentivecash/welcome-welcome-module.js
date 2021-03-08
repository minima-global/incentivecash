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
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid.welcome {\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.first ion-col {\n  font-size: 20px;\n  color: #91919D;\n  padding-bottom: 15px;\n}\nion-grid.welcome ion-row.first ion-col span {\n  color: var(--ion-color-primary);\n  font-size: 28px;\n}\nion-grid.welcome ion-row.line ion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-grid.welcome ion-row.line ion-col div {\n  width: 100px;\n  height: 2px;\n  background: var(--ion-color-primary);\n}\nion-grid.welcome ion-row.second {\n  margin-top: 15px;\n}\nion-grid.welcome ion-row.second ion-col {\n  font-size: 14px;\n  color: #91919D;\n}\nion-grid.welcome ion-row.second ion-col span {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\nion-grid.welcome ion-row.button {\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.button ion-col ion-button {\n  width: 164px;\n  height: 44px;\n  background-color: var(--ion-color-primary);\n  border-radius: 15px;\n  color: #fff;\n  text-transform: none;\n}\nion-grid.welcome ion-row.button ion-col ion-button:hover {\n  background-color: #346FE6;\n}\nion-grid.welcome ion-row.subtitle {\n  margin-top: 70px;\n}\nion-grid.welcome ion-row.subtitle ion-col {\n  color: var(--ion-color-primary);\n  font-family: manrope-regular;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNJO0VBS0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUhOO0FBSE07RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFLUjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFETjtBQUVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQUFSO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBR0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUROO0FBRU07RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUlNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRlI7QUFJTTtFQUNFLHlCQUFBO0FBRlI7QUFNRTtFQUNFLGdCQUFBO0FBSko7QUFLSTtFQUNFLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBSE4iLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZC53ZWxjb21lIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgaW9uLXJvdy5maXJzdCB7XG4gICAgaW9uLWNvbCB7XG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICAjOTE5MTlEO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICB9XG4gIGlvbi1yb3cubGluZSB7XG4gICAgaW9uLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tcm93LnNlY29uZCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBpb24tY29sIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjOTE5MTlEO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLXJvdy5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE2NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDZGRTY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1yb3cuc3VidGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn0iXX0= */");

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