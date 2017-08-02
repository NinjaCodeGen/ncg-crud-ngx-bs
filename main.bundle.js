webpackJsonp([2,6],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		245,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 104;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityService = (function () {
    function EntityService() {
        this.merge = function (target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            return Object.assign.apply(Object, [target].concat(sources));
        };
        this.propertiesDiffer = function (entityA, entityB) { return Object.keys(entityA).find(function (key) { return entityA[key] !== entityB[key]; }); };
    }
    EntityService.prototype.clone = function (source) {
        return Object.assign({}, source);
    };
    return EntityService;
}());
EntityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], EntityService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=entity.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExceptionService = (function () {
    function ExceptionService(notifierService) {
        var _this = this;
        this.notifierService = notifierService;
        this.catchBadResponse = function (errorResponse) {
            var res = errorResponse;
            var err = res.json();
            var emsg = err ?
                (err.error ? err.error : JSON.stringify(err)) :
                (res.statusText || 'unknown error');
            _this.notifierService.notify("Error - Bad Response - " + emsg);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(false);
        };
    }
    return ExceptionService;
}());
ExceptionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__["a" /* NotifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__notifier_notifier_service__["a" /* NotifierService */]) === "function" && _a || Object])
], ExceptionService);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=exception.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewEncapsulation */].None,
        template: '<router-outlet></router-outlet>',
        styles: [__webpack_require__(215)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adminLayout_admin_layout_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__(158);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["a" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__adminLayout_admin_layout_component__["a" /* AdminLayoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_6_ng2_translate_ng2_translate__["c" /* TranslateLoader */],
                useFactory: (createTranslateLoader),
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminLayout_admin_layout_component__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });

var AppRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__adminLayout_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            }]
    }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusyIndicatorComponent = (function () {
    function BusyIndicatorComponent(busyIndicatorService) {
        this.busyIndicatorService = busyIndicatorService;
        this.visible = false;
    }
    BusyIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busyIndicatorStateChanged = this.busyIndicatorService.busyIndicatorState
            .subscribe(function (state) { return _this.visible = state.show; });
    };
    BusyIndicatorComponent.prototype.ngOnDestroy = function () {
        this.busyIndicatorStateChanged.unsubscribe();
    };
    return BusyIndicatorComponent;
}());
BusyIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ncg-busyIndicator',
        template: __webpack_require__(227),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__["a" /* BusyIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__busyIndicator_service__["a" /* BusyIndicatorService */]) === "function" && _a || Object])
], BusyIndicatorComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__busyIndicator_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BusyIndicatorModule = (function () {
    function BusyIndicatorModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'BusyIndicatorModule');
    }
    return BusyIndicatorModule;
}());
BusyIndicatorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__["a" /* BusyIndicatorComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__busyIndicator_component__["a" /* BusyIndicatorComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__busyIndicator_service__["a" /* BusyIndicatorService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [BusyIndicatorModule])
], BusyIndicatorModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exception_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_import_guard__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__["a" /* ModalDialogModule */], __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__["a" /* BusyIndicatorModule */], __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__["a" /* NotifierModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__modalDialog_modalDialog_module__["a" /* ModalDialogModule */], __WEBPACK_IMPORTED_MODULE_8__busyIndicator_busyIndicator_module__["a" /* BusyIndicatorModule */], __WEBPACK_IMPORTED_MODULE_9__notifier_notifier_module__["a" /* NotifierModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__entity_service__["a" /* EntityService */],
            __WEBPACK_IMPORTED_MODULE_5__exception_service__["a" /* ExceptionService */]
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KEY_ESC = 27;
var ModalDialogComponent = (function () {
    function ModalDialogComponent(modalDialogService) {
        this.defaults = {
            title: 'Confirmation',
            message: 'Do you want to cancel your changes?',
            cancelText: 'Cancel',
            okText: 'OK'
        };
        modalDialogService.activate = this.activate.bind(this);
    }
    ModalDialogComponent.prototype.activate = function (message, title) {
        var _this = this;
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        this.title = title;
        this.message = message;
        this.okText = this.defaults.okText;
        this.cancelText = this.defaults.cancelText;
        var promise = new Promise(function (resolve, reject) {
            _this.negativeOnClick = function (e) { return resolve(false); };
            _this.positiveOnClick = function (e) { return resolve(true); };
            _this.show();
        });
        return promise;
    };
    ModalDialogComponent.prototype.ngOnInit = function () {
        this.modalElement = document.getElementById('confirmationModal');
        this.cancelButton = document.getElementById('cancelButton');
        this.okButton = document.getElementById('okButton');
    };
    ModalDialogComponent.prototype.show = function () {
        var _this = this;
        document.onkeyup = null;
        if (!this.modalElement || !this.cancelButton || !this.okButton) {
            return;
        }
        this.modalElement.style.opacity = 0;
        this.modalElement.style.zIndex = 9999;
        this.cancelButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.negativeOnClick(e)) {
                _this.hideDialog();
            }
        });
        this.okButton.onclick = (function (e) {
            e.preventDefault();
            if (!_this.positiveOnClick(e)) {
                _this.hideDialog();
            }
        });
        this.modalElement.onclick = function () {
            _this.hideDialog();
            return _this.negativeOnClick(null);
        };
        document.onkeyup = function (e) {
            if (e.which === KEY_ESC) {
                _this.hideDialog();
                return _this.negativeOnClick(null);
            }
        };
        this.modalElement.style.opacity = 1;
    };
    ModalDialogComponent.prototype.hideDialog = function () {
        var _this = this;
        document.onkeyup = null;
        this.modalElement.style.opacity = 0;
        window.setTimeout(function () { return _this.modalElement.style.zIndex = -1; }, 400);
    };
    return ModalDialogComponent;
}());
ModalDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ncg-modal-dialog',
        template: __webpack_require__(228),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__["a" /* ModalDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modalDialog_service__["a" /* ModalDialogService */]) === "function" && _a || Object])
], ModalDialogComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalDialog_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalDialog_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ModalDialogModule = (function () {
    function ModalDialogModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'ModalDialogModule');
    }
    return ModalDialogModule;
}());
ModalDialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__modalDialog_component__["a" /* ModalDialogComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__modalDialog_component__["a" /* ModalDialogComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__modalDialog_service__["a" /* ModalDialogService */]],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [ModalDialogModule])
], ModalDialogModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifier_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifierComponent = (function () {
    function NotifierComponent(notifierService) {
        var _this = this;
        this.notifierService = notifierService;
        this.defaults = {
            title: 'Hey fellow coders!',
            message: "Let's go play with some code!"
        };
        this.notifierSubscription = this.notifierService.notifierState.subscribe(function (notifierMessage) {
            _this.notify(notifierMessage.message);
        });
    }
    NotifierComponent.prototype.notify = function (message, title) {
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        this.title = title;
        this.message = message;
        this.show();
    };
    NotifierComponent.prototype.ngOnInit = function () {
        this.notifierElement = document.getElementById('notifier');
    };
    NotifierComponent.prototype.ngOnDestroy = function () {
        this.notifierSubscription.unsubscribe();
    };
    NotifierComponent.prototype.show = function () {
        var _this = this;
        this.notifierElement.style.opacity = 1;
        this.notifierElement.style.zIndex = 9999;
        window.setTimeout(function () { return _this.hide(); }, 2500);
    };
    NotifierComponent.prototype.hide = function () {
        var _this = this;
        this.notifierElement.style.opacity = 0;
        window.setTimeout(function () { return _this.notifierElement.style.zIndex = 0; }, 400);
    };
    return NotifierComponent;
}());
NotifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'ncg-notifier',
        template: __webpack_require__(229),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__notifier_service__["a" /* NotifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__notifier_service__["a" /* NotifierService */]) === "function" && _a || Object])
], NotifierComponent);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_import_guard__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifier_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifier_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NotifierModule = (function () {
    function NotifierModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'NotifierModule');
    }
    return NotifierModule;
}());
NotifierModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__notifier_component__["a" /* NotifierComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__notifier_component__["a" /* NotifierComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__notifier_service__["a" /* NotifierService */]]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [NotifierModule])
], NotifierModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    return AccordionAnchorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === "function" && _a || Object])
], AccordionAnchorDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordionanchor.directive.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__(156);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["b" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["c" /* AccordionDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* AccordionAnchorDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["b" /* AccordionLinkDirective */],
            __WEBPACK_IMPORTED_MODULE_1__accordion__["c" /* AccordionDirective */]
        ]
    })
], SharedModule);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".busyIndicator {\r\n  position: absolute;\r\n  left: 46%; top: 12%\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".dialog-container,\r\n.loading-container {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: -1;\r\n  opacity: 0;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.dialog-container > div.dialog-modal {\r\n  background-color: white;\r\n  position: relative;\r\n  width: 90%;\r\n  max-width: 500px;\r\n  min-height: 25px;\r\n  margin: 10% auto;\r\n  z-index: 99999;\r\n  padding: 16px;\r\n}\r\n\r\n.dialog-button-bar {\r\n  text-align: right;\r\n}\r\n\r\n.loading-container > div {\r\n  position: relative;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10% auto;\r\n  z-index: 99999;\r\n}\r\n\r\n.loading-container > div > div {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.dialog-container .dialog-button-bar button {\r\n  background: none;\r\n  border: 1px solid #333;\r\n  cursor: pointer;\r\n  margin: 0 0 0 1em;\r\n  padding: 5px 10px;\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".notifier-container {\r\n  /*-webkit-transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  transition-property: opacity, bottom, left, right, width, margin, border-radius;\r\n  -webkit-transition-duration: 1.0s;\r\n          transition-duration: 1.0s;\r\n  -webkit-transition-timing-function: ease;\r\n          transition-timing-function: ease;*/\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow: scroll;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: 9999;\r\n  opacity: 0;\r\n  transition: opacity 400ms ease-in;\r\n}\r\n\r\n.notifier-container > * {\r\n  text-align: center;\r\n}\r\n\r\n.notifier-card {\r\n  width: 100%;\r\n  z-index: 1;\r\n  padding: 2px;\r\n  position: relative;\r\n  /*background-color: #f06292;\r\n  background-color: rgb(103,58,183);\r\n  background-color: rgb(83,109,254);*/\r\n  background-color: rgb(255,64,129);\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.notifier-card .notifier-message {\r\n  margin: 0em 2em 1em 2em;\r\n}\r\n\r\n.notifier-card .notifier-title {\r\n  text-transform: uppercase;\r\n  margin: 16px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* NinjaCodeGen.com by DNAfor.NET */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-toggleable-sm\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>    \n  </button>\n  <a class=\"navbar-brand\" href=\"#\">NCG Angular Bootstrap Admin/CRUD App</a>\n  <button id=\"sideBarToggleButton\" type=\"button\" class=\"btn sidebar-button\" (click)=\"isTogglingSidebar = !isTogglingSidebar\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a [routerLink]=\"['/', 'admin']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Admin</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div id=\"wrapper\" [class.toggled]=\"isTogglingSidebar\">\n  <!-- Sidebar -->\n  <div id=\"sidebar-wrapper\">\n    <ul *ngIf=\"activateAdminRoute\" class=\"sidebar-nav\">\n      \n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'defaultTypeAndFormat'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'defaultTypeAndFormat']\">Default Type And Format</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'defaultValidation'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'defaultValidation']\">Default Validation</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'ncgOther'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'ncgOther']\">Ncg Other</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'ncgTypeAndFormat'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'ncgTypeAndFormat']\">Ncg Type And Format</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'ncgValidation'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'ncgValidation']\">Ncg Validation</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'someItem'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'someItem']\">Some Item</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'tenant'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'tenant']\">Tenant</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'typeOfType'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'typeOfType']\">Type Of Type</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'user'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'user']\">User</a>\n      </li>\n      <li class=\"nav-item\" [class.active]=\"activateAdminSideItem === 'validation'\">\n        <a class=\"nav-link\" [routerLink]=\"['/', 'admin', 'validation']\">Validation</a>\n      </li>\n    </ul>\n  </div>\n  <!-- /#sidebar-wrapper -->\n  <!-- Page Content -->\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n      <footer>\n        <span>Generated with <a [href]=\"url\" target=\"_blank\">NinjaCodeGen</a> by DNA</span>\n      </footer>\n    </div>\n  </div>\n  <!-- /#page-content-wrapper -->\n</div>\n<ncg-busyIndicator></ncg-busyIndicator>\n<ncg-notifier></ncg-notifier>\n<ncg-modal-dialog></ncg-modal-dialog>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<div class=\"busyIndicator mdl-busyIndicator mdl-js-busyIndicator mdl-busyIndicator--single-color\" [class.is-active]=\"visible\"></div>\r\n\r\n<!-- NinjaCodeGen.com by DNAfor.NET  -->"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div id=\"confirmationModal\" class=\"dialog-container\">\r\n  <div class=\"dialog-modal\">\r\n    <h5>{{title}}</h5>\r\n    <p>{{message}}</p>\r\n    <div class=\"dialog-button-bar\">\r\n      <button id=\"cancelButton\">{{cancelText}} \r\n      <span class=\"mdl-button__ripple-container\">\r\n        <span class=\"mdl-ripple\"></span>\r\n      </span></button>\r\n      <button id=\"okButton\">{{okText}} \r\n      <span class=\"mdl-button__ripple-container\">\r\n        <span class=\"mdl-ripple\"></span>\r\n      </span></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--  NinjaCodeGen.com by DNAfor.NET -->"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<div id=\"notifier\" class=\"notifier-container\">\r\n  <div class=\"notifier-card mdl-shadow--16dp\">\r\n    <h5 class=\"notifier-title\">{{title}}</h5>\r\n    <p class=\"notifier-message\">{{message}}</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- NinjaCodeGen.com by DNAfor.NET -->"

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NotifierService = (function () {
    function NotifierService(prior) {
        this.notifierSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notifierState = this.notifierSubject.asObservable();
        if (prior) {
            console.log('notifier service already exists');
            return prior;
        }
        else {
        }
    }
    NotifierService.prototype.notify = function (message) {
        this.notifierSubject.next({ message: message });
    };
    return NotifierService;
}());
NotifierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [NotifierService])
], NotifierService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=notifier.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusyIndicatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BusyIndicatorService = (function () {
    function BusyIndicatorService(prior) {
        this.busyIndicatorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.busyIndicatorState = this.busyIndicatorSubject.asObservable();
        if (prior) {
            return prior;
        }
    }
    BusyIndicatorService.prototype.show = function () {
        this.busyIndicatorSubject.next({ show: true });
    };
    BusyIndicatorService.prototype.hide = function () {
        this.busyIndicatorSubject.next({ show: false });
    };
    return BusyIndicatorService;
}());
BusyIndicatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Optional */])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* SkipSelf */])()),
    __metadata("design:paramtypes", [BusyIndicatorService])
], BusyIndicatorService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=busyIndicator.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalDialogService = (function () {
    function ModalDialogService() {
    }
    return ModalDialogService;
}());
ModalDialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ModalDialogService);

/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=modalDialog.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(router, translate) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.name = 'Angular Cli Bootstrap Test App';
        this.url = 'https://ninjacodegen.com/';
        this.isTogglingSidebar = false;
        this.activateAdminRoute = false;
        this.activateAdminSideItem = '';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        this.router.events.subscribe(function (params) {
            if (params['url'] && (params['url'] === '/admin' || params['url'].indexOf('/admin') > -1)) {
                _this.activateAdminRoute = true;
                _this.isTogglingSidebar = true;
                if (params['url'].indexOf('/admin/') > -1) {
                    _this.activateAdminSideItem = params['url'].split('/admin/')[1];
                }
                else {
                    _this.activateAdminSideItem = '';
                }
            }
            else {
                _this.activateAdminRoute = false;
            }
        });
    }
    return AdminLayoutComponent;
}());
AdminLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(226),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__["d" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__["d" /* TranslateService */]) === "function" && _b || Object])
], AdminLayoutComponent);

var _a, _b;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    return AccordionDirective;
}());
AccordionDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[appAccordion]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AccordionDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordion.directive.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    return AccordionLinkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* HostBinding */])('class.open'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Directive */])({
        selector: '[appAccordionLink]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === "function" && _a || Object])
], AccordionLinkDirective);

var _a;
/* NinjaCodeGen.com by DNAfor.NET */
//# sourceMappingURL=accordionlink.directive.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.bundle.js.map