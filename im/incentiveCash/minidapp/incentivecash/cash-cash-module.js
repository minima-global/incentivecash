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
/* harmony default export */ __webpack_exports__["default"] = ("ion-title.user-details ion-grid ion-row ion-col {\n  font-size: 14px;\n}\nion-title.user-details ion-grid ion-row ion-col span {\n  font-family: manrope-light;\n}\nion-list.cash-list {\n  background-color: transparent;\n  margin-top: 21px;\n}\nion-list.cash-list ion-grid.header {\n  margin-left: 27px;\n  margin-right: 27px;\n  border-bottom: 1px solid #7D8B99;\n}\nion-list.cash-list ion-grid.header ion-row ion-col {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #91919d;\n  font-family: manrope-bold;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col p {\n  font-size: 13px;\n  font-variant-numeric: tabular-nums;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col ion-progress-bar {\n  --buffer-background: transparent;\n  --progress-background: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  height: 24px;\n  width: 63.88px;\n  border-radius: 5px;\n  margin-top: 11px;\n  float: right;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span {\n  border-radius: 5px;\n  text-transform: none;\n  background-color: var(--ion-color-primary);\n  color: #f0f0fa;\n  font-family: manrope-bold;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  cursor: pointer;\n}\nion-list.cash-list ion-grid.cash ion-row {\n  padding-left: 27px;\n  padding-right: 27px;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span:hover {\n  background-color: #346FE5;\n}\nion-list.cash-list ion-grid.cash:nth-child(odd) {\n  background-color: #F0F0FA;\n  background: #F0F0FA;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button {\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button ion-label {\n  color: #001C32;\n  font-size: 20px;\n  text-transform: none;\n}\nion-toolbar.cash-progress-toolbar ion-label h6 {\n  margin-top: 12px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\nion-toolbar.cash-progress-toolbar ion-label p {\n  font-size: 16px;\n  color: #001C32;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBSUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUtJO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBRk47QUFLTTtFQUNFLGdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFIUjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSk47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1JO0VBQ0UseUJBQUE7QUFKTjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQUxKO0FBV0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFTTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQWFJO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFYTjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFYTiIsImZpbGUiOiJjYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZS51c2VyLWRldGFpbHMge1xuICBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbGlnaHQ7XG4gIH1cbiAgfVxufVxuXG5pb24tbGlzdC5jYXNoLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgaW9uLWdyaWQuaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3RDhCOTk7XG4gICAgaW9uLXJvdyBpb24tY29sIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzkxOTE5ZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgfVxuICB9XG59XG5pb24tbGlzdC5jYXNoLWxpc3Qge1xuICBpb24tZ3JpZC5jYXNoIHtcbiAgICBpb24tcm93IGlvbi1jb2wgcCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICAgIH1cbiAgICBpb24tcm93IGlvbi1jb2wge1xuICAgICAgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA2My44OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLXJvdyBpb24tY29sIHNwYW4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogI2YwZjBmYTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogOXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjdweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI3cHg7XG4gICAgfVxuICAgIGlvbi1yb3cgaW9uLWNvbCBzcGFuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDZGRTU7XG4gICAgfVxuICB9XG4gIGlvbi1ncmlkLmNhc2g6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRkE7XG4gICAgYmFja2dyb3VuZDogI0YwRjBGQTtcblxuICB9XG59XG5pb24tdG9vbGJhci5jYXNoLXByb2dyZXNzLXRvb2xiYXIge1xuICBpb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMwMDFDMzI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBoNiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzAwMUMzMjtcbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "XlNi":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cash/cash.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col>Help</ion-col>\n        <ion-col>Contact</ion-col>\n        <ion-col>About</ion-col>\n        <ion-col class=\"sign-out\">\n          <span>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"cash-list ion-no-padding\">\n    <ion-grid class=\"header ion-no-padding m-b7\">\n      <ion-row>\n        <ion-col class=\"ion-text-left\">Reward</ion-col>\n        <ion-col class=\"ion-text-right\" style=\"padding-right: 25px\">Amount</ion-col>\n        <ion-col class=\"ion-text-left\">Due Date</ion-col>\n        <ion-col class=\"ion-text-right\">Status</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"cashdummy.length === 0\" [hidden]=\"true\" class=\"ion-no-padding m-t7\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">No incentive cash yet...</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"cash ion-no-padding\" *ngFor=\"let cash of cashdummy\">\n      <ion-row class=\"ion-no-margin\">\n        <ion-col class=\"ion-text-left ion-no-padding\"><p>{{'No.'+cash.index}}</p></ion-col>\n        <ion-col class=\"ion-text-right ion-no-padding\" style=\"padding-right: 25px\"><p>{{cash.cash_amount}}</p></ion-col>\n        <ion-col class=\"ion-text-left ion-no-padding\"><p>{{cash.blockno}}</p></ion-col>\n        <ion-col class=\"ion-text-right ion-no-padding\">\n          <p *ngIf=\"cash.status === 'Ready'\" class=\"ion-no-padding\">\n            <span (click)=\"collectCash(cash.coinid, cash.cash_amount, data.pKey, cash.tokenid, data.refID)\" id=\"collect-btn\">Collect</span>\n          </p>\n          <ion-progress-bar type=\"determinate\" value=\"{{cash.percent}}\" class=\"ion-no-padding ion-no-margin\" *ngIf=\"cash.status === 'Not Ready'\"></ion-progress-bar>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n  </ion-list>\n\n  <ion-toolbar class=\"cash-progress-toolbar ion-no-padding\">\n  <!-- Default Segment -->\n  <ion-segment #claimedSegment value=\"claimed\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button [ngStyle] = \"shownSegments === 'claimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\" value=\"claimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'claimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Claimed Total</ion-label>\n    </ion-segment-button>\n    <ion-segment-button [ngStyle] = \"shownSegments === 'unclaimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\" value=\"unclaimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'unclaimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Unclaimed Total</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'claimed'\">\n    <h6>1000</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'unclaimed'\">\n    <h6>2000</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  </ion-toolbar>\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-text-center\">\n  &#169; Copyright 2021 Minima GmbH\n</ion-footer>\n");

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
    constructor(route, _storeService, _Minima, toastController) {
        this.route = route;
        this._storeService = _storeService;
        this._Minima = _Minima;
        this.toastController = toastController;
        this.shownSegments = 'claimed';
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
    }
    segmentChanged(ev) {
        this.shownSegments = ev.detail.value;
    }
    collectCash(coinid, amount, pKey, tokenid, uid) {
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
            console.log(res);
            if (minima__WEBPACK_IMPORTED_MODULE_7__["Minima"].util.checkAllResponses(res)) {
                this.presentToast('Incentive Cash', 'Your cash has been collected and your reward has been registered, thank you!');
                this._storeService.pollCash();
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