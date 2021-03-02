(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Q53j":
/*!*************************************!*\
  !*** ./src/app/cash/cash.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title.user-details ion-grid ion-row ion-col {\n  font-size: 14px;\n}\nion-title.user-details ion-grid ion-row ion-col span {\n  font-family: manrope-light;\n}\nion-list.cash-list {\n  background-color: transparent;\n  margin-top: 13px;\n}\nion-list.cash-list ion-grid.pre-header {\n  margin-left: 27px;\n  margin-right: 27px;\n}\nion-list.cash-list ion-grid.pre-header ion-row ion-col {\n  border-bottom: 1px solid #707070;\n  padding-bottom: 12px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: manrope-extrabold;\n}\nion-list.cash-list ion-grid.header {\n  margin-left: 27px;\n  margin-right: 27px;\n  border-bottom: 1px solid #7D8B99;\n}\nion-list.cash-list ion-grid.header ion-row ion-col {\n  padding-bottom: 5px;\n  font-size: 14px;\n  color: #91919d;\n  font-family: manrope-bold;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col p {\n  font-size: 13px;\n  font-variant-numeric: tabular-nums;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col ion-progress-bar {\n  --buffer-background: transparent;\n  --progress-background: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  height: 24px;\n  width: 63.88px;\n  border-radius: 5px;\n  margin-top: 6px;\n  float: right;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span {\n  border-radius: 5px;\n  text-transform: none;\n  background-color: var(--ion-color-primary);\n  color: #f0f0fa;\n  font-family: manrope-bold;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  cursor: pointer;\n}\nion-list.cash-list ion-grid.cash ion-row {\n  padding-left: 27px;\n  padding-right: 27px;\n}\nion-list.cash-list ion-grid.cash ion-row ion-col span:hover {\n  background-color: #346FE5;\n}\nion-list.cash-list ion-grid.cash:nth-child(odd) {\n  background-color: #F0F0FA;\n  background: #F0F0FA;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button ion-label {\n  color: #001C32;\n  font-size: 20px;\n  text-transform: none;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#first {\n  margin-left: 27px;\n  margin-right: 5px;\n}\nion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#second {\n  margin-right: 27px;\n  margin-left: 5px;\n}\nion-toolbar.cash-progress-toolbar ion-label h6 {\n  margin-top: 12px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\nion-toolbar.cash-progress-toolbar ion-label p {\n  font-size: 16px;\n  color: #001C32;\n}\n@media only screen and (min-width: 992px) {\n  ion-list.cash-list ion-grid.pre-header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n  ion-list.cash-list ion-grid.cash ion-row {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n\n  ion-list.cash-list ion-grid.header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n\n  ion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#first {\n    margin-left: 95px;\n  }\n  ion-toolbar.cash-progress-toolbar ion-segment ion-segment-button#second {\n    margin-right: 95px;\n  }\n}\n.active {\n  border: 1px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n.no-borders {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0U7RUFDRSwwQkFBQTtBQUNKO0FBSUE7RUFZRSw2QkFBQTtFQUNBLGdCQUFBO0FBWkY7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR047QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUtJO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBRk47QUFLTTtFQUNFLGdDQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFKTjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUpOO0FBTUk7RUFDRSx5QkFBQTtBQUpOO0FBT0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFZTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFUUjtBQVlJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQVZOO0FBWUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFjSTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBWk47QUFjSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBWk47QUFrQkE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQko7RUFtQkk7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBakJOOztFQXNCRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFuQko7O0VBd0JJO0lBQ0UsaUJBQUE7RUFyQk47RUF1Qkk7SUFDRSxrQkFBQTtFQXJCTjtBQUNGO0FBMkJBO0VBQ0UsMENBQUE7RUFDQSwrQkFBQTtBQXpCRjtBQTJCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBeEJGIiwiZmlsZSI6ImNhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlLnVzZXItZGV0YWlscyB7XG4gIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICBzcGFuIHtcbiAgICBmb250LWZhbWlseTogbWFucm9wZS1saWdodDtcbiAgfVxuICB9XG59XG5cbmlvbi1saXN0LmNhc2gtbGlzdCB7XG4gIGlvbi1ncmlkLnByZS1oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgIG1hcmdpbi1yaWdodDogMjdweDtcbiAgICBpb24tcm93IGlvbi1jb2wge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogbWFucm9wZS1leHRyYWJvbGQ7XG4gICAgfVxuICB9XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBpb24tZ3JpZC5oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgIG1hcmdpbi1yaWdodDogMjdweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdEOEI5OTtcbiAgICBpb24tcm93IGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjOTE5MTlkO1xuICAgICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgICB9XG4gIH1cbn1cbmlvbi1saXN0LmNhc2gtbGlzdCB7XG4gIGlvbi1ncmlkLmNhc2gge1xuICAgIGlvbi1yb3cgaW9uLWNvbCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gICAgfVxuICAgIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgICBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgLS1idWZmZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDYzLjg4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1yb3cgaW9uLWNvbCBzcGFuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgY29sb3I6ICNmMGYwZmE7XG4gICAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyN3B4O1xuICAgIH1cbiAgICBpb24tcm93IGlvbi1jb2wgc3Bhbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2RkU1O1xuICAgIH1cbiAgfVxuICBpb24tZ3JpZC5jYXNoOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEZBO1xuICAgIGJhY2tncm91bmQ6ICNGMEYwRkE7XG5cbiAgfVxufVxuaW9uLXRvb2xiYXIuY2FzaC1wcm9ncmVzcy10b29sYmFyIHtcbiAgaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogIzAwMUMzMjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uI2ZpcnN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiNzZWNvbmQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBoNiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogIzAwMUMzMjtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGlvbi1saXN0LmNhc2gtbGlzdCB7XG4gICAgaW9uLWdyaWQucHJlLWhlYWRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICBpb24tZ3JpZC5jYXNoIHtcbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWxpc3QuY2FzaC1saXN0IHtcbiAgICBpb24tZ3JpZC5oZWFkZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMTBweDtcbiAgICB9XG4gIH1cbiAgaW9uLXRvb2xiYXIuY2FzaC1wcm9ncmVzcy10b29sYmFyIHtcbiAgICBpb24tc2VnbWVudCB7XG4gICAgICBpb24tc2VnbWVudC1idXR0b24jZmlyc3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogOTVweDtcbiAgICAgIH1cbiAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiNzZWNvbmQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDk1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5uby1ib3JkZXJzIHtcbiAgYmFja2dyb3VuZDpub25lOyBcbiAgb3V0bGluZTogbm9uZTsgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgXG4gIGJvcmRlcjogbm9uZTsgXG59Il19 */");

/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map