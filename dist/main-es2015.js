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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__["HeroesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top',
                useHash: true
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top',
                        useHash: true
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/attribution/attribution.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class AppComponent {
    constructor() {
        this.title = 'Heroes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 3, consts: [[1, "container"], ["type", "button", "routerLink", "/dashboard", "routerLinkActive", "active", 1, "button-item"], ["type", "button", "routerLink", "/heroes", "routerLinkActive", "active", 1, "button-item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-attribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.title));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_3__["AttributionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  margin: auto;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: auto;\r\n}\r\nheader[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #222831;\r\n  text-align: left;\r\n}\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  padding: 25px;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  letter-spacing: 10px;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 30px 0;\r\n  text-align: center;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:link, nav[_ngcontent-%COMP%]   .button-item[_ngcontent-%COMP%]:visited, nav[_ngcontent-%COMP%]   .button-item[_ngcontent-%COMP%]:link {\r\n  color: #334953;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .button-item[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n.button-item.active[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  position: relative;\r\n  color: #006d75;\r\n  background-color: #f8f8f8;\r\n  border-color: #006d75;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBOzs7Ozs7R0FNRztBQUVIOzs7O0VBSUUsY0FBYztBQUNoQjtBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBRUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaGVhZGVyIGgxIHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIG5hdiBhLFxyXG5uYXYgLmJ1dHRvbi1pdGVtIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59ICovXHJcblxyXG5uYXYgYTp2aXNpdGVkLFxyXG5hOmxpbmssXHJcbm5hdiAuYnV0dG9uLWl0ZW06dmlzaXRlZCxcclxubmF2IC5idXR0b24taXRlbTpsaW5rIHtcclxuICBjb2xvcjogIzMzNDk1MztcclxufVxyXG5cclxubmF2IGE6aG92ZXIsXHJcbm5hdiAuYnV0dG9uLWl0ZW06aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMDA4NDhlO1xyXG4gIGJvcmRlci1jb2xvcjogIzAwODQ4ZTtcclxufVxyXG5cclxuLmJ1dHRvbi1pdGVtLmFjdGl2ZXtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogIzAwNmQ3NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNmQ3NTtcclxufVxyXG5cclxuLypcclxuLmJ1dHRvbi1pdGVtOm5vdCguYnV0dG9uLWl0ZW0tZGlzYWJsZWQpIHtcclxuICBjb2xvcjogIzAwYTFiMjtcclxufSAqL1xyXG4iXX0= */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dynatrace/barista-components/form-field */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-form-field.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");
/* harmony import */ var _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @dynatrace/barista-components/button-group */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button-group.js");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./attribution/attribution.component */ "./src/app/attribution/attribution.component.ts");
/* harmony import */ var _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @dynatrace/barista-components/pagination */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
/* harmony import */ var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @dynatrace/barista-components/toast */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");
/* harmony import */ var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @dynatrace/barista-components/table */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dynamic-table/dynamic-table.component */ "./src/app/dynamic-table/dynamic-table.component.ts");
/* harmony import */ var _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scrolling/scrolling.component */ "./src/app/scrolling/scrolling.component.ts");


 // <-- NgModel lives here



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({ svgIconLocation: 'assets/icons/{{name}}.svg' }),
            _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
            _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
            _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
            _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
            _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
            _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
            _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
            _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"],
            _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
        _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"],
        _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"],
        _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"],
        _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"],
        _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"],
        _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_27__["ScrollingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
        _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
        _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
        _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
        _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
        _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
        _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
        _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"],
        _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                    _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_7__["HeroDetailComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_10__["HeroSearchComponent"],
                    _attribution_attribution_component__WEBPACK_IMPORTED_MODULE_20__["AttributionComponent"],
                    _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"],
                    _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_22__["FallbackimgDirective"],
                    _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_26__["DynamicTableComponent"],
                    _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_27__["ScrollingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_11__["DtIconModule"].forRoot({ svgIconLocation: 'assets/icons/{{name}}.svg' }),
                    _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_13__["DtButtonModule"],
                    _dynatrace_barista_components_form_field__WEBPACK_IMPORTED_MODULE_14__["DtFormFieldModule"],
                    _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_15__["DtInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _dynatrace_barista_components_button_group__WEBPACK_IMPORTED_MODULE_17__["DtButtonGroupModule"],
                    _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_18__["DtCardModule"],
                    _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_19__["DtInlineEditorModule"],
                    _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_16__["DtLoadingDistractorModule"],
                    _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_23__["DtPaginationModule"],
                    _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_24__["DtToastModule"],
                    _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_25__["DtTableModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/attribution/attribution.component.ts":
/*!******************************************************!*\
  !*** ./src/app/attribution/attribution.component.ts ***!
  \******************************************************/
/*! exports provided: AttributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionComponent", function() { return AttributionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AttributionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(); };
AttributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributionComponent, selectors: [["app-attribution"]], decls: 5, vars: 0, consts: [["href", "https://marvel.com"]], template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data provided by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ". \u00A9 2020 Marvel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n  color: gray;\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #00848e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRpb24vYXR0cmlidXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdHRyaWJ1dGlvbi9hdHRyaWJ1dGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDA4NDhlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attribution',
                templateUrl: './attribution.component.html',
                styleUrls: ['./attribution.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");








function DashboardComponent_div_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r5.name);
} }
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_2_a_3_Template, 7, 2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-hero-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.heroes);
} }
function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(heroService, messageService) {
        this.heroService = heroService;
        this.messageService = messageService;
        this.heroes = [];
    }
    ngOnInit() {
        const heroesLocal = this.heroService.tryGetHeroes();
        if (heroesLocal) {
            this.heroes = this.getRandomHeroes(heroesLocal);
            // this.messageService.add(`Fetched ${this.heroes.reduce((prev, hero) => `${prev.length ? prev + ', ' : ''} ${hero.name}`, '')} from local storage.`);
            return;
        }
        this.heroService.getHeroes().subscribe(heroes => this.heroes = this.getRandomHeroes(heroes));
    }
    getRandomHeroes(heroes) {
        return heroes.sort(() => 0.5 - Math.random()).slice(0, 8);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "grid", "grid-pad"], [1, "row"], ["class", "col-1-4 mtb mtb-col details-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-1-4", "mtb", "mtb-col", "details-link", 3, "routerLink"], [1, "borders"], [1, "corner-top"], [1, "corner-bottom"], [1, "module", "hero"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heroes.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heroes.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_4__["HeroSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], styles: ["a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  width: 175px;\r\n  padding: 10px;\r\n  flex: 1 0 auto;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\r\n  box-sizing: border-box;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-height: 44px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.grid[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.module[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  min-height: 120px;\r\n  min-width: 120px;\r\n  \r\n  border-radius: 2px;\r\n}\r\n.module.hero[_ngcontent-%COMP%]:hover {\r\n  \r\n  background-color: #022629;\r\n  cursor: pointer;\r\n  \r\n}\r\n.module.hero[_ngcontent-%COMP%] {\r\n  color: white;\r\n  border-radius: 3px;\r\n  box-shadow: 2px 3px 2px 0 rgba(9, 130, 154, 0.2);\r\n  background: linear-gradient(rgba(0, 132, 142), rgba(0, 132, 142, 0.69));\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  justify-content: center;\r\n  \r\n}\r\n.grid-pad[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n}\r\n@media (max-width: 600px) {\r\n  .module[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    max-height: 75px;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    padding: 7px;\r\n  }\r\n}\r\n@media (min-width: 601px) and (max-width: 1024px) {\r\n  .module.hero[_ngcontent-%COMP%] {\r\n    min-height: 120px;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .module[_ngcontent-%COMP%] {\r\n    min-width: 60px;\r\n  }\r\n}\r\n.borders[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background: #002554;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%] {\r\n  transition: 0.3s cubic-bezier(0.695, -0.030, 0.630, 1.065) opacity, 0.3s cubic-bezier(0.695, -0.030, 0.630, 1.065) transform;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: block;\r\n  top: 10px;\r\n  bottom: 10px;\r\n  left: 10px;\r\n  right: 10px;\r\n  opacity: 0;\r\n  transform: scale(0.5);\r\n}\r\na.borders[_ngcontent-%COMP%]:hover   .corner-top[_ngcontent-%COMP%], a.borders[_ngcontent-%COMP%]:hover   .corner-bottom[_ngcontent-%COMP%], a.details-link[_ngcontent-%COMP%]:hover   .corner-top[_ngcontent-%COMP%], a.details-link[_ngcontent-%COMP%]:hover   .corner-bottom[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: scale(.95);\r\n  will-change: transform, opacity;\r\n}\r\na.borders[_ngcontent-%COMP%]:hover:after, a.details-link[_ngcontent-%COMP%]:hover   .borders[_ngcontent-%COMP%]:after {\r\n  opacity: 0;\r\n}\r\n.corner-top[_ngcontent-%COMP%], .corner-bottom[_ngcontent-%COMP%], .corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  z-index: 10;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-color: #e9e8de;\r\n  border-style: solid;\r\n  border-width: 0;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-top[_ngcontent-%COMP%]:after {\r\n  top: 0;\r\n  border-top-width: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  bottom: 0;\r\n  border-bottom-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before, .corner-bottom[_ngcontent-%COMP%]:before {\r\n  left: 0;\r\n  border-left-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:after, .corner-bottom[_ngcontent-%COMP%]:after {\r\n  right: 0;\r\n  border-right-width: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:before {\r\n  border-top-left-radius: 0;\r\n  border-top-left-radius: 2px;\r\n}\r\n.corner-top[_ngcontent-%COMP%]:after {\r\n  border-top-right-radius: 0;\r\n  border-top-right-radius: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:before {\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-left-radius: 2px;\r\n}\r\n.corner-bottom[_ngcontent-%COMP%]:after {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-right-radius: 2px;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1Qzs7R0FFRztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUVBOzs7RUFLRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTs7R0FFRztBQUVIO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsdUVBQXVFO0VBQ3ZFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBRWxCLGFBQWE7RUFHYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFHQTs7RUFHRSw0SEFBNEg7QUFDOUg7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBRVYscUJBQXFCO0FBQ3ZCO0FBR0E7Ozs7RUFJRSxVQUFVO0VBRVYscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQztBQUVBOztFQUVFLFVBQVU7QUFDWjtBQUVBOzs7Ozs7RUFNRSxXQUFXO0FBQ2I7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsTUFBTTtFQUNOLHFCQUFxQjtBQUN2QjtBQUVBOztFQUVFLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7QUFFQTs7RUFFRSxPQUFPO0VBQ1Asc0JBQXNCO0FBQ3hCO0FBR0E7O0VBRUUsUUFBUTtFQUNSLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4vKiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59ICovXHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbiosXHJcbio6YWZ0ZXIsXHJcbio6YmVmb3JlIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogNDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiAuY29sLTEtNCB7XHJcbiAgd2lkdGg6IDI1JTtcclxufSAqL1xyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1vZHVsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLm1vZHVsZS5oZXJvOmhvdmVyIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlN2U3OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjI2Mjk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qIGNvbG9yOiAjMDA4NDhlOyAqL1xyXG59XHJcblxyXG4ubW9kdWxlLmhlcm8ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCAycHggMCByZ2JhKDksIDEzMCwgMTU0LCAwLjIpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDEzMiwgMTQyKSwgcmdiYSgwLCAxMzIsIDE0MiwgMC42OSkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvKiBWZXJ0aWNhbCBjZW50ZXIgYWxpZ25tZW50ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLyogSG9yaXpvbnRhbCBjZW50ZXIgYWxpZ25tZW50ICovXHJcbn1cclxuXHJcbi5ncmlkLXBhZCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubW9kdWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5tb2R1bGUuaGVybyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubW9kdWxlIHtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXJzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjMDAyNTU0O1xyXG59XHJcblxyXG5cclxuLmNvcm5lci10b3AsXHJcbi5jb3JuZXItYm90dG9tIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuNjk1LCAtMC4wMzAsIDAuNjMwLCAxLjA2NSkgb3BhY2l0eSwgMC4zIGN1YmljLWJlemllcigwLjY5NSwgLTAuMDMwLCAwLjYzMCwgMS4wNjUpIHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjY5NSwgLTAuMDMwLCAwLjYzMCwgMS4wNjUpIG9wYWNpdHksIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjk1LCAtMC4wMzAsIDAuNjMwLCAxLjA2NSkgdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uY29ybmVyLXRvcCxcclxuLmNvcm5lci1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDEwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbn1cclxuXHJcblxyXG5hLmJvcmRlcnM6aG92ZXIgLmNvcm5lci10b3AsXHJcbmEuYm9yZGVyczpob3ZlciAuY29ybmVyLWJvdHRvbSxcclxuYS5kZXRhaWxzLWxpbms6aG92ZXIgLmNvcm5lci10b3AsXHJcbmEuZGV0YWlscy1saW5rOmhvdmVyIC5jb3JuZXItYm90dG9tIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG59XHJcblxyXG5hLmJvcmRlcnM6aG92ZXI6YWZ0ZXIsXHJcbmEuZGV0YWlscy1saW5rOmhvdmVyIC5ib3JkZXJzOmFmdGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY29ybmVyLXRvcCxcclxuLmNvcm5lci1ib3R0b20sXHJcbi5jb3JuZXItdG9wOmJlZm9yZSxcclxuLmNvcm5lci10b3A6YWZ0ZXIsXHJcbi5jb3JuZXItYm90dG9tOmJlZm9yZSxcclxuLmNvcm5lci1ib3R0b206YWZ0ZXIge1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY29ybmVyLXRvcDpiZWZvcmUsXHJcbi5jb3JuZXItdG9wOmFmdGVyLFxyXG4uY29ybmVyLWJvdHRvbTpiZWZvcmUsXHJcbi5jb3JuZXItYm90dG9tOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTllOGRlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uY29ybmVyLXRvcDpiZWZvcmUsXHJcbi5jb3JuZXItdG9wOmFmdGVyIHtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG59XHJcblxyXG4uY29ybmVyLWJvdHRvbTpiZWZvcmUsXHJcbi5jb3JuZXItYm90dG9tOmFmdGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4uY29ybmVyLXRvcDpiZWZvcmUsXHJcbi5jb3JuZXItYm90dG9tOmJlZm9yZSB7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xyXG59XHJcblxyXG5cclxuLmNvcm5lci10b3A6YWZ0ZXIsXHJcbi5jb3JuZXItYm90dG9tOmFmdGVyIHtcclxuICByaWdodDogMDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcclxufVxyXG5cclxuLmNvcm5lci10b3A6YmVmb3JlIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmNvcm5lci10b3A6YWZ0ZXIge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jb3JuZXItYm90dG9tOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5jb3JuZXItYm90dG9tOmFmdGVyIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uZHQtY2FyZCB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/loading-distractor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-loading-distractor.js");



class LoadingComponent {
    constructor() {
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 0, template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-loading-spinner");
    } }, directives: [_dynatrace_barista_components_loading_distractor__WEBPACK_IMPORTED_MODULE_1__["DtLoadingSpinner"]], styles: [".dt-loading-spinner-svg {\r\n  stroke: #c7bb63 !important;\r\n}\r\n\r\ndt-loading-spinner {\r\n  display: block !important;\r\n  margin: auto;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kdC1sb2FkaW5nLXNwaW5uZXItc3ZnIHtcclxuICBzdHJva2U6ICNjN2JiNjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuZHQtbG9hZGluZy1zcGlubmVyIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dynamic-table/dynamic-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-table/dynamic-table.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTableComponent", function() { return DynamicTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dynatrace/barista-components/pagination */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-pagination.js");
/* harmony import */ var _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/table */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");












const _c0 = ["sortable"];
const _c1 = ["heroesTable"];
function DynamicTableComponent_dt_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_16_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_16_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const row_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.navigateToDetails(row_r41.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r41.name, " ");
} }
function DynamicTableComponent_dt_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nickname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_19_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const row_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.navigateToDetails(row_r44.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", row_r44.nickname, " ");
} }
function DynamicTableComponent_dt_header_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-header-cell", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_cell_22_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_22_Template_dt_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const row_r47 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.navigateToDetails(row_r47.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r47.id);
} }
function DynamicTableComponent_dt_header_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-header-cell");
} }
function DynamicTableComponent_dt_cell_25_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-cell", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_dt_cell_25_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const row_r50 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.deleteHero(row_r50.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicTableComponent_dt_header_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-header-row");
} }
function DynamicTableComponent_dt_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dt-row");
} }
const _c2 = function () { return ["id", "name", "nickname", "delete"]; };
class DynamicTableComponent {
    constructor(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.searchValue = '';
    }
    ngOnInit() {
        const heroesList = this.heroService.tryGetHeroes();
        if (!heroesList) {
            this.heroService.getHeroes().subscribe(h => this.onGetHeroes(h));
        }
        else {
            this.cleanUpHeroFields(heroesList);
            this.initTable(heroesList);
        }
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        const heroesLocal = this.heroService.tryGetHeroes();
        if (!heroesLocal) {
            return;
        }
        const newId = Math.max.apply(null, heroesLocal.map(h => h.id)) + 1;
        const newHero = {
            name, id: newId, series: {}, stories: {}, nickname: name,
            description: '', modified: new Date().toString(), resourceURI: '', comics: {}, events: {}, urls: [],
            thumbnail: { path: 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available', extension: 'jpg' }
        };
        heroesLocal.push(newHero);
        this.heroService.addHero(newHero).subscribe(() => {
            this.heroService.setHeroes(heroesLocal);
            this.heroService.lastHeroesIndex++;
        });
        // this.scrollToBottom();
    }
    updateDataSource(heroes, goToEnd = false) {
        this.cleanUpHeroFields(heroes);
        if (this.data && heroes.length > this.data.length) {
            goToEnd = true;
        }
        const isNewPage = this.data.length % this.pagination.pageSize === 0;
        this.initTable(heroes);
        if (goToEnd) {
            this.pagination.currentPage = isNewPage ? this.pagination.numberOfPages + 1 : this.pagination.numberOfPages;
            this.dataSource.pagination = this.paginationList.last;
        }
        this.paginationChanges();
    }
    cleanUpHeroFields(heroes) {
        // heroes = heroes.map(({ stories, description, comics, series, events, modified, urls, thumbnail, ...item }) => item);
    }
    initTable(heroes) {
        this.data = heroes;
        this.dataSource = new _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableDataSource"](heroes);
        this.dataSource.sort = this.sortable;
        this.dataSource.search = this.tableSearch;
        this.dataSource.pagination = this.pagination;
        this.dataSource.pageSize = 20;
    }
    onGetHeroes(heroes) {
        heroes.map(h => h.nickname = h.name);
        this.initTable(heroes);
    }
    ngAfterViewInit() {
        if (this.dataSource) {
            this.dataSource.sort = this.sortable;
            this.dataSource.search = this.tableSearch;
            this.paginationChanges();
        }
        this.subscription = this.heroService.heroesChanged.subscribe((heroes) => this.updateDataSource(heroes));
    }
    paginationChanges() {
        this.paginationList.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null)).subscribe(() => {
            if (this.paginationList.first) {
                this.dataSource.pagination = this.paginationList.first;
                this.dataSource.pageSize = 20;
            }
            else {
                this.dataSource.pagination = null;
            }
        });
    }
    deleteHero(id) {
        let heroesLocal = this.data || this.heroService.tryGetHeroes();
        this.heroService.getHeroIndex(id).subscribe((index) => {
            // const heroIndex = heroesLocal.indexOf(hero);
            heroesLocal = heroesLocal.filter((h) => h.id !== id);
            this.heroService.deleteHero(index).subscribe(() => this.heroService.setHeroes(heroesLocal));
        });
    }
    navigateToDetails(id) {
        this.router.navigate(['/detail/', id]);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
DynamicTableComponent.ɵfac = function DynamicTableComponent_Factory(t) { return new (t || DynamicTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DynamicTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicTableComponent, selectors: [["app-dynamic-table"]], viewQuery: function DynamicTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagination = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroesTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginationList = _t);
    } }, decls: 30, vars: 8, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "flex"], ["type", "text", "name", "heroName", "minlength", "1", "dtInput", "", "placeholder", "Please enter hero name", "required", "", "ngModel", "", 1, "hero_input"], ["heroName", ""], ["type", "submit", 1, "inline-flex", "button-item", 3, "click"], [1, "add-icon"], ["name", "plus-add"], ["name", "tableSearch", "placeholder", "Search table data...", "aria-label", "Search table data", 3, "ngModel", "ngModelChange"], ["interactiveRows", "", "dtSort", "", 1, "heroes", 3, "dataSource"], ["sortable", "", "heroesTable", ""], ["dtColumnDef", "name"], ["dt-sort-header", "", 4, "dtHeaderCellDef"], [3, "click", 4, "dtCellDef"], ["dtColumnDef", "nickname"], ["dtColumnDef", "id"], ["dtColumnDef", "delete"], [4, "dtHeaderCellDef"], ["style", "cursor: initial;", 4, "dtCellDef"], [4, "dtHeaderRowDef"], [4, "dtRowDef", "dtRowDefColumns"], ["pagination", ""], ["dt-sort-header", ""], [3, "click"], [2, "cursor", "initial"], [1, "trash", 3, "click"]], template: function DynamicTableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DynamicTableComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r26.valid && _r26.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicTableComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.add(_r27.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dt-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dt-table-search", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicTableComponent_Template_dt_table_search_ngModelChange_10_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dt-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicTableComponent_dt_header_cell_15_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicTableComponent_dt_cell_16_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicTableComponent_dt_header_cell_18_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DynamicTableComponent_dt_cell_19_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DynamicTableComponent_dt_header_cell_21_Template, 2, 0, "dt-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DynamicTableComponent_dt_cell_22_Template, 2, 1, "dt-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DynamicTableComponent_dt_header_cell_24_Template, 1, 0, "dt-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DynamicTableComponent_dt_cell_25_Template, 4, 0, "dt-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DynamicTableComponent_dt_header_row_26_Template, 1, 0, "dt-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DynamicTableComponent_dt_row_27_Template, 1, 0, "dt-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "dt-pagination", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("empty", !_r27.value.trim().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_7__["DtInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_8__["DtIcon"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTable"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtColumnDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderCellDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtCellDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRowDef"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRowDef"], _dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderCell"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSortHeader"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtCell"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtHeaderRow"], _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtRow"]], styles: ["dt-table-search[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n.hero_input[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-right: 10px;\r\n}\r\n\r\n.inline-flex[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  background-color: gray;\r\n  color: white;\r\n  padding: 4px 10px;\r\n  float: right;\r\n}\r\n\r\nbutton.delete[_ngcontent-%COMP%]:hover {\r\n  background-color: #9c5061;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%] {\r\n  transform: rotate(0);\r\n  z-index: 20;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  fill: #00a1b2;\r\n  transition: transform .35s ease-in-out;\r\n  transition-delay: 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.scrolltop[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n@media (max-width: 440px) {\r\n  .scroll[_ngcontent-%COMP%] {\r\n    background: #e0e0e0b8;\r\n    border: 1px solid #45464626\r\n  }\r\n\r\n  .heroes[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 200px;\r\n  }\r\n\r\n  .flex[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n  }\r\n}\r\n\r\n.add-icon[_ngcontent-%COMP%], .delete-icon[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-right: 4px;\r\n  margin-top: 5px;\r\n  vertical-align: top;\r\n}\r\n\r\n.add-icon[_ngcontent-%COMP%] {\r\n  fill: white;\r\n}\r\n\r\n.delete-icon[_ngcontent-%COMP%] {\r\n  fill: #00a1b2;\r\n}\r\n\r\n.delete-icon[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.button-item[_ngcontent-%COMP%] {\r\n  background: #00a1b2;\r\n  border-color: #00a1b2;\r\n  color: #fff;\r\n}\r\n\r\n.button-item[_ngcontent-%COMP%]:hover {\r\n  background: #00848e;\r\n  border-color: #00848e;\r\n}\r\n\r\ndt-row[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  font-size: 23px;\r\n  line-height: 42px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Titillium Web', sans-serif;\r\n  font-size: 23px;\r\n  line-height: 42px;\r\n  font-weight: 100;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.trash[_ngcontent-%COMP%] {\r\n  background: #00a1b2;\r\n  width: 16.5px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  margin: 0 auto;\r\n  margin-top: 9px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  -webkit-border-bottom-right-radius: 3px;\r\n  -webkit-border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  left: -24.5px;\r\n  right: 0;\r\n  bottom: -12.5px;\r\n  width: 75px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 3px;\r\n  background: #00a1b2;\r\n  top: -4.5px;\r\n  left: -2.5px;\r\n  right: -2.5px;\r\n\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  transform: rotate(0deg);\r\n  transition: transform 250ms;\r\n  transform-origin: 19% 100%;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 6.5px;\r\n  height: 1.75px;\r\n  background: #00a1b2;\r\n  top: -2.5px;\r\n\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  transform: rotate(0deg);\r\n  transition: transform 250ms;\r\n  transform-origin: 19% 100%;\r\n  left: 6.75px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  display: block;\r\n  margin: 3.5px auto;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:after {\r\n  content: '';\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  position: absolute;\r\n  left: -4.5px;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  width: 1.75px;\r\n  height: 12.5px;\r\n  background: #fff;\r\n  position: absolute;\r\n  right: -4.5px;\r\n  border-radius: 2.5px;\r\n}\r\n\r\n.trash[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg);\r\n  transition: transform 250ms;\r\n}\r\n\r\ninput.ng-dirty.empty[_ngcontent-%COMP%]:not(:focus), .dt-input-invalid.ng-invalid.empty[_ngcontent-%COMP%]:not(:focus) {\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy10YWJsZS9keW5hbWljLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFFYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQjtFQUNGOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtdGFibGUvZHluYW1pYy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZHQtdGFibGUtc2VhcmNoIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLmhlcm9lc19jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uaGVyb19pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5saW5lLWZsZXgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA0cHggMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzUwNjE7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmlubGluZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjN2JiNjM7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGZpbGw6ICMwMGExYjI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGx0b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gIC5zY3JvbGwge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMGI4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NDY0NjI2XHJcbiAgfVxyXG5cclxuICAuaGVyb2VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhlcm9lcyBhIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZsZXggLmFkZC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFkZC1pY29uLFxyXG4uZGVsZXRlLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5hZGQtaWNvbiB7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiB7XHJcbiAgZmlsbDogIzAwYTFiMjtcclxufVxyXG5cclxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMWIyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDg0OGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG5kdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgLyogYmFja2dyb3VuZDogI2RjZTdlYjsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5ib2R5LFxyXG5odG1sIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAvKiBiYWNrZ3JvdW5kOiAjZGNlN2ViOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5kdC10YWJsZS1pbnRlcmFjdGl2ZS1yb3dzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBhMWIyMjk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59ICovXHJcblxyXG4udHJhc2gge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgd2lkdGg6IDE2LjVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDlweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnRyYXNoOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTI0LjVweDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IC0xMi41cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuXHJcbi50cmFzaCBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwYTFiMjtcclxuICB0b3A6IC00LjVweDtcclxuICBsZWZ0OiAtMi41cHg7XHJcbiAgcmlnaHQ6IC0yLjVweDtcclxuXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDE5JSAxMDAlO1xyXG59XHJcblxyXG4udHJhc2ggc3BhbjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2LjVweDtcclxuICBoZWlnaHQ6IDEuNzVweDtcclxuICBiYWNrZ3JvdW5kOiAjMDBhMWIyO1xyXG4gIHRvcDogLTIuNXB4O1xyXG5cclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTklIDEwMCU7XHJcbiAgbGVmdDogNi43NXB4O1xyXG59XHJcblxyXG5cclxuLnRyYXNoIGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMS43NXB4O1xyXG4gIGhlaWdodDogMTIuNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAzLjVweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG59XHJcblxyXG4udHJhc2ggaTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEuNzVweDtcclxuICBoZWlnaHQ6IDEyLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNC41cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMi41cHg7XHJcbn1cclxuXHJcbi50cmFzaCBpOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEuNzVweDtcclxuICBoZWlnaHQ6IDEyLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTQuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG59XHJcblxyXG4udHJhc2g6aG92ZXIgc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWRpcnR5LmVtcHR5Om5vdCg6Zm9jdXMpLCAuZHQtaW5wdXQtaW52YWxpZC5uZy1pbnZhbGlkLmVtcHR5Om5vdCg6Zm9jdXMpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-table',
                templateUrl: './dynamic-table.component.html',
                styleUrls: ['./dynamic-table.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sortable', { read: _dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtSort"], static: true }]
        }], pagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"], { static: true }]
        }], heroesTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['heroesTable']
        }], paginationList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_dynatrace_barista_components_pagination__WEBPACK_IMPORTED_MODULE_1__["DtPagination"]]
        }], tableSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_dynatrace_barista_components_table__WEBPACK_IMPORTED_MODULE_2__["DtTableSearch"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/fallbackimg.directive.ts":
/*!******************************************!*\
  !*** ./src/app/fallbackimg.directive.ts ***!
  \******************************************/
/*! exports provided: FallbackimgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallbackimgDirective", function() { return FallbackimgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FallbackimgDirective {
    constructor(eRef) {
        this.eRef = eRef;
    }
    loadFallbackOnError() {
        const element = this.eRef.nativeElement;
        const path = 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
        element.src = this.appFallbackimg || `${path}/landscape_xlarge.jpg`;
        element.srcset = this.appFallbackimages || this.getImageSrcSet(path);
    }
    getImageSrcSet(path) {
        return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
    }
}
FallbackimgDirective.ɵfac = function FallbackimgDirective_Factory(t) { return new (t || FallbackimgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
FallbackimgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FallbackimgDirective, selectors: [["img", "appFallbackimg", ""]], hostBindings: function FallbackimgDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function FallbackimgDirective_error_HostBindingHandler() { return ctx.loadFallbackOnError(); });
    } }, inputs: { appFallbackimg: "appFallbackimg", appFallbackimages: "appFallbackimages" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FallbackimgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img[appFallbackimg]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appFallbackimg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appFallbackimages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadFallbackOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['error']
        }] }); })();


/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fallbackimg.directive */ "./src/app/fallbackimg.directive.ts");
/* harmony import */ var _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/inline-editor */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-inline-editor.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");









function HeroDetailComponent_div_0_div_24_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](serie_r10.name);
} }
function HeroDetailComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comic series");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_24_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.getSeriesItems(ctx_r7.hero));
} }
function HeroDetailComponent_div_0_div_25_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](story_r12.name);
} }
function HeroDetailComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroDetailComponent_div_0_div_25_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.getStories(ctx_r8.hero));
} }
function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nickname:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_em_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hero.nickname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeroDetailComponent_div_0_div_24_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeroDetailComponent_div_0_div_25_Template, 7, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, ctx_r6.hero.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r6.getImageSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("srcset", ctx_r6.getImageSrcSet(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r6.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.hero.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.hero.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.hero.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getSeriesItems(ctx_r6.hero));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getStories(ctx_r6.hero));
} }
class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        if (!this.hero) {
            this.getHero();
        }
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        const heroes = this.heroService.tryGetHeroes();
        if (heroes) {
            this.hero = heroes.find(h => h.id === id);
            this.trySetNickname();
            return;
        }
        this.heroService.getHero(id).subscribe(hero => {
            this.hero = hero;
            this.trySetNickname();
        });
    }
    trySetNickname() {
        if (!this.hero) {
            return;
        }
        if (!this.hero.nickname) {
            this.hero.nickname = this.hero.name;
        }
    }
    goBack() {
        this.location.back();
    }
    save() {
        // this.heroService.updateLocalHero(this.hero);
        this.heroService.updateHero(this.hero).subscribe(() => this.heroService.updateHeroName(this.hero));
        // .subscribe(() => this.goBack());
    }
    getImageSrc() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_xlarge.jpg`;
    }
    getImageSrcSet() {
        const path = this.getPathWithHttps();
        return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
    }
    getPathWithHttps() {
        return this.hero.thumbnail.path.indexOf('https') >= 0 ? this.hero.thumbnail.path : this.hero.thumbnail.path.replace('http', 'https');
    }
    getSeriesItems(hero) {
        return hero.series && hero.series.available > 0 ? hero.series.items : null;
    }
    getStories(hero) {
        return hero.stories && hero.stories.available > 0 ? hero.stories.items : null;
    }
}
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], inputs: { hero: "hero" }, decls: 1, vars: 1, consts: [["class", "details__wrapper", 4, "ngIf"], [1, "details__wrapper"], [1, "details"], [1, "details_container"], [1, "info_container"], [1, "info"], ["height", "200px", "appFallbackimg", "", 3, "src", "srcset", "alt"], [1, "info_text_container"], [1, "info_row"], [1, "hero_label"], [1, "hero_id"], ["aria-label", "Name"], ["dt-inline-editor", "", "ariaLabelSave", "Save nickname", "ariaLabelCancel", "Cancel and discard changes", 3, "ngModel", "ngModelChange"], ["class", "info_container", 4, "ngIf"], ["dt-button", "", 3, "click"], [1, "items"], [1, "items_text_container"], [4, "ngFor", "ngForOf"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 30, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fallbackimg_directive__WEBPACK_IMPORTED_MODULE_4__["FallbackimgDirective"], _dynatrace_barista_components_inline_editor__WEBPACK_IMPORTED_MODULE_5__["DtInlineEditor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_7__["DtButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n  margin-top: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n.dt-button[_ngcontent-%COMP%] + .dt-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.info_row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: auto;\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 578px) {\r\n  img[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n}\r\n\r\n.details__wrapper[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n@media (max-width: 577px) {\r\n  img[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    box-shadow: 2px 2px 2px lightgrey;\r\n  }\r\n\r\n  details[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\n.details_container[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 10px rgba(14, 30, 37, .12);\r\n}\r\n\r\n.info_container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  background-color: white;\r\n}\r\n\r\n.details[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  grid-column: 1;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e1e1e1;\r\n  border-left: 1px solid #e1e1e1;\r\n  border-right: 1px solid #e1e1e1;\r\n}\r\n\r\n\r\n\r\n.hero_id_label[_ngcontent-%COMP%] {\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 20px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.hero_id[_ngcontent-%COMP%] {\r\n  color: #151515;\r\n  font-size: 16px;\r\n  word-break: break-word;\r\n  font-family: Roboto, Trebuchet MS, Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\np[_ngcontent-%COMP%], .hero_label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.info_text_container[_ngcontent-%COMP%] {\r\n  padding-left: 2em;\r\n  padding-top: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n}\r\n\r\n.items_text_container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\nem[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSwrREFBK0Q7RUFDL0QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsK0RBQStEO0VBQy9ELGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcblxyXG4uZHQtYnV0dG9uKy5kdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5pbmZvX3JvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3OHB4KSB7XHJcbiAgaW1nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXRhaWxzX193cmFwcGVyIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3N3B4KSB7XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggbGlnaHRncmV5O1xyXG4gIH1cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbHNfY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuXHJcbi5pbmZvX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmRldGFpbHMgLmluZm8ge1xyXG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICBncmlkLWNvbHVtbjogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG59XHJcblxyXG4vKiAuaW5mb19yb3crLmluZm9fcm93IHtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG59ICovXHJcblxyXG4uaGVyb19pZF9sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhlcm9faWQge1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFRyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5wLFxyXG4uaGVyb19sYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pbmZvX3RleHRfY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG59XHJcblxyXG4uaXRlbXNfdGV4dF9jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJlbTtcclxufVxyXG5cclxuLml0ZW1zX3RleHRfY29udGFpbmVyIGxhYmVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuZW0ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-detail',
                templateUrl: './hero-detail.component.html',
                styleUrls: ['./hero-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { hero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/input */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function HeroSearchComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r24.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r24.name, " ");
} }
class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => term.trim() && this.heroService.searchLocalHeroes(term)));
    }
}
HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) { return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"])); };
HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroSearchComponent, selectors: [["app-hero-search"]], decls: 9, vars: 3, consts: [["for", "search-box"], ["dtInput", "", "id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search for hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.search(_r22.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeroSearchComponent_li_7_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.heroes$));
    } }, directives: [_dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_4__["DtCardTitle"], _dynatrace_barista_components_input__WEBPACK_IMPORTED_MODULE_5__["DtInput"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["h3[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 208px;\r\n  height: 20px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  background-color: #00848e;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  color: white;\r\n}\r\n#search-box[_ngcontent-%COMP%] {\r\n  max-width: 220px;\r\n  height: 20px;\r\n}\r\nul.search-result[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cclxuaDMge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiAyMDhweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NDhlO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICBjb2xvcjogIzg4ODtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NlYXJjaC1ib3gge1xyXG4gIG1heC13aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG51bC5zZWFyY2gtcmVzdWx0IHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmR0LWNhcmQge1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjYzdiYjYzO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-search',
                templateUrl: './hero-search.component.html',
                styleUrls: ['./hero-search.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/toast */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-toast.js");








class HeroService {
    constructor(http, messageService, toast) {
        this.http = http;
        this.messageService = messageService;
        this.toast = toast;
        this.heroes = [];
        this.dbUrl = 'https://marvel-e1c17.firebaseio.com/heroes.json';
        this.dbUrlBase = 'https://marvel-e1c17.firebaseio.com';
        this.heroesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    setHeroes(heroes) {
        this.heroes = heroes.filter(h => h != null); // due to empty nodes when a hero is deleted in firebase DB
        this.onHeroesChanged();
    }
    getHeroesList() {
        return this.heroes.slice();
    }
    tryGetHeroes() {
        const heroesList = this.getHeroesList();
        return heroesList && heroesList.length ? heroesList : null;
    }
    onHeroesChanged() {
        this.heroesChanged.next(this.getHeroesList());
    }
    /** GET heroes from the server */
    getHeroes() {
        return this.http.get(this.dbUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(heroes => {
            this.heroes = Object.values(heroes).filter(h => h != null);
            this.lastHeroesIndex = heroes.length;
            return this.heroes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id) {
        const url = `${this.dbUrl}?orderBy="id"&equalTo=${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x ? Object.values(x)[0] : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x && Object.values(x).length ?
            this.log(`fetched heroes with id="${id}"`) :
            this.log(`no heroes matching id "${id}" could be found`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getHero from API with id=${id}`)));
    }
    /** GET hero parent node index by id. Will 404 if id not found */
    getHeroIndex(id) {
        const url = `${this.dbUrl}?orderBy="id"&equalTo=${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x ? parseInt(Object.keys(x)[0]) : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getHero from API with id=${id}`)));
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error && error.error ? error.error.status : error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        const url = `${this.dbUrlBase}/heroes/${this.heroes.indexOf(hero)}.json`;
        return this.http.put(url, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`updated hero id=${hero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateHero')));
    }
    // updateLocalHero(hero: Hero): void {
    //   const heroesLocal: Hero[] = this.tryGetHeroes();
    //   if (!heroesLocal) {
    //     this.getHeroes().subscribe(heroes => {
    //       this.updateHeroName(hero, heroes);
    //     });
    //     return;
    //   }
    //   this.updateHeroName(hero, heroesLocal);
    // }
    updateHeroName(hero) {
        const heroCurrent = this.heroes.find(h => h.id === hero.id);
        if (!heroCurrent) {
            this.toast.create('This name cannot be changed!');
            return;
        }
        if (heroCurrent.nickname === hero.nickname) {
            this.toast.create('You have not made any changes!');
            return;
        }
        heroCurrent.nickname = hero.nickname; // only first found item is changed;
        this.onHeroesChanged();
        this.toast.create('Your changes have been saved!');
        // this.heroes.forEach((element, index) => {  //to change all names
        //   if (element.name === hero.name) {
        //     this.heroes[index].name = hero.name;
        //   }
        // });
    }
    addHero(hero) {
        const url = `${this.dbUrlBase}/heroes/${this.lastHeroesIndex + 1}.json`;
        return this.http.put(url, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((newHero) => this.log(`added hero w/ id=${newHero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addHero')));
    }
    deleteHero(index) {
        const url = `${this.dbUrlBase}/heroes/${index}.json`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted hero index=${index}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        term = term.charAt(0).toUpperCase() + term.slice(1);
        const url = `${this.dbUrl}?orderBy="name"&startAt=${term}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x ? Object.values(x) : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x && Object.values(x).length ?
            this.log(`Found heroes matching "${term}"`) :
            this.log(`No heroes matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchHeroes', [])));
    }
    searchLocalHeroes(term) {
        if (!term || term.length < 2) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        const heroesLocal = this.tryGetHeroes();
        if (!heroesLocal) {
            return this.searchHeroes(term);
        }
        const heroesResults = heroesLocal.filter(h => h.name.toLowerCase().includes(term.toLowerCase()));
        heroesResults.length ? this.log(`Found heroes matching "${term}"`) : this.log(`No heroes matching "${term}"`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(heroesResults);
    }
}
HeroService.ɵfac = function HeroService_Factory(t) { return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"])); };
HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeroService, factory: HeroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _dynatrace_barista_components_toast__WEBPACK_IMPORTED_MODULE_5__["DtToast"] }]; }, null); })();


/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-table/dynamic-table.component */ "./src/app/dynamic-table/dynamic-table.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scrolling/scrolling.component */ "./src/app/scrolling/scrolling.component.ts");
/* harmony import */ var _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard/loading/loading.component */ "./src/app/dashboard/loading/loading.component.ts");







const _c0 = ["heroesContainer"];
function HeroesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeroesComponent {
    constructor(heroService) {
        this.heroService = heroService;
    }
    ngOnInit() {
        if (!this.heroService.tryGetHeroes()) {
            this.heroService.getHeroes().subscribe(heroes => {
                heroes.map(h => h ? h.nickname = h.name : null);
            });
        }
    }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) { return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"])); };
HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroesComponent, selectors: [["app-heroes"]], viewQuery: function HeroesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.heroesContainer = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "heroes_container"], ["heroesContainer", ""], [4, "ngIf"], [3, "container"]], template: function HeroesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-dynamic-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeroesComponent_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-scrolling", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.heroService.tryGetHeroes());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("container", _r0);
    } }, directives: [_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__["DynamicTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _scrolling_scrolling_component__WEBPACK_IMPORTED_MODULE_4__["ScrollingComponent"], _dashboard_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]], styles: [".heroes_container[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n\r\n\r\n\r\n.heroes_container[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #c7bb63;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n  background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdURHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVIO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsNkNBQTZDO0VBQzdDLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25CO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkciLCJmaWxlIjoic3JjL2FwcC9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyb2VzX2NvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLypcclxuLmhlcm9lcyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGxpIHtcclxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcblxyXG4uaGVyb2VzIGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNi41cHgpO1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBhMWIyO1xyXG59XHJcblxyXG4uaGVyb2VzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNmVtIDAuNmVtIDAgMC42ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTFiMjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlOmhvdmVyLFxyXG4uaGVyb2VzIGxpOmhvdmVyIC5iYWRnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkOGI5NTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59ICovXHJcblxyXG4vKiAuaGVyb19pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5saW5lLWZsZXgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGN1cnNvcjogaGFuZDtcclxufSAqL1xyXG4vKlxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuYnV0dG9uLmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljNTA2MTtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5saW5lIGlucHV0IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn0gKi9cclxuXHJcbi5oZXJvZXNfY29udGFpbmVyIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2M3YmI2MztcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxNCwgMzAsIDM3LCAuMTIpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLyogLmFkZC1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGExYjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMWIyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDg0OGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NDhlO1xyXG59ICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heroes',
                templateUrl: './heroes.component.html',
                styleUrls: ['./heroes.component.css']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }]; }, { heroesContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['heroesContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dynatrace/barista-components/card */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-card.js");
/* harmony import */ var _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dynatrace/barista-components/button */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-button.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");







function MessagesComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r19);
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dt-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dt-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dt-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessagesComponent_div_0_div_7_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [["class", "dt-demo-card", 4, "ngIf"], [1, "dt-demo-card"], ["dt-button", "", "variant", "secondary", 1, "clear", 3, "click"], ["name", "delete"], ["class", "messages", 4, "ngFor", "ngForOf"], [1, "messages"], [1, "message"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 8, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCard"], _dynatrace_barista_components_card__WEBPACK_IMPORTED_MODULE_3__["DtCardTitle"], _dynatrace_barista_components_button__WEBPACK_IMPORTED_MODULE_4__["DtButton"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_5__["DtIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%], dt-card-title[_ngcontent-%COMP%] {\r\n  color: #00848e;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  margin: 2em;\r\n}\r\nbody[_ngcontent-%COMP%], input[text][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin: 12px 0;\r\n}\r\n.dt-card[_ngcontent-%COMP%] {\r\n  border-top: 4px solid #00848e;\r\n  padding-top: 16px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, .12);\r\n  margin-top: 20px;\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(14, 30, 37, .12);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0M7O0VBRUUsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNZXNzYWdlc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMixcclxuZHQtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICMwMDg0OGU7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG5ib2R5LFxyXG5pbnB1dFt0ZXh0XSxcclxuYnV0dG9uIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuYnV0dG9uLmNsZWFyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG5cclxuLmR0LWNhcmQge1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA4NDhlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTQsIDMwLCAzNywgLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0LCAzMCwgMzcsIC4xMik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scrolling/scrolling.component.ts":
/*!**************************************************!*\
  !*** ./src/app/scrolling/scrolling.component.ts ***!
  \**************************************************/
/*! exports provided: ScrollingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingComponent", function() { return ScrollingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dynatrace/barista-components/icon */ "./node_modules/@dynatrace/barista-components/__ivy_ngcc__/fesm2015/dynatrace-barista-components-icon.js");




function ScrollingComponent_dt_icon_0_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dt-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollingComponent_dt_icon_0_Template_dt_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.toggleScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolltop", !ctx_r55.isTop);
} }
class ScrollingComponent {
    constructor() {
        this.isTop = true;
    }
    handleScroll($event) {
        this.isTop = window.pageYOffset <= window.innerHeight / 3;
        this.isHidden = false;
        // console.log(`scrolled to ${this.isTop ? 'top' : 'bottom'}; \n isHidden: ${this.isHidden}`);
        // console.log(window.pageYOffset, $event);
    }
    ngOnInit() {
    }
    scrollToBottom() {
        window.scroll({
            top: this.container.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
        this.isTop = false;
        this.isHidden = false;
        // console.log(`scrolled to bottom`);
    }
    scrollToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        this.isTop = true;
        this.isHidden = true;
        // console.log(`scrolled to top; is hidden`);
    }
    toggleScroll() {
        this.isTop ? this.scrollToBottom() : this.scrollToTop();
    }
}
ScrollingComponent.ɵfac = function ScrollingComponent_Factory(t) { return new (t || ScrollingComponent)(); };
ScrollingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollingComponent, selectors: [["app-scrolling"]], hostBindings: function ScrollingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollingComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { container: "container" }, decls: 1, vars: 1, consts: [["name", "dropdownopen", "class", "scroll", 3, "scrolltop", "click", 4, "ngIf"], ["name", "dropdownopen", 1, "scroll", 3, "click"]], template: function ScrollingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollingComponent_dt_icon_0_Template, 1, 2, "dt-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _dynatrace_barista_components_icon__WEBPACK_IMPORTED_MODULE_2__["DtIcon"]], styles: [".scroll[_ngcontent-%COMP%] {\r\n  transform: rotate(0);\r\n  z-index: 20;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  fill: #00a1b2;\r\n  transition: transform .35s ease-in-out;\r\n  transition-delay: 1s;\r\n  cursor: pointer;\r\n}\r\n\r\n.scrolltop[_ngcontent-%COMP%] {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n@media (max-width: 440px) {\r\n  .scroll[_ngcontent-%COMP%] {\r\n    background: #e0e0e0b8;\r\n    border: 1px solid #45464626\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsaW5nL3Njcm9sbGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFFYixzQ0FBc0M7RUFDdEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGxpbmcvc2Nyb2xsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBmaWxsOiAjMDBhMWIyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsdG9wIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAuc2Nyb2xsIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTBiODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NTQ2NDYyNlxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scrolling',
                templateUrl: './scrolling.component.html',
                styleUrls: ['./scrolling.component.css']
            }]
    }], function () { return []; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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

module.exports = __webpack_require__(/*! C:\Programming\Heroes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map