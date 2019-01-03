/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-output-on-prefix
import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, NgZone } from '@angular/core';
import { Observable, Subject, of as observableOf, fromEvent, merge, zip } from 'rxjs';
import { take, filter, tap, share, map } from 'rxjs/operators';
import { BsModalHideType, BsModalSize } from './models';
import { BsModalService } from './modal.service';
/** @type {?} */
var EVENT_SUFFIX = 'ng2-bs3-modal';
/** @type {?} */
var SHOW_EVENT_NAME = "show.bs.modal." + EVENT_SUFFIX;
/** @type {?} */
var SHOWN_EVENT_NAME = "shown.bs.modal." + EVENT_SUFFIX;
/** @type {?} */
var HIDE_EVENT_NAME = "hide.bs.modal." + EVENT_SUFFIX;
/** @type {?} */
var HIDDEN_EVENT_NAME = "hidden.bs.modal." + EVENT_SUFFIX;
/** @type {?} */
var LOADED_EVENT_NAME = "loaded.bs.modal." + EVENT_SUFFIX;
/** @type {?} */
var DATA_KEY = 'bs.modal';
var BsModalComponent = /** @class */ (function () {
    function BsModalComponent(element, service, zone) {
        var _this = this;
        this.element = element;
        this.service = service;
        this.zone = zone;
        this.overrideSize = null;
        this.onInternalClose$ = new Subject();
        this.subscriptions = [];
        this.visible = false;
        this.showing = false;
        this.hiding = false;
        this.animation = true;
        this.backdrop = true;
        this.keyboard = true;
        this.onShow = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onDismiss = new EventEmitter();
        this.onLoaded = new EventEmitter();
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
         */
        function () {
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
         */
        function () { return this.animation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "modalClass", {
        get: /**
         * @return {?}
         */
        function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "roleAttr", {
        get: /**
         * @return {?}
         */
        function () { return 'dialog'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsModalComponent.prototype, "tabindexAttr", {
        get: /**
         * @return {?}
         */
        function () { return '-1'; },
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
        return this.hide().pipe(tap(function () { return _this.onClose.emit(value); })).toPromise().then(function () { return value; });
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
            return observableOf(null);
        }
        this.showing = true;
        return Observable.create(function (o) {
            _this.onShown$.pipe(take(1)).subscribe(function (next) {
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
            return observableOf(null);
        }
        this.hiding = true;
        return Observable.create(function (o) {
            _this.onHidden$.pipe(take(1)).subscribe(function (next) {
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
        this.onShowEvent$ = fromEvent(this.$modal, SHOW_EVENT_NAME);
        this.onShownEvent$ = fromEvent(this.$modal, SHOWN_EVENT_NAME);
        this.onHideEvent$ = fromEvent(this.$modal, HIDE_EVENT_NAME);
        this.onHiddenEvent$ = fromEvent(this.$modal, HIDDEN_EVENT_NAME);
        this.onLoadedEvent$ = fromEvent(this.$modal, LOADED_EVENT_NAME);
        /** @type {?} */
        var onClose$ = merge(this.onInternalClose$, this.service.onBackdropClose$, this.service.onKeyboardClose$);
        this.onHide$ = zip(this.onHideEvent$, onClose$).pipe(map(function (x) { return (/** @type {?} */ ({ event: x[0], type: x[1] })); }));
        this.onHidden$ = zip(this.onHiddenEvent$, onClose$).pipe(map(function (x) { return x[1]; }), tap(this.setVisible(false)), tap(function () { return _this.service.focusNext(); }), share());
        this.onShown$ = this.onShownEvent$.pipe(tap(this.setVisible(true)), share());
        this.onDismiss$ = this.onHidden$.pipe(filter(function (x) { return x !== BsModalHideType.Close; }));
        // Start watching for events
        (_a = this.subscriptions).push.apply(_a, tslib_1.__spread([
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
        return this.hide().pipe(tap(function () {
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
        { type: Component, args: [{
                    selector: 'bs-modal',
                    template: "\n        <div class=\"modal-dialog\" [ngClass]=\"getCssClasses()\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
                },] },
    ];
    BsModalComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BsModalService },
        { type: NgZone }
    ]; };
    BsModalComponent.propDecorators = {
        animation: [{ type: Input }],
        backdrop: [{ type: Input }],
        keyboard: [{ type: Input }],
        size: [{ type: Input }],
        cssClass: [{ type: Input }],
        onShow: [{ type: Output }],
        onOpen: [{ type: Output }],
        onHide: [{ type: Output }],
        onClose: [{ type: Output }],
        onDismiss: [{ type: Output }],
        onLoaded: [{ type: Output }],
        fadeClass: [{ type: HostBinding, args: ['class.fade',] }],
        modalClass: [{ type: HostBinding, args: ['class.modal',] }],
        roleAttr: [{ type: HostBinding, args: ['attr.role',] }],
        tabindexAttr: [{ type: HostBinding, args: ['attr.tabindex',] }]
    };
    return BsModalComponent;
}());
export { BsModalComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.overrideSize;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.$modal;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.$dialog;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onShowEvent$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onShownEvent$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onHideEvent$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onHiddenEvent$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onLoadedEvent$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onShown$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onInternalClose$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onDismiss$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onHide$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.onHidden$;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.subscriptions;
    /** @type {?} */
    BsModalComponent.prototype.visible;
    /** @type {?} */
    BsModalComponent.prototype.showing;
    /** @type {?} */
    BsModalComponent.prototype.hiding;
    /** @type {?} */
    BsModalComponent.prototype.animation;
    /** @type {?} */
    BsModalComponent.prototype.backdrop;
    /** @type {?} */
    BsModalComponent.prototype.keyboard;
    /** @type {?} */
    BsModalComponent.prototype.size;
    /** @type {?} */
    BsModalComponent.prototype.cssClass;
    /** @type {?} */
    BsModalComponent.prototype.onShow;
    /** @type {?} */
    BsModalComponent.prototype.onOpen;
    /** @type {?} */
    BsModalComponent.prototype.onHide;
    /** @type {?} */
    BsModalComponent.prototype.onClose;
    /** @type {?} */
    BsModalComponent.prototype.onDismiss;
    /** @type {?} */
    BsModalComponent.prototype.onLoaded;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.setVisible;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.setOptions;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    BsModalComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJzMy1tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0gsU0FBUyxFQUtULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFnQixFQUFFLElBQUksWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0QsT0FBTyxFQUFvQixlQUFlLEVBQWtCLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTNDLFlBQVksR0FBRyxlQUFlOztJQUM5QixlQUFlLEdBQUcsbUJBQWlCLFlBQWM7O0lBQ2pELGdCQUFnQixHQUFHLG9CQUFrQixZQUFjOztJQUNuRCxlQUFlLEdBQUcsbUJBQWlCLFlBQWM7O0lBQ2pELGlCQUFpQixHQUFHLHFCQUFtQixZQUFjOztJQUNyRCxpQkFBaUIsR0FBRyxxQkFBbUIsWUFBYzs7SUFDckQsUUFBUSxHQUFHLFVBQVU7QUFFM0I7SUE4REksMEJBQW9CLE9BQW1CLEVBQVUsT0FBdUIsRUFBVSxJQUFZO1FBQTlGLGlCQUdDO1FBSG1CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFsRHRGLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBUzVCLHFCQUFnQixHQUE2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LW9uLXByZWZpeFxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBmcm9tRXZlbnQsIG1lcmdlLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIGZpbHRlciwgdGFwLCBzaGFyZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCc01vZGFsSGlkZUV2ZW50LCBCc01vZGFsSGlkZVR5cGUsIEJzTW9kYWxPcHRpb25zLCBCc01vZGFsU2l6ZSB9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuY29uc3QgRVZFTlRfU1VGRklYID0gJ25nMi1iczMtbW9kYWwnO1xuY29uc3QgU0hPV19FVkVOVF9OQU1FID0gYHNob3cuYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IFNIT1dOX0VWRU5UX05BTUUgPSBgc2hvd24uYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IEhJREVfRVZFTlRfTkFNRSA9IGBoaWRlLmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBISURERU5fRVZFTlRfTkFNRSA9IGBoaWRkZW4uYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IExPQURFRF9FVkVOVF9OQU1FID0gYGxvYWRlZC5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgW25nQ2xhc3NdPVwiZ2V0Q3NzQ2xhc3NlcygpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgb3ZlcnJpZGVTaXplOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgJG1vZGFsOiBKUXVlcnk7XG4gICAgcHJpdmF0ZSAkZGlhbG9nOiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBvblNob3dFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25TaG93bkV2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvbkhpZGVFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25IaWRkZW5FdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25Mb2FkZWRFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25TaG93biQ6IE9ic2VydmFibGU8e30+O1xuICAgIHByaXZhdGUgb25JbnRlcm5hbENsb3NlJDogU3ViamVjdDxCc01vZGFsSGlkZVR5cGU+ID0gbmV3IFN1YmplY3Q8QnNNb2RhbEhpZGVUeXBlPigpO1xuICAgIHByaXZhdGUgb25EaXNtaXNzJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIHByaXZhdGUgb25IaWRlJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZUV2ZW50PjtcbiAgICBwcml2YXRlIG9uSGlkZGVuJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcml2YXRlIGdldCBvcHRpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuJG1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4kbW9kYWwuZGF0YShEQVRBX0tFWSkub3B0aW9ucztcbiAgICB9XG5cbiAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgc2hvd2luZyA9IGZhbHNlO1xuICAgIGhpZGluZyA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkga2V5Ym9hcmQgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjc3NDbGFzczogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTW9kYWxIaWRlVHlwZT4oKTtcbiAgICBAT3V0cHV0KCkgb25Mb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZmFkZScpXG4gICAgZ2V0IGZhZGVDbGFzcygpIHsgcmV0dXJuIHRoaXMuYW5pbWF0aW9uOyB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vZGFsJylcbiAgICBnZXQgbW9kYWxDbGFzcygpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBnZXQgcm9sZUF0dHIoKSB7IHJldHVybiAnZGlhbG9nJzsgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBnZXQgdGFiaW5kZXhBdHRyKCkgeyByZXR1cm4gJy0xJzsgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXJzKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLiRkaWFsb2cgPSB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtZGlhbG9nJyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBiYWNrZHJvcDogdGhpcy5iYWNrZHJvcCxcbiAgICAgICAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uSW50ZXJuYWxDbG9zZSQubmV4dChCc01vZGFsSGlkZVR5cGUuRGVzdHJveSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG5cbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKCk6IGFueSB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5Sb3V0ZUNoYW5nZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvcGVuKHNpemU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZVNpemUgPSBudWxsO1xuICAgICAgICBpZiAoQnNNb2RhbFNpemUuaXNWYWxpZFNpemUoc2l6ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcnJpZGVTaXplID0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaG93KCkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgY2xvc2UodmFsdWU/OiBhbnkpOiBQcm9taXNlPHt9PiB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5DbG9zZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGUoKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMub25DbG9zZS5lbWl0KHZhbHVlKSksXG4gICAgICAgICkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpOiBQcm9taXNlPHt9PiB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5EaXNtaXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGdldENzc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5pc1NtYWxsKCkpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbW9kYWwtc20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTGFyZ2UoKSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdtb2RhbC1sZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNzc0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU21hbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlU2l6ZSAhPT0gQnNNb2RhbFNpemUuTGFyZ2VcbiAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PT0gQnNNb2RhbFNpemUuU21hbGxcbiAgICAgICAgICAgIHx8IHRoaXMub3ZlcnJpZGVTaXplID09PSBCc01vZGFsU2l6ZS5TbWFsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTGFyZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlU2l6ZSAhPT0gQnNNb2RhbFNpemUuU21hbGxcbiAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PT0gQnNNb2RhbFNpemUuTGFyZ2VcbiAgICAgICAgICAgIHx8IHRoaXMub3ZlcnJpZGVTaXplID09PSBCc01vZGFsU2l6ZS5MYXJnZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSAmJiAhdGhpcy5oaWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93aW5nID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG86IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TaG93biQucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgKS5zdWJzY3JpYmUobmV4dCA9PiB7XG4gICAgICAgICAgICAgICAgby5uZXh0KG5leHQpO1xuICAgICAgICAgICAgICAgIG8uY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GaXgoKTtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZpeCgpIHtcbiAgICAgICAgLy8gRml4IGZvciBzaG93bi5icy5tb2RhbCBub3QgZmlyaW5nIHdoZW4gLmZhZGUgaXMgcHJlc2VudFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNzkzXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKFNIT1dOX0VWRU5UX05BTUUpO1xuICAgICAgICAgICAgfSwgalF1ZXJ5LmZuLm1vZGFsWydDb25zdHJ1Y3RvciddLlRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlKCk6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPiB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlICYmICF0aGlzLnNob3dpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2Y8QnNNb2RhbEhpZGVUeXBlPihudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGluZyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uSGlkZGVuJC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKG5leHQgPT4ge1xuICAgICAgICAgICAgICAgIG8ubmV4dChuZXh0KTtcbiAgICAgICAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLiRtb2RhbCA9IGpRdWVyeSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB0aGlzLiRtb2RhbC5tb2RhbCh7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uU2hvd0V2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgU0hPV19FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vblNob3duRXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBTSE9XTl9FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vbkhpZGVFdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIEhJREVfRVZFTlRfTkFNRSk7XG4gICAgICAgIHRoaXMub25IaWRkZW5FdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIEhJRERFTl9FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vbkxvYWRlZEV2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgTE9BREVEX0VWRU5UX05BTUUpO1xuXG4gICAgICAgIGNvbnN0IG9uQ2xvc2UkID0gbWVyZ2UodGhpcy5vbkludGVybmFsQ2xvc2UkLCB0aGlzLnNlcnZpY2Uub25CYWNrZHJvcENsb3NlJCwgdGhpcy5zZXJ2aWNlLm9uS2V5Ym9hcmRDbG9zZSQpO1xuXG4gICAgICAgIHRoaXMub25IaWRlJCA9IHppcCh0aGlzLm9uSGlkZUV2ZW50JCwgb25DbG9zZSQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoeCA9PiA8QnNNb2RhbEhpZGVFdmVudD57IGV2ZW50OiB4WzBdLCB0eXBlOiB4WzFdIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25IaWRkZW4kID0gemlwPEJzTW9kYWxIaWRlVHlwZT4odGhpcy5vbkhpZGRlbkV2ZW50JCwgb25DbG9zZSQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoeCA9PiB4WzFdKSxcbiAgICAgICAgICAgIHRhcCh0aGlzLnNldFZpc2libGUoZmFsc2UpKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLnNlcnZpY2UuZm9jdXNOZXh0KCkpLFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uU2hvd24kID0gdGhpcy5vblNob3duRXZlbnQkLnBpcGUoXG4gICAgICAgICAgICB0YXAodGhpcy5zZXRWaXNpYmxlKHRydWUpKSxcbiAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uRGlzbWlzcyQgPSB0aGlzLm9uSGlkZGVuJC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCh4KSA9PiB4ICE9PSBCc01vZGFsSGlkZVR5cGUuQ2xvc2UpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU3RhcnQgd2F0Y2hpbmcgZm9yIGV2ZW50c1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCguLi5bXG4gICAgICAgICAgICB0aGlzLm9uU2hvd24kLnN1YnNjcmliZSgoKSA9PiB7IH0pLFxuICAgICAgICAgICAgdGhpcy5vbkhpZGRlbiQuc3Vic2NyaWJlKCgpID0+IHsgfSksXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uub25Nb2RhbFN0YWNrJC5zdWJzY3JpYmUoKCkgPT4geyB9KVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpcmVVcEV2ZW50RW1pdHRlcnMoKSB7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25TaG93LCB0aGlzLm9uU2hvd0V2ZW50JCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25PcGVuLCB0aGlzLm9uU2hvd24kKTtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vbkhpZGUsIHRoaXMub25IaWRlJCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25EaXNtaXNzLCB0aGlzLm9uRGlzbWlzcyQpO1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uTG9hZGVkLCB0aGlzLm9uTG9hZGVkRXZlbnQkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpcmVVcEV2ZW50RW1pdHRlcjxUPihlbWl0dGVyOiBFdmVudEVtaXR0ZXI8VD4sIHN0cmVhbSQ6IE9ic2VydmFibGU8VD4pIHtcbiAgICAgICAgY29uc3Qgc3ViID0gc3RyZWFtJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIubmV4dChuZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmlzaWJsZSA9IChpc1Zpc2libGUpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9wdGlvbnMgPSAob3B0aW9uczogQnNNb2RhbE9wdGlvbnMpID0+IHtcbiAgICAgICAgbGV0IGJhY2tkcm9wID0gb3B0aW9ucy5iYWNrZHJvcDtcbiAgICAgICAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycgJiYgYmFja2Ryb3AgIT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBiYWNrZHJvcCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tkcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5iYWNrZHJvcCA9IGJhY2tkcm9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5rZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGUoKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwuZGF0YShEQVRBX0tFWSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG59XG4iXX0=