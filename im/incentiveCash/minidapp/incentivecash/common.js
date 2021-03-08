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
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-grid.table {\n  margin-top: 15px;\n}\n\nion-grid.table ion-row.table-content {\n  padding-left: 27px;\n  padding-right: 27px;\n}\n\nion-grid.table ion-row.table-content ion-col p {\n  font-size: 13px;\n  font-variant-numeric: tabular-nums;\n}\n\nion-grid.table ion-row.table-content ion-col ion-progress-bar {\n  --buffer-background: #FAFAFF;\n  --background: FAFAFF;\n  --progress-background: var(--ion-color-primary);\n  border: 1px solid var(--ion-color-primary);\n  height: 24px;\n  width: 63.88px;\n  border-radius: 5px;\n  margin-top: 6px;\n  float: right;\n}\n\nion-grid.table ion-row.table-content ion-col span {\n  border-radius: 5px;\n  text-transform: none;\n  background-color: var(--ion-color-primary);\n  color: #f0f0fa;\n  font-family: manrope-bold;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 9px;\n  padding-right: 9px;\n  cursor: pointer;\n}\n\nion-grid.table ion-row.table-content ion-col span:hover {\n  background-color: #346FE5;\n}\n\nion-grid.table ion-row.table-content:nth-child(even) {\n  background-color: #F0F0FA;\n  background: #F0F0FA;\n}\n\nion-grid.table ion-row.table-content:last-child {\n  margin-bottom: 15px;\n}\n\n@media only screen and (min-width: 992px) {\n  ion-grid.table ion-row.header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n  ion-grid.table ion-row.table-header {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n  ion-grid.table ion-row.table-content {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n  ion-grid.table ion-row.table-footer {\n    margin-left: 110px;\n    margin-right: 110px;\n  }\n\n  ion-header ion-toolbar.page-header {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n  ion-header ion-toolbar.table-header {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n\n  ion-footer ion-toolbar.table-footer {\n    padding-left: 110px;\n    padding-right: 110px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Nhc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQU07RUFDRSxlQUFBO0VBQ0Esa0NBQUE7QUFFUjs7QUFBTTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQU07RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFUjs7QUFBTTtFQUNFLHlCQUFBO0FBRVI7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtBQUFKOztBQUlBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBRko7RUFJRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFGSjtFQUlFO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQUZKO0VBSUU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBRko7O0VBTUU7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBSEo7RUFLRTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUFISjs7RUFPRTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUFKSjtBQUNGIiwiZmlsZSI6ImNhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcixcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWdyaWQudGFibGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBpb24tcm93LnRhYmxlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMjdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyN3B4O1xuICAgIGlvbi1jb2wge1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgICAgIH1cbiAgICAgIGlvbi1wcm9ncmVzcy1iYXIge1xuICAgICAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiAjRkFGQUZGO1xuICAgICAgICAtLWJhY2tncm91bmQ6IEZBRkFGRjtcbiAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogNjMuODhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiAjZjBmMGZhO1xuICAgICAgICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBzcGFuOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NkZFNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLXJvdy50YWJsZS1jb250ZW50Om50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGQTtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEZBO1xuICB9XG4gIGlvbi1yb3cudGFibGUtY29udGVudDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgaW9uLWdyaWQudGFibGUge1xuICAgIGlvbi1yb3cuaGVhZGVyIHsgICAgXG4gICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICBpb24tcm93LnRhYmxlLWhlYWRlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICBpb24tcm93LnRhYmxlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgICBpb24tcm93LnRhYmxlLWZvb3RlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDExMHB4O1xuICAgIH1cbiAgfVxuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhci5wYWdlLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgfVxuICAgIGlvbi10b29sYmFyLnRhYmxlLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi10b29sYmFyLnRhYmxlLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTEwcHg7XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */");

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