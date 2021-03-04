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

/***/ "XlNi":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cash/cash.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"table ion-no-padding\">\n    <ion-row class=\"header ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        Incentives\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"table-header\">\n      <ion-col class=\"ion-text-left\">Amount</ion-col>\n      <ion-col class=\"ion-text-left\">Due Date</ion-col>\n      <ion-col class=\"ion-text-right\">Status</ion-col>\n    </ion-row>\n    <ion-row class=\"table-content ion-no-margin\" id=\"row{{cash.coinid}}\" *ngFor=\"let cash of cashlist\">\n      <ion-col class=\"ion-text-left ion-no-padding\"><p>{{cash.cash_amount}}</p></ion-col>\n      <ion-col class=\"ion-text-left ion-no-padding\"><p>{{cash.blockno}}</p></ion-col>\n      <ion-col class=\"ion-text-right ion-no-padding\">\n        <p *ngIf=\"cash.status === 'Ready'\" class=\"ion-no-padding\">\n          <span (click)=\"collectCash(cash.coinid, cash.cash_amount, data.pKey, cash.tokenid, data.refID)\" id=\"collect-btn{{cash.coinid}}\">Collect</span>\n        </p>\n        <ion-progress-bar \n        type=\"determinate\"\n        value=\"{{cash.percent}}\"\n        class=\"ion-no-padding ion-no-margin\"\n        *ngIf=\"cash.status === 'Not Ready'\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"cashlist && cashlist.length > 0\" class=\"table-footer\">\n      <ion-col class=\"ion-no-padding\">\n        Total Amount: <span>{{ totalRemaining }}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"activity ion-no-border ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! minima */ "Kmpd");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let CashPage = class CashPage {
    constructor(_storeService, _Minima, toastController) {
        this._storeService = _storeService;
        this._Minima = _Minima;
        this.toastController = toastController;
        this.shownSegments = 'claimed';
        this.rewards = [];
        this.totalRemaining = 0;
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
            this.totalRemaining = 0;
            this.cashlist = res;
            this.cashlist = this.cashlist.slice().sort(this.byAscDate);
            this.cashlist.forEach(cash => {
                cash.millisecond = moment__WEBPACK_IMPORTED_MODULE_8__(cash.millisecond).format('DD-MM-YYYY, HH:mm:ss');
                this.totalRemaining += parseInt(cash.cash_amount);
            });
        });
    }
    byAscDate(a, b) {
        let firstblock = parseInt(a.blockno);
        let secblock = parseInt(b.blockno);
        return firstblock - secblock;
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
        minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].cmd(post_Transaction, (res) => {
            //console.log(res);
            if (minima__WEBPACK_IMPORTED_MODULE_6__["Minima"].util.checkAllResponses(res)) {
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
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
    { type: _api_minima_service__WEBPACK_IMPORTED_MODULE_3__["MinimaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] }
];
CashPage.propDecorators = {
    claimedSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['claimedSegment', { static: false },] }]
};
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
            _cash_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashPageRoutingModule"],
        ],
        declarations: [_cash_page__WEBPACK_IMPORTED_MODULE_6__["CashPage"]]
    })
], CashPageModule);



/***/ })

}]);
//# sourceMappingURL=cash-cash-module.js.map