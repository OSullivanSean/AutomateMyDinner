(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addmeal/addmeal.component.css":
/*!***********************************************!*\
  !*** ./src/app/addmeal/addmeal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addmeal/addmeal.component.html":
/*!************************************************!*\
  !*** ./src/app/addmeal/addmeal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add new Meal</h2>\n<div class=\"panel-body\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <label>Name:</label>\n    </div>\n    <div class=\"row\">\n      <input [(ngModel)]=\"meal.name\" placeholder=\"name\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <label>Recipe:</label>\n    </div>\n    <div class=\"row\">\n      <textarea [(ngModel)]=\"meal.recipe\" rows=\"5\" placeholder=\"do this, then that...\"></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <label>Ingredients:</label>\n    </div>\n    <div class=\"row\">\n      <textarea [(ngModel)]=\"meal.ingredients\" rows=\"5\" placeholder=\"ingredient1,ingredient2\"></textarea>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <button class=\"btn-primary\" (click)=\"addMeal()\">Add</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/addmeal/addmeal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addmeal/addmeal.component.ts ***!
  \**********************************************/
/*! exports provided: AddmealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmealComponent", function() { return AddmealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_meal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/meal */ "./src/app/model/meal.ts");
/* harmony import */ var _meals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meals.service */ "./src/app/meals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddmealComponent = /** @class */ (function () {
    function AddmealComponent(mealservice, router) {
        this.mealservice = mealservice;
        this.router = router;
    }
    AddmealComponent.prototype.ngOnInit = function () {
        this.meal = new _model_meal__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
        this.meal.id = null;
        this.meal.name = '';
        this.meal.ingredients = '';
    };
    AddmealComponent.prototype.addMeal = function () {
        this.mealservice.addMeal(this.meal);
        this.router.navigateByUrl('meals');
    };
    AddmealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addmeal',
            template: __webpack_require__(/*! ./addmeal.component.html */ "./src/app/addmeal/addmeal.component.html"),
            styles: [__webpack_require__(/*! ./addmeal.component.css */ "./src/app/addmeal/addmeal.component.css")]
        }),
        __metadata("design:paramtypes", [_meals_service__WEBPACK_IMPORTED_MODULE_2__["MealsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddmealComponent);
    return AddmealComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Automate My Dinner</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/mealplan\">Meal Plan</a></li>\n      <li><a routerLink=\"/meals\">Meals</a></li>\n      <li><a routerLink=\"/addmeal\">Add New Meal</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/config\"><span class=\"glyphicon glyphicon-cog\"></span></a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"panel\">\n  <div class=\"panel-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mealplan/mealplan.component */ "./src/app/mealplan/mealplan.component.ts");
/* harmony import */ var _meals_meals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meals/meals.component */ "./src/app/meals/meals.component.ts");
/* harmony import */ var _addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addmeal/addmeal.component */ "./src/app/addmeal/addmeal.component.ts");
/* harmony import */ var _mealdetails_mealdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mealdetails/mealdetails.component */ "./src/app/mealdetails/mealdetails.component.ts");
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuration/configuration.component */ "./src/app/configuration/configuration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_6__["MealplanComponent"],
                _meals_meals_component__WEBPACK_IMPORTED_MODULE_7__["MealsComponent"],
                _addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_8__["AddmealComponent"],
                _mealdetails_mealdetails_component__WEBPACK_IMPORTED_MODULE_9__["MealdetailsComponent"],
                _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_10__["ConfigurationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/mealplan', pathMatch: 'full' },
                    { path: 'mealplan', component: _mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_6__["MealplanComponent"] },
                    { path: 'meals', component: _meals_meals_component__WEBPACK_IMPORTED_MODULE_7__["MealsComponent"] },
                    { path: 'mealdetails', component: _mealdetails_mealdetails_component__WEBPACK_IMPORTED_MODULE_9__["MealdetailsComponent"] },
                    { path: 'addmeal', component: _addmeal_addmeal_component__WEBPACK_IMPORTED_MODULE_8__["AddmealComponent"] },
                    { path: 'config', component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_10__["ConfigurationComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.component.css":
/*!***********************************************************!*\
  !*** ./src/app/configuration/configuration.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/configuration/configuration.component.html":
/*!************************************************************!*\
  !*** ./src/app/configuration/configuration.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  configuration works!\n</p>\n"

/***/ }),

/***/ "./src/app/configuration/configuration.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuration/configuration.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    ConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! ./configuration.component.html */ "./src/app/configuration/configuration.component.html"),
            styles: [__webpack_require__(/*! ./configuration.component.css */ "./src/app/configuration/configuration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/mealdetails/mealdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mealdetails/mealdetails.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mealdetails/mealdetails.component.html":
/*!********************************************************!*\
  !*** ./src/app/mealdetails/mealdetails.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table width=\"80%\" class=\"table table-bordered\">\n  <tr><td width=\"20%\"><b>Name:  </b></td><td style=\"word-wrap: break-word;max-width: 200px\">{{meal.name}}</td></tr>\n  <tr><td width=\"20%\"><b>Recipe:  </b></td><td style=\"word-wrap: break-word;max-width: 200px\">{{meal.recipe}}</td></tr>\n  <tr><td width=\"20%\"><b>Ingredients:</b></td><td style=\"word-wrap: break-word;max-width: 200px\">{{meal.ingredients}}</td></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/mealdetails/mealdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mealdetails/mealdetails.component.ts ***!
  \******************************************************/
/*! exports provided: MealdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealdetailsComponent", function() { return MealdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_meal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/meal */ "./src/app/model/meal.ts");
/* harmony import */ var _meals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meals.service */ "./src/app/meals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MealdetailsComponent = /** @class */ (function () {
    function MealdetailsComponent(mealService) {
        this.mealService = mealService;
    }
    MealdetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_meal__WEBPACK_IMPORTED_MODULE_1__["Meal"])
    ], MealdetailsComponent.prototype, "meal", void 0);
    MealdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mealdetails',
            template: __webpack_require__(/*! ./mealdetails.component.html */ "./src/app/mealdetails/mealdetails.component.html"),
            styles: [__webpack_require__(/*! ./mealdetails.component.css */ "./src/app/mealdetails/mealdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_meals_service__WEBPACK_IMPORTED_MODULE_2__["MealsService"]])
    ], MealdetailsComponent);
    return MealdetailsComponent;
}());



/***/ }),

/***/ "./src/app/mealplan.service.ts":
/*!*************************************!*\
  !*** ./src/app/mealplan.service.ts ***!
  \*************************************/
/*! exports provided: MealplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealplanService", function() { return MealplanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealplanService = /** @class */ (function () {
    function MealplanService(http) {
        this.http = http;
        this.mealPlanUrl = 'http://localhost:8089/plan';
    }
    MealplanService.prototype.getMealPlan = function () {
        return this.http.get(this.mealPlanUrl + '/current');
    };
    MealplanService.prototype.generateNewMealPlan = function () {
        return this.http.get(this.mealPlanUrl + '/new');
    };
    MealplanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MealplanService);
    return MealplanService;
}());



/***/ }),

/***/ "./src/app/mealplan/mealplan.component.css":
/*!*************************************************!*\
  !*** ./src/app/mealplan/mealplan.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mealplan/mealplan.component.html":
/*!**************************************************!*\
  !*** ./src/app/mealplan/mealplan.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-lg-4\">\n    <h2>Meal Plan:</h2>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Date</th>\n          <th>Meal</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let day of mealPlan.dayList\" (click)=\"onSelect(day)\">\n          <td>{{day.date | date:'EEE-dd-MMM-yy'}}</td>\n          <td>{{day.meal.name}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br>\n\n    <button class=\"btn-warning\" (click)=\"generateNewMealPlan()\">Generate New Plan</button>\n\n    <br>\n\n  </div>\n\n  <div class=\"col-lg-8\">\n    <h2>Details:</h2>\n    <div class=\"pre-scrollable\">\n      <app-mealdetails [meal]=\"selectedMeal\"></app-mealdetails>\n    </div>\n\n    <br>\n\n    <h2>Shopping List</h2>\n    <div class=\"col-lg-4\">\n      <div class=\"pre-scrollable\">\n        <table class=\"bordered-table\">\n          <tbody>\n          <tr *ngFor=\"let ingredient of mealPlan.ingredientsList\">\n            <td>\n              {{ingredient}}\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/mealplan/mealplan.component.ts":
/*!************************************************!*\
  !*** ./src/app/mealplan/mealplan.component.ts ***!
  \************************************************/
/*! exports provided: MealplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealplanComponent", function() { return MealplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mealplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mealplan.service */ "./src/app/mealplan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealplanComponent = /** @class */ (function () {
    function MealplanComponent(mealplanService) {
        this.mealplanService = mealplanService;
    }
    MealplanComponent.prototype.ngOnInit = function () {
        this.getMealPlan();
    };
    MealplanComponent.prototype.getMealPlan = function () {
        var _this = this;
        this.mealplanService.getMealPlan().subscribe(function (mealPlan) { return _this.mealPlan = mealPlan; });
    };
    MealplanComponent.prototype.generateNewMealPlan = function () {
        var _this = this;
        this.mealplanService.generateNewMealPlan().subscribe(function (mealPlan) { return _this.mealPlan = mealPlan; });
    };
    MealplanComponent.prototype.onSelect = function (day) {
        this.selectedMeal = day.meal;
    };
    MealplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mealplan',
            template: __webpack_require__(/*! ./mealplan.component.html */ "./src/app/mealplan/mealplan.component.html"),
            styles: [__webpack_require__(/*! ./mealplan.component.css */ "./src/app/mealplan/mealplan.component.css")]
        }),
        __metadata("design:paramtypes", [_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]])
    ], MealplanComponent);
    return MealplanComponent;
}());



/***/ }),

/***/ "./src/app/meals.service.ts":
/*!**********************************!*\
  !*** ./src/app/meals.service.ts ***!
  \**********************************/
/*! exports provided: MealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsService", function() { return MealsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealsService = /** @class */ (function () {
    function MealsService(http) {
        this.http = http;
        this.mealsUrl = 'http://localhost:8089/meals';
    }
    MealsService.prototype.getMealList = function () {
        return this.http.get(this.mealsUrl);
    };
    MealsService.prototype.deleteMeal = function (meal) {
        return this.http.post(this.mealsUrl + '/delete', meal.id).subscribe();
    };
    MealsService.prototype.addMeal = function (meal) {
        return this.http.post(this.mealsUrl + '/add', meal).subscribe();
    };
    MealsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MealsService);
    return MealsService;
}());



/***/ }),

/***/ "./src/app/meals/meals.component.css":
/*!*******************************************!*\
  !*** ./src/app/meals/meals.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meals/meals.component.html":
/*!********************************************!*\
  !*** ./src/app/meals/meals.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <h2>Meals:</h2>\n    <div class=\"pre-scrollable\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Meal</th>\n            <th>Delete</th>\n          </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let meal of mealList\" (click)=\"onSelect(meal)\">\n          <td>{{meal.name}}</td><td><button class=\"btn-danger\" (click)=\"deleteMeal(meal)\">Delete</button></td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-lg-8\">\n    <h2>Details:</h2>\n    <app-mealdetails [meal]=\"selectedMeal\"></app-mealdetails>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/meals/meals.component.ts":
/*!******************************************!*\
  !*** ./src/app/meals/meals.component.ts ***!
  \******************************************/
/*! exports provided: MealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsComponent", function() { return MealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meals.service */ "./src/app/meals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MealsComponent = /** @class */ (function () {
    function MealsComponent(mealservice) {
        this.mealservice = mealservice;
    }
    MealsComponent.prototype.ngOnInit = function () {
        this.getMealList();
    };
    MealsComponent.prototype.getMealList = function () {
        var _this = this;
        this.mealservice.getMealList().subscribe(function (mealList) { return _this.mealList = mealList; });
    };
    MealsComponent.prototype.onSelect = function (meal) {
        this.selectedMeal = meal;
    };
    MealsComponent.prototype.deleteMeal = function (meal) {
        console.log('Deleting ' + meal.name);
        this.mealservice.deleteMeal(meal);
        this.getMealList();
    };
    MealsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meals',
            template: __webpack_require__(/*! ./meals.component.html */ "./src/app/meals/meals.component.html"),
            styles: [__webpack_require__(/*! ./meals.component.css */ "./src/app/meals/meals.component.css")]
        }),
        __metadata("design:paramtypes", [_meals_service__WEBPACK_IMPORTED_MODULE_1__["MealsService"]])
    ], MealsComponent);
    return MealsComponent;
}());



/***/ }),

/***/ "./src/app/model/meal.ts":
/*!*******************************!*\
  !*** ./src/app/model/meal.ts ***!
  \*******************************/
/*! exports provided: Meal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function() { return Meal; });
var Meal = /** @class */ (function () {
    function Meal() {
    }
    return Meal;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sean/gitRepo/AutomateMyDinner/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map