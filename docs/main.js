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
/* harmony import */ var _home_shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/shared/skills-hotbar/skills-hotbar.component */ "./src/app/home/shared/skills-hotbar/skills-hotbar.component.ts");
/* harmony import */ var _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/projects/projects.component */ "./src/app/home/projects/projects.component.ts");
/* harmony import */ var _home_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/projects/project-display/project-display.component */ "./src/app/home/projects/project-display/project-display.component.ts");
/* harmony import */ var _home_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/projects/project-card/project-card.component */ "./src/app/home/projects/project-card/project-card.component.ts");













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
        _home_shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__["SkillsHotbarComponent"],
        _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _home_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDisplayComponent"],
        _home_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _home_shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__["SkillsHotbarComponent"],
                    _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                    _home_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDisplayComponent"],
                    _home_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCardComponent"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/skills-hotbar/skills-hotbar.component */ "./src/app/home/shared/skills-hotbar/skills-hotbar.component.ts");




function ExperienceCardComponent_app_skills_hotbar_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skills-hotbar", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx_r0.experience.skills)("isLightMode", false);
} }
class ExperienceCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceCardComponent.ɵfac = function ExperienceCardComponent_Factory(t) { return new (t || ExperienceCardComponent)(); };
ExperienceCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceCardComponent, selectors: [["app-experience-card"]], inputs: { experience: "experience" }, decls: 11, vars: 9, consts: [[1, "experience-card"], [1, "image-container"], [3, "src", "alt"], [3, "innerHTML"], [3, "skills", "isLightMode", 4, "ngIf"], [3, "skills", "isLightMode"]], template: function ExperienceCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceCardComponent_app_skills_hotbar_10_Template, 1, 2, "app-skills-hotbar", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.experience.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.skills.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__["SkillsHotbarComponent"]], styles: ["div.experience-card[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  grid-template-columns: 300px minmax(0, 100%);\n  grid-template-rows: repeat(3, -webkit-min-content) -webkit-max-content;\n  grid-template-rows: repeat(3, min-content) max-content;\n  grid-column-gap: 24px;\n  grid-row-gap: 6px;\n  margin: 30px 0;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-column: 1;\n  grid-row: 1/5;\n  width: 280px;\n  height: 260px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.studio-reach[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #74C1D9;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.studio-reach[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 260px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.bookmarkd[_ngcontent-%COMP%] {\n  background: #096F37;\n  border: 2px solid #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.bookmarkd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.uf[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #00529B;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.uf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 34px;\n  font-weight: normal;\n  margin: 0;\n  color: #82ADEE;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 28px;\n  font-weight: normal;\n  margin: 0;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  margin: 0;\n  font-family: \"Advent Pro\", sans-serif;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  list-style: url(\"/../../../../../assets/icons/arrow-right.svg\");\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a {\n  text-decoration: none;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a:hover {\n  cursor: pointer;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a.ayhr-link {\n  color: #da3823;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a.ayhr-link:hover {\n  color: #FF7373;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a.bookmarkd-link {\n  color: #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     a.bookmarkd-link:hover {\n  color: #096F37;\n}\ndiv.experience-card[_ngcontent-%COMP%]   app-skills-hotbar[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n@media all and (max-width: 1000px) {\n  div.experience-card[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 100%);\n    justify-items: center;\n  }\n  div.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%] {\n    grid-row: 1;\n  }\n  div.experience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  div.experience-card[_ngcontent-%COMP%]   app-skills-hotbar[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-column: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxzRUFBQTtFQUFBLHNEQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBREo7QUFHSTtFQUtFLG1CQUFBO0VBQ0EseUJBQUE7QUFMTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBS0k7RUFLRSxtQkFBQTtFQUNBLHlCQUFBO0FBUE47QUFFTTtFQUNFLFlBQUE7QUFBUjtBQU9JO0VBS0UsbUJBQUE7RUFDQSx5QkFBQTtBQVROO0FBSU07RUFDRSxZQUFBO0FBRlI7QUFVRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFSSjtBQVdFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVRKO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0FBVko7QUFhRTtFQUNFLFNBQUE7RUFDQSwrREFBQTtBQVhKO0FBYUk7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFYTjtBQWNJO0VBQ0UscUJBQUE7QUFaTjtBQWNNO0VBQ0UsZUFBQTtBQVpSO0FBZU07RUFDRSxjQUFBO0FBYlI7QUFlUTtFQUNFLGNBQUE7QUFiVjtBQWlCTTtFQUNFLGNBQUE7QUFmUjtBQWlCUTtFQUNFLGNBQUE7QUFmVjtBQXFCRTtFQUNFLGNBQUE7QUFuQko7QUF1QkE7RUFDRTtJQUNFLHNDQUFBO0lBQ0EscUJBQUE7RUFwQkY7RUFzQkU7SUFDRSxXQUFBO0VBcEJKO0VBdUJFO0lBQ0Usa0JBQUE7RUFyQko7RUF3QkU7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQXRCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggbWlubWF4KDAsIDEwMCUpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbi1jb250ZW50KSBtYXgtY29udGVudDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDI0cHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiA2cHg7XHJcblxyXG4gIG1hcmdpbjogMzBweCAwO1xyXG5cclxuICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAxIC8gNTtcclxuXHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgjMDAwMDAwLCAwLjI1KTtcclxuXHJcbiAgICAmLnN0dWRpby1yZWFjaCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjNzRDMUQ5O1xyXG4gICAgfVxyXG5cclxuICAgICYuYm9va21hcmtkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJhY2tncm91bmQ6ICMwOTZGMzc7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwRkNBNjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi51ZiB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MjlCO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM4MkFERUU7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWR2ZW50IFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IHVybCgnLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmcnKTtcclxuXHJcbiAgICA6Om5nLWRlZXAgbGkge1xyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmF5aHItbGluayB7XHJcbiAgICAgICAgY29sb3I6ICNkYTM4MjM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNGRjczNzM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJvb2ttYXJrZC1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzBGQ0E2NDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzA5NkYzNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcC1za2lsbHMtaG90YmFyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgZGl2LmV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxMDAlKTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgZ3JpZC1yb3c6IDFcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtc2tpbGxzLWhvdGJhciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enticing Experiences");
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
        position: 'Software Developer Part-time',
        duration: 'June 2020 - Now',
        description: '<li>Implementing user stories for <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a>\n' +
            'project in Angular 9 and Firebase and writing end-to-end and unit tests in Cypress and Jasmine for them</li>' +
            '<li>Helped develop a new layout for real estate vendor cards/pages, integrate\n' +
            'a blog page as updated by an ETL job, and improve site’s SEO, among other features</li>' +
            '<li>Engages in daily standups, iteration planning meetings, retrospectives, and pair\n' +
            'programming sessions as part of an Agile team with a kanban workflow based in Jira</li>',
        skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'Jasmine', 'Jira']
    },
    {
        image: {
            path: 'assets/logos/uf.png',
            alt: 'UF Logo',
            class: 'uf'
        },
        company: 'UF CISE',
        position: 'Applications of Discrete Structures Teaching Assistant',
        duration: 'January 2020 - Now',
        description: '<li>Prepares powerpoint presentations and example problems for brief lecture reviews over core concepts during weekly discussions</li>' +
            '<li>Addresses student questions and concerns during weekly office hours</li>' +
            '<li>Engages in weekly conferences with the professor and other fellow TAs to plan out the logistics of the course,\n' +
            'such as times to grade and course content being reviewed</li>' +
            '<li>Develops rubrics for grading questions with other TAs</li>',
        skills: []
    },
    {
        image: {
            path: 'assets/logos/bookmarkd.png',
            alt: 'Bookmark\'d Logo',
            class: 'bookmarkd'
        },
        company: 'BookMark\'d',
        position: 'Full-stack Web Developer',
        duration: 'October 2019 - July 2020',
        description: '<li>Visit the website now in testing: <a href="https://bookmarkdofficial.com/" target="_blank" class="bookmarkd-link">"BookMark\'d"</a></li>' +
            '<li>Developed microservices as part of a REST API using Node + Express\n' +
            '(e.g. user authentication and authorization, product searching, and payment processing) and documents in Confluence</li>' +
            '<li>Leverages a variety of 3rd party APIs and software (Passport.js, Elasticsearch, Square, Amazon SES, etc.)\n' +
            'and manages database of user and products through MongoDB</li>' +
            '<li>Managed web app infrastructure through AWS services: runs app on EC2 instances, develops a pipeline for CI/CD\n' +
            'via CodeCommit, CodeDeploy + CodePipeline, and sets up domain name and SSL certificate with Route 53 and Amazon Certificate Manager</li>' +
            '<li>Implemented a minimalistic user interface through React for displaying user information and providing\n' +
            'access to appropriate functionality/services</li>',
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
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/home/projects/projects.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__["ExperiencesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 16px;\n  background: #3B3D3A;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-right: 16px;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 20px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #82ADEE;\n}\nbody[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background: #3B3D3A;\n  min-height: 300px;\n  padding: 16px;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 84%;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 28px;\n  margin: auto;\n  color: #ffffff;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #82ADEE;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ047QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQURKO0FBR0k7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRE47QUFJSTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGTiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjM0IzRDNBO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICM4MkFERUU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBzZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQjNEM0E7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICB3aWR0aDogODQlO1xyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBjb2xvcjogIzgyQURFRTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/projects/project-card/project-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/projects/project-card/project-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectCardComponent {
    constructor() { }
    ngOnInit() { }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project" }, decls: 4, vars: 5, consts: [[1, "project-card"], [3, "src", "alt"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.project.image.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.project.image.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.project.image.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
    } }, styles: ["div.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  width: 280px;\n  height: 260px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\ndiv.project-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 32px;\n  font-weight: normal;\n}\ndiv.project-card.crypto-image[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #5FA0F5;\n}\ndiv.project-card.crypto-image[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #5FA0F5;\n}\ndiv.project-card.no-image-available[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\ndiv.project-card.no-image-available[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\ndiv.project-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBRUU7RUFDRSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBT0k7RUFDRSxjQUFBO0FBTE47QUFTRTtFQUNFLG1CQUFBO0FBUEo7QUFTSTtFQUNFLFlBQUE7QUFQTjtBQVdFO0VBQ0UsZUFBQTtBQVRKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnByb2plY3QtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoIzAwMDAwMCwgMC4yNSk7XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gICYuY3J5cHRvLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNUZBMEY1O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIC8vIHdpZHRoOiAyNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjNUZBMEY1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5uby1pbWFnZS1hdmFpbGFibGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-card',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/projects/project-display/project-display.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/projects/project-display/project-display.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDisplayComponent", function() { return ProjectDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/skills-hotbar/skills-hotbar.component */ "./src/app/home/shared/skills-hotbar/skills-hotbar.component.ts");




function ProjectDisplayComponent_div_0_app_skills_hotbar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skills-hotbar", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx_r1.project.skills)("isLightMode", true);
} }
function ProjectDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDisplayComponent_div_0_app_skills_hotbar_6_Template, 1, 2, "app-skills-hotbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.project.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.skills.length > 0);
} }
class ProjectDisplayComponent {
    constructor() {
        this.project = null;
    }
    ngOnInit() {
    }
}
ProjectDisplayComponent.ɵfac = function ProjectDisplayComponent_Factory(t) { return new (t || ProjectDisplayComponent)(); };
ProjectDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDisplayComponent, selectors: [["app-project-display"]], inputs: { project: "project" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "innerHTML"], [3, "skills", "isLightMode", 4, "ngIf"], [3, "skills", "isLightMode"]], template: function ProjectDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectDisplayComponent_div_0_Template, 7, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__["SkillsHotbarComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  text-align: left;\n  border-top: 2px solid #41DC1A;\n  border-bottom: 2px solid #41DC1A;\n  padding: 24px 0;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 32px;\n  font-weight: normal;\n  margin: 0;\n  color: #41DC1A;\n}\ndiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 26px;\n  font-weight: normal;\n  margin: 0;\n  color: #000000;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  list-style: url(\"/../../../../assets/icons/arrow-right.svg\");\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWRpc3BsYXkvcHJvamVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSw0REFBQTtBQURKO0FBR0k7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvamVjdHMvcHJvamVjdC1kaXNwbGF5L3Byb2plY3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzQxREMxQTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQxREMxQTtcclxuICBwYWRkaW5nOiAyNHB4IDA7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNDFEQzFBO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDAgMCA0cHggMDtcclxuICAgIGxpc3Qtc3R5bGU6IHVybCgnLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmcnKTtcclxuXHJcbiAgICA6Om5nLWRlZXAgbGkge1xyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-display',
                templateUrl: './project-display.component.html',
                styleUrls: ['./project-display.component.scss']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/projects/project.ts":
/*!******************************************!*\
  !*** ./src/app/home/projects/project.ts ***!
  \******************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
const Projects = [
    {
        image: {
            path: 'assets/logos/crypto-image.png',
            alt: 'Crypto Image Lock',
            class: 'crypto-image'
        },
        name: 'CryptoImage',
        duration: 'March 2020',
        description: '<li>A 2020 SwampHacks project that either encodes a message in an image or decodes a message within an image by\n' +
            'adjusting the RGB values of select pixels to the message’s ASCII values or vice versa</li>',
        skills: ['React', 'Flask']
    },
    {
        image: {
            path: 'assets/logos/no-image-available.png',
            alt: 'No Image Available',
            class: 'no-image-available'
        },
        name: 'TimeTracker',
        duration: 'August 2020',
        description: '<li>A project that aims to more effectively allow groups to schedule times to meet up</li>',
        skills: ['Angular 9', 'Firebase']
    },
    {
        image: {
            path: 'assets/logos/no-image-available.png',
            alt: 'No Image Available',
            class: 'no-image-available'
        },
        name: 'Movie Tracker',
        duration: 'August 2020',
        description: '<li>A project that aims to find and display the frequency with which certain movies are mentioned in the subreddit r/movie</li>',
        skills: ['Python', 'Selenium']
    }
];


/***/ }),

/***/ "./src/app/home/projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/app/home/projects/project.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _project_display_project_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-display/project-display.component */ "./src/app/home/projects/project-display/project-display.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/home/projects/project-card/project-card.component.ts");






function ProjectsComponent_app_project_card_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_app_project_card_6_Template_app_project_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const project_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.select(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1);
} }
class ProjectsComponent {
    constructor() {
        this.projects = _project__WEBPACK_IMPORTED_MODULE_1__["Projects"];
        this.selectProjectIndex = { project: null, index: -1 };
    }
    ngOnInit() { }
    select(project) {
        this.selectProjectIndex = {
            project,
            index: _project__WEBPACK_IMPORTED_MODULE_1__["Projects"].findIndex((proj) => proj === project)
        };
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 4, consts: [[1, "project-container"], [3, "project", "click", 4, "ngFor", "ngForOf"], [3, "project"], [3, "project", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Project Platter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's been on my mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_app_project_card_6_Template, 1, 1, "app-project-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-project-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("follow-item-" + ctx.selectProjectIndex.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.selectProjectIndex.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _project_display_project_display_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDisplayComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]], styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  margin: 16px 0 2px 0;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: auto;\n  color: #41DC1A;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 30px auto;\n  display: grid;\n  text-align: left;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 30px;\n  row-gap: 30px;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\n@media all and (max-width: 1200px) {\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n    grid-row: 3;\n  }\n}\n@media all and (max-width: 750px) {\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n    grid-row: 3;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n    grid-row: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0k7RUFDRSxtQkFBQTtBQUhOO0FBS007RUFDRSxXQUFBO0FBSFI7QUFNTTtFQUNFLFdBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBV0E7RUFFSTtJQUNFLHFDQUFBO0VBVEo7RUFXSTtJQUNFLG1CQUFBO0VBVE47RUFXTTtJQUNFLFdBQUE7RUFUUjtFQVlNO0lBQ0UsV0FBQTtFQVZSO0VBYU07SUFDRSxXQUFBO0VBWFI7QUFDRjtBQWlCQTtFQUVJO0lBQ0UsMEJBQUE7RUFoQko7RUFrQkk7SUFDRSxjQUFBO0VBaEJOO0VBa0JNO0lBQ0UsV0FBQTtFQWhCUjtFQW1CTTtJQUNFLFdBQUE7RUFqQlI7RUFvQk07SUFDRSxXQUFBO0VBbEJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgMnB4IDA7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjNDFEQzFBO1xyXG4gIH1cclxuXHJcbiAgZGl2LnByb2plY3QtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgY29sdW1uLWdhcDogMzBweDtcclxuICAgIHJvdy1nYXA6IDMwcHg7XHJcblxyXG4gICAgYXBwLXByb2plY3QtZGlzcGxheSB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcblxyXG4gICAgICAmLmZvbGxvdy1pdGVtLTAge1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmZvbGxvdy1pdGVtLTEge1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmZvbGxvdy1pdGVtLTIge1xyXG4gICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICBzZWN0aW9uIHtcclxuICAgIGRpdi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblxyXG4gICAgICBhcHAtcHJvamVjdC1kaXNwbGF5IHtcclxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTAge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTEge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTIge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgZGl2LnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgICBhcHAtcHJvamVjdC1kaXNwbGF5IHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMTtcclxuXHJcbiAgICAgICAgJi5mb2xsb3ctaXRlbS0wIHtcclxuICAgICAgICAgIGdyaWQtcm93OiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mb2xsb3ctaXRlbS0xIHtcclxuICAgICAgICAgIGdyaWQtcm93OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mb2xsb3ctaXRlbS0yIHtcclxuICAgICAgICAgIGdyaWQtcm93OiA0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/shared/skills-hotbar/skills-hotbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/shared/skills-hotbar/skills-hotbar.component.ts ***!
  \**********************************************************************/
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("light-mode", ctx_r0.isLightMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class SkillsHotbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsHotbarComponent.ɵfac = function SkillsHotbarComponent_Factory(t) { return new (t || SkillsHotbarComponent)(); };
SkillsHotbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsHotbarComponent, selectors: [["app-skills-hotbar"]], inputs: { skills: "skills", isLightMode: "isLightMode" }, decls: 3, vars: 1, consts: [[1, "skills-container"], [3, "light-mode", 4, "ngFor", "ngForOf"]], template: function SkillsHotbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsHotbarComponent_li_2_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["div.skills-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 50px;\n}\ndiv.skills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  column-gap: 18px;\n  grid-auto-columns: -webkit-max-content;\n  grid-auto-columns: max-content;\n  list-style: none;\n  margin: 4px 0;\n  padding: 0;\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n}\ndiv.skills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  grid-row: 1;\n  min-width: 160px;\n  padding: 6px;\n  border-radius: 14px;\n  border: 1px solid #82ADEE;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  text-align: center;\n  background: #3B3D3A;\n  color: #82ADEE;\n}\ndiv.skills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.light-mode[_ngcontent-%COMP%] {\n  border: 1px solid #41DC1A;\n  color: #41DC1A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaGFyZWQvc2tpbGxzLWhvdGJhci9za2lsbHMtaG90YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxpQ0FBQTtBQUFKO0FBRUk7RUFDRSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGTjtBQUlNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NoYXJlZC9za2lsbHMtaG90YmFyL3NraWxscy1ob3RiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBjb2x1bW4tZ2FwOiAxOHB4O1xyXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGdyaWQtcm93OiAxO1xyXG5cclxuICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODJBREVFO1xyXG5cclxuICAgICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzQjNEM0E7XHJcbiAgICAgIGNvbG9yOiAjODJBREVFO1xyXG5cclxuICAgICAgJi5saWdodC1tb2RlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDFEQzFBO1xyXG4gICAgICAgIGNvbG9yOiAjNDFEQzFBO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsHotbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills-hotbar',
                templateUrl: './skills-hotbar.component.html',
                styleUrls: ['./skills-hotbar.component.scss']
            }]
    }], function () { return []; }, { skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLightMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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

module.exports = __webpack_require__(/*! C:\TeaLeaf\Projects\personal-website\littealeaf28.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map