(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "BjQp":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "Yuog");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "Ds8B");







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "Ds8B":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.page.html */ "qbrv");
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.page.scss */ "xWG2");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let ContactPage = class ContactPage {
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
};
ContactPage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactPage);



/***/ }),

/***/ "Yuog":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "Ds8B");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "qbrv":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"contact-list ion-no-padding\">\n    <ion-grid class=\"pre-header ion-no-padding\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          Contact\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"contact ion-no-padding\">\n      <ion-row class=\"report-paragraph\">\n        <ion-col>\n          <p>\n            To report a technical problem, please email a brief description of the issue to minima-global@fire.fundersclub.com. For all other enquires, please email our community management team at community@minima.global.\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"general-paragraph\">\n        <ion-col>\n          <p>\n            For general information regarding the Minima Rewards Program, please use the resources below.\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-list class=\"socials\" lines=\"none\">\n        <ion-item href=\"https://discord.com/invite/SgvQ6mc\" target=\"_\">\n          <ion-avatar><ion-icon src=\"assets/discordLogo.svg\"></ion-icon></ion-avatar>\n          <ion-label>\n            <h6>Discord</h6>\n            <p>Use the incentive cash channel</p>\n          </ion-label>\n        </ion-item>\n        <ion-item href=\"https://t.me/Minima_Global\" target=\"_\">\n          <ion-avatar>\n            <ion-icon src=\"assets/telegramLogo.svg\"></ion-icon>\n          </ion-avatar>\n          <ion-label>\n            <h6>Telegram</h6>\n            <p>Contact an admin</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      \n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"activity ion-no-border ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "xWG2":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.contact-list {\n  margin-top: 12px;\n  background-color: transparent;\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.contact-list ion-grid.pre-header ion-row ion-col {\n  margin-bottom: 0px;\n}\nion-list.contact-list ion-grid.contact ion-row.report-paragraph {\n  border-bottom: 0.5px solid #D2E0FF;\n  padding-bottom: 2px;\n  margin-top: 2px;\n}\nion-list.contact-list ion-grid.contact ion-list.socials {\n  background-color: transparent;\n  margin-top: 21px;\n}\nion-list.contact-list ion-grid.contact ion-list.socials ion-item {\n  --background: transparent;\n  --background-hover: none;\n  --padding-start: 0;\n}\nion-list.contact-list ion-grid.contact ion-list.socials ion-avatar {\n  margin-right: 15px;\n}\nion-list.contact-list ion-grid.contact ion-list.socials ion-icon {\n  width: 40px;\n  height: 40px;\n}\nion-list.contact-list ion-grid.contact ion-list.socials h6 {\n  margin: 0;\n  margin-bottom: 1px;\n}\nion-list.contact-list ion-grid.contact ion-list.socials p {\n  margin: 0;\n  color: #91919d;\n  margin-bottom: 1px;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.contact-list {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQUdJO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFETjtBQUdJO0VBTUUsNkJBQUE7RUFRQSxnQkFBQTtBQWJOO0FBQU07RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUNNO0VBQ0Usa0JBQUE7QUFDUjtBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUVNO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFFTTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUtBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LmNvbnRhY3QtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDEycHg7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIG1hcmdpbi1yaWdodDogMjdweDtcbiAgaW9uLWdyaWQucHJlLWhlYWRlciB7XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbiAgaW9uLWdyaWQuY29udGFjdCB7XG4gICAgaW9uLXJvdy5yZXBvcnQtcGFyYWdyYXBoIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNEMkUwRkY7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgICBpb24tbGlzdC5zb2NpYWxzIHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBub25lO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICB9XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgaDYge1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBjb2xvcjogIzkxOTE5ZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCApIHtcbiAgaW9uLWxpc3QuY29udGFjdC1saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbiAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map