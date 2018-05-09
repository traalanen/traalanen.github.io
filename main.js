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

module.exports = "<wfd-header></wfd-header>\n<wfd-menu></wfd-menu>\n<overtime-signup></overtime-signup>\n\n\n"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_service) {
        this._service = _service;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _overtime_signup_overtime_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overtime-signup/overtime-signup.component */ "./src/app/overtime-signup/overtime-signup.component.ts");
/* harmony import */ var _overtime_signup_signup_postings_signup_postings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overtime-signup/signup-postings/signup-postings.component */ "./src/app/overtime-signup/signup-postings/signup-postings.component.ts");
/* harmony import */ var _overtime_signup_signup_postings_signup_postings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overtime-signup/signup-postings/signup-postings.service */ "./src/app/overtime-signup/signup-postings/signup-postings.service.ts");
/* harmony import */ var _wfd_header_wfd_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wfd-header/wfd-header.component */ "./src/app/wfd-header/wfd-header.component.ts");
/* harmony import */ var _wfd_menu_wfd_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wfd-menu/wfd-menu.component */ "./src/app/wfd-menu/wfd-menu.component.ts");
/* harmony import */ var _overtime_signup_signup_datepicker_signup_datepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overtime-signup/signup-datepicker/signup-datepicker.component */ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.ts");
/* harmony import */ var _overtime_signup_signup_controls_signup_controls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overtime-signup/signup-controls/signup-controls.component */ "./src/app/overtime-signup/signup-controls/signup-controls.component.ts");
/* harmony import */ var _overtime_signup_posting_content_posting_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overtime-signup/posting-content/posting-content.component */ "./src/app/overtime-signup/posting-content/posting-content.component.ts");
/* harmony import */ var _overtime_signup_posting_overview_posting_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overtime-signup/posting-overview/posting-overview.component */ "./src/app/overtime-signup/posting-overview/posting-overview.component.ts");
/* harmony import */ var _overtime_signup_posting_position_detail_posting_position_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./overtime-signup/posting-position-detail/posting-position-detail.component */ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.ts");
/* harmony import */ var _overtime_signup_posting_position_signups_posting_position_signups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./overtime-signup/posting-position-signups/posting-position-signups.component */ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.ts");
/* harmony import */ var _overtime_signup_posting_modal_content_posting_modal_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./overtime-signup/posting-modal-content/posting-modal-content.component */ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.ts");
/* harmony import */ var _overtime_signup_posting_modal_accordian_content_posting_modal_accordian_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component */ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _overtime_signup_overtime_signup_component__WEBPACK_IMPORTED_MODULE_8__["OvertimeSignupComponent"],
                _overtime_signup_signup_postings_signup_postings_component__WEBPACK_IMPORTED_MODULE_9__["SignupPostingsComponent"],
                _wfd_header_wfd_header_component__WEBPACK_IMPORTED_MODULE_11__["WfdHeaderComponent"],
                _wfd_menu_wfd_menu_component__WEBPACK_IMPORTED_MODULE_12__["WfdMenuComponent"],
                _overtime_signup_signup_datepicker_signup_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["SignupDatepickerComponent"],
                _overtime_signup_signup_controls_signup_controls_component__WEBPACK_IMPORTED_MODULE_14__["SignupControlsComponent"],
                _overtime_signup_posting_content_posting_content_component__WEBPACK_IMPORTED_MODULE_15__["PostingContentComponent"],
                _overtime_signup_posting_overview_posting_overview_component__WEBPACK_IMPORTED_MODULE_16__["PostingOverviewComponent"],
                _overtime_signup_posting_position_detail_posting_position_detail_component__WEBPACK_IMPORTED_MODULE_17__["PostingPositionDetailComponent"],
                _overtime_signup_posting_position_signups_posting_position_signups_component__WEBPACK_IMPORTED_MODULE_18__["PostingPositionSignupsComponent"],
                _overtime_signup_posting_modal_content_posting_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["PostingModalContentComponent"],
                _overtime_signup_posting_modal_accordian_content_posting_modal_accordian_content_component__WEBPACK_IMPORTED_MODULE_20__["PostingModalAccordianContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"]
            ],
            providers: [
                _overtime_signup_signup_postings_signup_postings_service__WEBPACK_IMPORTED_MODULE_10__["SignupPostingsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _overtime_signup_posting_modal_content_posting_modal_content_component__WEBPACK_IMPORTED_MODULE_19__["PostingModalContentComponent"],
                _overtime_signup_posting_modal_accordian_content_posting_modal_accordian_content_component__WEBPACK_IMPORTED_MODULE_20__["PostingModalAccordianContentComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/postings.json":
/*!************************************!*\
  !*** ./src/app/data/postings.json ***!
  \************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":[{"description":"Graduation - CEHD (2), 5/10/2018 11:45, 8.25 hour(s)","date":"Fri 5/4/2018 10:45","hours":4.5,"tentativeStart":false,"nonForced":false,"postingStatus":"Posted","signedUpIndicator":false,"specialComments":"","quickSign":true,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Whole Music Club - Concert","date":"Fri 5/4/2018 19:30","hours":3.25,"tentativeStart":false,"nonForced":false,"postingStatus":"Assigned","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Major League Soccer (MLS) - Game time: 1300 hours (Vancouver Whitecaps)","date":"Sat 5/5/2018 10:15","hours":5.5,"tentativeStart":false,"nonForced":false,"postingStatus":"Assigned","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Major League Soccer (MLS) - Game time: 1300 hours (Vancouver Whitecaps)...TEOs ONLY","date":"Sat 5/5/2018 10:45","hours":5.25,"tentativeStart":false,"nonForced":false,"postingStatus":"Posted","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Graduation - CEHD (2)","date":"Thu 5/10/2018 11:45","hours":8.25,"tentativeStart":false,"nonForced":false,"postingStatus":"Assigned","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Graduation - CFANS","date":"Thu 5/11/2018 12:45","hours":3.75,"tentativeStart":false,"nonForced":false,"postingStatus":"Assigned","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]},{"description":"Graduation - CSE","date":"Fri 5/11/2018 17:45","hours":3.75,"tentativeStart":false,"nonForced":false,"postingStatus":"Assigned","signedUpIndicator":false,"specialComments":"","quickSign":false,"giveSwap":false,"closeDate":"5/10/2018","dateAssignmentProcessed":"4/26/2018","locationDetails":"3M Arena at Mariucci","assignmentContactNotes":"Craig Fiori 5-8465","specialInstructions":"Officers will report to Mariucci Arena, in uniform, and meet with the contact person. The officer/s should patrol the interior and exterior of Mariucci, in case any issues come up at these graduations. Officer/s should also keep homeless and unwants out of the arena, especially near the reception areas.","positionDetail":[{"positionName":"Officer","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"Officer"},{"positionName":"K9","numberAvailable":2,"workStartTime":"11:45","workEndTime":"20:00","skillRequirement":"K9 Officer"}],"signUps":[{"employee":"Rondeau, Scott A, 2022","signupDate":"3/4/2018 08:52","employeeRank":"Police Officer","otHours":0,"seniority":"5/4/1987","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Johnson, Devin X, 1976","signupDate":"3/5/2018 18:32","employeeRank":"Police Officer","otHours":0,"seniority":"6/4/1983","workPosition":"Officer","specialComments":"Volunteered"},{"employee":"Darwood, Jameson A, 122","signupDate":"3/5/2018 06:52","employeeRank":"Police Officer","otHours":0,"seniority":"3/14/1925","workPosition":"Officer","specialComments":"Volunteered"}]}]};

/***/ }),

/***/ "./src/app/overtime-signup/overtime-signup.component.css":
/*!***************************************************************!*\
  !*** ./src/app/overtime-signup/overtime-signup.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/overtime-signup.component.html":
/*!****************************************************************!*\
  !*** ./src/app/overtime-signup/overtime-signup.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<signup-controls></signup-controls>\r\n<signup-postings></signup-postings>\r\n\r\n"

/***/ }),

/***/ "./src/app/overtime-signup/overtime-signup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/overtime-signup/overtime-signup.component.ts ***!
  \**************************************************************/
/*! exports provided: OvertimeSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimeSignupComponent", function() { return OvertimeSignupComponent; });
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


var OvertimeSignupComponent = /** @class */ (function () {
    function OvertimeSignupComponent(_service) {
        this._service = _service;
        this.apiValues = [];
    }
    OvertimeSignupComponent.prototype.ngOnInit = function () {
        // this._service.get("/api/values").subscribe(result => {
        //   this.apiValues = result as string[];
        // });
    };
    OvertimeSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'overtime-signup',
            template: __webpack_require__(/*! ./overtime-signup.component.html */ "./src/app/overtime-signup/overtime-signup.component.html"),
            styles: [__webpack_require__(/*! ./overtime-signup.component.css */ "./src/app/overtime-signup/overtime-signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OvertimeSignupComponent);
    return OvertimeSignupComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-content/posting-content.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-content/posting-content.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/posting-content/posting-content.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-content/posting-content.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ CurrentPosting.description }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <posting-overview [CurrentPosting]=\"CurrentPosting\"></posting-overview>\n      <posting-position-detail [CurrentPosting]=\"CurrentPosting\"></posting-position-detail>\n      <posting-position-signups [CurrentPosting]=\"CurrentPosting\"></posting-position-signups>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-content/posting-content.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-content/posting-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: PostingContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingContentComponent", function() { return PostingContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostingContentComponent = /** @class */ (function () {
    function PostingContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PostingContentComponent.prototype.ngOnInit = function () {
    };
    PostingContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-content',
            template: __webpack_require__(/*! ./posting-content.component.html */ "./src/app/overtime-signup/posting-content/posting-content.component.html"),
            styles: [__webpack_require__(/*! ./posting-content.component.css */ "./src/app/overtime-signup/posting-content/posting-content.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], PostingContentComponent);
    return PostingContentComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ CurrentPosting.description }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n          <ngb-panel id=\"static-1\" title=\"Overview\">\n            <ng-template ngbPanelContent>\n                <posting-overview [CurrentPosting]=\"CurrentPosting\"></posting-overview>\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id=\"static-2\" title=\"Position Detail\">\n            <ng-template ngbPanelContent>\n                <posting-position-detail [CurrentPosting]=\"CurrentPosting\"></posting-position-detail>\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id=\"static-3\" title=\"Sign Ups\">\n              <ng-template ngbPanelContent>\n                  <posting-position-signups [CurrentPosting]=\"CurrentPosting\"></posting-position-signups>\n              </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PostingModalAccordianContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingModalAccordianContentComponent", function() { return PostingModalAccordianContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostingModalAccordianContentComponent = /** @class */ (function () {
    function PostingModalAccordianContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PostingModalAccordianContentComponent.prototype.ngOnInit = function () {
    };
    PostingModalAccordianContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-modal-accordian-content',
            template: __webpack_require__(/*! ./posting-modal-accordian-content.component.html */ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.html"),
            styles: [__webpack_require__(/*! ./posting-modal-accordian-content.component.css */ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], PostingModalAccordianContentComponent);
    return PostingModalAccordianContentComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ CurrentPosting.description }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <posting-overview [CurrentPosting]=\"CurrentPosting\"></posting-overview>\n      <posting-position-detail [CurrentPosting]=\"CurrentPosting\"></posting-position-detail>\n      <posting-position-signups [CurrentPosting]=\"CurrentPosting\"></posting-position-signups>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PostingModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingModalContentComponent", function() { return PostingModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostingModalContentComponent = /** @class */ (function () {
    function PostingModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PostingModalContentComponent.prototype.ngOnInit = function () {
    };
    PostingModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-modal-content',
            template: __webpack_require__(/*! ./posting-modal-content.component.html */ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.html"),
            styles: [__webpack_require__(/*! ./posting-modal-content.component.css */ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], PostingModalContentComponent);
    return PostingModalContentComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-overview/posting-overview.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-overview/posting-overview.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-group {\r\n    float:left;\r\n    width: 100%;\r\n}\r\n.label-text {\r\n    min-width: 250px;\r\n    font-weight: bold;\r\n    float:left;\r\n}\r\n.label-value {\r\n    padding-left: 12px;\r\n    float:left;\r\n}\r\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-overview/posting-overview.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-overview/posting-overview.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label-group\">\n    <label class=\"label-text\" for=\"lblCloseDate\">Sign Up Close Date</label>\n    <label class=\"label-value\" id=\"lblCloseDate\">{{ CurrentPosting.closeDate}}</label>\n  </div>\n  <div class=\"label-group\">\n    <label class=\"label-text\" for=\"lbllocationDetails\">Location Details</label>\n    <label class=\"label-value\" id=\"lbllocationDetails\">{{ CurrentPosting.locationDetails}}</label>\n  </div>\n  <div class=\"label-group\">\n    <label class=\"label-text\" for=\"lblDateAssigmentProcessed\">Date Assignment Processed</label>\n    <label class=\"label-value\" id=\"lblDateAssigmentProcessed\">{{ CurrentPosting.dateAssignmentProcessed }}</label>\n  </div>\n  <div class=\"label-group\">\n    <label class=\"label-text\" for=\"lblAssignmentContactNotes\">Assignment Contact Notes</label>\n    <label class=\"label-value\" id=\"lblAssignmentContactNotes\">{{ CurrentPosting.assignmentContactNotes }}</label>\n  </div>\n  <div class=\"label-group\">\n    <label class=\"label-text\" for=\"lblSpecialInstructions\">Employee Special Instructions</label>\n    <label class=\"label-value\" id=\"lblSpecialInstructions\">{{ CurrentPosting.specialInstructions }}</label>\n  </div>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-overview/posting-overview.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-overview/posting-overview.component.ts ***!
  \********************************************************************************/
/*! exports provided: PostingOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingOverviewComponent", function() { return PostingOverviewComponent; });
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

var PostingOverviewComponent = /** @class */ (function () {
    function PostingOverviewComponent() {
    }
    PostingOverviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostingOverviewComponent.prototype, "CurrentPosting", void 0);
    PostingOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-overview',
            template: __webpack_require__(/*! ./posting-overview.component.html */ "./src/app/overtime-signup/posting-overview/posting-overview.component.html"),
            styles: [__webpack_require__(/*! ./posting-overview.component.css */ "./src/app/overtime-signup/posting-overview/posting-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostingOverviewComponent);
    return PostingOverviewComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-responsive\">\n  <thead>\n      <tr>\n        <th scope=\"col\">Position Name</th>\n        <th scope=\"col\"># Available</th>\n        <th scope=\"col\">Work Start Time</th>\n        <th scope=\"col\">Work End Time</th>\n        <th scope=\"col\">Skill Requirement</th>\n      </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let positionDetail of CurrentPosting.positionDetail\">\n      <td>{{positionDetail.positionName}}</td>\n      <td>{{positionDetail.numberAvailable}}</td>\n      <td>{{positionDetail.workStartTime}}</td>\n      <td>{{positionDetail.workEndTime}}</td>\n      <td>{{positionDetail.skillRequirement}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PostingPositionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingPositionDetailComponent", function() { return PostingPositionDetailComponent; });
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

var PostingPositionDetailComponent = /** @class */ (function () {
    function PostingPositionDetailComponent() {
    }
    PostingPositionDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostingPositionDetailComponent.prototype, "CurrentPosting", void 0);
    PostingPositionDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-position-detail',
            template: __webpack_require__(/*! ./posting-position-detail.component.html */ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.html"),
            styles: [__webpack_require__(/*! ./posting-position-detail.component.css */ "./src/app/overtime-signup/posting-position-detail/posting-position-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostingPositionDetailComponent);
    return PostingPositionDetailComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-responsive\">\n    <thead>\n        <tr>\n          <th scope=\"col\">Employee</th>\n          <th scope=\"col\">Submit Date</th>\n          <th scope=\"col\">Employee Rank</th>\n          <th scope=\"col\">OT Hours</th>\n          <th scope=\"col\">Seniority</th>\n          <th scope=\"col\">Work Position</th>\n          <th scope=\"col\">Special Comments</th>\n        </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let positionDetail of CurrentPosting.signUps\">\n        <td>{{positionDetail.employee}}</td>\n        <td>{{positionDetail.signupDate}}</td>\n        <td>{{positionDetail.employeeRank}}</td>\n        <td>{{positionDetail.otHours}}</td>\n        <td>{{positionDetail.seniority}}</td>\n        <td>{{positionDetail.workPosition}}</td>\n        <td>{{positionDetail.specialComments}}</td>\n      </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PostingPositionSignupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingPositionSignupsComponent", function() { return PostingPositionSignupsComponent; });
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

var PostingPositionSignupsComponent = /** @class */ (function () {
    function PostingPositionSignupsComponent() {
    }
    PostingPositionSignupsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostingPositionSignupsComponent.prototype, "CurrentPosting", void 0);
    PostingPositionSignupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'posting-position-signups',
            template: __webpack_require__(/*! ./posting-position-signups.component.html */ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.html"),
            styles: [__webpack_require__(/*! ./posting-position-signups.component.css */ "./src/app/overtime-signup/posting-position-signups/posting-position-signups.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostingPositionSignupsComponent);
    return PostingPositionSignupsComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/signup-controls/signup-controls.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-controls/signup-controls.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-detail {\r\n    width: 100%;\r\n    background-color: silver;\r\n}\r\n\r\n.header-app-title {\r\n\tcolor: #ffffff;\r\n    margin-left: 12px;\r\n    padding: 8px;\r\n    padding-left: 0px;\r\n    font-size: 32px;\r\n}\r\n\r\n.collapse-button {\r\n    padding: 8px;\r\n    padding-right: 0px;\r\n    margin-right: 12px;\r\n}\r\n\r\n.collapse-button > button {\r\n    cursor: pointer;\r\n}\r\n\r\n.hamburger-button {\r\n    background-color: inherit;\r\n    border: none;\r\n}\r\n\r\n.hamburger-button :active {\r\n    border: none;\r\n}\r\n\r\n.hamburger-icon {\r\n    height: 32px;\r\n    width: 32px;\r\n    background-color: inherit;\r\n}\r\n"

/***/ }),

/***/ "./src/app/overtime-signup/signup-controls/signup-controls.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-controls/signup-controls.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"header-detail float-left\">\n    <span class=\"header-app-title\">Overtime Sign Up</span>\n    <div class=\"collapse-button float-right\">\n        <button type=\"button\" (click)=\"isCollapsed = !isCollapsed\" class=\"hamburger-button\"\n                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseControls\">\n                <img src='assets/hamburger.png' class=\"hamburger-icon\">\n        </button>\n    </div> \n    <div id=\"collapseControls\" [ngbCollapse]=\"isCollapsed\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <label class=\"btn-primary float-left\" ngbButtonLabel>\n                        <input type=\"checkbox\" ngbButton [(ngModel)]=\"checked\">Hide unassigned postings that conflict with schedule\n                </label>\n                <signup-datepicker></signup-datepicker>\n            </div>\n        </div>\n    </div>\n</span>\n\n\n"

/***/ }),

/***/ "./src/app/overtime-signup/signup-controls/signup-controls.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-controls/signup-controls.component.ts ***!
  \******************************************************************************/
/*! exports provided: SignupControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupControlsComponent", function() { return SignupControlsComponent; });
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

var SignupControlsComponent = /** @class */ (function () {
    function SignupControlsComponent() {
        this.isCollapsed = true;
        this.checked = true;
    }
    SignupControlsComponent.prototype.ngOnInit = function () {
    };
    SignupControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-controls',
            template: __webpack_require__(/*! ./signup-controls.component.html */ "./src/app/overtime-signup/signup-controls/signup-controls.component.html"),
            styles: [__webpack_require__(/*! ./signup-controls.component.css */ "./src/app/overtime-signup/signup-controls/signup-controls.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupControlsComponent);
    return SignupControlsComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepicker-control {\r\n    padding-left: 12px;\r\n}\r\n\r\n.datepicker-label {\r\n    padding-left: 12px;\r\n    text-align: center;\r\n    padding-top: 8px;\r\n}"

/***/ }),

/***/ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"float-right\">\n  <label class=\"datepicker-label float-left\">Display oldest posting</label>\n  <form class=\"form-inline float-left datepicker-control\">\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"mm-dd-yyyy\"\n              name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n            <img src=\"/assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n          </button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n \n"

/***/ }),

/***/ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SignupDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDatepickerComponent", function() { return SignupDatepickerComponent; });
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

var SignupDatepickerComponent = /** @class */ (function () {
    function SignupDatepickerComponent() {
    }
    SignupDatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    SignupDatepickerComponent.prototype.selectToday = function () {
        var now = new Date();
        this.model = { month: now.getMonth() + 1, day: now.getDate(), year: now.getFullYear() };
    };
    SignupDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-datepicker',
            template: __webpack_require__(/*! ./signup-datepicker.component.html */ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.html"),
            styles: [__webpack_require__(/*! ./signup-datepicker.component.css */ "./src/app/overtime-signup/signup-datepicker/signup-datepicker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupDatepickerComponent);
    return SignupDatepickerComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/signup-postings/signup-postings.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-postings/signup-postings.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/overtime-signup/signup-postings/signup-postings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-postings/signup-postings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-responsive\" [mfData]=\"Postings\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\r\n    <thead>\r\n        <tr>\r\n            <th style=\"width: 65%\">\r\n                <mfDefaultSorter by=\"description\">Description</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 5%\">\r\n                <mfDefaultSorter by=\"hours\">Hours</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n                <mfDefaultSorter by=\"date\">Date</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"postingStatus\">Posting Status</mfDefaultSorter>\r\n            </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of mf.data\">\r\n            <td><button class=\"btn btn-link\" (click)=\"onItemClick($event, item)\">{{item.description}}</button></td>\r\n            <td class=\"text-right\">{{item.hours}}</td>\r\n            <td>{{item.date}}</td>\r\n            <td><button class=\"btn btn-link\" (click)=\"onAccordianItemClick($event, item)\">{{item.postingStatus | uppercase}}</button></td>\r\n        </tr>\r\n    </tbody>\r\n    <tfoot>\r\n        <tr>\r\n            <td colspan=\"3\">\r\n                <mfBootstrapPaginator></mfBootstrapPaginator>\r\n            </td>\r\n            <td>\r\n                <label>7 Events</label>\r\n            </td>\r\n        </tr>\r\n    </tfoot>\r\n</table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/overtime-signup/signup-postings/signup-postings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-postings/signup-postings.component.ts ***!
  \******************************************************************************/
/*! exports provided: SignupPostingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPostingsComponent", function() { return SignupPostingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _signup_postings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-postings.service */ "./src/app/overtime-signup/signup-postings/signup-postings.service.ts");
/* harmony import */ var _posting_modal_content_posting_modal_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posting-modal-content/posting-modal-content.component */ "./src/app/overtime-signup/posting-modal-content/posting-modal-content.component.ts");
/* harmony import */ var _posting_modal_accordian_content_posting_modal_accordian_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posting-modal-accordian-content/posting-modal-accordian-content.component */ "./src/app/overtime-signup/posting-modal-accordian-content/posting-modal-accordian-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPostingsComponent = /** @class */ (function () {
    function SignupPostingsComponent(_service, modalService) {
        this._service = _service;
        this.modalService = modalService;
        this.Postings = [];
    }
    SignupPostingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getPostings().subscribe(function (postings) {
            _this.Postings = postings;
            console.log(_this.Postings);
        });
    };
    SignupPostingsComponent.prototype.onItemClick = function (event, posting) {
        var modalRef = this.modalService.open(_posting_modal_content_posting_modal_content_component__WEBPACK_IMPORTED_MODULE_3__["PostingModalContentComponent"], { size: 'lg' });
        modalRef.componentInstance.CurrentPosting = posting;
    };
    SignupPostingsComponent.prototype.onAccordianItemClick = function (event, posting) {
        var modalRef = this.modalService.open(_posting_modal_accordian_content_posting_modal_accordian_content_component__WEBPACK_IMPORTED_MODULE_4__["PostingModalAccordianContentComponent"], { size: 'lg' });
        modalRef.componentInstance.CurrentPosting = posting;
    };
    SignupPostingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup-postings',
            template: __webpack_require__(/*! ./signup-postings.component.html */ "./src/app/overtime-signup/signup-postings/signup-postings.component.html"),
            styles: [__webpack_require__(/*! ./signup-postings.component.css */ "./src/app/overtime-signup/signup-postings/signup-postings.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_postings_service__WEBPACK_IMPORTED_MODULE_2__["SignupPostingsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SignupPostingsComponent);
    return SignupPostingsComponent;
}());



/***/ }),

/***/ "./src/app/overtime-signup/signup-postings/signup-postings.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/overtime-signup/signup-postings/signup-postings.service.ts ***!
  \****************************************************************************/
/*! exports provided: SignupPostingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPostingsService", function() { return SignupPostingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_postings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/postings.json */ "./src/app/data/postings.json");
var _data_postings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/Object.assign({}, _data_postings_json__WEBPACK_IMPORTED_MODULE_3__, {"default": _data_postings_json__WEBPACK_IMPORTED_MODULE_3__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPostingsService = /** @class */ (function () {
    function SignupPostingsService(_service) {
        this._service = _service;
    }
    SignupPostingsService.prototype.ngOnInit = function () {
    };
    SignupPostingsService.prototype.getPostings = function () {
        //dirty mock data
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var postings = _data_postings_json__WEBPACK_IMPORTED_MODULE_3__["data"];
            observer.next(postings);
            observer.complete();
        });
    };
    SignupPostingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupPostingsService);
    return SignupPostingsService;
}());



/***/ }),

/***/ "./src/app/wfd-header/wfd-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/wfd-header/wfd-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-main {\r\n    width: 100%;\r\n    border: 0px;\r\n    margin: 0px;\r\n    background-color: #0a37a1;\r\n}\r\n\r\n.header-logo {\r\n    background-color: #0a37a1;\r\n    white-space: nowrap;\r\n    float: left;\r\n    height: 42px;\r\n    width: 20%;\r\n    min-width: 140px;\r\n}\r\n\r\n.header-organization {\r\n    background-color: #0a37a1;\r\n\tFONT-FAMILY: Verdana, Arial, Helvetica;\r\n\tfont-size: 14pt;\r\n\tcolor: #FFFFFF;\r\n\ttext-align: right;\r\n\tvertical-align: middle;\r\n    white-space:nowrap;\r\n    float:right;\r\n    height: 42px;\r\n    width: 80%;\r\n    padding-right: 12px;\r\n    padding-top: 6px;\r\n}"

/***/ }),

/***/ "./src/app/wfd-header/wfd-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/wfd-header/wfd-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-main\">\n  <span class=\"header-logo\">\n      <img src='assets/headerwfdlogo.gif'>\n  </span>\n  <span class=\"header-organization\">\n      University of Minnesota Public Safety\n  </span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/wfd-header/wfd-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/wfd-header/wfd-header.component.ts ***!
  \****************************************************/
/*! exports provided: WfdHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfdHeaderComponent", function() { return WfdHeaderComponent; });
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

var WfdHeaderComponent = /** @class */ (function () {
    function WfdHeaderComponent() {
    }
    WfdHeaderComponent.prototype.ngOnInit = function () {
    };
    WfdHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfd-header',
            template: __webpack_require__(/*! ./wfd-header.component.html */ "./src/app/wfd-header/wfd-header.component.html"),
            styles: [__webpack_require__(/*! ./wfd-header.component.css */ "./src/app/wfd-header/wfd-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WfdHeaderComponent);
    return WfdHeaderComponent;
}());



/***/ }),

/***/ "./src/app/wfd-menu/wfd-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/wfd-menu/wfd-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-header {\r\n    FONT-FAMILY: Verdana, Arial, Helvetica;\r\n    height: 22px;\r\n}\r\n\r\n.menu-left-group {\r\n    float: left;\r\n    width: 33%;\r\n}\r\n\r\n.menu-center-group {\r\n    text-align: center;\r\n    float: left;\r\n    width: 33%;\r\n}\r\n\r\n.menu-right-group {\r\n    float: right;\r\n    padding-right: 12px;\r\n    width: 34%;\r\n}\r\n\r\n.menu-item {\r\n    padding: 4px;\r\n    cursor: pointer;\r\n    font: normal 12px \"Segoe UI\", Arial, sans-serif;\r\n}\r\n\r\n.menu-left {\r\n    float: left;\r\n}\r\n\r\n.menu-right {\r\n    text-decoration: underline;\r\n    float:right;\r\n}\r\n\r\n.menu-left:first-child {\r\n    border-right: 1px solid black;\r\n}\r\n\r\n.menu-left:last-child {\r\n    border-left: 1px solid black;\r\n}"

/***/ }),

/***/ "./src/app/wfd-menu/wfd-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/wfd-menu/wfd-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-header\">\n  <div class=\"menu menu-left-group\">\n    <span class=\"menu-item menu-left\">Main</span>\n    <span class=\"menu-item menu-left\">Admin</span>\n    <span class=\"menu-item menu-left\">Reports</span>\n  </div>\n  <div class=\"menu menu-center-group\">\n    <span class=\"menu-item menu-center\">Welcome Test2 ↓</span>\n  </div>\n  <div class=\"menu menu-right-group\">\n    <span class=\"menu-item menu-right\">Log Off</span>\n    <span class=\"menu-item menu-right\">Contact Support</span>\n    <span class=\"menu-item menu-right\">Code Legend</span>\n    <span class=\"menu-item menu-right\">Home</span>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/wfd-menu/wfd-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/wfd-menu/wfd-menu.component.ts ***!
  \************************************************/
/*! exports provided: WfdMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WfdMenuComponent", function() { return WfdMenuComponent; });
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

var WfdMenuComponent = /** @class */ (function () {
    function WfdMenuComponent() {
    }
    WfdMenuComponent.prototype.ngOnInit = function () {
    };
    WfdMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wfd-menu',
            template: __webpack_require__(/*! ./wfd-menu.component.html */ "./src/app/wfd-menu/wfd-menu.component.html"),
            styles: [__webpack_require__(/*! ./wfd-menu.component.css */ "./src/app/wfd-menu/wfd-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WfdMenuComponent);
    return WfdMenuComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! C:\Users\aalanen\source\repos\Sogeti ATO Project\WorkForce Director POC\source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map