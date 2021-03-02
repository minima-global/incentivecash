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
/* harmony default export */ __webpack_exports__["default"] = ("ion-title.user-details ion-grid ion-row ion-col {\n  font-size: 14px;\n}\nion-title.user-details ion-grid ion-row ion-col span {\n  font-family: manrope-light;\n}\nion-list.cash-list {\n  background-color: transparent;\n  margin-top: 13px;\n}\nion-list.cash-list ion-grid.pre-header {\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.cash-list ion-grid.pre-header ion-row ion-col {\n  border-bottom: 1px solid #707070;\n  padding-bottom: 12px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: manrope-extrabold;\n}\nion-list.cash-list ion-grid.header {\n  margin-left: 27px;\n  margin-right: 27px;\n  border-bottom: 1px solid #7D8B99;\n}\nion-list.cash-list ion-grid.header ion-row ion-col {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #91919d;\n  font-family: manrope-bold;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col p {\n  font-size: 13px;\n  font-variant-numeric: tabular-nums;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col ion-progress-bar {\n  --buffer-background: transparent;\n  --progress-background: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  height: 24px;\n  width: 63.88px;\n  border-radius: 5px;\n  margin-top: 6px;\n  float: right;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span {\n  border-radius: 5px;\n  text-transform: none;\n  background-color: var(--ion-color-primary);\n  color: #f0f0fa;\n  font-family: manrope-bold;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  cursor: pointer;\n}\nion-list.cash-list ion-grid.cash ion-row {\n  padding-left: 27px;\n  padding-right: 27px;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span:hover {\n  background-color: #346FE5;\n}\nion-list.cash-list ion-grid.cash:nth-child(odd) {\n  background-color: #F0F0FA;\n  background: #F0F0FA;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button ion-label {\n  color: #001C32;\n  font-size: 20px;\n  text-transform: none;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#first {\n  margin-left: 27px;\n  margin-right: 5px;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#second {\n  margin-right: 27px;\n  margin-left: 5px;\n}\nion-toolbar.cash-progress-toolbar ion-label h6 {\n  margin-top: 12px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\nion-toolbar.cash-progress-toolbar ion-label p {\n  font-size: 16px;\n  color: #001C32;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.cash-list ion-grid.pre-header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n  ion-list.cash-list ion-grid.cash ion-row {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n\n  ion-list.cash-list ion-grid.header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n\n  ion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#first {\n    margin-left: 95px;\n  }\n  ion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#second {\n    margin-right: 95px;\n  }\n}\n.active {\n  border: 1px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBSUE7RUFZRSw2QkFBQTtFQUNBLGdCQUFBO0FBWkY7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR047QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUtJO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBRk47QUFLTTtFQUNFLGdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpOO0FBTUk7RUFDRSx5QkFBQTtBQUpOO0FBT0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFZTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFUUjtBQVlJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQVZOO0FBWUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFjSTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBWk47QUFjSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBWk47QUFrQkE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQko7RUFtQkk7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBakJOOztFQXNCRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFuQko7O0VBd0JJO0lBQ0UsaUJBQUE7RUFyQk47RUF1Qkk7SUFDRSxrQkFBQTtFQXJCTjtBQUNGO0FBMkJBO0VBQ0UsMENBQUE7RUFDQSwrQkFBQTtBQXpCRiIsImZpbGUiOiJjYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZS51c2VyLWRldGFpbHMge1xuICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIH1cbiAgfVxufVxuXG5pb24tbGlzdC5jYXNoLWxpc3Qge1xuICBpb24tZ3JpZC5wcmUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtZXh0cmFib2xkO1xuICAgIH1cbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgaW9uLWdyaWQuaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3RDhCOTk7XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzkxOTE5ZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdC5jYXNoLWxpc3Qge1xuICBpb24tZ3JpZC5jYXNoIHtcbiAgICBpb24tcm93IGlvbi1jb2wgcCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICAgIH1cbiAgICBpb24tcm93IGlvbi1jb2wge1xuICAgICAgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA2My44OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tcm93IGlvbi1jb2wgc3BhbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiAjZjBmMGZhO1xuICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGlvbi1yb3cge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjdweDtcbiAgICB9XG4gICAgaW9uLXJvdyBpb24tY29sIHNwYW46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NkZFNTtcbiAgICB9XG4gIH1cbiAgaW9uLWdyaWQuY2FzaDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGQTtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEZBO1xuXG4gIH1cbn1cbmlvbi10b29sYmFyLmNhc2gtcHJvZ3Jlc3MtdG9vbGJhciB7XG4gIGlvbi1zZWdtZW50IHtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMwMDFDMzI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiNmaXJzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICBpb24tc2VnbWVudC1idXR0b24jc2Vjb25kIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjdweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgaDYge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMwMDFDMzI7XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICBpb24tbGlzdC5jYXNoLWxpc3Qge1xuICAgIGlvbi1ncmlkLnByZS1oZWFkZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbiAgICB9XG4gICAgaW9uLWdyaWQuY2FzaCB7XG4gICAgICBpb24tcm93IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1saXN0LmNhc2gtbGlzdCB7XG4gICAgaW9uLWdyaWQuaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XG4gICAgfVxuICB9XG4gIGlvbi10b29sYmFyLmNhc2gtcHJvZ3Jlc3MtdG9vbGJhciB7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uI2ZpcnN0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDk1cHg7XG4gICAgICB9XG4gICAgICBpb24tc2VnbWVudC1idXR0b24jc2Vjb25kIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA5NXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "XlNi":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cash/cash.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col>Contact</ion-col>\n        <ion-col>About</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"cash-list ion-no-padding\">\n    <ion-grid class=\"pre-header ion-no-padding\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          Running Node Incentives\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"header ion-no-padding m-b7\">\n      <ion-row>\n        <ion-col class=\"ion-text-left\" style=\"padding-right: 25px\">Amount</ion-col>\n        <ion-col class=\"ion-text-left\">Due Date</ion-col>\n        <ion-col class=\"ion-text-right\">Status</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"cashdummy.length === 0\" [hidden]=\"true\" class=\"ion-no-padding m-t7\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">No incentive cash yet...</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"cash ion-no-padding\" *ngFor=\"let cash of cashlist\">\n      <ion-row id=\"row{{cash.coinid}}\" class=\"ion-no-margin\">\n        <ion-col class=\"ion-text-left ion-no-padding\" style=\"padding-right: 25px\"><p>{{cash.cash_amount}}</p></ion-col>\n        <ion-col class=\"ion-text-left ion-no-padding\"><p>{{cash.blockno}}</p></ion-col>\n        <ion-col class=\"ion-text-right ion-no-padding\">\n          <p *ngIf=\"cash.status === 'Ready'\" class=\"ion-no-padding\">\n            <span (click)=\"collectCash(cash.coinid, cash.cash_amount, data.pKey, cash.tokenid, data.refID)\" id=\"collect-btn{{cash.coinid}}\">Collect</span>\n          </p>\n          <ion-progress-bar \n          type=\"determinate\"\n          value=\"{{cash.percent}}\"\n          class=\"ion-no-padding ion-no-margin\"\n          *ngIf=\"cash.status === 'Not Ready'\"></ion-progress-bar>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n  </ion-list>\n\n  <ion-toolbar class=\"cash-progress-toolbar ion-no-padding\">\n  <!-- Default Segment -->\n  <ion-segment #claimedSegment value=\"claimed\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button \n    id=\"first\"\n    [ngStyle] = \"shownSegments === 'claimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\"\n    value=\"claimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'claimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Claimed Total</ion-label>\n    </ion-segment-button>\n    <ion-segment-button \n    id=\"second\"\n    [ngStyle] = \"shownSegments === 'unclaimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\"\n    value=\"unclaimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'unclaimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Unclaimed Total</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'claimed'\">\n    <h6>{{totalClaimed}}</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'unclaimed'\">\n    <h6>{{totalUnclaimed}}</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  </ion-toolbar>\n</ion-content>\n\n<ion-footer class=\"activity ion-no-border ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button routerLink=\"/rewards\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

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
/* harmony import */ var _api_minima_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/minima.service */ "7A1I");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! minima */ "Kmpd");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let CashPage = class CashPage {
    constructor(route, router, _storeService, _Minima, toastController) {
        this.route = route;
        this.router = router;
        this._storeService = _storeService;
        this._Minima = _Minima;
        this.toastController = toastController;
        this.shownSegments = 'claimed';
        this.rewards = [];
        this.totalClaimed = 0;
        this.totalUnclaimed = 0;
        this.timescript = 'LET owner = PREVSTATE ( 0 ) LET time = PREVSTATE ( 1 ) RETURN SIGNEDBY ( owner ) AND @BLKNUM GTE time';
        this.data = {
            email: '',
            refID: '',
            pKey: ''
        };
        this.referenceID = '';
        this.cashdummy = [
            { index: '1', percent: 0.3, cash_amount: '10', coinid: '', tokenid: '', date: '07 - 02 - 2021', blockno: '555532', status: 'Ready' },
            { index: '2', percent: 0.1, cash_amount: '10', coinid: '', tokenid: '', date: '14 - 02 - 2021', blockno: '12351', status: 'Ready' },
            { index: '3', percent: 0.7, cash_amount: '10', coinid: '', tokenid: '', date: '28 - 02 - 2021', blockno: '12351', status: 'Not Ready' },
            { index: '4', percent: 0.9, cash_amount: '10', coinid: '', tokenid: '', date: '07 - 03 - 2021', blockno: '12351', status: 'Not Ready' },
        ];
    }
    ngOnInit() {
        this._storeService.pollCash();
        this._storeService.data.subscribe((res) => {
            this.data = res;
        });
        this._storeService.cashlist.subscribe((res) => {
            this.cashlist = res;
        });
        this._storeService.rewards.subscribe((res) => {
            this.totalClaimed = 0;
            this.totalUnclaimed = 0;
            res.data.forEach((reward) => {
                if (reward.reason !== 'Claimed') {
                    this.totalUnclaimed += reward.amount;
                }
                else {
                    this.totalClaimed += reward.amount;
                }
            });
        });
    }
    segmentChanged(ev) {
        this.shownSegments = ev.detail.value;
    }
    signOut() {
        document.getElementById('sign-out-btn').style.opacity = '0.5';
        this._storeService.getUserDetailsOnce().then((res) => {
            let user = res;
            user.loginData.access_token = '';
            user.loginData.refresh_token = '';
            this._storeService.data.next(user);
            document.location.reload();
            this.presentToast('Login Status', 'You have signed out successfully');
        });
    }
    collectCash(coinid, amount, pKey, tokenid, uid) {
        document.getElementById('collect-btn' + coinid).style.opacity = '0.5';
        document.getElementById('row' + coinid).style.opacity = '0.5';
        document.getElementById('collect-btn' + coinid).textContent = 'Collecting...';
        let txnID = Math.floor(Math.random() * 1000000000);
        let devNull = '0xEEFFEEFFEE';
        const post_Transaction = "txncreate " + txnID + ";" +
            "txninput " + txnID + " " + coinid + ";" +
            "txnoutput " + txnID + " " + amount + " " + devNull + " " + tokenid + ";" +
            "txnstate " + txnID + " 0 \"" + uid + "\";" +
            "txnsign " + txnID + " " + pKey + ";" +
            "txnpost " + txnID + ";" +
            "txndelete " + txnID;
        minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].cmd(post_Transaction, (res) => {
            //console.log(res);
            if (minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].util.checkAllResponses(res)) {
                document.getElementById('collect-btn' + coinid).textContent = 'Collected!';
                document.getElementById('collect-btn' + coinid).style.backgroundColor = '#42CBB6';
                this.presentToast('Incentive Cash', 'Your cash has been collected and your reward has been registered, thank you!');
            }
            else {
                this.presentToast('Incentive Cash', 'Something went wrong with your collection, please try again!');
            }
        });
    }
    presentToast(hdr, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: hdr,
                message: msg,
                duration: 2000,
                position: 'bottom',
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            toast.present();
        });
    }
};
CashPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _api_minima_service__WEBPACK_IMPORTED_MODULE_3__["MinimaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
CashPage.propDecorators = {
    claimedSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['claimedSegment', { static: false },] }]
};
CashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
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
            _cash_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashPageRoutingModule"],
        ],
        declarations: [_cash_page__WEBPACK_IMPORTED_MODULE_6__["CashPage"]]
    })
], CashPageModule);



/***/ })

}]);
//# sourceMappingURL=cash-cash-module.js.map