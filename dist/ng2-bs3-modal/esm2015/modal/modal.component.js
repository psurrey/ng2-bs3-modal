/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:no-output-on-prefix
import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, NgZone } from '@angular/core';
import { Observable, Subject, of as observableOf, fromEvent, merge, zip } from 'rxjs';
import { take, filter, tap, share, map } from 'rxjs/operators';
import { BsModalHideType, BsModalSize } from './models';
import { BsModalService } from './modal.service';
/** @type {?} */
const EVENT_SUFFIX = 'ng2-bs3-modal';
/** @type {?} */
const SHOW_EVENT_NAME = `show.bs.modal.${EVENT_SUFFIX}`;
/** @type {?} */
const SHOWN_EVENT_NAME = `shown.bs.modal.${EVENT_SUFFIX}`;
/** @type {?} */
const HIDE_EVENT_NAME = `hide.bs.modal.${EVENT_SUFFIX}`;
/** @type {?} */
const HIDDEN_EVENT_NAME = `hidden.bs.modal.${EVENT_SUFFIX}`;
/** @type {?} */
const LOADED_EVENT_NAME = `loaded.bs.modal.${EVENT_SUFFIX}`;
/** @type {?} */
const DATA_KEY = 'bs.modal';
export class BsModalComponent {
    /**
     * @param {?} element
     * @param {?} service
     * @param {?} zone
     */
    constructor(element, service, zone) {
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
        this.setVisible = (isVisible) => {
            return () => {
                this.visible = isVisible;
                this.showing = false;
                this.hiding = false;
            };
        };
        this.setOptions = (options) => {
            /** @type {?} */
            let backdrop = options.backdrop;
            if (typeof backdrop === 'string' && backdrop !== 'static') {
                backdrop = true;
            }
            if (options.backdrop !== undefined) {
                this.options.backdrop = backdrop;
            }
            if (options.keyboard !== undefined) {
                this.options.keyboard = options.keyboard;
            }
        };
        this.service.add(this);
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    get options() {
        if (!this.$modal) {
            this.init();
        }
        return this.$modal.data(DATA_KEY).options;
    }
    /**
     * @return {?}
     */
    get fadeClass() { return this.animation; }
    /**
     * @return {?}
     */
    get modalClass() { return true; }
    /**
     * @return {?}
     */
    get roleAttr() { return 'dialog'; }
    /**
     * @return {?}
     */
    get tabindexAttr() { return '-1'; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.wireUpEventEmitters();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.$dialog = this.$modal.find('.modal-dialog');
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setOptions({
            backdrop: this.backdrop,
            keyboard: this.keyboard
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onInternalClose$.next(BsModalHideType.Destroy);
        return this.destroy();
    }
    /**
     * @return {?}
     */
    focus() {
        this.$modal.trigger('focus');
    }
    /**
     * @return {?}
     */
    routerCanDeactivate() {
        this.onInternalClose$.next(BsModalHideType.RouteChange);
        return this.destroy();
    }
    /**
     * @param {?=} size
     * @return {?}
     */
    open(size) {
        this.overrideSize = null;
        if (BsModalSize.isValidSize(size)) {
            this.overrideSize = size;
        }
        return this.show().toPromise();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    close(value) {
        this.onInternalClose$.next(BsModalHideType.Close);
        return this.hide().pipe(tap(() => this.onClose.emit(value))).toPromise().then(() => value);
    }
    /**
     * @return {?}
     */
    dismiss() {
        this.onInternalClose$.next(BsModalHideType.Dismiss);
        return this.hide().toPromise();
    }
    /**
     * @return {?}
     */
    getCssClasses() {
        /** @type {?} */
        const classes = [];
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
    }
    /**
     * @private
     * @return {?}
     */
    isSmall() {
        return this.overrideSize !== BsModalSize.Large
            && this.size === BsModalSize.Small
            || this.overrideSize === BsModalSize.Small;
    }
    /**
     * @private
     * @return {?}
     */
    isLarge() {
        return this.overrideSize !== BsModalSize.Small
            && this.size === BsModalSize.Large
            || this.overrideSize === BsModalSize.Large;
    }
    /**
     * @private
     * @return {?}
     */
    show() {
        if (this.visible && !this.hiding) {
            return observableOf(null);
        }
        this.showing = true;
        return Observable.create((o) => {
            this.onShown$.pipe(take(1)).subscribe(next => {
                o.next(next);
                o.complete();
            });
            this.transitionFix();
            this.$modal.modal('show');
        });
    }
    /**
     * @private
     * @return {?}
     */
    transitionFix() {
        // Fix for shown.bs.modal not firing when .fade is present
        // https://github.com/twbs/bootstrap/issues/11793
        if (this.animation) {
            setTimeout(() => {
                this.$modal.trigger('focus').trigger(SHOWN_EVENT_NAME);
            }, jQuery.fn.modal['Constructor'].TRANSITION_DURATION);
        }
    }
    /**
     * @private
     * @return {?}
     */
    hide() {
        if (!this.visible && !this.showing) {
            return observableOf(null);
        }
        this.hiding = true;
        return Observable.create((o) => {
            this.onHidden$.pipe(take(1)).subscribe(next => {
                o.next(next);
                o.complete();
            });
            this.$modal.modal('hide');
        });
    }
    /**
     * @private
     * @return {?}
     */
    init() {
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
        const onClose$ = merge(this.onInternalClose$, this.service.onBackdropClose$, this.service.onKeyboardClose$);
        this.onHide$ = zip(this.onHideEvent$, onClose$).pipe(map(x => (/** @type {?} */ ({ event: x[0], type: x[1] }))));
        this.onHidden$ = zip(this.onHiddenEvent$, onClose$).pipe(map(x => x[1]), tap(this.setVisible(false)), tap(() => this.service.focusNext()), share());
        this.onShown$ = this.onShownEvent$.pipe(tap(this.setVisible(true)), share());
        this.onDismiss$ = this.onHidden$.pipe(filter((x) => x !== BsModalHideType.Close));
        // Start watching for events
        this.subscriptions.push(...[
            this.onShown$.subscribe(() => { }),
            this.onHidden$.subscribe(() => { }),
            this.service.onModalStack$.subscribe(() => { })
        ]);
    }
    /**
     * @private
     * @return {?}
     */
    wireUpEventEmitters() {
        this.wireUpEventEmitter(this.onShow, this.onShowEvent$);
        this.wireUpEventEmitter(this.onOpen, this.onShown$);
        this.wireUpEventEmitter(this.onHide, this.onHide$);
        this.wireUpEventEmitter(this.onDismiss, this.onDismiss$);
        this.wireUpEventEmitter(this.onLoaded, this.onLoadedEvent$);
    }
    /**
     * @private
     * @template T
     * @param {?} emitter
     * @param {?} stream$
     * @return {?}
     */
    wireUpEventEmitter(emitter, stream$) {
        /** @type {?} */
        const sub = stream$.subscribe((next) => {
            this.zone.run(() => {
                emitter.next(next);
            });
        });
        this.subscriptions.push(sub);
    }
    /**
     * @private
     * @return {?}
     */
    destroy() {
        return this.hide().pipe(tap(() => {
            this.service.remove(this);
            this.subscriptions.forEach(s => s.unsubscribe());
            this.subscriptions = [];
            if (this.$modal) {
                this.$modal.data(DATA_KEY, null);
                this.$modal.remove();
                this.$modal = null;
            }
        })).toPromise();
    }
}
BsModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal',
                template: `
        <div class="modal-dialog" [ngClass]="getCssClasses()">
            <div class="modal-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
            },] },
];
BsModalComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: BsModalService },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJzMy1tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDSCxTQUFTLEVBS1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQWdCLEVBQUUsSUFBSSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQW9CLGVBQWUsRUFBa0IsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFM0MsWUFBWSxHQUFHLGVBQWU7O01BQzlCLGVBQWUsR0FBRyxpQkFBaUIsWUFBWSxFQUFFOztNQUNqRCxnQkFBZ0IsR0FBRyxrQkFBa0IsWUFBWSxFQUFFOztNQUNuRCxlQUFlLEdBQUcsaUJBQWlCLFlBQVksRUFBRTs7TUFDakQsaUJBQWlCLEdBQUcsbUJBQW1CLFlBQVksRUFBRTs7TUFDckQsaUJBQWlCLEdBQUcsbUJBQW1CLFlBQVksRUFBRTs7TUFDckQsUUFBUSxHQUFHLFVBQVU7QUFZM0IsTUFBTTs7Ozs7O0lBb0RGLFlBQW9CLE9BQW1CLEVBQVUsT0FBdUIsRUFBVSxJQUFZO1FBQTFFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFsRHRGLGlCQUFZLEdBQVcsSUFBSSxD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O3lCQUd4QixXQUFXLFNBQUMsYUFBYTt1QkFHekIsV0FBVyxTQUFDLFdBQVc7MkJBR3ZCLFdBQVcsU0FBQyxlQUFlOzs7Ozs7O0lBL0M1Qix3Q0FBb0M7Ozs7O0lBQ3BDLGtDQUF1Qjs7Ozs7SUFDdkIsbUNBQXdCOzs7OztJQUN4Qix3Q0FBd0M7Ozs7O0lBQ3hDLHlDQUF5Qzs7Ozs7SUFDekMsd0NBQXdDOzs7OztJQUN4QywwQ0FBMEM7Ozs7O0lBQzFDLDBDQUEwQzs7Ozs7SUFDMUMsb0NBQWlDOzs7OztJQUNqQyw0Q0FBb0Y7Ozs7O0lBQ3BGLHNDQUFnRDs7Ozs7SUFDaEQsbUNBQThDOzs7OztJQUM5QyxxQ0FBK0M7Ozs7O0lBQy9DLHlDQUEyQzs7SUFRM0MsbUNBQWdCOztJQUNoQixtQ0FBZ0I7O0lBQ2hCLGtDQUFlOztJQUVmLHFDQUEwQjs7SUFDMUIsb0NBQTJDOztJQUMzQyxvQ0FBeUI7O0lBQ3pCLGdDQUFzQjs7SUFDdEIsb0NBQTBCOztJQUUxQixrQ0FBNkM7O0lBQzdDLGtDQUEyQzs7SUFDM0Msa0NBQTJDOztJQUMzQyxtQ0FBNEM7O0lBQzVDLHFDQUEwRDs7SUFDMUQsb0NBQTZDOzs7OztJQThNN0Msc0NBTUM7Ozs7O0lBRUQsc0NBYUM7Ozs7O0lBck5XLG1DQUEyQjs7Ozs7SUFBRSxtQ0FBK0I7Ozs7O0lBQUUsZ0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tb3V0cHV0LW9uLXByZWZpeFxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBmcm9tRXZlbnQsIG1lcmdlLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIGZpbHRlciwgdGFwLCBzaGFyZSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCc01vZGFsSGlkZUV2ZW50LCBCc01vZGFsSGlkZVR5cGUsIEJzTW9kYWxPcHRpb25zLCBCc01vZGFsU2l6ZSB9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuY29uc3QgRVZFTlRfU1VGRklYID0gJ25nMi1iczMtbW9kYWwnO1xuY29uc3QgU0hPV19FVkVOVF9OQU1FID0gYHNob3cuYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IFNIT1dOX0VWRU5UX05BTUUgPSBgc2hvd24uYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IEhJREVfRVZFTlRfTkFNRSA9IGBoaWRlLmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBISURERU5fRVZFTlRfTkFNRSA9IGBoaWRkZW4uYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IExPQURFRF9FVkVOVF9OQU1FID0gYGxvYWRlZC5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgW25nQ2xhc3NdPVwiZ2V0Q3NzQ2xhc3NlcygpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgb3ZlcnJpZGVTaXplOiBzdHJpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgJG1vZGFsOiBKUXVlcnk7XG4gICAgcHJpdmF0ZSAkZGlhbG9nOiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBvblNob3dFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25TaG93bkV2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvbkhpZGVFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25IaWRkZW5FdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25Mb2FkZWRFdmVudCQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICAgIHByaXZhdGUgb25TaG93biQ6IE9ic2VydmFibGU8e30+O1xuICAgIHByaXZhdGUgb25JbnRlcm5hbENsb3NlJDogU3ViamVjdDxCc01vZGFsSGlkZVR5cGU+ID0gbmV3IFN1YmplY3Q8QnNNb2RhbEhpZGVUeXBlPigpO1xuICAgIHByaXZhdGUgb25EaXNtaXNzJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIHByaXZhdGUgb25IaWRlJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZUV2ZW50PjtcbiAgICBwcml2YXRlIG9uSGlkZGVuJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcml2YXRlIGdldCBvcHRpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMuJG1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy4kbW9kYWwuZGF0YShEQVRBX0tFWSkub3B0aW9ucztcbiAgICB9XG5cbiAgICB2aXNpYmxlID0gZmFsc2U7XG4gICAgc2hvd2luZyA9IGZhbHNlO1xuICAgIGhpZGluZyA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgYW5pbWF0aW9uID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkga2V5Ym9hcmQgPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjc3NDbGFzczogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9uU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkhpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTW9kYWxIaWRlVHlwZT4oKTtcbiAgICBAT3V0cHV0KCkgb25Mb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZmFkZScpXG4gICAgZ2V0IGZhZGVDbGFzcygpIHsgcmV0dXJuIHRoaXMuYW5pbWF0aW9uOyB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vZGFsJylcbiAgICBnZXQgbW9kYWxDbGFzcygpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgICBnZXQgcm9sZUF0dHIoKSB7IHJldHVybiAnZGlhbG9nJzsgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgICBnZXQgdGFiaW5kZXhBdHRyKCkgeyByZXR1cm4gJy0xJzsgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2UuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXJzKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLiRkaWFsb2cgPSB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtZGlhbG9nJyk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBiYWNrZHJvcDogdGhpcy5iYWNrZHJvcCxcbiAgICAgICAgICAgIGtleWJvYXJkOiB0aGlzLmtleWJvYXJkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uSW50ZXJuYWxDbG9zZSQubmV4dChCc01vZGFsSGlkZVR5cGUuRGVzdHJveSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBmb2N1cygpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9XG5cbiAgICByb3V0ZXJDYW5EZWFjdGl2YXRlKCk6IGFueSB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5Sb3V0ZUNoYW5nZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvcGVuKHNpemU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZVNpemUgPSBudWxsO1xuICAgICAgICBpZiAoQnNNb2RhbFNpemUuaXNWYWxpZFNpemUoc2l6ZSkpIHtcbiAgICAgICAgICAgIHRoaXMub3ZlcnJpZGVTaXplID0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaG93KCkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgY2xvc2UodmFsdWU/OiBhbnkpOiBQcm9taXNlPHt9PiB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5DbG9zZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGUoKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMub25DbG9zZS5lbWl0KHZhbHVlKSksXG4gICAgICAgICkudG9Qcm9taXNlKCkudGhlbigoKSA9PiB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpOiBQcm9taXNlPHt9PiB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5EaXNtaXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpLnRvUHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGdldENzc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5pc1NtYWxsKCkpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnbW9kYWwtc20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzTGFyZ2UoKSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdtb2RhbC1sZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmNzc0NsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzU21hbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlU2l6ZSAhPT0gQnNNb2RhbFNpemUuTGFyZ2VcbiAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PT0gQnNNb2RhbFNpemUuU21hbGxcbiAgICAgICAgICAgIHx8IHRoaXMub3ZlcnJpZGVTaXplID09PSBCc01vZGFsU2l6ZS5TbWFsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTGFyZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlU2l6ZSAhPT0gQnNNb2RhbFNpemUuU21hbGxcbiAgICAgICAgICAgICYmIHRoaXMuc2l6ZSA9PT0gQnNNb2RhbFNpemUuTGFyZ2VcbiAgICAgICAgICAgIHx8IHRoaXMub3ZlcnJpZGVTaXplID09PSBCc01vZGFsU2l6ZS5MYXJnZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSAmJiAhdGhpcy5oaWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93aW5nID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG86IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TaG93biQucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgKS5zdWJzY3JpYmUobmV4dCA9PiB7XG4gICAgICAgICAgICAgICAgby5uZXh0KG5leHQpO1xuICAgICAgICAgICAgICAgIG8uY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25GaXgoKTtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZpeCgpIHtcbiAgICAgICAgLy8gRml4IGZvciBzaG93bi5icy5tb2RhbCBub3QgZmlyaW5nIHdoZW4gLmZhZGUgaXMgcHJlc2VudFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNzkzXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKFNIT1dOX0VWRU5UX05BTUUpO1xuICAgICAgICAgICAgfSwgalF1ZXJ5LmZuLm1vZGFsWydDb25zdHJ1Y3RvciddLlRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlKCk6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPiB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlICYmICF0aGlzLnNob3dpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2Y8QnNNb2RhbEhpZGVUeXBlPihudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGluZyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uSGlkZGVuJC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKG5leHQgPT4ge1xuICAgICAgICAgICAgICAgIG8ubmV4dChuZXh0KTtcbiAgICAgICAgICAgICAgICBvLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCkge1xuICAgICAgICB0aGlzLiRtb2RhbCA9IGpRdWVyeSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB0aGlzLiRtb2RhbC5tb2RhbCh7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uU2hvd0V2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgU0hPV19FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vblNob3duRXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBTSE9XTl9FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vbkhpZGVFdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIEhJREVfRVZFTlRfTkFNRSk7XG4gICAgICAgIHRoaXMub25IaWRkZW5FdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIEhJRERFTl9FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vbkxvYWRlZEV2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgTE9BREVEX0VWRU5UX05BTUUpO1xuXG4gICAgICAgIGNvbnN0IG9uQ2xvc2UkID0gbWVyZ2UodGhpcy5vbkludGVybmFsQ2xvc2UkLCB0aGlzLnNlcnZpY2Uub25CYWNrZHJvcENsb3NlJCwgdGhpcy5zZXJ2aWNlLm9uS2V5Ym9hcmRDbG9zZSQpO1xuXG4gICAgICAgIHRoaXMub25IaWRlJCA9IHppcCh0aGlzLm9uSGlkZUV2ZW50JCwgb25DbG9zZSQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoeCA9PiA8QnNNb2RhbEhpZGVFdmVudD57IGV2ZW50OiB4WzBdLCB0eXBlOiB4WzFdIH0pLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25IaWRkZW4kID0gemlwPEJzTW9kYWxIaWRlVHlwZT4odGhpcy5vbkhpZGRlbkV2ZW50JCwgb25DbG9zZSQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoeCA9PiB4WzFdKSxcbiAgICAgICAgICAgIHRhcCh0aGlzLnNldFZpc2libGUoZmFsc2UpKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLnNlcnZpY2UuZm9jdXNOZXh0KCkpLFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uU2hvd24kID0gdGhpcy5vblNob3duRXZlbnQkLnBpcGUoXG4gICAgICAgICAgICB0YXAodGhpcy5zZXRWaXNpYmxlKHRydWUpKSxcbiAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uRGlzbWlzcyQgPSB0aGlzLm9uSGlkZGVuJC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCh4KSA9PiB4ICE9PSBCc01vZGFsSGlkZVR5cGUuQ2xvc2UpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU3RhcnQgd2F0Y2hpbmcgZm9yIGV2ZW50c1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCguLi5bXG4gICAgICAgICAgICB0aGlzLm9uU2hvd24kLnN1YnNjcmliZSgoKSA9PiB7IH0pLFxuICAgICAgICAgICAgdGhpcy5vbkhpZGRlbiQuc3Vic2NyaWJlKCgpID0+IHsgfSksXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uub25Nb2RhbFN0YWNrJC5zdWJzY3JpYmUoKCkgPT4geyB9KVxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpcmVVcEV2ZW50RW1pdHRlcnMoKSB7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25TaG93LCB0aGlzLm9uU2hvd0V2ZW50JCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25PcGVuLCB0aGlzLm9uU2hvd24kKTtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vbkhpZGUsIHRoaXMub25IaWRlJCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25EaXNtaXNzLCB0aGlzLm9uRGlzbWlzcyQpO1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uTG9hZGVkLCB0aGlzLm9uTG9hZGVkRXZlbnQkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHdpcmVVcEV2ZW50RW1pdHRlcjxUPihlbWl0dGVyOiBFdmVudEVtaXR0ZXI8VD4sIHN0cmVhbSQ6IE9ic2VydmFibGU8VD4pIHtcbiAgICAgICAgY29uc3Qgc3ViID0gc3RyZWFtJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIubmV4dChuZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChzdWIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmlzaWJsZSA9IChpc1Zpc2libGUpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGlzVmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE9wdGlvbnMgPSAob3B0aW9uczogQnNNb2RhbE9wdGlvbnMpID0+IHtcbiAgICAgICAgbGV0IGJhY2tkcm9wID0gb3B0aW9ucy5iYWNrZHJvcDtcbiAgICAgICAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycgJiYgYmFja2Ryb3AgIT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBiYWNrZHJvcCA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tkcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5iYWNrZHJvcCA9IGJhY2tkcm9wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmtleWJvYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5rZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZGUoKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwuZGF0YShEQVRBX0tFWSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKS50b1Byb21pc2UoKTtcbiAgICB9XG59XG4iXX0=