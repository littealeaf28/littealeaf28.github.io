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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _exciting_exciting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exciting/exciting.component */ "./src/app/exciting/exciting.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"], pathMatch: 'full' },
    { path: 'exciting', component: _exciting_exciting_component__WEBPACK_IMPORTED_MODULE_4__["ExcitingComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'personal-website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["routerLink", ""], ["routerLink", "exciting"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Exciting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 16px;\n  background: #3B3D3A;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-right: 16px;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 20px;\n  text-decoration: none;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #82ADEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjM0IzRDNBO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6ICM4MkFERUU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _exciting_exciting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./exciting/exciting.component */ "./src/app/exciting/exciting.component.ts");
/* harmony import */ var _exciting_fun_carousel_fun_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exciting/fun-carousel/fun-carousel.component */ "./src/app/exciting/fun-carousel/fun-carousel.component.ts");
/* harmony import */ var _exciting_topic_bulletin_topic_bulletin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exciting/topic-bulletin/topic-bulletin.component */ "./src/app/exciting/topic-bulletin/topic-bulletin.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["BUCKET"], useValue: 'littealeaf.appspot.com' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _home_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_5__["ExperiencesComponent"],
        _home_experiences_experience_card_experience_card_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceCardComponent"],
        _home_shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_8__["SkillsHotbarComponent"],
        _home_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
        _home_projects_project_display_project_display_component__WEBPACK_IMPORTED_MODULE_10__["ProjectDisplayComponent"],
        _home_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCardComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
        _exciting_exciting_component__WEBPACK_IMPORTED_MODULE_14__["ExcitingComponent"],
        _exciting_fun_carousel_fun_carousel_component__WEBPACK_IMPORTED_MODULE_15__["FunCarouselComponent"],
        _exciting_topic_bulletin_topic_bulletin_component__WEBPACK_IMPORTED_MODULE_16__["TopicBulletinComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCarouselModule"]] }); })();
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
                    _home_projects_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_11__["ProjectCardComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
                    _exciting_exciting_component__WEBPACK_IMPORTED_MODULE_14__["ExcitingComponent"],
                    _exciting_fun_carousel_fun_carousel_component__WEBPACK_IMPORTED_MODULE_15__["FunCarouselComponent"],
                    _exciting_topic_bulletin_topic_bulletin_component__WEBPACK_IMPORTED_MODULE_16__["TopicBulletinComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_6__["AngularSvgIconModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["PdfViewerModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbCarouselModule"]
                ],
                providers: [
                    { provide: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["BUCKET"], useValue: 'littealeaf.appspot.com' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/exciting/exciting.component.ts":
/*!************************************************!*\
  !*** ./src/app/exciting/exciting.component.ts ***!
  \************************************************/
/*! exports provided: ExcitingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcitingComponent", function() { return ExcitingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fun_carousel_fun_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fun-carousel/fun-carousel.component */ "./src/app/exciting/fun-carousel/fun-carousel.component.ts");
/* harmony import */ var _topic_bulletin_topic_bulletin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-bulletin/topic-bulletin.component */ "./src/app/exciting/topic-bulletin/topic-bulletin.component.ts");




class ExcitingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExcitingComponent.ɵfac = function ExcitingComponent_Factory(t) { return new (t || ExcitingComponent)(); };
ExcitingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExcitingComponent, selectors: [["app-exciting"]], decls: 3, vars: 0, template: function ExcitingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cool-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-topic-bulletin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_fun_carousel_fun_carousel_component__WEBPACK_IMPORTED_MODULE_1__["FunCarouselComponent"], _topic_bulletin_topic_bulletin_component__WEBPACK_IMPORTED_MODULE_2__["TopicBulletinComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaXRpbmcvZXhjaXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4Y2l0aW5nL2V4Y2l0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcitingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exciting',
                templateUrl: './exciting.component.html',
                styleUrls: ['./exciting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/exciting/fun-carousel/fun-carousel.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/exciting/fun-carousel/fun-carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: FunCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunCarouselComponent", function() { return FunCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");




function FunCarouselComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Astro Donut Carrot Nyan Adventures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FunCarouselComponent {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
    }
}
FunCarouselComponent.ɵfac = function FunCarouselComponent_Factory(t) { return new (t || FunCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
FunCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunCarouselComponent, selectors: [["app-cool-carousel"]], decls: 7, vars: 0, consts: [["pauseOnFocus", "true", "pauseOnHover", "true", "wrap", "true", "showNavigationArrows", "true"], ["ngbSlide", ""], ["controls", "", "autoplay", ""], ["src", "assets/Astro%20Donut%20Carrot%20Nyan.mp4", "type", "video/mp4"]], template: function FunCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Carousel of Fun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Byproducts of my mind...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FunCarouselComponent_ng_template_6_Template, 5, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]], styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  margin: 16px 0 2px 0;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: auto;\n  color: #82ADEE;\n}\nsection[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  width: 94%;\n  margin: auto;\n}\nsection[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 12px;\n}\nsection[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: bold;\n  font-size: 28px;\n}\nsection[_ngcontent-%COMP%]   ngb-carousel[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaXRpbmcvZnVuLWNhcm91c2VsL2Z1bi1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRko7QUFJSTtFQUNFLFlBQUE7QUFGTjtBQUlNO0VBQ0UscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSFIiLCJmaWxlIjoic3JjL2FwcC9leGNpdGluZy9mdW4tY2Fyb3VzZWwvZnVuLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgMnB4IDA7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjODJBREVFO1xyXG4gIH1cclxuXHJcbiAgbmdiLWNhcm91c2VsIHtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW46IDEycHg7XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZpZGVvIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cool-carousel',
                templateUrl: './fun-carousel.component.html',
                styleUrls: ['./fun-carousel.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/exciting/topic-bulletin/topic-bulletin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/exciting/topic-bulletin/topic-bulletin.component.ts ***!
  \*********************************************************************/
/*! exports provided: TopicBulletinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicBulletinComponent", function() { return TopicBulletinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TopicBulletinComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.google.com/search?q=" + topic_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", topic_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r1.date);
} }
class TopicBulletinComponent {
    constructor(afs) {
        this.afs = afs;
    }
    ngOnInit() {
        this.afs.collection('topics').valueChanges().subscribe(topics => {
            this.topics = topics.sort((topicOne, topicTwo) => new Date(topicTwo.date).getTime() - new Date(topicOne.date).getTime());
        });
    }
}
TopicBulletinComponent.ɵfac = function TopicBulletinComponent_Factory(t) { return new (t || TopicBulletinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
TopicBulletinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicBulletinComponent, selectors: [["app-topic-bulletin"]], decls: 7, vars: 1, consts: [[1, "topics-container"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"]], template: function TopicBulletinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Neat Things!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's been on my mind...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopicBulletinComponent_a_6_Template, 4, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  margin: 16px 0 2px 0;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: auto;\n  color: #82ADEE;\n}\nsection[_ngcontent-%COMP%]   div.topics-container[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 250px;\n  overflow-y: auto;\n  margin: auto;\n  padding: 8px;\n}\nsection[_ngcontent-%COMP%]   div.topics-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  color: #3B3D3A;\n  text-decoration: none;\n  background-color: rgba(130, 173, 238, 0.08);\n  border-radius: 12px;\n  padding: 6px;\n  margin: 4px;\n}\nsection[_ngcontent-%COMP%]   div.topics-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 0;\n  margin: 0;\n}\nsection[_ngcontent-%COMP%]   div.topics-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(130, 173, 238, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjaXRpbmcvdG9waWMtYnVsbGV0aW4vdG9waWMtYnVsbGV0aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFRTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxxQkFBQTtFQUVBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBRUEsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSk47QUFNTTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKUjtBQU9NO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0FBTFIiLCJmaWxlIjoic3JjL2FwcC9leGNpdGluZy90b3BpYy1idWxsZXRpbi90b3BpYy1idWxsZXRpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMTZweCAwIDJweCAwO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogIzgyQURFRTtcclxuICB9XHJcblxyXG4gIGRpdi50b3BpY3MtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgY29sb3I6ICMzQjNEM0E7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzgyQURFRSwgMC4wOCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjODJBREVFLCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicBulletinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic-bulletin',
                templateUrl: './topic-bulletin.component.html',
                styleUrls: ['./topic-bulletin.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__["SkillsHotbarComponent"]], styles: ["div.experience-card[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  grid-template-columns: 300px minmax(0, 100%);\n  grid-template-rows: repeat(3, minmax(0, -webkit-min-content)) minmax(0, -webkit-max-content) minmax(0, -webkit-min-content);\n  grid-template-rows: repeat(3, minmax(0, min-content)) minmax(0, max-content) minmax(0, min-content);\n  grid-column-gap: 24px;\n  grid-row-gap: 6px;\n  margin: 30px 0;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-column: 1;\n  grid-row: 1/5;\n  width: 280px;\n  height: 260px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.jpmchase[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #00477b;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.jpmchase[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 240px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.studio-reach[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #74C1D9;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.studio-reach[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 260px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.bookmarkd[_ngcontent-%COMP%] {\n  background: #096F37;\n  border: 2px solid #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.bookmarkd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.uf[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #00529B;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.uf[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.no-image-available[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\ndiv.experience-card[_ngcontent-%COMP%]   div.image-container.no-image-available[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 34px;\n  font-weight: normal;\n  margin: 0;\n  color: #82ADEE;\n}\ndiv.experience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 28px;\n  font-weight: normal;\n  margin: 0;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  margin: 0;\n  font-family: \"Advent Pro\", sans-serif;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  list-style: url(\"/assets/icons/arrow-right.svg\");\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  color: #000000;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a {\n  text-decoration: none;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a:hover {\n  cursor: pointer;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.ayhr-link {\n  color: #da3823;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.ayhr-link:hover {\n  color: #FF7373;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.powerpoint-link {\n  color: #3e85ea;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.powerpoint-link:hover {\n  color: #5dacee;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.bookmarkd-link {\n  color: #0FCA64;\n}\ndiv.experience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.bookmarkd-link:hover {\n  color: #096F37;\n}\ndiv.experience-card[_ngcontent-%COMP%]   app-skills-hotbar[_ngcontent-%COMP%] {\n  grid-column: 2;\n}\n@media all and (max-width: 1000px) {\n  div.experience-card[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 100%);\n    justify-items: center;\n  }\n  div.experience-card[_ngcontent-%COMP%]   div.image-container[_ngcontent-%COMP%] {\n    grid-row: 1;\n  }\n  div.experience-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], div.experience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  div.experience-card[_ngcontent-%COMP%]   app-skills-hotbar[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-column: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSwySEFBQTtFQUFBLG1HQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBREo7QUFHSTtFQUtFLG1CQUFBO0VBQ0EseUJBQUE7QUFMTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBS0k7RUFLRSxtQkFBQTtFQUNBLHlCQUFBO0FBUE47QUFFTTtFQUNFLFlBQUE7QUFBUjtBQU9JO0VBS0UsbUJBQUE7RUFDQSx5QkFBQTtBQVROO0FBSU07RUFDRSxZQUFBO0FBRlI7QUFTSTtFQUtFLG1CQUFBO0VBQ0EseUJBQUE7QUFYTjtBQU1NO0VBQ0UsWUFBQTtBQUpSO0FBV0k7RUFLRSxtQkFBQTtBQWJOO0FBU007RUFDRSxZQUFBO0FBUFI7QUFlRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFiSjtBQWdCRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFkSjtBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7QUFmSjtBQWtCRTtFQUNFLFNBQUE7RUFDQSxnREFBQTtBQWhCSjtBQWtCSTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWhCTjtBQWtCTTtFQUNFLHFCQUFBO0FBaEJSO0FBa0JRO0VBQ0UsZUFBQTtBQWhCVjtBQW1CUTtFQUNFLGNBQUE7QUFqQlY7QUFtQlU7RUFDRSxjQUFBO0FBakJaO0FBcUJRO0VBQ0UsY0FBQTtBQW5CVjtBQXFCVTtFQUNFLGNBQUE7QUFuQlo7QUF1QlE7RUFDRSxjQUFBO0FBckJWO0FBdUJVO0VBQ0UsY0FBQTtBQXJCWjtBQTRCRTtFQUNFLGNBQUE7QUExQko7QUE4QkE7RUFDRTtJQUNFLHNDQUFBO0lBQ0EscUJBQUE7RUEzQkY7RUE2QkU7SUFDRSxXQUFBO0VBM0JKO0VBOEJFO0lBQ0Usa0JBQUE7RUE1Qko7RUErQkU7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQTdCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9leHBlcmllbmNlcy9leHBlcmllbmNlLWNhcmQvZXhwZXJpZW5jZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggbWlubWF4KDAsIDEwMCUpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgwLCBtaW4tY29udGVudCkpIG1pbm1heCgwLCBtYXgtY29udGVudCkgbWlubWF4KDAsIG1pbi1jb250ZW50KTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDI0cHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiA2cHg7XHJcblxyXG4gIG1hcmdpbjogMzBweCAwO1xyXG5cclxuICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAxIC8gNTtcclxuXHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgjMDAwMDAwLCAwLjI1KTtcclxuXHJcbiAgICAmLmpwbWNoYXNlIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDQ3N2I7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdHVkaW8tcmVhY2gge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzc0QzFEOTtcclxuICAgIH1cclxuXHJcbiAgICAmLmJvb2ttYXJrZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDk2RjM3O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMEZDQTY0O1xyXG4gICAgfVxyXG5cclxuICAgICYudWYge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwNTI5QjtcclxuICAgIH1cclxuXHJcbiAgICAmLm5vLWltYWdlLWF2YWlsYWJsZSB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAvL2JvcmRlcjogMnB4IHNvbGlkICMwMDUyOUI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzgyQURFRTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogdXJsKCcvYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2ZycpO1xyXG5cclxuICAgIDo6bmctZGVlcCBsaSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQWR2ZW50IFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYXloci1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiAjZGEzODIzO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNzM3MztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucG93ZXJwb2ludC1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2U4NWVhO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVkYWNlZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYm9va21hcmtkLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICMwRkNBNjQ7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDk2RjM3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLXNraWxscy1ob3RiYXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICBkaXYuZXhwZXJpZW5jZS1jYXJkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEwMCUpO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGRpdi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICBncmlkLXJvdzogMVxyXG4gICAgfVxyXG5cclxuICAgIGgxLCBoMyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtc2tpbGxzLWhvdGJhciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
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
            path: 'assets/logos/jpmchase.png',
            alt: 'JPMorgan Chase & Co. Logo',
            class: 'jpmchase'
        },
        company: 'JPMorgan Chase & Co.',
        position: 'Software Engineer Program Intern | Intern Team Dev Lead',
        duration: 'June 2021 - August 2021',
        description: '<li>Implement and deploy features for a Spring Boot, Angular web app that enables internal\n' +
            'and external users to self service for aggregated data rather than go through operations (OPS) team</li>' +
            '<li>Improve efficiency for OPS teams by reducing time spent on ~1100 failed data points/month and\n' +
            'potentially eliminating ~480 data inquiries/month</li>' +
            '<li>Lead intern team to ensure project milestones are met and help explain relevant\n' +
            'technologies and concepts (e.g. Git, JUnit testing)</li>' +
            '<li>Individually develop and document a package that abstracts, updates, and consolidates fragmented\n' +
            'use of the Elasticsearch client</li>',
        skills: ['TypeScript', 'Java', 'Angular', 'Spring Boot', 'Elasticsearch', 'OracleSQL', 'JUnit', 'Mockito', 'Splunk', 'Confluence', 'Jira']
    },
    {
        image: {
            path: 'assets/logos/studio-reach.png',
            alt: 'Studio Reach Logo',
            class: 'studio-reach'
        },
        company: 'Studio Reach',
        position: 'Software Developer Part-time',
        duration: 'June 2020 - March 2021',
        description: '<li>Expand a Firebase, Angular web app - <a href="https://are-you-house-ready-dev.web.app/" target="_blank" class="ayhr-link">“Are You House Ready”</a> -\n' +
            'for connecting clients to real estate vendors in order to improve low site traffic</li>' +
            '<li>Develop a questionnaire for guiding new users, new layouts for vendor cards/pages, etc.</li>' +
            '<li>Engage in daily standups, pair programming, etc. as part of an agile team with kanban workflow</li>',
        skills: ['TypeScript', 'Angular', 'Firebase', 'Firestore', 'GitLab CI/CD', 'Cypress', 'Jasmine', 'Jira']
    },
    {
        image: {
            path: 'assets/logos/uf.png',
            alt: 'UF Logo',
            class: 'uf'
        },
        company: 'UF Computer & Information Science & Engineering',
        position: 'Teaching Assistant',
        duration: 'January 2020 - Present',
        description: '<li><strong>Courses</strong>: "Operating Systems" (08/2021 - Present), "Applications of Discrete Structures" (01/2020 - 05/2021),\n' +
            '"Computer Graphics" (01/2021 - 05/2021)</li>' +
            '<li>Refactor and extend existing OpenGL code scaffolds for “Computer Graphics” projects to fit new\n' +
            'requirements and eases learning experience for students, including additional resources and links </li>' +
            '<li>Prepare presentations and example problems for lecture reviews for “Application of Discrete Structures" discussions\n' +
            'for 20-30 students</li>',
        skills: ['C++', 'CMake', 'OpenGL']
    },
    {
        image: {
            path: 'assets/logos/uf.png',
            alt: 'UF Logo',
            class: 'uf'
        },
        company: 'UF SurfLab',
        position: 'Research Assistant',
        duration: 'October 2019 - Present',
        description: '<li>Contribute to a Unity VR app for converting MRI/CT scans to simulation-ready ready pieces\n' +
            'of anatomy for surgeons to train and learn surgery with using VR</li>' +
            '<li>Develop prototypes on core feature design decisions\n</li>' +
            '<ul><li>Implement smart thickness estimation for vessels using Blender API and sklearn</li>' +
            '<li>Write scripts for examining DICOM (medical image) data to investigate extent of preprocessing needed</li></ul>',
        skills: ['C#', 'Python', 'C++', 'Unity', 'CMake', 'OpenVDB', 'sklearn', 'Blender']
    },
    {
        image: {
            path: 'assets/logos/bookmarkd.png',
            alt: 'Bookmark\'d Logo',
            class: 'bookmarkd'
        },
        company: 'BookMark\'d',
        position: 'Software Developer Part-time',
        duration: 'October 2019 - July 2020',
        description: '<li>Implement a React, Node web app for college student ecommerce, including\n' +
            'real-time chat stored in MongoDB, product search via Elasticsearch, and payment processing through Stripe</li>' +
            '<li>Utilizes AWS to run app on an EC2 instance, add CI/CD pipeline using\n' +
            'CodePipeline (Code Commit, Code Deploy), and set up site’s domain name & SSL certificate</li>',
        skills: ['React', 'Node', 'Express', 'Elasticsearch', 'MongoDB', 'Passport.js', 'Stripe API', 'Confluence', 'AWS',
            'EC2', 'CodePipeline', 'Route 53', 'AWS Certificate Manager']
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hey. How have you been?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I'm Tianrui.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A curious, exploratory developer with a voracious appetite for technological innovation and application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__["ExperiencesComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  background: #3B3D3A;\n  min-height: 300px;\n  padding: 16px;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 84%;\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 28px;\n  margin: auto;\n  color: #ffffff;\n}\nbody[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #82ADEE;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 42px;\n  font-weight: normal;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDTjtBQUVJO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0IzRDNBO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICM4MkFERUU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQW1hcmFudGgnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
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
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project", selected: "selected" }, decls: 4, vars: 7, consts: [[1, "project-card"], [3, "src", "alt"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.project.image.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.project.image.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.project.image.alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
    } }, styles: ["div.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  width: 280px;\n  height: 260px;\n  border-radius: 24px;\n  box-sizing: border-box;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n}\ndiv.project-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 32px;\n  font-weight: normal;\n}\ndiv.project-card.crypto-image[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #5FA0F5;\n}\ndiv.project-card.crypto-image[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #5FA0F5;\n}\ndiv.project-card.miri[_ngcontent-%COMP%] {\n  border: 2px solid #73BCFF;\n  background: #232020;\n}\ndiv.project-card.miri[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 160px;\n}\ndiv.project-card.miri[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #73BCFF;\n}\ndiv.project-card.no-image-available[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\ndiv.project-card.no-image-available[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\ndiv.project-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBRUU7RUFDRSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBT0k7RUFDRSxjQUFBO0FBTE47QUFTRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsWUFBQTtBQVBOO0FBVUk7RUFDRSxjQUFBO0FBUk47QUFZRTtFQUNFLG1CQUFBO0FBVko7QUFZSTtFQUNFLFlBQUE7QUFWTjtBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2plY3RzL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucHJvamVjdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgjMDAwMDAwLCAwLjI1KTtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgJi5jcnlwdG8taW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1RkEwRjU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgLy8gd2lkdGg6IDI2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICM1RkEwRjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm1pcmkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzczQkNGRjtcclxuICAgIGJhY2tncm91bmQ6ICMyMzIwMjA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6ICM3M0JDRkY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm5vLWltYWdlLWF2YWlsYWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IERlY2lkZSBzb21ldGhpbmcgZWxzZSB0byBkbyBmb3Igc2VsZWN0aW5nXHJcbiAgLy8mLnNlbGVjdGVkIHtcclxuICAvLyAgYm9yZGVyOiAzcHggc29saWQgIzQxREMxQTtcclxuICAvL31cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-card',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss']
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
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




function ProjectDisplayComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.project.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.project.name);
} }
function ProjectDisplayComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.project.name);
} }
function ProjectDisplayComponent_div_0_app_skills_hotbar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skills-hotbar", 6);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx_r4.project.skills)("isLightMode", true);
} }
function ProjectDisplayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDisplayComponent_div_0_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectDisplayComponent_div_0_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDisplayComponent_div_0_app_skills_hotbar_7_Template, 1, 2, "app-skills-hotbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.link)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
ProjectDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDisplayComponent, selectors: [["app-project-display"]], inputs: { project: "project" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["noLink", ""], [3, "innerHTML"], [3, "skills", "isLightMode", 4, "ngIf"], ["target", "_blank", 3, "href"], [3, "skills", "isLightMode"]], template: function ProjectDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectDisplayComponent_div_0_Template, 8, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _shared_skills_hotbar_skills_hotbar_component__WEBPACK_IMPORTED_MODULE_2__["SkillsHotbarComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  text-align: left;\n  border-top: 2px solid #41DC1A;\n  border-bottom: 2px solid #41DC1A;\n  padding: 24px 0;\n}\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 32px;\n  font-weight: normal;\n  margin: 0;\n  color: #41DC1A;\n  text-decoration: none;\n}\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7de067;\n}\ndiv[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 26px;\n  font-weight: normal;\n  margin: 0;\n  color: #000000;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  list-style: url(\"/../../../../assets/icons/arrow-right.svg\");\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 22px;\n  color: #000000;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a {\n  text-decoration: none;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a:hover {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.miri-link {\n  color: #73BCFF;\n}\ndiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]     li   a.miri-link:hover {\n  color: #5fa0f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0LWRpc3BsYXkvcHJvamVjdC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBR0U7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsNERBQUE7QUFGSjtBQUlJO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRk47QUFJTTtFQUNFLHFCQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7QUFGVjtBQUtRO0VBQ0UsY0FBQTtBQUhWO0FBS1U7RUFDRSxjQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2plY3RzL3Byb2plY3QtZGlzcGxheS9wcm9qZWN0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM0MURDMUE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MURDMUE7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG5cclxuICBhLCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzQxREMxQTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3ZGUwNjc7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FtYXJhbnRoJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCAwIDRweCAwO1xyXG4gICAgbGlzdC1zdHlsZTogdXJsKCcvLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2ZycpO1xyXG5cclxuICAgIDo6bmctZGVlcCBsaSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQWR2ZW50IFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubWlyaS1saW5rIHtcclxuICAgICAgICAgIGNvbG9yOiAjNzNCQ0ZGO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVmYTBmNjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
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
            path: 'assets/logos/no-image-available.png',
            alt: 'No Image Available',
            class: 'no-image-available'
        },
        name: 'TA Attendance Grader',
        link: null,
        duration: 'October 2020',
        description: '<li>Develop script that automates attendance for 300-400 students in Zoom discussions for “Applications of Discrete Structures”, increasing efficiency</li>' +
            '<li>Utilize Pandas and Canvas API to extract info from Zoom CSV files and make grade changes</li>',
        skills: ['Python', 'Pandas', 'Canvas API']
    },
    {
        image: {
            path: 'assets/logos/miri-logo.png',
            alt: 'Miri Logo',
            class: 'miri'
        },
        name: 'Miri',
        link: 'https://github.com/meimunchi/timetracker',
        duration: 'August 2020 - Now',
        description: '<li>See what we\'re up to for <a target=_blank href="https://timetracker-ca7f3.web.app/signin" class="miri-link">Miri</a></li>' +
            '<li>Implementing a web app that aims to optimize the way groups schedule meetings that works for everyone</li>' +
            '<li>Allows individual user to keep track of own calendar (unlike When2meet) and easily use it when setting up group calendars\n' +
            'for determining free times to schedule meetings for</li>' +
            '<li>Facilitates such design through Angular 9 as the frontend, Firebase for hosting and database management, and Figma for creating page designs and logo</li>' +
            '<li>Sets up a GitLab CI/CD pipeline for efficient deployments on commits to master branch and for running e2e tests on every commit</li>',
        skills: ['TypeScript', 'Angular 9', 'Firebase', 'Cypress', 'GitLab', 'Figma']
    },
    {
        image: {
            path: 'assets/logos/crypto-image.png',
            alt: 'Crypto Image Lock',
            class: 'crypto-image'
        },
        name: 'CryptoImage',
        link: 'https://github.com/littealeaf28/cryptoimage',
        duration: 'March 2020',
        description: '<li>A 2020 SwampHacks project that either encodes a message in an image or decodes a message within an image by\n' +
            'adjusting the RGB values of select pixels to the message’s ASCII values or vice versa</li>' +
            '<li>Designed as a web app using React for taking in and displaying images and messages and Flask for processing image data\n' +
            'and performing the encoding and decoding</li>',
        skills: ['JavaScript', 'React', 'Flask']
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_app_project_card_6_Template_app_project_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const project_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1)("selected", i_r2 === ctx_r0.selectProjectIndex.index);
} }
class ProjectsComponent {
    constructor() {
        this.projects = _project__WEBPACK_IMPORTED_MODULE_1__["Projects"];
        this.selectProjectIndex = { project: null, index: -1 };
    }
    ngOnInit() { }
    select(project) {
        const selectIndex = _project__WEBPACK_IMPORTED_MODULE_1__["Projects"].findIndex((proj) => (proj === project));
        // If project is selected again, reset selectProjectIndex
        this.selectProjectIndex = (selectIndex === this.selectProjectIndex.index) ?
            { project: null, index: -1 } : { project, index: selectIndex };
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 8, vars: 4, consts: [[1, "project-container"], [3, "project", "selected", "click", 4, "ngFor", "ngForOf"], [3, "project"], [3, "project", "selected", "click"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Project Platter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What's been cooking in my mind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectsComponent_app_project_card_6_Template, 1, 2, "app-project-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-project-display", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("follow-item-" + ctx.selectProjectIndex.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.selectProjectIndex.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _project_display_project_display_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDisplayComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]], styles: ["section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Amaranth\", sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  margin: 16px 0 2px 0;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: auto;\n  color: #41DC1A;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 30px auto;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 100%));\n  column-gap: 30px;\n  row-gap: 30px;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n  grid-column: span 3;\n  text-align: left;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\nsection[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n  grid-row: 2;\n}\n@media all and (max-width: 1200px) {\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 100%));\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n    grid-row: 3;\n  }\n}\n@media all and (max-width: 750px) {\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 100%);\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-0[_ngcontent-%COMP%] {\n    grid-row: 2;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-1[_ngcontent-%COMP%] {\n    grid-row: 3;\n  }\n  section[_ngcontent-%COMP%]   div.project-container[_ngcontent-%COMP%]   app-project-display.follow-item-2[_ngcontent-%COMP%] {\n    grid-row: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFISjtBQUtJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUhOO0FBS007RUFDRSxXQUFBO0FBSFI7QUFNTTtFQUNFLFdBQUE7QUFKUjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBV0E7RUFFSTtJQUNFLGlEQUFBO0VBVEo7RUFXSTtJQUNFLG1CQUFBO0VBVE47RUFXTTtJQUNFLFdBQUE7RUFUUjtFQVlNO0lBQ0UsV0FBQTtFQVZSO0VBYU07SUFDRSxXQUFBO0VBWFI7QUFDRjtBQWlCQTtFQUVJO0lBQ0Usc0NBQUE7RUFoQko7RUFrQkk7SUFDRSxjQUFBO0VBaEJOO0VBa0JNO0lBQ0UsV0FBQTtFQWhCUjtFQW1CTTtJQUNFLFdBQUE7RUFqQlI7RUFvQk07SUFDRSxXQUFBO0VBbEJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWFyYW50aCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAxNnB4IDAgMnB4IDA7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjNDFEQzFBO1xyXG4gIH1cclxuXHJcbiAgZGl2LnByb2plY3QtY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxMDAlKSk7XHJcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xyXG4gICAgcm93LWdhcDogMzBweDtcclxuXHJcbiAgICBhcHAtcHJvamVjdC1kaXNwbGF5IHtcclxuICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICYuZm9sbG93LWl0ZW0tMCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZm9sbG93LWl0ZW0tMSB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuZm9sbG93LWl0ZW0tMiB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgZGl2LnByb2plY3QtY29udGFpbmVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDEwMCUpKTtcclxuXHJcbiAgICAgIGFwcC1wcm9qZWN0LWRpc3BsYXkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcblxyXG4gICAgICAgICYuZm9sbG93LWl0ZW0tMCB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZm9sbG93LWl0ZW0tMSB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZm9sbG93LWl0ZW0tMiB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBkaXYucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxMDAlKTtcclxuXHJcbiAgICAgIGFwcC1wcm9qZWN0LWRpc3BsYXkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxO1xyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTAge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTEge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZvbGxvdy1pdGVtLTIge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");




class ResumeComponent {
    constructor(storage) {
        this.storage = storage;
        this.resumeUrl = null;
        this.storage.ref('Li, Tianrui Resume.pdf').getDownloadURL()
            .subscribe(url => this.resumeUrl = url);
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 5, vars: 2, consts: [["target", "_blank", "download", "", 3, "href"], [3, "src"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume optimal viewing of my resume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "pdf-viewer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.resumeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.resumeUrl);
    } }, directives: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["PdfViewerComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: \"Advent Pro\", sans-serif;\n  font-weight: normal;\n  font-size: 24px;\n  margin: 24px auto 0 auto;\n  text-align: center;\n  width: 90%;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5FA0F5;\n}\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #3e85ea;\n}\n@media all and (max-width: 500px) {\n  pdf-viewer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUtBO0VBQ0U7SUFDRSxhQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMjRweCBhdXRvIDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzVGQTBGNTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMzZTg1ZWE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBwZGYtdmlld2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }]; }, null); })();


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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBXd_uyBgk4x4kn7gudocxtURX7Vr9CTSY',
        authDomain: 'littealeaf.firebaseapp.com',
        projectId: 'littealeaf',
        storageBucket: 'littealeaf.appspot.com',
        messagingSenderId: '175995909337',
        appId: '1:175995909337:web:ca8fdbf9200cb914893ac8',
        measurementId: 'G-V6FNRP18FW'
    }
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

module.exports = __webpack_require__(/*! D:\Projects\littealeaf28.github.io\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map