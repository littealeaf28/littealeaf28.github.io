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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



class AppComponent {
    constructor() {
        this.title = 'personal-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/experiences/experiences.component */ "./src/app/home/experiences/experiences.component.ts");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
/* harmony import */ var _home_experiences_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/experiences/experience-card/experience-card.component */ "./src/app/home/experiences/experience-card/experience-card.component.ts");
/* harmony import */ var _home_experiences_experience_card_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/experiences/experience-card/skills-hotbar/skills-hotbar.component */ "./src/app/home/experiences/experience-card/skills-hotbar/skills-hotbar.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _home_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"],
        _home_experiences_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceCardComponent"],
        _home_experiences_experience_card_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__["SkillsHotbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _home_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"],
                    _home_experiences_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceCardComponent"],
                    _home_experiences_experience_card_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__["SkillsHotbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/experiences/experience-card/experience-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/home/experiences/experience-card/experience-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExperienceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceCardComponent", function() { return ExperienceCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills-hotbar/skills-hotbar.component */ "./src/app/home/experiences/experience-card/skills-hotbar/skills-hotbar.component.ts");



class ExperienceCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { experience: "experience" }, decls: 12, vars: 9, consts: [[1, "experience-card"], [1, "image-container"], [3, "src", "alt"], [3, "innerHTML"], [3, "skills"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-skills-hotbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.experience.image.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.experience.image.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.experience.image.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.experience.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx.experience.skills);
    } }, directives: [_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_1__["SkillsHotbarComponent"]], styles: ["div.experience-card[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  grid-template-columns: 300px minmax(0, 1fr);\n  grid-template-rows: repeat(3, -webkit-max-content) -webkit-min-content;\n  grid-template-rows: repeat(3, max-content) min-content;\n  grid-column-gap: 24px;\n  grid-row-gap: 6px;\n  margin: 12px 0;\n  max-width: 100%;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-column: 1;\n  grid-row: 1/5;\n  width: 300px;\n  height: 280px;\n  border-radius: 30px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 280px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.studio-reach[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #74C1D9;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.bookmarkd[_ngcontent-%COMP%] {\n  background: #096F37;\n  border: 2px solid #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 34px;\n  font-weight: normal;\n  margin: 0;\n  color: #82ADEE;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 28px;\n  font-weight: normal;\n  margin: 0;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]     p {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  margin: 2px 0;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]     p strong {\n  font-weight: bold;\n  font-size: 22px;\n  margin: 0;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a {\n  text-decoration: none;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a:hover {\n  cursor: pointer;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a.ayhr-link {\n  color: #da3823;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a.ayhr-link:hover {\n  color: #FF7373;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a.bookmarkd-link {\n  color: #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]     a.bookmarkd-link:hover {\n  color: #096F37;\n}\ndiv.experience-card[_ngcontent-%COMP%]   app-skills-hotbar[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzRUFBQTtFQUFBLHNEQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFJSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFGTjtBQUtJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUhOO0FBT0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBTEo7QUFRRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFOSjtBQVNFO0VBT0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWJKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBRE47QUFXRTtFQUNFLHFCQUFBO0FBVEo7QUFXSTtFQUNFLGVBQUE7QUFUTjtBQVlJO0VBQ0UsY0FBQTtBQVZOO0FBWU07RUFDRSxjQUFBO0FBVlI7QUFjSTtFQUNFLGNBQUE7QUFaTjtBQWNNO0VBQ0UsY0FBQTtBQVpSO0FBaUJFO0VBQ0UsY0FBQTtBQWZKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggbWlubWF4KDAsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpIG1pbi1jb250ZW50O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMjRweDtcclxuICBncmlkLXJvdy1nYXA6IDZweDtcclxuXHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAxIC8gNTtcclxuXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgjMDAwMDAwLCAwLjI1KTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdHVkaW8tcmVhY2gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzRDMUQ5O1xyXG4gICAgfVxyXG5cclxuICAgICYuYm9va21hcmtkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzA5NkYzNztcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzBGQ0E2NDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjODJBREVFO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgcCB7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmF5aHItbGluayB7XHJcbiAgICAgIGNvbG9yOiAjZGEzODIzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNGRjczNzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJvb2ttYXJrZC1saW5rIHtcclxuICAgICAgY29sb3I6ICMwRkNBNjQ7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzA5NkYzNztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLXNraWxscy1ob3RiYXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-card',
                templateUrl: './experience-card.component.html',
                styleUrls: ['./experience-card.component.scss']
            }]
    }], function () { return []; }, { experience: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/experiences/experience-card/skills-hotbar/skills-hotbar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/experiences/experience-card/skills-hotbar/skills-hotbar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SkillsHotbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsHotbarComponent", function() { return SkillsHotbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SkillsHotbarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class SkillsHotbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsHotbarComponent.ɵfac = function SkillsHotbarComponent_Factory(t) { return new (t || SkillsHotbarComponent)(); };
SkillsHotbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsHotbarComponent, selectors: [["app-skills-hotbar"]], inputs: { skills: "skills" }, decls: 3, vars: 1, consts: [[1, "skills-container"], [4, "ngFor", "ngForOf"]], template: function SkillsHotbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsHotbarComponent_li_2_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["div.skills-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 44px;\n}\ndiv.skills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  column-gap: 18px;\n  grid-auto-columns: -webkit-max-content;\n  grid-auto-columns: max-content;\n  list-style: none;\n  margin: 4px 0;\n  padding: 0;\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n}\ndiv.skills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  grid-row: 1;\n  min-width: 160px;\n  padding: 6px;\n  border-radius: 14px;\n  border: 1px solid #82ADEE;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  text-align: center;\n  background: #3B3D3A;\n  color: #82ADEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvc2tpbGxzLWhvdGJhci9za2lsbHMtaG90YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxpQ0FBQTtBQUFKO0FBRUk7RUFDRSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZS1jYXJkL3NraWxscy1ob3RiYXIvc2tpbGxzLWhvdGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5za2lsbHMtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogNDRweDtcclxuXHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGNvbHVtbi1nYXA6IDE4cHg7XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZ3JpZC1yb3c6IDE7XHJcblxyXG4gICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MkFERUU7XHJcblxyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzNCM0QzQTtcclxuICAgICAgY29sb3I6ICM4MkFERUU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsHotbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-hotbar',
                templateUrl: './skills-hotbar.component.html',
                styleUrls: ['./skills-hotbar.component.scss']
            }]
    }], function () { return []; }, { skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/experiences/experiences.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/experiences/experiences.component.ts ***!
  \***********************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experiences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences */ "./src/app/home/experiences/experiences.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-card/experience-card.component */ "./src/app/home/experiences/experience-card/experience-card.component.ts");





function ExperiencesComponent_app_experience_card_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-experience-card", 2);
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experience", experience_r1);
} }
class ExperiencesComponent {
    constructor() {
        this.experiences = _experiences__WEBPACK_IMPORTED_MODULE_1__["Experiences"];
    }
    ngOnInit() {
    }
}
ExperiencesComponent.ɵfac = function ExperiencesComponent_Factory(t) { return new (t || ExperiencesComponent)(); };
ExperiencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperiencesComponent, selectors: [["app-experiences"]], decls: 7, vars: 1, consts: [[1, "experience-container"], [3, "experience", 4, "ngFor", "ngForOf"], [3, "experience"]], template: function ExperiencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What I've been up to...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperiencesComponent_app_experience_card_6_Template, 1, 1, "app-experience-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceCardComponent"]], styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  margin: 16px 0 2px 0;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: auto;\n  color: #82ADEE;\n}\nsection[_ngcontent-%COMP%]   div.experience-container[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMTZweCAwIDJweCAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogIzgyQURFRTtcclxuICB9XHJcblxyXG4gIGRpdi5leHBlcmllbmNlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experiences',
                templateUrl: './experiences.component.html',
                styleUrls: ['./experiences.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/experiences/experiences.ts":
/*!*************************************************!*\
  !*** ./src/app/home/experiences/experiences.ts ***!
  \*************************************************/
/*! exports provided: Experiences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiences", function() { return Experiences; });
const Experiences = [
    {
        image: {
            path: 'assets/logos/studio-reach.png',
            alt: 'Studio Reach Logo',
            class: 'studio-reach'
        },
        company: 'Studio Reach',
        position: 'Software Developer',
        duration: 'June 2020 - Now',
        description: '<p>- Implementing user stories for <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a>\n' +
            'project in Angular 9 and Firebase and writing end-to-end and unit tests in Cypress and Jasmine for them</p>' +
            '<p>- Helped develop a new layout for real estate vendor cards/pages, integrate\n' +
            'a blog page as updated by an ETL job, and improve site’s SEO, among other features</p>' +
            '<p>- Engages in daily standups, iteration planning meetings, retrospectives, and pair\n' +
            'programming sessions as part of an Agile team with a kanban workflow based in Jira</p>',
        skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'Jasmine', 'Jira']
    },
    {
        image: {
            path: 'assets/logos/bookmarkd.png',
            alt: 'Bookmark\'d Logo',
            class: 'bookmarkd'
        },
        company: 'Bookmark\'d',
        position: 'Full-stack Web Developer',
        duration: 'October 2019 - July 2020',
        description: '<p>- Visit the website now in testing: <a href="https://bookmarkdofficial.com/" target="_blank" class="bookmarkd-link">"BookMark\'d"</a></p>' +
            '<p>- Developed microservices as part of a REST API using Node + Express\n' +
            '(e.g. user authentication and authorization, product searching, and payment processing) and documents in Confluence\n' +
            '<p>- Leverages a variety of 3rd party APIs and software (Passport.js, Elasticsearch, Square, Amazon SES, etc.)\n' +
            'and manages database of user and products through MongoDB</p>' +
            '<p>- Managed web app infrastructure through AWS services: runs app on EC2 instances, develops a pipeline for CI/CD\n' +
            'via CodeCommit, CodeDeploy + CodePipeline, and sets up domain name and SSL certificate with Route 53 and Amazon Certificate Manager</p>' +
            '<p>- Implemented a minimalistic user interface through React for displaying user information and providing\n' +
            'access to appropriate functionality/services</p>',
        skills: ['React', 'Node', 'Express', 'AWS']
    }
];


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/home/experiences/experiences.component.ts");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hey. How've you been?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I'm Tianrui.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A curious, exploratory developer with a voracious appetite for technological innovation and application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__["ExperiencesComponent"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 16px;\n  background: #3B3D3A;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-right: 16px;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 20px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #82ADEE;\n}\nbody[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background: #3B3D3A;\n  min-height: 300px;\n  padding: 16px;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 84%;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 28px;\n  margin: auto;\n  color: #ffffff;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #82ADEE;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ047QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRE47QUFJSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjM0IzRDNBO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICM4MkFERUU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjNEM0E7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBjb2xvcjogIzgyQURFRTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
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

module.exports = __webpack_require__(/*! C:\TeaLeaf\Projects\personal-website\littealeaf28.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map