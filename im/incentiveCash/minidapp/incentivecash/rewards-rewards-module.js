(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rewards-rewards-module"],{

/***/ "2d5N":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rewards/rewards.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col class=\"title ion-no-padding ion-text-center\">\n            Minima Incentive Cash\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"sub-toolbar\">\n    <ion-grid>\n      <ion-row class=\"has\">\n        <ion-col class=\"no-borders\" routerLink=\"/profile\" routerLinkActive=\"hdr-toolbar-active\">Profile</ion-col>\n        <ion-col>Contact</ion-col>\n        <ion-col>About</ion-col>\n        <ion-col class=\"sign-out\">\n          <span id=\"sign-out-btn\" (click) = 'signOut()'>\n            Sign out\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Incentive Cash</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list class=\"cash-list ion-no-padding\">\n    <ion-grid class=\"pre-header ion-no-padding\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          Other Rewards\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"header ion-no-padding m-b7\">\n      <ion-row>\n        <ion-col class=\"ion-text-left\" style=\"padding-right: 25px\">Amount</ion-col>\n        <ion-col class=\"ion-text-left\">Reason</ion-col>\n        <ion-col class=\"ion-text-right\">Date</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"cash ion-no-padding\" *ngFor=\"let reward of rewardList\">\n      <ion-row class=\"ion-no-margin\">\n        <ion-col class=\"ion-text-left ion-no-padding\" style=\"padding-right: 25px\"><p>{{reward.amount}}</p></ion-col>\n        <ion-col class=\"ion-text-left ion-no-padding\"><p>{{reward.reason}}</p></ion-col>\n        <ion-col class=\"ion-text-right ion-no-padding\">\n          <p>\n            {{ reward.date_created }}\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid> \n\n  </ion-list>\n\n  <ion-toolbar class=\"cash-progress-toolbar ion-no-padding\">\n  <!-- Default Segment -->\n  <ion-segment #claimedSegment value=\"unclaimed\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button \n    id=\"first\"\n    [ngStyle] = \"shownSegments === 'claimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\"\n    value=\"claimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'claimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Claimed Total</ion-label>\n    </ion-segment-button>\n    <ion-segment-button \n    id=\"second\"\n    [ngStyle] = \"shownSegments === 'unclaimed' ? {'border-bottom': 'none'} : {'border-bottom': '2px solid #C1C4CC'}\"\n    value=\"unclaimed\">\n      <ion-label [ngStyle] = \"shownSegments === 'unclaimed' ? {'color': '#001C32'} : {'color': '#C1C4CC'}\">Unclaimed Total</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'claimed'\">\n    <h6>{{totalClaimed}}</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  <ion-label class=\"ion-text-center\" *ngIf=\"shownSegments === 'unclaimed'\">\n    <h6>{{totalUnclaimed}}</h6>\n    <p>Minima Incentive Tokens</p>\n  </ion-label>\n  </ion-toolbar>\n</ion-content>\n\n<ion-footer class=\"activity ion-no-border ion-text-center\">\n  <ion-toolbar>\n    <ion-buttons>\n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-right: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/rewards\">\n          <ion-icon name=\"star\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Rewards\n        </ion-label>\n      </div>\n      \n      <div routerLinkActive=\"ftr-toolbar-active\" class=\"footer-btn-wrapper\" style=\"margin-left: 45px;\">\n        <ion-button class=\"no-borders\" routerLink=\"/cash\">\n          <ion-icon name=\"cash\"></ion-icon>\n        </ion-button>\n        <ion-label>\n          Incentives\n        </ion-label>\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n");

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





let RewardsPage = class RewardsPage {
    constructor(_storeService) {
        this._storeService = _storeService;
        this.rewardList = [];
        this.totalClaimed = 0;
        this.totalUnclaimed = 0;
        this.shownSegments = 'unclaimed';
    }
    ngOnInit() {
        this._storeService.rewards.subscribe((res) => {
            this.rewardList = [];
            this.totalClaimed = 0;
            this.totalUnclaimed = 0;
            res.data.forEach((reward) => {
                if (reward.reason !== 'Claimed') {
                    this.rewardList.push(reward);
                    this.totalUnclaimed += reward.amount;
                }
                else {
                    this.totalClaimed += reward.amount;
                }
            });
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