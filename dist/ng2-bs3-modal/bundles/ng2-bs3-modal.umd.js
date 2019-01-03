(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-bs3-modal', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global['ng2-bs3-modal'] = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common));
}(this, (function (exports,core,rxjs,operators,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var BsModalHideType = {
        Close: 0,
        Dismiss: 1,
        Backdrop: 2,
        Keyboard: 3,
        RouteChange: 4,
        Destroy: 5,
    };
    BsModalHideType[BsModalHideType.Close] = 'Close';
    BsModalHideType[BsModalHideType.Dismiss] = 'Dismiss';
    BsModalHideType[BsModalHideType.Backdrop] = 'Backdrop';
    BsModalHideType[BsModalHideType.Keyboard] = 'Keyboard';
    BsModalHideType[BsModalHideType.RouteChange] = 'RouteChange';
    BsModalHideType[BsModalHideType.Destroy] = 'Destroy';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsModalSize = (function () {
        function BsModalSize() {
        }
        /**
         * @param {?} size
         * @return {?}
         */
        BsModalSize.isValidSize = /**
         * @param {?} size
         * @return {?}
         */
            function (size) {
                return size && (size === BsModalSize.Small || size === BsModalSize.Large);
            };
        BsModalSize.Small = 'sm';
        BsModalSize.Large = 'lg';
        return BsModalSize;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EVENT_SUFFIX = 'ng2-bs3-modal';
    /** @type {?} */
    var KEYUP_EVENT_NAME = "keyup." + EVENT_SUFFIX;
    /** @type {?} */
    var CLICK_EVENT_NAME = "click." + EVENT_SUFFIX;
    /** @type {?} */
    var SHOW_EVENT_NAME = "show.bs.modal." + EVENT_SUFFIX;
    var BsModalService = (function () {
        function BsModalService() {
            var _this = this;
            this.modals = [];
            this.$body = jQuery(document.body);
            this.onBackdropClose$ = rxjs.fromEvent(this.$body, CLICK_EVENT_NAME).pipe(operators.filter(function (e) { return jQuery(e.target).is('.modal'); }), operators.map(function () { return BsModalHideType.Backdrop; }), operators.share());
            this.onKeyboardClose$ = rxjs.fromEvent(this.$body, KEYUP_EVENT_NAME).pipe(operators.filter(function (e) { return e.which === 27; }), operators.map(function () { return BsModalHideType.Keyboard; }), operators.share());
            this.onModalStack$ = rxjs.fromEvent(this.$body, SHOW_EVENT_NAME).pipe(operators.tap(function () {
                /** @type {?} */
                var zIndex = 1040 + (10 * jQuery('.modal:visible').length);
                jQuery(_this).css('z-index', zIndex);
                setTimeout(function () {
                    jQuery('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                }, 0);
            }), operators.share());
        }
        /**
         * @param {?} modal
         * @return {?}
         */
        BsModalService.prototype.add = /**
         * @param {?} modal
         * @return {?}
         */
            function (modal) {
                this.modals.push(modal);
            };
        /**
         * @param {?} modal
         * @return {?}
         */
        BsModalService.prototype.remove = /**
         * @param {?} modal
         * @return {?}
         */
            function (modal) {
                /** @type {?} */
                var index = this.modals.indexOf(modal);
                if (index > -1) {
                    this.modals.splice(index, 1);
                }
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.focusNext = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var visible = this.modals.filter(function (m) { return m.visible; });
                if (visible.length) {
                    this.$body.addClass('modal-open');
                    visible[visible.length - 1].focus();
                }
            };
        /**
         * @return {?}
         */
        BsModalService.prototype.dismissAll = /**
         * @return {?}
         */
            function () {
                return Promise.all(this.modals.map(function (m) {
                    return m.dismiss();
                }));
            };
        BsModalService.decorators = [
            { type: core.Injectable },
        ];
        BsModalService.ctorParameters = function () { return []; };
        return BsModalService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EVENT_SUFFIX$1 = 'ng2-bs3-modal';
    /** @type {?} */
    var SHOW_EVENT_NAME$1 = "show.bs.modal." + EVENT_SUFFIX$1;
    /** @type {?} */
    var SHOWN_EVENT_NAME = "shown.bs.modal." + EVENT_SUFFIX$1;
    /** @type {?} */
    var HIDE_EVENT_NAME = "hide.bs.modal." + EVENT_SUFFIX$1;
    /** @type {?} */
    var HIDDEN_EVENT_NAME = "hidden.bs.modal." + EVENT_SUFFIX$1;
    /** @type {?} */
    var LOADED_EVENT_NAME = "loaded.bs.modal." + EVENT_SUFFIX$1;
    /** @type {?} */
    var DATA_KEY = 'bs.modal';
    var BsModalComponent = (function () {
        function BsModalComponent(element, service, zone) {
            var _this = this;
            this.element = element;
            this.service = service;
            this.zone = zone;
            this.overrideSize = null;
            this.onInternalClose$ = new rxjs.Subject();
            this.subscriptions = [];
            this.visible = false;
            this.showing = false;
            this.hiding = false;
            this.animation = true;
            this.backdrop = true;
            this.keyboard = true;
            this.onShow = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onHide = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onDismiss = new core.EventEmitter();
            this.onLoaded = new core.EventEmitter();
            this.setVisible = function (isVisible) {
                return function () {
                    _this.visible = isVisible;
                    _this.showing = false;
                    _this.hiding = false;
                };
            };
            this.setOptions = function (options) {
                /** @type {?} */
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
            get: /**
             * @private
             * @return {?}
             */ function () {
                if (!this.$modal) {
                    this.init();
                }
                return this.$modal.data(DATA_KEY).options;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsModalComponent.prototype, "fadeClass", {
            get: /**
             * @return {?}
             */ function () { return this.animation; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsModalComponent.prototype, "modalClass", {
            get: /**
             * @return {?}
             */ function () { return true; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsModalComponent.prototype, "roleAttr", {
            get: /**
             * @return {?}
             */ function () { return 'dialog'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsModalComponent.prototype, "tabindexAttr", {
            get: /**
             * @return {?}
             */ function () { return '-1'; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.wireUpEventEmitters();
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.$dialog = this.$modal.find('.modal-dialog');
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setOptions({
                    backdrop: this.backdrop,
                    keyboard: this.keyboard
                });
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.onInternalClose$.next(BsModalHideType.Destroy);
                return this.destroy();
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.$modal.trigger('focus');
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.routerCanDeactivate = /**
         * @return {?}
         */
            function () {
                this.onInternalClose$.next(BsModalHideType.RouteChange);
                return this.destroy();
            };
        /**
         * @param {?=} size
         * @return {?}
         */
        BsModalComponent.prototype.open = /**
         * @param {?=} size
         * @return {?}
         */
            function (size) {
                this.overrideSize = null;
                if (BsModalSize.isValidSize(size)) {
                    this.overrideSize = size;
                }
                return this.show().toPromise();
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        BsModalComponent.prototype.close = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                this.onInternalClose$.next(BsModalHideType.Close);
                return this.hide().pipe(operators.tap(function () { return _this.onClose.emit(value); })).toPromise().then(function () { return value; });
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.dismiss = /**
         * @return {?}
         */
            function () {
                this.onInternalClose$.next(BsModalHideType.Dismiss);
                return this.hide().toPromise();
            };
        /**
         * @return {?}
         */
        BsModalComponent.prototype.getCssClasses = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
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
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.isSmall = /**
         * @private
         * @return {?}
         */
            function () {
                return this.overrideSize !== BsModalSize.Large
                    && this.size === BsModalSize.Small
                    || this.overrideSize === BsModalSize.Small;
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.isLarge = /**
         * @private
         * @return {?}
         */
            function () {
                return this.overrideSize !== BsModalSize.Small
                    && this.size === BsModalSize.Large
                    || this.overrideSize === BsModalSize.Large;
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.show = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.visible && !this.hiding) {
                    return rxjs.of(null);
                }
                this.showing = true;
                return rxjs.Observable.create(function (o) {
                    _this.onShown$.pipe(operators.take(1)).subscribe(function (next) {
                        o.next(next);
                        o.complete();
                    });
                    _this.transitionFix();
                    _this.$modal.modal('show');
                });
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.transitionFix = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                // Fix for shown.bs.modal not firing when .fade is present
                // https://github.com/twbs/bootstrap/issues/11793
                if (this.animation) {
                    setTimeout(function () {
                        _this.$modal.trigger('focus').trigger(SHOWN_EVENT_NAME);
                    }, jQuery.fn.modal['Constructor'].TRANSITION_DURATION);
                }
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.hide = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.visible && !this.showing) {
                    return rxjs.of(null);
                }
                this.hiding = true;
                return rxjs.Observable.create(function (o) {
                    _this.onHidden$.pipe(operators.take(1)).subscribe(function (next) {
                        o.next(next);
                        o.complete();
                    });
                    _this.$modal.modal('hide');
                });
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.$modal = jQuery(this.element.nativeElement);
                this.$modal.appendTo(document.body);
                this.$modal.modal({
                    show: false
                });
                this.onShowEvent$ = rxjs.fromEvent(this.$modal, SHOW_EVENT_NAME$1);
                this.onShownEvent$ = rxjs.fromEvent(this.$modal, SHOWN_EVENT_NAME);
                this.onHideEvent$ = rxjs.fromEvent(this.$modal, HIDE_EVENT_NAME);
                this.onHiddenEvent$ = rxjs.fromEvent(this.$modal, HIDDEN_EVENT_NAME);
                this.onLoadedEvent$ = rxjs.fromEvent(this.$modal, LOADED_EVENT_NAME);
                /** @type {?} */
                var onClose$ = rxjs.merge(this.onInternalClose$, this.service.onBackdropClose$, this.service.onKeyboardClose$);
                this.onHide$ = rxjs.zip(this.onHideEvent$, onClose$).pipe(operators.map(function (x) { return (({ event: x[0], type: x[1] })); }));
                this.onHidden$ = rxjs.zip(this.onHiddenEvent$, onClose$).pipe(operators.map(function (x) { return x[1]; }), operators.tap(this.setVisible(false)), operators.tap(function () { return _this.service.focusNext(); }), operators.share());
                this.onShown$ = this.onShownEvent$.pipe(operators.tap(this.setVisible(true)), operators.share());
                this.onDismiss$ = this.onHidden$.pipe(operators.filter(function (x) { return x !== BsModalHideType.Close; }));
                // Start watching for events
                (_a = this.subscriptions).push.apply(_a, __spread([
                    this.onShown$.subscribe(function () { }),
                    this.onHidden$.subscribe(function () { }),
                    this.service.onModalStack$.subscribe(function () { })
                ]));
                var _a;
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.wireUpEventEmitters = /**
         * @private
         * @return {?}
         */
            function () {
                this.wireUpEventEmitter(this.onShow, this.onShowEvent$);
                this.wireUpEventEmitter(this.onOpen, this.onShown$);
                this.wireUpEventEmitter(this.onHide, this.onHide$);
                this.wireUpEventEmitter(this.onDismiss, this.onDismiss$);
                this.wireUpEventEmitter(this.onLoaded, this.onLoadedEvent$);
            };
        /**
         * @private
         * @template T
         * @param {?} emitter
         * @param {?} stream$
         * @return {?}
         */
        BsModalComponent.prototype.wireUpEventEmitter = /**
         * @private
         * @template T
         * @param {?} emitter
         * @param {?} stream$
         * @return {?}
         */
            function (emitter, stream$) {
                var _this = this;
                /** @type {?} */
                var sub = stream$.subscribe(function (next) {
                    _this.zone.run(function () {
                        emitter.next(next);
                    });
                });
                this.subscriptions.push(sub);
            };
        /**
         * @private
         * @return {?}
         */
        BsModalComponent.prototype.destroy = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                return this.hide().pipe(operators.tap(function () {
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
        BsModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal',
                        template: "\n        <div class=\"modal-dialog\" [ngClass]=\"getCssClasses()\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
                    },] },
        ];
        BsModalComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: BsModalService },
                { type: core.NgZone }
            ];
        };
        BsModalComponent.propDecorators = {
            animation: [{ type: core.Input }],
            backdrop: [{ type: core.Input }],
            keyboard: [{ type: core.Input }],
            size: [{ type: core.Input }],
            cssClass: [{ type: core.Input }],
            onShow: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onHide: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onDismiss: [{ type: core.Output }],
            onLoaded: [{ type: core.Output }],
            fadeClass: [{ type: core.HostBinding, args: ['class.fade',] }],
            modalClass: [{ type: core.HostBinding, args: ['class.modal',] }],
            roleAttr: [{ type: core.HostBinding, args: ['attr.role',] }],
            tabindexAttr: [{ type: core.HostBinding, args: ['attr.tabindex',] }]
        };
        return BsModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsModalHeaderComponent = (function () {
        function BsModalHeaderComponent(modal) {
            this.modal = modal;
            this.showDismiss = false;
        }
        BsModalHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-header',
                        template: "\n        <div class=\"modal-header\">\n            <button *ngIf=\"showDismiss\" type=\"button\" class=\"close\" aria-label=\"Dismiss\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
                    },] },
        ];
        BsModalHeaderComponent.ctorParameters = function () {
            return [
                { type: BsModalComponent }
            ];
        };
        BsModalHeaderComponent.propDecorators = {
            showDismiss: [{ type: core.Input }]
        };
        return BsModalHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsModalBodyComponent = (function () {
        function BsModalBodyComponent() {
        }
        BsModalBodyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-body',
                        template: "\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n    "
                    },] },
        ];
        return BsModalBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsModalFooterComponent = (function () {
        function BsModalFooterComponent(modal) {
            this.modal = modal;
            this.showDefaultButtons = false;
            this.dismissButtonLabel = 'Dismiss';
            this.closeButtonLabel = 'Close';
        }
        BsModalFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-footer',
                        template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" (click)=\"modal.dismiss()\">\n                {{dismissButtonLabel}}\n            </button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">\n                {{closeButtonLabel}}\n              </button>\n        </div>\n    "
                    },] },
        ];
        BsModalFooterComponent.ctorParameters = function () {
            return [
                { type: BsModalComponent }
            ];
        };
        BsModalFooterComponent.propDecorators = {
            showDefaultButtons: [{ type: core.Input }],
            dismissButtonLabel: [{ type: core.Input }],
            closeButtonLabel: [{ type: core.Input }]
        };
        return BsModalFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsAutofocusDirective = (function () {
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
        BsAutofocusDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[autofocus]'
                    },] },
        ];
        BsAutofocusDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: BsModalComponent, decorators: [{ type: core.Optional }] }
            ];
        };
        return BsAutofocusDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BsModalModule = (function () {
        function BsModalModule() {
        }
        BsModalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            BsModalComponent,
                            BsModalHeaderComponent,
                            BsModalBodyComponent,
                            BsModalFooterComponent,
                            BsAutofocusDirective
                        ],
                        providers: [
                            BsModalService
                        ],
                        exports: [
                            BsModalComponent,
                            BsModalHeaderComponent,
                            BsModalBodyComponent,
                            BsModalFooterComponent,
                            BsAutofocusDirective
                        ]
                    },] },
        ];
        return BsModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BsModalService = BsModalService;
    exports.BsModalComponent = BsModalComponent;
    exports.BsModalHeaderComponent = BsModalHeaderComponent;
    exports.BsModalBodyComponent = BsModalBodyComponent;
    exports.BsModalFooterComponent = BsModalFooterComponent;
    exports.BsModalHideType = BsModalHideType;
    exports.BsModalSize = BsModalSize;
    exports.BsModalModule = BsModalModule;
    exports.ɵa = BsAutofocusDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvbW9kZWxzL21vZGFsLWhpZGUtdHlwZS50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9tb2RhbC9tb2RlbHMvbW9kYWwtc2l6ZS50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9tb2RhbC9tb2RhbC5zZXJ2aWNlLnRzIixudWxsLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItYnMzLW1vZGFsL21vZGFsL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvYm9keS5jb21wb25lbnQudHMiLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9hdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQnNNb2RhbEhpZGVUeXBlIHtcbiAgICBDbG9zZSxcbiAgICBEaXNtaXNzLFxuICAgIEJhY2tkcm9wLFxuICAgIEtleWJvYXJkLFxuICAgIFJvdXRlQ2hhbmdlLFxuICAgIERlc3Ryb3lcbn1cbiIsImV4cG9ydCBjbGFzcyBCc01vZGFsU2l6ZSB7XG4gICAgc3RhdGljIFNtYWxsID0gJ3NtJztcbiAgICBzdGF0aWMgTGFyZ2UgPSAnbGcnO1xuXG4gICAgc3RhdGljIGlzVmFsaWRTaXplKHNpemU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gc2l6ZSAmJiAoc2l6ZSA9PT0gQnNNb2RhbFNpemUuU21hbGwgfHwgc2l6ZSA9PT0gQnNNb2RhbFNpemUuTGFyZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNoYXJlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsSGlkZVR5cGUgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IEVWRU5UX1NVRkZJWCA9ICduZzItYnMzLW1vZGFsJztcbmNvbnN0IEtFWVVQX0VWRU5UX05BTUUgPSBga2V5dXAuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IENMSUNLX0VWRU5UX05BTUUgPSBgY2xpY2suJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IFNIT1dfRVZFTlRfTkFNRSA9IGBzaG93LmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XG5cbiAgICBwcml2YXRlIG1vZGFsczogQnNNb2RhbENvbXBvbmVudFtdID0gW107XG4gICAgcHJpdmF0ZSAkYm9keTogSlF1ZXJ5O1xuXG4gICAgb25CYWNrZHJvcENsb3NlJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIG9uS2V5Ym9hcmRDbG9zZSQ6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPjtcbiAgICBvbk1vZGFsU3RhY2skOiBPYnNlcnZhYmxlPEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRib2R5ID0galF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZHJvcENsb3NlJCA9IGZyb21FdmVudCh0aGlzLiRib2R5LCBDTElDS19FVkVOVF9OQU1FKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiBqUXVlcnkoZS50YXJnZXQpLmlzKCcubW9kYWwnKSksXG4gICAgICAgICAgICBtYXAoKCkgPT4gQnNNb2RhbEhpZGVUeXBlLkJhY2tkcm9wKSxcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vbktleWJvYXJkQ2xvc2UkID0gZnJvbUV2ZW50KHRoaXMuJGJvZHksIEtFWVVQX0VWRU5UX05BTUUpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKGU6IEtleWJvYXJkRXZlbnQpID0+IGUud2hpY2ggPT09IDI3KSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiBCc01vZGFsSGlkZVR5cGUuS2V5Ym9hcmQpLFxuICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25Nb2RhbFN0YWNrJCA9IGZyb21FdmVudDxFdmVudD4odGhpcy4kYm9keSwgU0hPV19FVkVOVF9OQU1FKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB6SW5kZXggPSAxMDQwICsgKDEwICogalF1ZXJ5KCcubW9kYWw6dmlzaWJsZScpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnei1pbmRleCcsIHpJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9kYWwtYmFja2Ryb3AnKS5ub3QoJy5tb2RhbC1zdGFjaycpLmNzcygnei1pbmRleCcsIHpJbmRleCAtIDEpLmFkZENsYXNzKCdtb2RhbC1zdGFjaycpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkKG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgIH1cblxuICAgIHJlbW92ZShtb2RhbDogQnNNb2RhbENvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzTmV4dCgpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMubW9kYWxzLmZpbHRlcihtID0+IG0udmlzaWJsZSk7XG4gICAgICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgdmlzaWJsZVt2aXNpYmxlLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNtaXNzQWxsKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5tb2RhbHMubWFwKChtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbS5kaXNtaXNzKCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcbmltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIE9uSW5pdCxcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIG9mIGFzIG9ic2VydmFibGVPZiwgZnJvbUV2ZW50LCBtZXJnZSwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBmaWx0ZXIsIHRhcCwgc2hhcmUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQnNNb2RhbEhpZGVFdmVudCwgQnNNb2RhbEhpZGVUeXBlLCBCc01vZGFsT3B0aW9ucywgQnNNb2RhbFNpemUgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbmNvbnN0IEVWRU5UX1NVRkZJWCA9ICduZzItYnMzLW1vZGFsJztcbmNvbnN0IFNIT1dfRVZFTlRfTkFNRSA9IGBzaG93LmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBTSE9XTl9FVkVOVF9OQU1FID0gYHNob3duLmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBISURFX0VWRU5UX05BTUUgPSBgaGlkZS5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgSElEREVOX0VWRU5UX05BTUUgPSBgaGlkZGVuLmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBMT0FERURfRVZFTlRfTkFNRSA9IGBsb2FkZWQuYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdicy1tb2RhbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIFtuZ0NsYXNzXT1cImdldENzc0NsYXNzZXMoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIG92ZXJyaWRlU2l6ZTogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlICRtb2RhbDogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGRpYWxvZzogSlF1ZXJ5O1xuICAgIHByaXZhdGUgb25TaG93RXZlbnQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgICBwcml2YXRlIG9uU2hvd25FdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25IaWRlRXZlbnQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgICBwcml2YXRlIG9uSGlkZGVuRXZlbnQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgICBwcml2YXRlIG9uTG9hZGVkRXZlbnQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgICBwcml2YXRlIG9uU2hvd24kOiBPYnNlcnZhYmxlPHt9PjtcbiAgICBwcml2YXRlIG9uSW50ZXJuYWxDbG9zZSQ6IFN1YmplY3Q8QnNNb2RhbEhpZGVUeXBlPiA9IG5ldyBTdWJqZWN0PEJzTW9kYWxIaWRlVHlwZT4oKTtcbiAgICBwcml2YXRlIG9uRGlzbWlzcyQ6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPjtcbiAgICBwcml2YXRlIG9uSGlkZSQ6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVFdmVudD47XG4gICAgcHJpdmF0ZSBvbkhpZGRlbiQ6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBnZXQgb3B0aW9ucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRtb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vZGFsLmRhdGEoREFUQV9LRVkpLm9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgIHNob3dpbmcgPSBmYWxzZTtcbiAgICBoaWRpbmcgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgQElucHV0KCkgYmFja2Ryb3A6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3NzQ2xhc3M6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBvblNob3cgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25IaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxCc01vZGFsSGlkZVR5cGU+KCk7XG4gICAgQE91dHB1dCgpIG9uTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhZGUnKVxuICAgIGdldCBmYWRlQ2xhc3MoKSB7IHJldHVybiB0aGlzLmFuaW1hdGlvbjsgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2RhbCcpXG4gICAgZ2V0IG1vZGFsQ2xhc3MoKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gICAgZ2V0IHJvbGVBdHRyKCkgeyByZXR1cm4gJ2RpYWxvZyc7IH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gICAgZ2V0IHRhYmluZGV4QXR0cigpIHsgcmV0dXJuICctMSc7IH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzZXJ2aWNlOiBCc01vZGFsU2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVycygpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy4kZGlhbG9nID0gdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWRpYWxvZycpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgYmFja2Ryb3A6IHRoaXMuYmFja2Ryb3AsXG4gICAgICAgICAgICBrZXlib2FyZDogdGhpcy5rZXlib2FyZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkludGVybmFsQ2xvc2UkLm5leHQoQnNNb2RhbEhpZGVUeXBlLkRlc3Ryb3kpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZSgpOiBhbnkge1xuICAgICAgICB0aGlzLm9uSW50ZXJuYWxDbG9zZSQubmV4dChCc01vZGFsSGlkZVR5cGUuUm91dGVDaGFuZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgb3BlbihzaXplPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVTaXplID0gbnVsbDtcbiAgICAgICAgaWYgKEJzTW9kYWxTaXplLmlzVmFsaWRTaXplKHNpemUpKSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJyaWRlU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdygpLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGNsb3NlKHZhbHVlPzogYW55KTogUHJvbWlzZTx7fT4ge1xuICAgICAgICB0aGlzLm9uSW50ZXJuYWxDbG9zZSQubmV4dChCc01vZGFsSGlkZVR5cGUuQ2xvc2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5oaWRlKCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLm9uQ2xvc2UuZW1pdCh2YWx1ZSkpLFxuICAgICAgICApLnRvUHJvbWlzZSgpLnRoZW4oKCkgPT4gdmFsdWUpO1xuICAgIH1cblxuICAgIGRpc21pc3MoKTogUHJvbWlzZTx7fT4ge1xuICAgICAgICB0aGlzLm9uSW50ZXJuYWxDbG9zZSQubmV4dChCc01vZGFsSGlkZVR5cGUuRGlzbWlzcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGUoKS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBnZXRDc3NDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTbWFsbCgpKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ21vZGFsLXNtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0xhcmdlKCkpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbW9kYWwtbGcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jc3NDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1NtYWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdmVycmlkZVNpemUgIT09IEJzTW9kYWxTaXplLkxhcmdlXG4gICAgICAgICAgICAmJiB0aGlzLnNpemUgPT09IEJzTW9kYWxTaXplLlNtYWxsXG4gICAgICAgICAgICB8fCB0aGlzLm92ZXJyaWRlU2l6ZSA9PT0gQnNNb2RhbFNpemUuU21hbGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0xhcmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vdmVycmlkZVNpemUgIT09IEJzTW9kYWxTaXplLlNtYWxsXG4gICAgICAgICAgICAmJiB0aGlzLnNpemUgPT09IEJzTW9kYWxTaXplLkxhcmdlXG4gICAgICAgICAgICB8fCB0aGlzLm92ZXJyaWRlU2l6ZSA9PT0gQnNNb2RhbFNpemUuTGFyZ2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLnZpc2libGUgJiYgIXRoaXMuaGlkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd2luZyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU2hvd24kLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKG5leHQgPT4ge1xuICAgICAgICAgICAgICAgIG8ubmV4dChuZXh0KTtcbiAgICAgICAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRml4KCk7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5tb2RhbCgnc2hvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zaXRpb25GaXgoKSB7XG4gICAgICAgIC8vIEZpeCBmb3Igc2hvd24uYnMubW9kYWwgbm90IGZpcmluZyB3aGVuIC5mYWRlIGlzIHByZXNlbnRcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTc5M1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLnRyaWdnZXIoJ2ZvY3VzJykudHJpZ2dlcihTSE9XTl9FVkVOVF9OQU1FKTtcbiAgICAgICAgICAgIH0sIGpRdWVyeS5mbi5tb2RhbFsnQ29uc3RydWN0b3InXS5UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZSgpOiBPYnNlcnZhYmxlPEJzTW9kYWxIaWRlVHlwZT4ge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSAmJiAhdGhpcy5zaG93aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mPEJzTW9kYWxIaWRlVHlwZT4obnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgobzogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkhpZGRlbiQucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICApLnN1YnNjcmliZShuZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBvLm5leHQobmV4dCk7XG4gICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBqUXVlcnkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRtb2RhbC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgdGhpcy4kbW9kYWwubW9kYWwoe1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vblNob3dFdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIFNIT1dfRVZFTlRfTkFNRSk7XG4gICAgICAgIHRoaXMub25TaG93bkV2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgU0hPV05fRVZFTlRfTkFNRSk7XG4gICAgICAgIHRoaXMub25IaWRlRXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBISURFX0VWRU5UX05BTUUpO1xuICAgICAgICB0aGlzLm9uSGlkZGVuRXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBISURERU5fRVZFTlRfTkFNRSk7XG4gICAgICAgIHRoaXMub25Mb2FkZWRFdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIExPQURFRF9FVkVOVF9OQU1FKTtcblxuICAgICAgICBjb25zdCBvbkNsb3NlJCA9IG1lcmdlKHRoaXMub25JbnRlcm5hbENsb3NlJCwgdGhpcy5zZXJ2aWNlLm9uQmFja2Ryb3BDbG9zZSQsIHRoaXMuc2VydmljZS5vbktleWJvYXJkQ2xvc2UkKTtcblxuICAgICAgICB0aGlzLm9uSGlkZSQgPSB6aXAodGhpcy5vbkhpZGVFdmVudCQsIG9uQ2xvc2UkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHggPT4gPEJzTW9kYWxIaWRlRXZlbnQ+eyBldmVudDogeFswXSwgdHlwZTogeFsxXSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uSGlkZGVuJCA9IHppcDxCc01vZGFsSGlkZVR5cGU+KHRoaXMub25IaWRkZW5FdmVudCQsIG9uQ2xvc2UkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHggPT4geFsxXSksXG4gICAgICAgICAgICB0YXAodGhpcy5zZXRWaXNpYmxlKGZhbHNlKSksXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5zZXJ2aWNlLmZvY3VzTmV4dCgpKSxcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vblNob3duJCA9IHRoaXMub25TaG93bkV2ZW50JC5waXBlKFxuICAgICAgICAgICAgdGFwKHRoaXMuc2V0VmlzaWJsZSh0cnVlKSksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vbkRpc21pc3MkID0gdGhpcy5vbkhpZGRlbiQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoeCkgPT4geCAhPT0gQnNNb2RhbEhpZGVUeXBlLkNsb3NlKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN0YXJ0IHdhdGNoaW5nIGZvciBldmVudHNcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goLi4uW1xuICAgICAgICAgICAgdGhpcy5vblNob3duJC5zdWJzY3JpYmUoKCkgPT4geyB9KSxcbiAgICAgICAgICAgIHRoaXMub25IaWRkZW4kLnN1YnNjcmliZSgoKSA9PiB7IH0pLFxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLm9uTW9kYWxTdGFjayQuc3Vic2NyaWJlKCgpID0+IHsgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3aXJlVXBFdmVudEVtaXR0ZXJzKCkge1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uU2hvdywgdGhpcy5vblNob3dFdmVudCQpO1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uT3BlbiwgdGhpcy5vblNob3duJCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25IaWRlLCB0aGlzLm9uSGlkZSQpO1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uRGlzbWlzcywgdGhpcy5vbkRpc21pc3MkKTtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vbkxvYWRlZCwgdGhpcy5vbkxvYWRlZEV2ZW50JCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3aXJlVXBFdmVudEVtaXR0ZXI8VD4oZW1pdHRlcjogRXZlbnRFbWl0dGVyPFQ+LCBzdHJlYW0kOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgICAgIGNvbnN0IHN1YiA9IHN0cmVhbSQuc3Vic2NyaWJlKChuZXh0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLm5leHQobmV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZpc2libGUgPSAoaXNWaXNpYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBpc1Zpc2libGU7XG4gICAgICAgICAgICB0aGlzLnNob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRPcHRpb25zID0gKG9wdGlvbnM6IEJzTW9kYWxPcHRpb25zKSA9PiB7XG4gICAgICAgIGxldCBiYWNrZHJvcCA9IG9wdGlvbnMuYmFja2Ryb3A7XG4gICAgICAgIGlmICh0eXBlb2YgYmFja2Ryb3AgPT09ICdzdHJpbmcnICYmIGJhY2tkcm9wICE9PSAnc3RhdGljJykge1xuICAgICAgICAgICAgYmFja2Ryb3AgPSB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5iYWNrZHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYmFja2Ryb3AgPSBiYWNrZHJvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMua2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWRlKCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLmRhdGEoREFUQV9LRVksIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkudG9Qcm9taXNlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdicy1tb2RhbC1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RGlzbWlzc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkRpc21pc3NcIiAoY2xpY2spPVwibW9kYWwuZGlzbWlzcygpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxIZWFkZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNob3dEaXNtaXNzID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsLWJvZHknLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb2RhbEJvZHlDb21wb25lbnQgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsLWZvb3RlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dEZWZhdWx0QnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJtb2RhbC5kaXNtaXNzKClcIj5cbiAgICAgICAgICAgICAgICB7e2Rpc21pc3NCdXR0b25MYWJlbH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RGVmYXVsdEJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwibW9kYWwuY2xvc2UoKVwiPlxuICAgICAgICAgICAgICAgIHt7Y2xvc2VCdXR0b25MYWJlbH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxGb290ZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNob3dEZWZhdWx0QnV0dG9ucyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc21pc3NCdXR0b25MYWJlbCA9ICdEaXNtaXNzJztcbiAgICBASW5wdXQoKSBjbG9zZUJ1dHRvbkxhYmVsID0gJ0Nsb3NlJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWw6IEJzTW9kYWxDb21wb25lbnQpIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW2F1dG9mb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEJzQXV0b2ZvY3VzRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7XG4gICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5vbk9wZW4uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9kYWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9hdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCc01vZGFsQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQnNBdXRvZm9jdXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCc01vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCc01vZGFsQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQnNBdXRvZm9jdXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiZnJvbUV2ZW50IiwiZmlsdGVyIiwibWFwIiwic2hhcmUiLCJ0YXAiLCJJbmplY3RhYmxlIiwiRVZFTlRfU1VGRklYIiwiU0hPV19FVkVOVF9OQU1FIiwiU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsIm9ic2VydmFibGVPZiIsIk9ic2VydmFibGUiLCJ0YWtlIiwibWVyZ2UiLCJ6aXAiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiTmdab25lIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsIkRpcmVjdGl2ZSIsIk9wdGlvbmFsIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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