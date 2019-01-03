(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ng2-bs3-modal/src/autofocus/autofocus.directive.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/autofocus/autofocus.directive.ts ***!
  \*********************************************************************/
/*! exports provided: BsAutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsAutofocusDirective", function() { return BsAutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal.component */ "./projects/ng2-bs3-modal/src/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BsAutofocusDirective = /** @class */ (function () {
    function BsAutofocusDirective(el, modal) {
        var _this = this;
        this.el = el;
        this.modal = modal;
        if (modal) {
            this.modal.onOpen.subscribe(function () {
                _this.el.nativeElement.focus();
            });
        }
    }
    BsAutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[autofocus]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["BsModalComponent"]])
    ], BsAutofocusDirective);
    return BsAutofocusDirective;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/index.ts":
/*!*********************************************!*\
  !*** ./projects/ng2-bs3-modal/src/index.ts ***!
  \*********************************************/
/*! exports provided: BsModalService, BsModalComponent, BsModalHeaderComponent, BsModalBodyComponent, BsModalFooterComponent, BsModalHideType, BsModalSize, BsModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.service */ "./projects/ng2-bs3-modal/src/modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _modal_modal_service__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]; });

/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ "./projects/ng2-bs3-modal/src/modal/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalComponent", function() { return _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["BsModalComponent"]; });

/* harmony import */ var _modal_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/header.component */ "./projects/ng2-bs3-modal/src/modal/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalHeaderComponent", function() { return _modal_header_component__WEBPACK_IMPORTED_MODULE_2__["BsModalHeaderComponent"]; });

/* harmony import */ var _modal_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/body.component */ "./projects/ng2-bs3-modal/src/modal/body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalBodyComponent", function() { return _modal_body_component__WEBPACK_IMPORTED_MODULE_3__["BsModalBodyComponent"]; });

/* harmony import */ var _modal_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/footer.component */ "./projects/ng2-bs3-modal/src/modal/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalFooterComponent", function() { return _modal_footer_component__WEBPACK_IMPORTED_MODULE_4__["BsModalFooterComponent"]; });

/* harmony import */ var _modal_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/models */ "./projects/ng2-bs3-modal/src/modal/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalHideType", function() { return _modal_models__WEBPACK_IMPORTED_MODULE_5__["BsModalHideType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalSize", function() { return _modal_models__WEBPACK_IMPORTED_MODULE_5__["BsModalSize"]; });

/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.module */ "./projects/ng2-bs3-modal/src/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_6__["BsModalModule"]; });

/*
 * Public API Surface of ng2-bs3-modal
 */









/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal.module.ts":
/*!****************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal.module.ts ***!
  \****************************************************/
/*! exports provided: BsModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalModule", function() { return BsModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.service */ "./projects/ng2-bs3-modal/src/modal/modal.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal.component */ "./projects/ng2-bs3-modal/src/modal/modal.component.ts");
/* harmony import */ var _modal_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/header.component */ "./projects/ng2-bs3-modal/src/modal/header.component.ts");
/* harmony import */ var _modal_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/body.component */ "./projects/ng2-bs3-modal/src/modal/body.component.ts");
/* harmony import */ var _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/footer.component */ "./projects/ng2-bs3-modal/src/modal/footer.component.ts");
/* harmony import */ var _autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autofocus/autofocus.directive */ "./projects/ng2-bs3-modal/src/autofocus/autofocus.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BsModalModule = /** @class */ (function () {
    function BsModalModule() {
    }
    BsModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["BsModalComponent"],
                _modal_header_component__WEBPACK_IMPORTED_MODULE_4__["BsModalHeaderComponent"],
                _modal_body_component__WEBPACK_IMPORTED_MODULE_5__["BsModalBodyComponent"],
                _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__["BsModalFooterComponent"],
                _autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_7__["BsAutofocusDirective"]
            ],
            providers: [
                _modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
            ],
            exports: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["BsModalComponent"],
                _modal_header_component__WEBPACK_IMPORTED_MODULE_4__["BsModalHeaderComponent"],
                _modal_body_component__WEBPACK_IMPORTED_MODULE_5__["BsModalBodyComponent"],
                _modal_footer_component__WEBPACK_IMPORTED_MODULE_6__["BsModalFooterComponent"],
                _autofocus_autofocus_directive__WEBPACK_IMPORTED_MODULE_7__["BsAutofocusDirective"]
            ]
        })
    ], BsModalModule);
    return BsModalModule;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/body.component.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/body.component.ts ***!
  \************************************************************/
/*! exports provided: BsModalBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalBodyComponent", function() { return BsModalBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BsModalBodyComponent = /** @class */ (function () {
    function BsModalBodyComponent() {
    }
    BsModalBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-modal-body',
            template: "\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n    "
        })
    ], BsModalBodyComponent);
    return BsModalBodyComponent;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/footer.component.ts":
/*!**************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: BsModalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalFooterComponent", function() { return BsModalFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./projects/ng2-bs3-modal/src/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsModalFooterComponent = /** @class */ (function () {
    function BsModalFooterComponent(modal) {
        this.modal = modal;
        this.showDefaultButtons = false;
        this.dismissButtonLabel = 'Dismiss';
        this.closeButtonLabel = 'Close';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalFooterComponent.prototype, "showDefaultButtons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalFooterComponent.prototype, "dismissButtonLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalFooterComponent.prototype, "closeButtonLabel", void 0);
    BsModalFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-modal-footer',
            template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" (click)=\"modal.dismiss()\">\n                {{dismissButtonLabel}}\n            </button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">\n                {{closeButtonLabel}}\n              </button>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_modal_component__WEBPACK_IMPORTED_MODULE_1__["BsModalComponent"]])
    ], BsModalFooterComponent);
    return BsModalFooterComponent;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/header.component.ts":
/*!**************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/header.component.ts ***!
  \**************************************************************/
/*! exports provided: BsModalHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalHeaderComponent", function() { return BsModalHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component */ "./projects/ng2-bs3-modal/src/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsModalHeaderComponent = /** @class */ (function () {
    function BsModalHeaderComponent(modal) {
        this.modal = modal;
        this.showDismiss = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalHeaderComponent.prototype, "showDismiss", void 0);
    BsModalHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-modal-header',
            template: "\n        <div class=\"modal-header\">\n            <button *ngIf=\"showDismiss\" type=\"button\" class=\"close\" aria-label=\"Dismiss\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_modal_component__WEBPACK_IMPORTED_MODULE_1__["BsModalComponent"]])
    ], BsModalHeaderComponent);
    return BsModalHeaderComponent;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/modal.component.ts":
/*!*************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/modal.component.ts ***!
  \*************************************************************/
/*! exports provided: BsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalComponent", function() { return BsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./projects/ng2-bs3-modal/src/modal/models.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./projects/ng2-bs3-modal/src/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:no-output-on-prefix





var EVENT_SUFFIX = 'ng2-bs3-modal';
var SHOW_EVENT_NAME = "show.bs.modal." + EVENT_SUFFIX;
var SHOWN_EVENT_NAME = "shown.bs.modal." + EVENT_SUFFIX;
var HIDE_EVENT_NAME = "hide.bs.modal." + EVENT_SUFFIX;
var HIDDEN_EVENT_NAME = "hidden.bs.modal." + EVENT_SUFFIX;
var LOADED_EVENT_NAME = "loaded.bs.modal." + EVENT_SUFFIX;
var DATA_KEY = 'bs.modal';
var BsModalComponent = /** @class */ (function () {
    function BsModalComponent(element, service, zone) {
        var _this = this;
        this.element = element;
        this.service = service;
        this.zone = zone;
        this.overrideSize = null;
        this.onInternalClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.subscriptions = [];
        this.visible = false;
        this.showing = false;
        this.hiding = false;
        this.animation = true;
        this.backdrop = true;
        this.keyboard = true;
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setVisible = function (isVisible) {
            return function () {
                _this.visible = isVisible;
                _this.showing = false;
                _this.hiding = false;
            };
        };
        this.setOptions = function (options) {
            var backdrop = options.backdrop;
            if (typeof backdrop === 'string' && backdrop !== 'static') {
                backdrop = true;
            }
            if (options.backdrop !== undefined) {
                _this.options.backdrop = backdrop;
            }
            if (options.keyboard !== undefined) {
                _this.options.keyboard = options.keyboard;
            }
        };
        this.service.add(this);
        this.init();
    }
    Object.defineProperty(BsModalComponent.prototype, "options", {
        get: function () {
            if (!this.$modal) {
                this.init();
            }
            return this.$modal.data(DATA_KEY).options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "fadeClass", {
        get: function () { return this.animation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "modalClass", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "roleAttr", {
        get: function () { return 'dialog'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "tabindexAttr", {
        get: function () { return '-1'; },
        enumerable: true,
        configurable: true
    });
    BsModalComponent.prototype.ngOnInit = function () {
        this.wireUpEventEmitters();
    };
    BsModalComponent.prototype.ngAfterViewInit = function () {
        this.$dialog = this.$modal.find('.modal-dialog');
    };
    BsModalComponent.prototype.ngOnChanges = function () {
        this.setOptions({
            backdrop: this.backdrop,
            keyboard: this.keyboard
        });
    };
    BsModalComponent.prototype.ngOnDestroy = function () {
        this.onInternalClose$.next(_models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Destroy);
        return this.destroy();
    };
    BsModalComponent.prototype.focus = function () {
        this.$modal.trigger('focus');
    };
    BsModalComponent.prototype.routerCanDeactivate = function () {
        this.onInternalClose$.next(_models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].RouteChange);
        return this.destroy();
    };
    BsModalComponent.prototype.open = function (size) {
        this.overrideSize = null;
        if (_models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].isValidSize(size)) {
            this.overrideSize = size;
        }
        return this.show().toPromise();
    };
    BsModalComponent.prototype.close = function (value) {
        var _this = this;
        this.onInternalClose$.next(_models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Close);
        return this.hide().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.onClose.emit(value); })).toPromise().then(function () { return value; });
    };
    BsModalComponent.prototype.dismiss = function () {
        this.onInternalClose$.next(_models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Dismiss);
        return this.hide().toPromise();
    };
    BsModalComponent.prototype.getCssClasses = function () {
        var classes = [];
        if (this.isSmall()) {
            classes.push('modal-sm');
        }
        if (this.isLarge()) {
            classes.push('modal-lg');
        }
        if (this.cssClass) {
            classes.push(this.cssClass);
        }
        return classes.join(' ');
    };
    BsModalComponent.prototype.isSmall = function () {
        return this.overrideSize !== _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Large
            && this.size === _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Small
            || this.overrideSize === _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Small;
    };
    BsModalComponent.prototype.isLarge = function () {
        return this.overrideSize !== _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Small
            && this.size === _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Large
            || this.overrideSize === _models__WEBPACK_IMPORTED_MODULE_3__["BsModalSize"].Large;
    };
    BsModalComponent.prototype.show = function () {
        var _this = this;
        if (this.visible && !this.hiding) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        this.showing = true;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (o) {
            _this.onShown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (next) {
                o.next(next);
                o.complete();
            });
            _this.transitionFix();
            _this.$modal.modal('show');
        });
    };
    BsModalComponent.prototype.transitionFix = function () {
        var _this = this;
        // Fix for shown.bs.modal not firing when .fade is present
        // https://github.com/twbs/bootstrap/issues/11793
        if (this.animation) {
            setTimeout(function () {
                _this.$modal.trigger('focus').trigger(SHOWN_EVENT_NAME);
            }, jQuery.fn.modal['Constructor'].TRANSITION_DURATION);
        }
    };
    BsModalComponent.prototype.hide = function () {
        var _this = this;
        if (!this.visible && !this.showing) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        this.hiding = true;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (o) {
            _this.onHidden$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (next) {
                o.next(next);
                o.complete();
            });
            _this.$modal.modal('hide');
        });
    };
    BsModalComponent.prototype.init = function () {
        var _this = this;
        this.$modal = jQuery(this.element.nativeElement);
        this.$modal.appendTo(document.body);
        this.$modal.modal({
            show: false
        });
        this.onShowEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$modal, SHOW_EVENT_NAME);
        this.onShownEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$modal, SHOWN_EVENT_NAME);
        this.onHideEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$modal, HIDE_EVENT_NAME);
        this.onHiddenEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$modal, HIDDEN_EVENT_NAME);
        this.onLoadedEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$modal, LOADED_EVENT_NAME);
        var onClose$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.onInternalClose$, this.service.onBackdropClose$, this.service.onKeyboardClose$);
        this.onHide$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.onHideEvent$, onClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return ({ event: x[0], type: x[1] }); }));
        this.onHidden$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.onHiddenEvent$, onClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x[1]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setVisible(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.service.focusNext(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.onShown$ = this.onShownEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setVisible(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.onDismiss$ = this.onHidden$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return x !== _models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Close; }));
        // Start watching for events
        (_a = this.subscriptions).push.apply(_a, [
            this.onShown$.subscribe(function () { }),
            this.onHidden$.subscribe(function () { }),
            this.service.onModalStack$.subscribe(function () { })
        ]);
        var _a;
    };
    BsModalComponent.prototype.wireUpEventEmitters = function () {
        this.wireUpEventEmitter(this.onShow, this.onShowEvent$);
        this.wireUpEventEmitter(this.onOpen, this.onShown$);
        this.wireUpEventEmitter(this.onHide, this.onHide$);
        this.wireUpEventEmitter(this.onDismiss, this.onDismiss$);
        this.wireUpEventEmitter(this.onLoaded, this.onLoadedEvent$);
    };
    BsModalComponent.prototype.wireUpEventEmitter = function (emitter, stream$) {
        var _this = this;
        var sub = stream$.subscribe(function (next) {
            _this.zone.run(function () {
                emitter.next(next);
            });
        });
        this.subscriptions.push(sub);
    };
    BsModalComponent.prototype.destroy = function () {
        var _this = this;
        return this.hide().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.service.remove(_this);
            _this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
            _this.subscriptions = [];
            if (_this.$modal) {
                _this.$modal.data(DATA_KEY, null);
                _this.$modal.remove();
                _this.$modal = null;
            }
        })).toPromise();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "animation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "backdrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "keyboard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BsModalComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BsModalComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onDismiss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsModalComponent.prototype, "onLoaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.fade'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BsModalComponent.prototype, "fadeClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.modal'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BsModalComponent.prototype, "modalClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.role'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BsModalComponent.prototype, "roleAttr", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.tabindex'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BsModalComponent.prototype, "tabindexAttr", null);
    BsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-modal',
            template: "\n        <div class=\"modal-dialog\" [ngClass]=\"getCssClasses()\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _modal_service__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], BsModalComponent);
    return BsModalComponent;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/modal.service.ts":
/*!***********************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/modal.service.ts ***!
  \***********************************************************/
/*! exports provided: BsModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models */ "./projects/ng2-bs3-modal/src/modal/models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EVENT_SUFFIX = 'ng2-bs3-modal';
var KEYUP_EVENT_NAME = "keyup." + EVENT_SUFFIX;
var CLICK_EVENT_NAME = "click." + EVENT_SUFFIX;
var SHOW_EVENT_NAME = "show.bs.modal." + EVENT_SUFFIX;
var BsModalService = /** @class */ (function () {
    function BsModalService() {
        var _this = this;
        this.modals = [];
        this.$body = jQuery(document.body);
        this.onBackdropClose$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$body, CLICK_EVENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return jQuery(e.target).is('.modal'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Backdrop; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.onKeyboardClose$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$body, KEYUP_EVENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) { return e.which === 27; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _models__WEBPACK_IMPORTED_MODULE_3__["BsModalHideType"].Keyboard; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.onModalStack$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.$body, SHOW_EVENT_NAME).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            var zIndex = 1040 + (10 * jQuery('.modal:visible').length);
            jQuery(_this).css('z-index', zIndex);
            setTimeout(function () {
                jQuery('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    BsModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    BsModalService.prototype.remove = function (modal) {
        var index = this.modals.indexOf(modal);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    };
    BsModalService.prototype.focusNext = function () {
        var visible = this.modals.filter(function (m) { return m.visible; });
        if (visible.length) {
            this.$body.addClass('modal-open');
            visible[visible.length - 1].focus();
        }
    };
    BsModalService.prototype.dismissAll = function () {
        return Promise.all(this.modals.map(function (m) {
            return m.dismiss();
        }));
    };
    BsModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BsModalService);
    return BsModalService;
}());



/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/models.ts":
/*!****************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/models.ts ***!
  \****************************************************/
/*! exports provided: BsModalHideType, BsModalSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_modal_hide_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/modal-hide-type */ "./projects/ng2-bs3-modal/src/modal/models/modal-hide-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalHideType", function() { return _models_modal_hide_type__WEBPACK_IMPORTED_MODULE_0__["BsModalHideType"]; });

/* harmony import */ var _models_modal_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/modal-size */ "./projects/ng2-bs3-modal/src/modal/models/modal-size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalSize", function() { return _models_modal_size__WEBPACK_IMPORTED_MODULE_1__["BsModalSize"]; });





/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/models/modal-hide-type.ts":
/*!********************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/models/modal-hide-type.ts ***!
  \********************************************************************/
/*! exports provided: BsModalHideType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalHideType", function() { return BsModalHideType; });
var BsModalHideType;
(function (BsModalHideType) {
    BsModalHideType[BsModalHideType["Close"] = 0] = "Close";
    BsModalHideType[BsModalHideType["Dismiss"] = 1] = "Dismiss";
    BsModalHideType[BsModalHideType["Backdrop"] = 2] = "Backdrop";
    BsModalHideType[BsModalHideType["Keyboard"] = 3] = "Keyboard";
    BsModalHideType[BsModalHideType["RouteChange"] = 4] = "RouteChange";
    BsModalHideType[BsModalHideType["Destroy"] = 5] = "Destroy";
})(BsModalHideType || (BsModalHideType = {}));


/***/ }),

/***/ "./projects/ng2-bs3-modal/src/modal/models/modal-size.ts":
/*!***************************************************************!*\
  !*** ./projects/ng2-bs3-modal/src/modal/models/modal-size.ts ***!
  \***************************************************************/
/*! exports provided: BsModalSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalSize", function() { return BsModalSize; });
var BsModalSize = /** @class */ (function () {
    function BsModalSize() {
    }
    BsModalSize.isValidSize = function (size) {
        return size && (size === BsModalSize.Small || size === BsModalSize.Large);
    };
    BsModalSize.Small = 'sm';
    BsModalSize.Large = 'lg';
    return BsModalSize;
}());



/***/ }),

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ng2-bs3-modal/src */ "./projects/ng2-bs3-modal/src/index.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modal_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-demo.component */ "./src/app/modal-demo.component.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _modal_demo_component__WEBPACK_IMPORTED_MODULE_7__["ModalDemoComponent"],
                _hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_4__["BsModalModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-demo.component */ "./src/app/modal-demo.component.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");



var routes = [
    { path: '', component: _modal_demo_component__WEBPACK_IMPORTED_MODULE_1__["ModalDemoComponent"] },
    { path: 'hello', component: _hello_component__WEBPACK_IMPORTED_MODULE_2__["HelloComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/hello.component.ts":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: "\n        <section class=\"container\">\n            <h1>Hello</h1>\n            <p><a [routerLink]=\"['/']\">Go back...</a></p>\n        </section>\n    "
        })
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/modal-demo.component.html":
/*!*******************************************!*\
  !*** ./src/app/modal-demo.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h1>Angular Bootstrap Modal</h1>\n    <hr>\n\n    <h2>Configuration</h2>\n    <hr>\n    <p>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"animation = !animation\">Toggle Animation ({{ animation }})</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"keyboard = !keyboard\">Toggle Keyboard ({{ keyboard }})</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"index = index + 1; backdrop = backdropOptions[index%3]\">Toggle Backdrop ({{ backdrop }})</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cssClass = css ? '' : 'red-text'; css = !css\">Toggle CSS Class ({{ cssClass ? cssClass : 'none' }})</button>\n    </p>\n    <br />\n\n    <h2>Common Usage</h2>\n    <hr>\n    <p>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open()\">Open me!</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open('lg')\">Large modal</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"modal.open('sm')\">Small modal</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"noEventsModal.open()\">No Events</button>\n    </p>\n    <br />\n\n    <h2>Other Usages</h2>\n    <hr>\n    <p>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"navigateModal.open()\">Navigate in modal</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"open()\">Open from parent component</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"parentModal.open()\">Stacked modals</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"validationModal.open()\">With form validation</button>\n    </p>\n    <br />\n\n    <h2>Intercepting events</h2>\n    <hr>\n    <p>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"interceptDismissModal.open()\">Intercept hide</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"interceptOpenModal.open()\">Intercept show</button>\n        | <button type=\"button\" class=\"btn btn-default\" (click)=\"intercept = !intercept\">Toggle intercept ({{intercept}})</button>\n    </p>\n    <br />\n\n    <h2>Output</h2>\n    <pre>{{ output }}</pre>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #modal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <ul>\n                <li *ngFor=\"let item of items\">\n                    <a href=\"#\" (click)=\"$event.preventDefault(); selected = item\">{{ item }}</a>\n                </li>\n            </ul>\n            <p *ngIf=\"selected\">Selected:\n                <b>{{ selected }}</b>\n            </p>\n        </bs-modal-body>\n        <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" [cssClass]=\"cssClass\" #noEventsModal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <ul>\n                <li *ngFor=\"let item of items\">\n                    <a href=\"#\" (click)=\"$event.preventDefault(); selected = item\">{{ item }}</a>\n                </li>\n            </ul>\n            <p *ngIf=\"selected\">Selected:\n                <b>{{ selected }}</b>\n            </p>\n        </bs-modal-body>\n        <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"navigate()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #navigateModal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <p>I will navigate to another route when you close the modal.</p>\n        </bs-modal-body>\n        <bs-modal-footer>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"navigateModal.dismiss()\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" autofocus (click)=\"navigateModal.close()\">Go</button>\n        </bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal style=\"z-index: 1049\" [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\"\n        (onDismiss)=\"dismissed($event)\" (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #parentModal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <p>\n                <strong>Note:</strong> My\n                <code>z-index</code> is set to\n                <code>1049</code>.</p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"stackedModel.open()\">Open another modal</button>\n        </bs-modal-body>\n        <bs-modal-footer>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"parentModal.dismiss()\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"parentModal.close()\">Ok</button>\n        </bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #stackedModel>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a stacked modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"dismissAll()\">Dismiss All Modals</button>\n        </bs-modal-body>\n        <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" [cssClass]=\"cssClass\" #validationModal>\n        <form #modalForm=\"ngForm\">\n            <bs-modal-header [showDismiss]=\"true\">\n                <h4 class=\"modal-title\">I'm a modal!</h4>\n            </bs-modal-header>\n            <bs-modal-body>\n                <div class=\"form-group\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.firstName\" name=\"firstName\" id=\"firstName\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.lastName\" name=\"lastName\" id=\"lastName\">\n                </div>\n            </bs-modal-body>\n            <bs-modal-footer>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"validationModal.dismiss()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!modalForm.valid\" (click)=\"validationModal.close()\">Save</button>\n            </bs-modal-footer>\n        </form>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"false\" [backdrop]=\"'static'\" (onClose)=\"closed()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" [cssClass]=\"cssClass\" (onHide)=\"interceptDismiss($event)\" #interceptDismissModal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">Can't dismiss if <code>intercept</code> is enabled</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <p>\n                Note: Keyboard and backdrop events cannot be prevented with\n                <code>event.preventDefault()</code>. Use the\n                <code>keyboard</code> and\n                <code>backdrop</code> options.\n            </p>\n            <ul>\n                <li *ngFor=\"let item of items\">\n                    <a href=\"#\" (click)=\"$event.preventDefault(); selected = item\">{{ item }}</a>\n                </li>\n            </ul>\n            <p *ngIf=\"selected\">Selected:\n                <b>{{ selected }}</b>\n            </p>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"intercept = !intercept\" >Toggle intercept ({{intercept}})</button>\n        </bs-modal-body>\n        <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n    </bs-modal>\n\n    <bs-modal [animation]=\"animation\" [keyboard]=\"keyboard\" [backdrop]=\"backdrop\" (onClose)=\"closed()\" (onDismiss)=\"dismissed($event)\"\n        (onOpen)=\"opened()\" (onShow)=\"interceptOpen($event)\" [cssClass]=\"cssClass\" #interceptOpenModal>\n        <bs-modal-header [showDismiss]=\"true\">\n            <h4 class=\"modal-title\">I'm a modal!</h4>\n        </bs-modal-header>\n        <bs-modal-body>\n            <ul>\n                <li *ngFor=\"let item of items\">\n                    <a href=\"#\" (click)=\"$event.preventDefault(); selected = item\">{{ item }}</a>\n                </li>\n            </ul>\n            <p *ngIf=\"selected\">Selected:\n                <b>{{ selected }}</b>\n            </p>\n        </bs-modal-body>\n        <bs-modal-footer [showDefaultButtons]=\"true\"></bs-modal-footer>\n    </bs-modal>\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/modal-demo.component.ts":
/*!*****************************************!*\
  !*** ./src/app/modal-demo.component.ts ***!
  \*****************************************/
/*! exports provided: ModalDemoComponent, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoComponent", function() { return ModalDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ng2-bs3-modal/src */ "./projects/ng2-bs3-modal/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalDemoComponent = /** @class */ (function () {
    function ModalDemoComponent(router, modalservice) {
        this.router = router;
        this.modalservice = modalservice;
        this.items = ['item1', 'item2', 'item3'];
        this.model = new Person();
        this.index = 0;
        this.backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.css = false;
        this.intercept = true;
    }
    ModalDemoComponent.prototype.closed = function () {
        this.output = '(closed) ' + this.selected;
    };
    ModalDemoComponent.prototype.dismissed = function (type) {
        this.output = "(dismissed) " + projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_2__["BsModalHideType"][type];
    };
    ModalDemoComponent.prototype.opened = function () {
        this.output = '(opened)';
    };
    ModalDemoComponent.prototype.navigate = function () {
        this.router.navigateByUrl('/hello');
    };
    ModalDemoComponent.prototype.open = function () {
        this.modal.open();
    };
    ModalDemoComponent.prototype.dismissAll = function () {
        this.modalservice.dismissAll();
    };
    ModalDemoComponent.prototype.interceptDismiss = function (e) {
        if (this.intercept && e.type === projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_2__["BsModalHideType"].Dismiss) {
            e.event.preventDefault();
            this.output = '(intercepted) Dismiss';
        }
    };
    ModalDemoComponent.prototype.interceptOpen = function (e) {
        if (this.intercept) {
            e.preventDefault();
            this.output = '(intercepted) Open';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_2__["BsModalComponent"])
    ], ModalDemoComponent.prototype, "modal", void 0);
    ModalDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-demo',
            template: __webpack_require__(/*! ./modal-demo.component.html */ "./src/app/modal-demo.component.html"),
            styles: [
                ".ng-valid[required] {\n            border-left: 5px solid #5cb85c; /* green */\n        }",
                ".ng-invalid:not(.ng-untouched):not(form) {\n            border-left: 5px solid #d9534f; /* red */\n        }",
                ".red-text {\n            color: #d9534f !important; /* red */\n        }"
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], projects_ng2_bs3_modal_src__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ModalDemoComponent);
    return ModalDemoComponent;
}());

var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
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

/***/ "./src/jquery.ts":
/*!***********************!*\
  !*** ./src/jquery.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

window['jQuery'] = window['$'] = jquery__WEBPACK_IMPORTED_MODULE_0__;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery */ "./src/jquery.ts");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/npm.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alikamalizade/dev/ng2-bs3-modal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map