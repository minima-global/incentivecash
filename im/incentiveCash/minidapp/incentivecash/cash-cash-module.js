(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cash-cash-module"],{

/***/ "41O/":
/*!*********************************************!*\
  !*** ./src/app/cash/cash-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CashPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPageRoutingModule", function() { return CashPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cash.page */ "gFCA");




const routes = [
    {
        path: '',
        component: _cash_page__WEBPACK_IMPORTED_MODULE_3__["CashPage"]
    }
];
let CashPageRoutingModule = class CashPageRoutingModule {
};
CashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashPageRoutingModule);



/***/ }),

/***/ "Q53j":
/*!*************************************!*\
  !*** ./src/app/cash/cash.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title.user-details ion-grid ion-row ion-col {\n  font-size: 14px;\n}\nion-title.user-details ion-grid ion-row ion-col span {\n  font-family: manrope-light;\n}\nion-list.cash-list ion-grid.header {\n  border-bottom: 1px solid #7D8B99;\n}\nion-list.cash-list ion-grid.header ion-row ion-col {\n  color: var(--ion-color-primary);\n  font-family: manrope-bold;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col p {\n  font-size: 16px;\n  font-variant-numeric: tabular-nums;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span {\n  text-transform: none;\n  background-color: var(--ion-color-primary);\n  color: #F0F0FA;\n  font-family: manrope-bold;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  cursor: pointer;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span:hover {\n  background-color: #346FE5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBS0U7RUFDRSxnQ0FBQTtBQUZKO0FBR0k7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0FBRE47QUFPSTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtBQUpOO0FBTUk7RUFDRSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSk47QUFNSTtFQUNFLHlCQUFBO0FBSk4iLCJmaWxlIjoiY2FzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUudXNlci1kZXRhaWxzIHtcbiAgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWxpZ2h0O1xuICB9XG4gIH1cbn1cblxuaW9uLWxpc3QuY2FzaC1saXN0IHtcbiAgaW9uLWdyaWQuaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdEOEI5OTtcbiAgICBpb24tcm93IGlvbi1jb2wge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdC5jYXNoLWxpc3Qge1xuICBpb24tZ3JpZC5jYXNoIHtcbiAgICBpb24tcm93IGlvbi1jb2wgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICAgIH1cbiAgICBpb24tcm93IGlvbi1jb2wgc3BhbiB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiAjRjBGMEZBO1xuICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGlvbi1yb3cgaW9uLWNvbCBzcGFuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDZGRTU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "XlNi":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cash/cash.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"ion-no-padding ion-align-self-center ion-text-left\">\n            <ion-icon class=\"icon ion-align-self-center\" src=\"assets/icon/minima-logo-landscape-dark.svg\"></ion-icon>\n          </ion-col>\n          <ion-col class=\"ion-no-padding ion-align-self-center ion-text-right\">\n            Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"cash-list ion-no-padding\">\n    <ion-grid class=\"header ion-no-padding m-b7\">\n      <ion-row>\n        <ion-col class=\"ion-text-center\">Cash</ion-col>\n        <ion-col class=\"ion-text-center\">Due Date</ion-col>\n        <ion-col class=\"ion-text-center\">Status</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"cashlist.length === 0\" [hidden]=\"true\" class=\"ion-no-padding m-t7\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">No incentive cash yet...</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngFor=\"let cash of cashdummy\" class=\"cash ion-no-padding\">\n      <ion-row class=\"ion-no-margin\">\n        <ion-col class=\"ion-text-center ion-no-padding\"><p>{{cash.index}}</p></ion-col>\n        <ion-col class=\"ion-text-center ion-no-padding\"><p>{{cash.date}}</p></ion-col>\n        <ion-col class=\"ion-text-center ion-no-padding\"><p class=\"ion-no-padding\"><span id=\"collect-btn\" [innerHTML]=\"cash.status\"></span></p></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-list>\n\n  \n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"user-details\">\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row><ion-col>\n          Logged in as: <span>eliasnemr@gmail.com</span>\n        </ion-col></ion-row>\n        <ion-row><ion-col>\n          Reference ID: <span>{{data.refID}}</span>\n        </ion-col></ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "gFCA":
/*!***********************************!*\
  !*** ./src/app/cash/cash.page.ts ***!
  \***********************************/
/*! exports provided: CashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPage", function() { return CashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cash.page.html */ "XlNi");
/* harmony import */ var _cash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cash.page.scss */ "Q53j");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let CashPage = class CashPage {
    constructor(route, _storeService) {
        this.route = route;
        this._storeService = _storeService;
        this.referenceID = '';
        this.cashdummy = [
            { index: '10', date: '07 - 02 - 2021', status: '<span fill="clear">Collect</span>' },
            { index: '10', date: '14 - 02 - 2021', status: '<span fill="clear">Collect</span>' },
            { index: '10', date: '28 - 02 - 2021', status: '<span fill="clear">Collect</span>' },
            { index: '10', date: '07 - 03 - 2021', status: '<span fill="clear">Collect</span>' },
        ];
        this.cashlist = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.referenceID = params.get('id');
        });
        this._storeService.data.subscribe((res) => {
            this.data = res;
        });
    }
    collectCash() {
    }
};
CashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
CashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-cash',
        template: _raw_loader_cash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CashPage);



/***/ }),

/***/ "pJyb":
/*!*************************************!*\
  !*** ./src/app/cash/cash.module.ts ***!
  \*************************************/
/*! exports provided: CashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPageModule", function() { return CashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cash-routing.module */ "41O/");
/* harmony import */ var _cash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cash.page */ "gFCA");







let CashPageModule = class CashPageModule {
};
CashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cash_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashPageRoutingModule"]
        ],
        declarations: [_cash_page__WEBPACK_IMPORTED_MODULE_6__["CashPage"]]
    })
], CashPageModule);



/***/ })

}]);
//# sourceMappingURL=cash-cash-module.js.map