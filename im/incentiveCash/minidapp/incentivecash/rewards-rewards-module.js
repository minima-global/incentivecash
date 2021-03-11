(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rewards-rewards-module"],{

/***/ "2d5N":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rewards/rewards.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Program\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders ion-text-left\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/faqs\" routerLinkActive=\"hdr-toolbar-active\">FAQs</ion-col>\n        <ion-col class=\"no-borders\" routerLink=\"/contact\" routerLinkActive=\"hdr-toolbar-active\">Contact</ion-col>\n        <ion-col class=\"no-borders\" class=\"sign-out\">\n            <span id=\"sign-out-btn\" (click) = 'signOut()'>\n              Sign out\n            </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar class=\"page-header ion-no-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"header ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          Rewards\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar class=\"table-header ion-no-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"table-header ion-no-padding\">\n        <ion-col class=\"ion-text-left\">Amount</ion-col>\n        <ion-col class=\"ion-text-left\">Reason</ion-col>\n        <ion-col class=\"ion-text-right\">Date</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid class=\"table ion-no-padding\">\n    <ion-row *ngIf=\"rewardList && rewardList.length === 0\" class=\"ion-no-padding\">\n      <ion-col class=\"empty-list ion-no-padding ion-text-center\">\n        Your rewards will be displayed here.\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"rewardList && rewardList.length > 0\">\n      <ion-row class=\"table-content ion-no-margin\" *ngFor=\"let reward of rewardList\">\n        <ion-col class=\"ion-text-left ion-no-padding\"><p>{{reward.amount}}</p></ion-col>\n          <ion-col class=\"ion-text-left ion-no-padding\"><p>{{reward.reason}}</p></ion-col>\n          <ion-col class=\"ion-text-right ion-no-padding\">\n            <p>\n              {{ reward.date_created }}\n            </p>\n          </ion-col>\n      </ion-row>  \n    </div>\n    \n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-no-padding ion-text-center\">\n  <ion-toolbar class=\"table-footer ion-no-padding\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          Total Amount: <span>{{ totalClaimed }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-toolbar class=\"activity ion-no-padding\">\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "GvLF":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.module.ts ***!
  \*******************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rewards-routing.module */ "L46/");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "qxt9");







let RewardsPageModule = class RewardsPageModule {
};
RewardsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rewards_routing_module__WEBPACK_IMPORTED_MODULE_5__["RewardsPageRoutingModule"]
        ],
        declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
    })
], RewardsPageModule);



/***/ }),

/***/ "L46/":
/*!***************************************************!*\
  !*** ./src/app/rewards/rewards-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RewardsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageRoutingModule", function() { return RewardsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rewards.page */ "qxt9");




const routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_3__["RewardsPage"]
    }
];
let RewardsPageRoutingModule = class RewardsPageRoutingModule {
};
RewardsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RewardsPageRoutingModule);



/***/ }),

/***/ "qxt9":
/*!*****************************************!*\
  !*** ./src/app/rewards/rewards.page.ts ***!
  \*****************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rewards_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rewards.page.html */ "2d5N");
/* harmony import */ var _cash_cash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cash/cash.page.scss */ "Q53j");
/* harmony import */ var _api_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../api/store.service */ "IcAf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let RewardsPage = class RewardsPage {
    constructor(_storeService) {
        this._storeService = _storeService;
        this.rewardList = [];
        this.totalClaimed = 0;
        this.shownSegments = 'unclaimed';
    }
    ngOnInit() {
        this._storeService.checkRefreshToken();
        this._storeService.rewards.subscribe((res) => {
            this.rewardList = [];
            this.totalClaimed = 0;
            // console.log(res);
            if (res) {
                res.forEach((reward) => {
                    let date = new Date(reward.date_created);
                    let ms = date.getTime();
                    let format = moment__WEBPACK_IMPORTED_MODULE_5__(ms).format('DD-MM-YYYY HH:mm:ss');
                    reward.date_created = format;
                    this.rewardList.push(reward);
                    this.totalClaimed += reward.amount;
                });
            }
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
    segmentChanged(ev) {
        this.shownSegments = ev.detail.value;
    }
};
RewardsPage.ctorParameters = () => [
    { type: _api_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
RewardsPage.propDecorators = {
    claimedSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['claimedSegment', { static: false },] }]
};
RewardsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-rewards',
        template: _raw_loader_rewards_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cash_cash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RewardsPage);



/***/ })

}]);
//# sourceMappingURL=rewards-rewards-module.js.map