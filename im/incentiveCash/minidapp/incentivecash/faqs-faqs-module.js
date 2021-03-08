(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faqs-faqs-module"],{

/***/ "D7RP":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.faqs-list {\n  margin-top: 12px;\n  background-color: transparent;\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.faqs-list ion-grid.pre-header ion-row ion-col {\n  margin-bottom: 0px;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.faqs-list {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n\n  ion-header ion-toolbar.page-header {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ZhcXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNJO0VBQ0Usa0JBQUE7QUFDTjtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBSkY7O0VBT0U7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBSko7QUFDRiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LmZhcXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDEycHg7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG4gIG1hcmdpbi1yaWdodDogMjdweDtcbiAgaW9uLWdyaWQucHJlLWhlYWRlciB7XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gIH1cbiAgaW9uLWdyaWQuZmFxIHtcbiAgICBcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCApIHtcbiAgaW9uLWxpc3QuZmFxcy1saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbiAgfVxuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhci5wYWdlLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "EMSM":
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FaqsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageRoutingModule", function() { return FaqsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faqs.page */ "c3PB");




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_3__["FaqsPage"]
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ "NWDk":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faqs/faqs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar class=\"page-header ion-no-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"header ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          FAQs\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"faqs-list ion-no-padding\">\n    <ion-grid class=\"faq ion-no-padding\">\n      <ion-row>\n        <ion-col>\n          Coming soon...\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-padding ion-no-border ion-text-center\">\n  <ion-toolbar class=\"activity\">\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "Toy+":
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/*! exports provided: FaqsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faqs-routing.module */ "EMSM");
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faqs.page */ "c3PB");







let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqsPageRoutingModule"]
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_6__["FaqsPage"]]
    })
], FaqsPageModule);



/***/ }),

/***/ "c3PB":
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/*! exports provided: FaqsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPage", function() { return FaqsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faqs.page.html */ "NWDk");
/* harmony import */ var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faqs.page.scss */ "D7RP");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let FaqsPage = class FaqsPage {
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
FaqsPage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
FaqsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-faqs',
        template: _raw_loader_faqs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqsPage);



/***/ })

}]);
//# sourceMappingURL=faqs-faqs-module.js.map