(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comps_rabbit_rabbit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comps/rabbit/rabbit.component */ "./src/app/comps/rabbit/rabbit.component.ts");
/* harmony import */ var _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/tiger/tiger.component */ "./src/app/comps/tiger/tiger.component.ts");
/* harmony import */ var _comps_jirraf_jirraf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/jirraf/jirraf.component */ "./src/app/comps/jirraf/jirraf.component.ts");





class AppComponent {
    constructor() {
        this.title = 'animals';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-rabbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-jirraf");
    } }, directives: [_comps_rabbit_rabbit_component__WEBPACK_IMPORTED_MODULE_1__["RabbitComponent"], _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_2__["TigerComponent"], _comps_jirraf_jirraf_component__WEBPACK_IMPORTED_MODULE_3__["JirrafComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_rabbit_rabbit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/rabbit/rabbit.component */ "./src/app/comps/rabbit/rabbit.component.ts");
/* harmony import */ var _comps_rabbit_h1rabbit_h1rabbit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/rabbit/h1rabbit/h1rabbit.component */ "./src/app/comps/rabbit/h1rabbit/h1rabbit.component.ts");
/* harmony import */ var _comps_rabbit_ulrabbit_ulrabbit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/rabbit/ulrabbit/ulrabbit.component */ "./src/app/comps/rabbit/ulrabbit/ulrabbit.component.ts");
/* harmony import */ var _comps_rabbit_footerrabbit_footerrabbit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/rabbit/footerrabbit/footerrabbit.component */ "./src/app/comps/rabbit/footerrabbit/footerrabbit.component.ts");
/* harmony import */ var _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/tiger/tiger.component */ "./src/app/comps/tiger/tiger.component.ts");
/* harmony import */ var _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/tiger/h1tiger/h1tiger.component */ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts");
/* harmony import */ var _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/tiger/ultiger/ultiger.component */ "./src/app/comps/tiger/ultiger/ultiger.component.ts");
/* harmony import */ var _comps_tiger_footertiger_footertiger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/tiger/footertiger/footertiger.component */ "./src/app/comps/tiger/footertiger/footertiger.component.ts");
/* harmony import */ var _comps_jirraf_jirraf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/jirraf/jirraf.component */ "./src/app/comps/jirraf/jirraf.component.ts");
/* harmony import */ var _comps_jirraf_h1jirraf_h1jirraf_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/jirraf/h1jirraf/h1jirraf.component */ "./src/app/comps/jirraf/h1jirraf/h1jirraf.component.ts");
/* harmony import */ var _comps_jirraf_uljirraf_uljirraf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/jirraf/uljirraf/uljirraf.component */ "./src/app/comps/jirraf/uljirraf/uljirraf.component.ts");
/* harmony import */ var _comps_jirraf_footerjirraf_footerjirraf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/jirraf/footerjirraf/footerjirraf.component */ "./src/app/comps/jirraf/footerjirraf/footerjirraf.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _comps_rabbit_rabbit_component__WEBPACK_IMPORTED_MODULE_3__["RabbitComponent"],
        _comps_rabbit_h1rabbit_h1rabbit_component__WEBPACK_IMPORTED_MODULE_4__["H1rabbitComponent"],
        _comps_rabbit_ulrabbit_ulrabbit_component__WEBPACK_IMPORTED_MODULE_5__["UlrabbitComponent"],
        _comps_rabbit_footerrabbit_footerrabbit_component__WEBPACK_IMPORTED_MODULE_6__["FooterrabbitComponent"],
        _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_7__["TigerComponent"],
        _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_8__["H1tigerComponent"],
        _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_9__["UltigerComponent"],
        _comps_tiger_footertiger_footertiger_component__WEBPACK_IMPORTED_MODULE_10__["FootertigerComponent"],
        _comps_jirraf_jirraf_component__WEBPACK_IMPORTED_MODULE_11__["JirrafComponent"],
        _comps_jirraf_h1jirraf_h1jirraf_component__WEBPACK_IMPORTED_MODULE_12__["H1jirrafComponent"],
        _comps_jirraf_uljirraf_uljirraf_component__WEBPACK_IMPORTED_MODULE_13__["UljirrafComponent"],
        _comps_jirraf_footerjirraf_footerjirraf_component__WEBPACK_IMPORTED_MODULE_14__["FooterjirrafComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _comps_rabbit_rabbit_component__WEBPACK_IMPORTED_MODULE_3__["RabbitComponent"],
                    _comps_rabbit_h1rabbit_h1rabbit_component__WEBPACK_IMPORTED_MODULE_4__["H1rabbitComponent"],
                    _comps_rabbit_ulrabbit_ulrabbit_component__WEBPACK_IMPORTED_MODULE_5__["UlrabbitComponent"],
                    _comps_rabbit_footerrabbit_footerrabbit_component__WEBPACK_IMPORTED_MODULE_6__["FooterrabbitComponent"],
                    _comps_tiger_tiger_component__WEBPACK_IMPORTED_MODULE_7__["TigerComponent"],
                    _comps_tiger_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_8__["H1tigerComponent"],
                    _comps_tiger_ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_9__["UltigerComponent"],
                    _comps_tiger_footertiger_footertiger_component__WEBPACK_IMPORTED_MODULE_10__["FootertigerComponent"],
                    _comps_jirraf_jirraf_component__WEBPACK_IMPORTED_MODULE_11__["JirrafComponent"],
                    _comps_jirraf_h1jirraf_h1jirraf_component__WEBPACK_IMPORTED_MODULE_12__["H1jirrafComponent"],
                    _comps_jirraf_uljirraf_uljirraf_component__WEBPACK_IMPORTED_MODULE_13__["UljirrafComponent"],
                    _comps_jirraf_footerjirraf_footerjirraf_component__WEBPACK_IMPORTED_MODULE_14__["FooterjirrafComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps/jirraf/footerjirraf/footerjirraf.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/jirraf/footerjirraf/footerjirraf.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterjirrafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterjirrafComponent", function() { return FooterjirrafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterjirrafComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterjirrafComponent.ɵfac = function FooterjirrafComponent_Factory(t) { return new (t || FooterjirrafComponent)(); };
FooterjirrafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterjirrafComponent, selectors: [["app-footerjirraf"]], decls: 2, vars: 0, template: function FooterjirrafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcnJhZi9mb290ZXJqaXJyYWYvZm9vdGVyamlycmFmLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterjirrafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footerjirraf',
                templateUrl: './footerjirraf.component.html',
                styleUrls: ['./footerjirraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jirraf/h1jirraf/h1jirraf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/jirraf/h1jirraf/h1jirraf.component.ts ***!
  \*************************************************************/
/*! exports provided: H1jirrafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1jirrafComponent", function() { return H1jirrafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1jirrafComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1jirrafComponent.ɵfac = function H1jirrafComponent_Factory(t) { return new (t || H1jirrafComponent)(); };
H1jirrafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1jirrafComponent, selectors: [["app-h1jirraf"]], decls: 2, vars: 0, template: function H1jirrafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Jirraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcnJhZi9oMWppcnJhZi9oMWppcnJhZi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1jirrafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1jirraf',
                templateUrl: './h1jirraf.component.html',
                styleUrls: ['./h1jirraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jirraf/jirraf.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/jirraf/jirraf.component.ts ***!
  \**************************************************/
/*! exports provided: JirrafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JirrafComponent", function() { return JirrafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1jirraf_h1jirraf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1jirraf/h1jirraf.component */ "./src/app/comps/jirraf/h1jirraf/h1jirraf.component.ts");
/* harmony import */ var _uljirraf_uljirraf_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uljirraf/uljirraf.component */ "./src/app/comps/jirraf/uljirraf/uljirraf.component.ts");
/* harmony import */ var _footerjirraf_footerjirraf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footerjirraf/footerjirraf.component */ "./src/app/comps/jirraf/footerjirraf/footerjirraf.component.ts");





class JirrafComponent {
    constructor() { }
    ngOnInit() {
    }
}
JirrafComponent.ɵfac = function JirrafComponent_Factory(t) { return new (t || JirrafComponent)(); };
JirrafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JirrafComponent, selectors: [["app-jirraf"]], decls: 3, vars: 0, template: function JirrafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1jirraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-uljirraf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footerjirraf");
    } }, directives: [_h1jirraf_h1jirraf_component__WEBPACK_IMPORTED_MODULE_1__["H1jirrafComponent"], _uljirraf_uljirraf_component__WEBPACK_IMPORTED_MODULE_2__["UljirrafComponent"], _footerjirraf_footerjirraf_component__WEBPACK_IMPORTED_MODULE_3__["FooterjirrafComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcnJhZi9qaXJyYWYuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JirrafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jirraf',
                templateUrl: './jirraf.component.html',
                styleUrls: ['./jirraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/jirraf/uljirraf/uljirraf.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/jirraf/uljirraf/uljirraf.component.ts ***!
  \*************************************************************/
/*! exports provided: UljirrafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UljirrafComponent", function() { return UljirrafComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UljirrafComponent {
    constructor() { }
    ngOnInit() {
    }
}
UljirrafComponent.ɵfac = function UljirrafComponent_Factory(t) { return new (t || UljirrafComponent)(); };
UljirrafComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UljirrafComponent, selectors: [["app-uljirraf"]], decls: 7, vars: 0, template: function UljirrafComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "jirraf1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "jirraf2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "jirraf3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcnJhZi91bGppcnJhZi91bGppcnJhZi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UljirrafComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uljirraf',
                templateUrl: './uljirraf.component.html',
                styleUrls: ['./uljirraf.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabbit/footerrabbit/footerrabbit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/rabbit/footerrabbit/footerrabbit.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterrabbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterrabbitComponent", function() { return FooterrabbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterrabbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterrabbitComponent.ɵfac = function FooterrabbitComponent_Factory(t) { return new (t || FooterrabbitComponent)(); };
FooterrabbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterrabbitComponent, selectors: [["app-footerrabbit"]], decls: 2, vars: 0, template: function FooterrabbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYmJpdC9mb290ZXJyYWJiaXQvZm9vdGVycmFiYml0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterrabbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footerrabbit',
                templateUrl: './footerrabbit.component.html',
                styleUrls: ['./footerrabbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabbit/h1rabbit/h1rabbit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/rabbit/h1rabbit/h1rabbit.component.ts ***!
  \*************************************************************/
/*! exports provided: H1rabbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1rabbitComponent", function() { return H1rabbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1rabbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1rabbitComponent.ɵfac = function H1rabbitComponent_Factory(t) { return new (t || H1rabbitComponent)(); };
H1rabbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1rabbitComponent, selectors: [["app-h1rabbit"]], decls: 2, vars: 0, template: function H1rabbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rabbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYmJpdC9oMXJhYmJpdC9oMXJhYmJpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1rabbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1rabbit',
                templateUrl: './h1rabbit.component.html',
                styleUrls: ['./h1rabbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabbit/rabbit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/rabbit/rabbit.component.ts ***!
  \**************************************************/
/*! exports provided: RabbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitComponent", function() { return RabbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1rabbit_h1rabbit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1rabbit/h1rabbit.component */ "./src/app/comps/rabbit/h1rabbit/h1rabbit.component.ts");
/* harmony import */ var _ulrabbit_ulrabbit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ulrabbit/ulrabbit.component */ "./src/app/comps/rabbit/ulrabbit/ulrabbit.component.ts");
/* harmony import */ var _footerrabbit_footerrabbit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footerrabbit/footerrabbit.component */ "./src/app/comps/rabbit/footerrabbit/footerrabbit.component.ts");





class RabbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
RabbitComponent.ɵfac = function RabbitComponent_Factory(t) { return new (t || RabbitComponent)(); };
RabbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RabbitComponent, selectors: [["app-rabbit"]], decls: 3, vars: 0, template: function RabbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1rabbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ulrabbit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footerrabbit");
    } }, directives: [_h1rabbit_h1rabbit_component__WEBPACK_IMPORTED_MODULE_1__["H1rabbitComponent"], _ulrabbit_ulrabbit_component__WEBPACK_IMPORTED_MODULE_2__["UlrabbitComponent"], _footerrabbit_footerrabbit_component__WEBPACK_IMPORTED_MODULE_3__["FooterrabbitComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYmJpdC9yYWJiaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RabbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rabbit',
                templateUrl: './rabbit.component.html',
                styleUrls: ['./rabbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/rabbit/ulrabbit/ulrabbit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comps/rabbit/ulrabbit/ulrabbit.component.ts ***!
  \*************************************************************/
/*! exports provided: UlrabbitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlrabbitComponent", function() { return UlrabbitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UlrabbitComponent {
    constructor() { }
    ngOnInit() {
    }
}
UlrabbitComponent.ɵfac = function UlrabbitComponent_Factory(t) { return new (t || UlrabbitComponent)(); };
UlrabbitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UlrabbitComponent, selectors: [["app-ulrabbit"]], decls: 7, vars: 0, template: function UlrabbitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "rabbit1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "rabbit2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "rabbit3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3JhYmJpdC91bHJhYmJpdC91bHJhYmJpdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UlrabbitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ulrabbit',
                templateUrl: './ulrabbit.component.html',
                styleUrls: ['./ulrabbit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/footertiger/footertiger.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/comps/tiger/footertiger/footertiger.component.ts ***!
  \******************************************************************/
/*! exports provided: FootertigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootertigerComponent", function() { return FootertigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FootertigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
FootertigerComponent.ɵfac = function FootertigerComponent_Factory(t) { return new (t || FootertigerComponent)(); };
FootertigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FootertigerComponent, selectors: [["app-footertiger"]], decls: 2, vars: 0, template: function FootertigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL2Zvb3RlcnRpZ2VyL2Zvb3RlcnRpZ2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FootertigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footertiger',
                templateUrl: './footertiger.component.html',
                styleUrls: ['./footertiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/tiger/h1tiger/h1tiger.component.ts ***!
  \**********************************************************/
/*! exports provided: H1tigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1tigerComponent", function() { return H1tigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class H1tigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
H1tigerComponent.ɵfac = function H1tigerComponent_Factory(t) { return new (t || H1tigerComponent)(); };
H1tigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: H1tigerComponent, selectors: [["app-h1tiger"]], decls: 2, vars: 0, template: function H1tigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL2gxdGlnZXIvaDF0aWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](H1tigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h1tiger',
                templateUrl: './h1tiger.component.html',
                styleUrls: ['./h1tiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/tiger.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/tiger/tiger.component.ts ***!
  \************************************************/
/*! exports provided: TigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TigerComponent", function() { return TigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h1tiger/h1tiger.component */ "./src/app/comps/tiger/h1tiger/h1tiger.component.ts");
/* harmony import */ var _ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultiger/ultiger.component */ "./src/app/comps/tiger/ultiger/ultiger.component.ts");
/* harmony import */ var _footertiger_footertiger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footertiger/footertiger.component */ "./src/app/comps/tiger/footertiger/footertiger.component.ts");





class TigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
TigerComponent.ɵfac = function TigerComponent_Factory(t) { return new (t || TigerComponent)(); };
TigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TigerComponent, selectors: [["app-tiger"]], decls: 3, vars: 0, template: function TigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-h1tiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ultiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footertiger");
    } }, directives: [_h1tiger_h1tiger_component__WEBPACK_IMPORTED_MODULE_1__["H1tigerComponent"], _ultiger_ultiger_component__WEBPACK_IMPORTED_MODULE_2__["UltigerComponent"], _footertiger_footertiger_component__WEBPACK_IMPORTED_MODULE_3__["FootertigerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL3RpZ2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tiger',
                templateUrl: './tiger.component.html',
                styleUrls: ['./tiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/comps/tiger/ultiger/ultiger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/tiger/ultiger/ultiger.component.ts ***!
  \**********************************************************/
/*! exports provided: UltigerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UltigerComponent", function() { return UltigerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UltigerComponent {
    constructor() { }
    ngOnInit() {
    }
}
UltigerComponent.ɵfac = function UltigerComponent_Factory(t) { return new (t || UltigerComponent)(); };
UltigerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UltigerComponent, selectors: [["app-ultiger"]], decls: 7, vars: 0, template: function UltigerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tiger1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "tiger2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "tiger3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3RpZ2VyL3VsdGlnZXIvdWx0aWdlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UltigerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ultiger',
                templateUrl: './ultiger.component.html',
                styleUrls: ['./ultiger.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AkivaE\Desktop\homework1\animals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map