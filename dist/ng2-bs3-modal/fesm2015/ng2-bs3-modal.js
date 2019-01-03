import { Injectable, Component, Input, Output, EventEmitter, ElementRef, HostBinding, NgZone, Directive, Optional, NgModule } from '@angular/core';
import { fromEvent, Observable, Subject, of, merge, zip } from 'rxjs';
import { filter, map, share, tap, take } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const BsModalHideType = {
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
class BsModalSize {
    /**
     * @param {?} size
     * @return {?}
     */
    static isValidSize(size) {
        return size && (size === BsModalSize.Small || size === BsModalSize.Large);
    }
}
BsModalSize.Small = 'sm';
BsModalSize.Large = 'lg';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EVENT_SUFFIX = 'ng2-bs3-modal';
/** @type {?} */
const KEYUP_EVENT_NAME = `keyup.${EVENT_SUFFIX}`;
/** @type {?} */
const CLICK_EVENT_NAME = `click.${EVENT_SUFFIX}`;
/** @type {?} */
const SHOW_EVENT_NAME = `show.bs.modal.${EVENT_SUFFIX}`;
class BsModalService {
    constructor() {
        this.modals = [];
        this.$body = jQuery(document.body);
        this.onBackdropClose$ = fromEvent(this.$body, CLICK_EVENT_NAME).pipe(filter((e) => jQuery(e.target).is('.modal')), map(() => BsModalHideType.Backdrop), share());
        this.onKeyboardClose$ = fromEvent(this.$body, KEYUP_EVENT_NAME).pipe(filter((e) => e.which === 27), map(() => BsModalHideType.Keyboard), share());
        this.onModalStack$ = fromEvent(this.$body, SHOW_EVENT_NAME).pipe(tap(() => {
            /** @type {?} */
            const zIndex = 1040 + (10 * jQuery('.modal:visible').length);
            jQuery(this).css('z-index', zIndex);
            setTimeout(function () {
                jQuery('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        }), share());
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    add(modal) {
        this.modals.push(modal);
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    remove(modal) {
        /** @type {?} */
        const index = this.modals.indexOf(modal);
        if (index > -1) {
            this.modals.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    focusNext() {
        /** @type {?} */
        const visible = this.modals.filter(m => m.visible);
        if (visible.length) {
            this.$body.addClass('modal-open');
            visible[visible.length - 1].focus();
        }
    }
    /**
     * @return {?}
     */
    dismissAll() {
        return Promise.all(this.modals.map((m) => {
            return m.dismiss();
        }));
    }
}
BsModalService.decorators = [
    { type: Injectable },
];
BsModalService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EVENT_SUFFIX$1 = 'ng2-bs3-modal';
/** @type {?} */
const SHOW_EVENT_NAME$1 = `show.bs.modal.${EVENT_SUFFIX$1}`;
/** @type {?} */
const SHOWN_EVENT_NAME = `shown.bs.modal.${EVENT_SUFFIX$1}`;
/** @type {?} */
const HIDE_EVENT_NAME = `hide.bs.modal.${EVENT_SUFFIX$1}`;
/** @type {?} */
const HIDDEN_EVENT_NAME = `hidden.bs.modal.${EVENT_SUFFIX$1}`;
/** @type {?} */
const LOADED_EVENT_NAME = `loaded.bs.modal.${EVENT_SUFFIX$1}`;
/** @type {?} */
const DATA_KEY = 'bs.modal';
class BsModalComponent {
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
            return of(null);
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
            return of(null);
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
        this.onShowEvent$ = fromEvent(this.$modal, SHOW_EVENT_NAME$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalHeaderComponent {
    /**
     * @param {?} modal
     */
    constructor(modal) {
        this.modal = modal;
        this.showDismiss = false;
    }
}
BsModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-header',
                template: `
        <div class="modal-header">
            <button *ngIf="showDismiss" type="button" class="close" aria-label="Dismiss" (click)="modal.dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
            <ng-content></ng-content>
        </div>
    `
            },] },
];
BsModalHeaderComponent.ctorParameters = () => [
    { type: BsModalComponent }
];
BsModalHeaderComponent.propDecorators = {
    showDismiss: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalBodyComponent {
}
BsModalBodyComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-body',
                template: `
        <div class="modal-body">
            <ng-content></ng-content>
        </div>
    `
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalFooterComponent {
    /**
     * @param {?} modal
     */
    constructor(modal) {
        this.modal = modal;
        this.showDefaultButtons = false;
        this.dismissButtonLabel = 'Dismiss';
        this.closeButtonLabel = 'Close';
    }
}
BsModalFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-footer',
                template: `
        <div class="modal-footer">
            <ng-content></ng-content>
            <button *ngIf="showDefaultButtons" type="button" class="btn btn-default" (click)="modal.dismiss()">
                {{dismissButtonLabel}}
            </button>
            <button *ngIf="showDefaultButtons" type="button" class="btn btn-primary" (click)="modal.close()">
                {{closeButtonLabel}}
              </button>
        </div>
    `
            },] },
];
BsModalFooterComponent.ctorParameters = () => [
    { type: BsModalComponent }
];
BsModalFooterComponent.propDecorators = {
    showDefaultButtons: [{ type: Input }],
    dismissButtonLabel: [{ type: Input }],
    closeButtonLabel: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsAutofocusDirective {
    /**
     * @param {?} el
     * @param {?} modal
     */
    constructor(el, modal) {
        this.el = el;
        this.modal = modal;
        if (modal) {
            this.modal.onOpen.subscribe(() => {
                this.el.nativeElement.focus();
            });
        }
    }
}
BsAutofocusDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[autofocus]'
            },] },
];
BsAutofocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: BsModalComponent, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalModule {
}
BsModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BsModalService, BsModalComponent, BsModalHeaderComponent, BsModalBodyComponent, BsModalFooterComponent, BsModalHideType, BsModalSize, BsModalModule, BsAutofocusDirective as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmcyLWJzMy1tb2RhbC9tb2RhbC9tb2RlbHMvbW9kYWwtaGlkZS10eXBlLnRzIiwibmc6Ly9uZzItYnMzLW1vZGFsL21vZGFsL21vZGVscy9tb2RhbC1zaXplLnRzIiwibmc6Ly9uZzItYnMzLW1vZGFsL21vZGFsL21vZGFsLnNlcnZpY2UudHMiLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZzItYnMzLW1vZGFsL21vZGFsL2hlYWRlci5jb21wb25lbnQudHMiLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvYm9keS5jb21wb25lbnQudHMiLCJuZzovL25nMi1iczMtbW9kYWwvbW9kYWwvZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9hdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmcyLWJzMy1tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQnNNb2RhbEhpZGVUeXBlIHtcbiAgICBDbG9zZSxcbiAgICBEaXNtaXNzLFxuICAgIEJhY2tkcm9wLFxuICAgIEtleWJvYXJkLFxuICAgIFJvdXRlQ2hhbmdlLFxuICAgIERlc3Ryb3lcbn1cbiIsImV4cG9ydCBjbGFzcyBCc01vZGFsU2l6ZSB7XG4gICAgc3RhdGljIFNtYWxsID0gJ3NtJztcbiAgICBzdGF0aWMgTGFyZ2UgPSAnbGcnO1xuXG4gICAgc3RhdGljIGlzVmFsaWRTaXplKHNpemU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gc2l6ZSAmJiAoc2l6ZSA9PT0gQnNNb2RhbFNpemUuU21hbGwgfHwgc2l6ZSA9PT0gQnNNb2RhbFNpemUuTGFyZ2UpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNoYXJlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsSGlkZVR5cGUgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IEVWRU5UX1NVRkZJWCA9ICduZzItYnMzLW1vZGFsJztcbmNvbnN0IEtFWVVQX0VWRU5UX05BTUUgPSBga2V5dXAuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IENMSUNLX0VWRU5UX05BTUUgPSBgY2xpY2suJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IFNIT1dfRVZFTlRfTkFNRSA9IGBzaG93LmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XG5cbiAgICBwcml2YXRlIG1vZGFsczogQnNNb2RhbENvbXBvbmVudFtdID0gW107XG4gICAgcHJpdmF0ZSAkYm9keTogSlF1ZXJ5O1xuXG4gICAgb25CYWNrZHJvcENsb3NlJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIG9uS2V5Ym9hcmRDbG9zZSQ6IE9ic2VydmFibGU8QnNNb2RhbEhpZGVUeXBlPjtcbiAgICBvbk1vZGFsU3RhY2skOiBPYnNlcnZhYmxlPEV2ZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRib2R5ID0galF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAgIHRoaXMub25CYWNrZHJvcENsb3NlJCA9IGZyb21FdmVudCh0aGlzLiRib2R5LCBDTElDS19FVkVOVF9OQU1FKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiBqUXVlcnkoZS50YXJnZXQpLmlzKCcubW9kYWwnKSksXG4gICAgICAgICAgICBtYXAoKCkgPT4gQnNNb2RhbEhpZGVUeXBlLkJhY2tkcm9wKSxcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vbktleWJvYXJkQ2xvc2UkID0gZnJvbUV2ZW50KHRoaXMuJGJvZHksIEtFWVVQX0VWRU5UX05BTUUpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKGU6IEtleWJvYXJkRXZlbnQpID0+IGUud2hpY2ggPT09IDI3KSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiBCc01vZGFsSGlkZVR5cGUuS2V5Ym9hcmQpLFxuICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25Nb2RhbFN0YWNrJCA9IGZyb21FdmVudDxFdmVudD4odGhpcy4kYm9keSwgU0hPV19FVkVOVF9OQU1FKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB6SW5kZXggPSAxMDQwICsgKDEwICogalF1ZXJ5KCcubW9kYWw6dmlzaWJsZScpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNzcygnei1pbmRleCcsIHpJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9kYWwtYmFja2Ryb3AnKS5ub3QoJy5tb2RhbC1zdGFjaycpLmNzcygnei1pbmRleCcsIHpJbmRleCAtIDEpLmFkZENsYXNzKCdtb2RhbC1zdGFjaycpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkKG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgIH1cblxuICAgIHJlbW92ZShtb2RhbDogQnNNb2RhbENvbXBvbmVudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YobW9kYWwpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzTmV4dCgpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMubW9kYWxzLmZpbHRlcihtID0+IG0udmlzaWJsZSk7XG4gICAgICAgIGlmICh2aXNpYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgdmlzaWJsZVt2aXNpYmxlLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNtaXNzQWxsKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5tb2RhbHMubWFwKChtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbS5kaXNtaXNzKCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1vdXRwdXQtb24tcHJlZml4XG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBvZiBhcyBvYnNlcnZhYmxlT2YsIGZyb21FdmVudCwgbWVyZ2UsIHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgZmlsdGVyLCB0YXAsIHNoYXJlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJzTW9kYWxIaWRlRXZlbnQsIEJzTW9kYWxIaWRlVHlwZSwgQnNNb2RhbE9wdGlvbnMsIEJzTW9kYWxTaXplIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5jb25zdCBFVkVOVF9TVUZGSVggPSAnbmcyLWJzMy1tb2RhbCc7XG5jb25zdCBTSE9XX0VWRU5UX05BTUUgPSBgc2hvdy5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgU0hPV05fRVZFTlRfTkFNRSA9IGBzaG93bi5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgSElERV9FVkVOVF9OQU1FID0gYGhpZGUuYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcbmNvbnN0IEhJRERFTl9FVkVOVF9OQU1FID0gYGhpZGRlbi5icy5tb2RhbC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgTE9BREVEX0VWRU5UX05BTUUgPSBgbG9hZGVkLmJzLm1vZGFsLiR7RVZFTlRfU1VGRklYfWA7XG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnMtbW9kYWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiBbbmdDbGFzc109XCJnZXRDc3NDbGFzc2VzKClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBvdmVycmlkZVNpemU6IHN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSAkbW9kYWw6IEpRdWVyeTtcbiAgICBwcml2YXRlICRkaWFsb2c6IEpRdWVyeTtcbiAgICBwcml2YXRlIG9uU2hvd0V2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvblNob3duRXZlbnQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgICBwcml2YXRlIG9uSGlkZUV2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvbkhpZGRlbkV2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvbkxvYWRlZEV2ZW50JDogT2JzZXJ2YWJsZTxFdmVudD47XG4gICAgcHJpdmF0ZSBvblNob3duJDogT2JzZXJ2YWJsZTx7fT47XG4gICAgcHJpdmF0ZSBvbkludGVybmFsQ2xvc2UkOiBTdWJqZWN0PEJzTW9kYWxIaWRlVHlwZT4gPSBuZXcgU3ViamVjdDxCc01vZGFsSGlkZVR5cGU+KCk7XG4gICAgcHJpdmF0ZSBvbkRpc21pc3MkOiBPYnNlcnZhYmxlPEJzTW9kYWxIaWRlVHlwZT47XG4gICAgcHJpdmF0ZSBvbkhpZGUkOiBPYnNlcnZhYmxlPEJzTW9kYWxIaWRlRXZlbnQ+O1xuICAgIHByaXZhdGUgb25IaWRkZW4kOiBPYnNlcnZhYmxlPEJzTW9kYWxIaWRlVHlwZT47XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIGlmICghdGhpcy4kbW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRtb2RhbC5kYXRhKERBVEFfS0VZKS5vcHRpb25zO1xuICAgIH1cblxuICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICBzaG93aW5nID0gZmFsc2U7XG4gICAgaGlkaW5nID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBhbmltYXRpb24gPSB0cnVlO1xuICAgIEBJbnB1dCgpIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBrZXlib2FyZCA9IHRydWU7XG4gICAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNzc0NsYXNzOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25TaG93ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIG9uSGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8QnNNb2RhbEhpZGVUeXBlPigpO1xuICAgIEBPdXRwdXQoKSBvbkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWRlJylcbiAgICBnZXQgZmFkZUNsYXNzKCkgeyByZXR1cm4gdGhpcy5hbmltYXRpb247IH1cblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MubW9kYWwnKVxuICAgIGdldCBtb2RhbENsYXNzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICAgIGdldCByb2xlQXR0cigpIHsgcmV0dXJuICdkaWFsb2cnOyB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICAgIGdldCB0YWJpbmRleEF0dHIoKSB7IHJldHVybiAnLTEnOyB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2VydmljZTogQnNNb2RhbFNlcnZpY2UsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcnMoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuJGRpYWxvZyA9IHRoaXMuJG1vZGFsLmZpbmQoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIGJhY2tkcm9wOiB0aGlzLmJhY2tkcm9wLFxuICAgICAgICAgICAga2V5Ym9hcmQ6IHRoaXMua2V5Ym9hcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25JbnRlcm5hbENsb3NlJC5uZXh0KEJzTW9kYWxIaWRlVHlwZS5EZXN0cm95KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC50cmlnZ2VyKCdmb2N1cycpO1xuICAgIH1cblxuICAgIHJvdXRlckNhbkRlYWN0aXZhdGUoKTogYW55IHtcbiAgICAgICAgdGhpcy5vbkludGVybmFsQ2xvc2UkLm5leHQoQnNNb2RhbEhpZGVUeXBlLlJvdXRlQ2hhbmdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9wZW4oc2l6ZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlU2l6ZSA9IG51bGw7XG4gICAgICAgIGlmIChCc01vZGFsU2l6ZS5pc1ZhbGlkU2l6ZShzaXplKSkge1xuICAgICAgICAgICAgdGhpcy5vdmVycmlkZVNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNob3coKS50b1Byb21pc2UoKTtcbiAgICB9XG5cbiAgICBjbG9zZSh2YWx1ZT86IGFueSk6IFByb21pc2U8e30+IHtcbiAgICAgICAgdGhpcy5vbkludGVybmFsQ2xvc2UkLm5leHQoQnNNb2RhbEhpZGVUeXBlLkNsb3NlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5vbkNsb3NlLmVtaXQodmFsdWUpKSxcbiAgICAgICAgKS50b1Byb21pc2UoKS50aGVuKCgpID0+IHZhbHVlKTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCk6IFByb21pc2U8e30+IHtcbiAgICAgICAgdGhpcy5vbkludGVybmFsQ2xvc2UkLm5leHQoQnNNb2RhbEhpZGVUeXBlLkRpc21pc3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5oaWRlKCkudG9Qcm9taXNlKCk7XG4gICAgfVxuXG4gICAgZ2V0Q3NzQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU21hbGwoKSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdtb2RhbC1zbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMYXJnZSgpKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ21vZGFsLWxnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3NzQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNTbWFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcnJpZGVTaXplICE9PSBCc01vZGFsU2l6ZS5MYXJnZVxuICAgICAgICAgICAgJiYgdGhpcy5zaXplID09PSBCc01vZGFsU2l6ZS5TbWFsbFxuICAgICAgICAgICAgfHwgdGhpcy5vdmVycmlkZVNpemUgPT09IEJzTW9kYWxTaXplLlNtYWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNMYXJnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3ZlcnJpZGVTaXplICE9PSBCc01vZGFsU2l6ZS5TbWFsbFxuICAgICAgICAgICAgJiYgdGhpcy5zaXplID09PSBCc01vZGFsU2l6ZS5MYXJnZVxuICAgICAgICAgICAgfHwgdGhpcy5vdmVycmlkZVNpemUgPT09IEJzTW9kYWxTaXplLkxhcmdlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBpZiAodGhpcy52aXNpYmxlICYmICF0aGlzLmhpZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dpbmcgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgobzogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblNob3duJC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICApLnN1YnNjcmliZShuZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBvLm5leHQobmV4dCk7XG4gICAgICAgICAgICAgICAgby5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkZpeCgpO1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRml4KCkge1xuICAgICAgICAvLyBGaXggZm9yIHNob3duLmJzLm1vZGFsIG5vdCBmaXJpbmcgd2hlbiAuZmFkZSBpcyBwcmVzZW50XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE3OTNcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC50cmlnZ2VyKCdmb2N1cycpLnRyaWdnZXIoU0hPV05fRVZFTlRfTkFNRSk7XG4gICAgICAgICAgICB9LCBqUXVlcnkuZm4ubW9kYWxbJ0NvbnN0cnVjdG9yJ10uVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGUoKTogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+IHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUgJiYgIXRoaXMuc2hvd2luZykge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZjxCc01vZGFsSGlkZVR5cGU+KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkaW5nID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG86IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMub25IaWRkZW4kLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUobmV4dCA9PiB7XG4gICAgICAgICAgICAgICAgby5uZXh0KG5leHQpO1xuICAgICAgICAgICAgICAgIG8uY29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0galF1ZXJ5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kbW9kYWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm1vZGFsKHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25TaG93RXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBTSE9XX0VWRU5UX05BTUUpO1xuICAgICAgICB0aGlzLm9uU2hvd25FdmVudCQgPSBmcm9tRXZlbnQodGhpcy4kbW9kYWwsIFNIT1dOX0VWRU5UX05BTUUpO1xuICAgICAgICB0aGlzLm9uSGlkZUV2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgSElERV9FVkVOVF9OQU1FKTtcbiAgICAgICAgdGhpcy5vbkhpZGRlbkV2ZW50JCA9IGZyb21FdmVudCh0aGlzLiRtb2RhbCwgSElEREVOX0VWRU5UX05BTUUpO1xuICAgICAgICB0aGlzLm9uTG9hZGVkRXZlbnQkID0gZnJvbUV2ZW50KHRoaXMuJG1vZGFsLCBMT0FERURfRVZFTlRfTkFNRSk7XG5cbiAgICAgICAgY29uc3Qgb25DbG9zZSQgPSBtZXJnZSh0aGlzLm9uSW50ZXJuYWxDbG9zZSQsIHRoaXMuc2VydmljZS5vbkJhY2tkcm9wQ2xvc2UkLCB0aGlzLnNlcnZpY2Uub25LZXlib2FyZENsb3NlJCk7XG5cbiAgICAgICAgdGhpcy5vbkhpZGUkID0gemlwKHRoaXMub25IaWRlRXZlbnQkLCBvbkNsb3NlJCkucGlwZShcbiAgICAgICAgICAgIG1hcCh4ID0+IDxCc01vZGFsSGlkZUV2ZW50PnsgZXZlbnQ6IHhbMF0sIHR5cGU6IHhbMV0gfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vbkhpZGRlbiQgPSB6aXA8QnNNb2RhbEhpZGVUeXBlPih0aGlzLm9uSGlkZGVuRXZlbnQkLCBvbkNsb3NlJCkucGlwZShcbiAgICAgICAgICAgIG1hcCh4ID0+IHhbMV0pLFxuICAgICAgICAgICAgdGFwKHRoaXMuc2V0VmlzaWJsZShmYWxzZSkpLFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMuc2VydmljZS5mb2N1c05leHQoKSksXG4gICAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25TaG93biQgPSB0aGlzLm9uU2hvd25FdmVudCQucGlwZShcbiAgICAgICAgICAgIHRhcCh0aGlzLnNldFZpc2libGUodHJ1ZSkpLFxuICAgICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMub25EaXNtaXNzJCA9IHRoaXMub25IaWRkZW4kLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKHgpID0+IHggIT09IEJzTW9kYWxIaWRlVHlwZS5DbG9zZSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTdGFydCB3YXRjaGluZyBmb3IgZXZlbnRzXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKC4uLltcbiAgICAgICAgICAgIHRoaXMub25TaG93biQuc3Vic2NyaWJlKCgpID0+IHsgfSksXG4gICAgICAgICAgICB0aGlzLm9uSGlkZGVuJC5zdWJzY3JpYmUoKCkgPT4geyB9KSxcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5vbk1vZGFsU3RhY2skLnN1YnNjcmliZSgoKSA9PiB7IH0pXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2lyZVVwRXZlbnRFbWl0dGVycygpIHtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vblNob3csIHRoaXMub25TaG93RXZlbnQkKTtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vbk9wZW4sIHRoaXMub25TaG93biQpO1xuICAgICAgICB0aGlzLndpcmVVcEV2ZW50RW1pdHRlcih0aGlzLm9uSGlkZSwgdGhpcy5vbkhpZGUkKTtcbiAgICAgICAgdGhpcy53aXJlVXBFdmVudEVtaXR0ZXIodGhpcy5vbkRpc21pc3MsIHRoaXMub25EaXNtaXNzJCk7XG4gICAgICAgIHRoaXMud2lyZVVwRXZlbnRFbWl0dGVyKHRoaXMub25Mb2FkZWQsIHRoaXMub25Mb2FkZWRFdmVudCQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2lyZVVwRXZlbnRFbWl0dGVyPFQ+KGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxUPiwgc3RyZWFtJDogT2JzZXJ2YWJsZTxUPikge1xuICAgICAgICBjb25zdCBzdWIgPSBzdHJlYW0kLnN1YnNjcmliZSgobmV4dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5uZXh0KG5leHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWaXNpYmxlID0gKGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gaXNWaXNpYmxlO1xuICAgICAgICAgICAgdGhpcy5zaG93aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhpZGluZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0T3B0aW9ucyA9IChvcHRpb25zOiBCc01vZGFsT3B0aW9ucykgPT4ge1xuICAgICAgICBsZXQgYmFja2Ryb3AgPSBvcHRpb25zLmJhY2tkcm9wO1xuICAgICAgICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJyAmJiBiYWNrZHJvcCAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgIGJhY2tkcm9wID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2Ryb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmJhY2tkcm9wID0gYmFja2Ryb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmtleWJvYXJkID0gb3B0aW9ucy5rZXlib2FyZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzdHJveSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRtb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5kYXRhKERBVEFfS0VZLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1vZGFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApLnRvUHJvbWlzZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnMtbW9kYWwtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0Rpc21pc3NcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJEaXNtaXNzXCIgKGNsaWNrKT1cIm1vZGFsLmRpc21pc3MoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc01vZGFsSGVhZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBzaG93RGlzbWlzcyA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogQnNNb2RhbENvbXBvbmVudCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdicy1tb2RhbC1ib2R5JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxCb2R5Q29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdicy1tb2RhbC1mb290ZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RGVmYXVsdEJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwibW9kYWwuZGlzbWlzcygpXCI+XG4gICAgICAgICAgICAgICAge3tkaXNtaXNzQnV0dG9uTGFiZWx9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0RlZmF1bHRCdXR0b25zXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm1vZGFsLmNsb3NlKClcIj5cbiAgICAgICAgICAgICAgICB7e2Nsb3NlQnV0dG9uTGFiZWx9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCc01vZGFsRm9vdGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBzaG93RGVmYXVsdEJ1dHRvbnMgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBkaXNtaXNzQnV0dG9uTGFiZWwgPSAnRGlzbWlzcyc7XG4gICAgQElucHV0KCkgY2xvc2VCdXR0b25MYWJlbCA9ICdDbG9zZSc7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1thdXRvZm9jdXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0F1dG9mb2N1c0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBtb2RhbDogQnNNb2RhbENvbXBvbmVudCkge1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwub25PcGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsQm9keUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0F1dG9mb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vYXV0b2ZvY3VzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnNNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgICAgIEJzTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEJzQXV0b2ZvY3VzRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQnNNb2RhbFNlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQnNNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgICAgIEJzTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEJzQXV0b2ZvY3VzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCc01vZGFsTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkVWRU5UX1NVRkZJWCIsIlNIT1dfRVZFTlRfTkFNRSIsIm9ic2VydmFibGVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFDSSxRQUFLO0lBQ0wsVUFBTztJQUNQLFdBQVE7SUFDUixXQUFRO0lBQ1IsY0FBVztJQUNYLFVBQU87Ozs7Ozs7Ozs7Ozs7QUNOWDs7Ozs7SUFJSSxPQUFPLFdBQVcsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxLQUFLLElBQUksS0FBSyxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0U7O0FBTE0saUJBQUssR0FBRyxJQUFJLENBQUM7QUFDYixpQkFBSyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7QUNGeEI7TUFPTSxZQUFZLEdBQUcsZUFBZTs7TUFDOUIsZ0JBQWdCLEdBQUcsU0FBUyxZQUFZLEVBQUU7O01BQzFDLGdCQUFnQixHQUFHLFNBQVMsWUFBWSxFQUFFOztNQUMxQyxlQUFlLEdBQUcsaUJBQWlCLFlBQVksRUFBRTtBQUd2RDtJQVNJO1FBUFEsV0FBTSxHQUF1QixFQUFFLENBQUM7UUFRcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDaEUsTUFBTSxDQUFDLENBQUMsQ0FBYSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3hELEdBQUcsQ0FBQyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFDbkMsS0FBSyxFQUFFLENBQ1YsQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDaEUsTUFBTSxDQUFDLENBQUMsQ0FBZ0IsS0FBSyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUM1QyxHQUFHLENBQUMsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQ25DLEtBQUssRUFBRSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBUSxJQUFJLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRyxDQUFDOztrQkFDTSxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEMsVUFBVSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNULENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDVixDQUFDO0tBQ0w7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELE1BQU0sQ0FBQyxLQUF1Qjs7Y0FDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztLQUNKOzs7O0lBRUQsU0FBUzs7Y0FDQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZDO0tBQ0o7Ozs7SUFFRCxVQUFVO1FBQ04sT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN0QixDQUFDLENBQUMsQ0FBQztLQUNQOzs7WUE1REosVUFBVTs7Ozs7Ozs7O01DUUxBLGNBQVksR0FBRyxlQUFlOztNQUM5QkMsaUJBQWUsR0FBRyxpQkFBaUJELGNBQVksRUFBRTs7TUFDakQsZ0JBQWdCLEdBQUcsa0JBQWtCQSxjQUFZLEVBQUU7O01BQ25ELGVBQWUsR0FBRyxpQkFBaUJBLGNBQVksRUFBRTs7TUFDakQsaUJBQWlCLEdBQUcsbUJBQW1CQSxjQUFZLEVBQUU7O01BQ3JELGlCQUFpQixHQUFHLG1CQUFtQkEsY0FBWSxFQUFFOztNQUNyRCxRQUFRLEdBQUcsVUFBVTtBQVkzQjs7Ozs7O0lBb0RJLFlBQW9CLE9BQW1CLEVBQVUsT0FBdUIsRUFBVSxJQUFZO1FBQTFFLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFsRHRGLGlCQUFZLEdBQVcsSUFBSSxDQUFDO1FBUzVCLHFCQUFnQixHQUE2QixJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUk1RSxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFRM0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFTixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFJZixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUNuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDaEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUE4TXJDLGVBQVUsR0FBRyxDQUFDLFNBQVM7WUFDM0IsT0FBTztnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCLENBQUM7U0FDTCxDQUFBO1FBRU8sZUFBVSxHQUFHLENBQUMsT0FBdUI7O2dCQUNyQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVE7WUFDL0IsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDdkQsUUFBUSxHQUFHLElBQUksQ0FBQzthQUVuQjtZQUVELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUNwQztZQUNELElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDNUM7U0FDSixDQUFBO1FBcE5HLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNmOzs7OztJQXZDRCxJQUFZLE9BQU87UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDN0M7Ozs7SUFtQkQsSUFDSSxTQUFTLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7SUFFMUMsSUFDSSxVQUFVLEtBQUssT0FBTyxJQUFJLENBQUMsRUFBRTs7OztJQUVqQyxJQUNJLFFBQVEsS0FBSyxPQUFPLFFBQVEsQ0FBQyxFQUFFOzs7O0lBRW5DLElBQ0ksWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUU7Ozs7SUFPbkMsUUFBUTtRQUNKLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDcEQ7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDekI7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFFRCxtQkFBbUI7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUFJLENBQUMsSUFBYTtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xDOzs7OztJQUVELEtBQUssQ0FBQyxLQUFXO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNuQixHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN0QyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsYUFBYTs7Y0FDSCxPQUFPLEdBQWEsRUFBRTtRQUU1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVPLE9BQU87UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDLEtBQUs7ZUFDdkMsSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsS0FBSztlQUMvQixJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7S0FDbEQ7Ozs7O0lBRU8sT0FBTztRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUMsS0FBSztlQUN2QyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxLQUFLO2VBQy9CLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQztLQUNsRDs7Ozs7SUFFTyxJQUFJO1FBQ1IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixPQUFPRSxFQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVwQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFnQjtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDZCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1YsQ0FBQyxTQUFTLENBQUMsSUFBSTtnQkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNoQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRU8sYUFBYTs7O1FBR2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixVQUFVLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDMUQsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzFEO0tBQ0o7Ozs7O0lBRU8sSUFBSTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxPQUFPQSxFQUFZLENBQWtCLElBQUksQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBZ0I7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUMsU0FBUyxDQUFDLElBQUk7Z0JBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRU8sSUFBSTtRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFRCxpQkFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7Y0FFMUQsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBRTNHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsQ0FBQyx1QkFBc0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQSxDQUFDLENBQzFELENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBa0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3JFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDM0IsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUNuQyxLQUFLLEVBQUUsQ0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDMUIsS0FBSyxFQUFFLENBQ1YsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUM3QyxDQUFDOztRQUdGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQ2xELENBQUMsQ0FBQztLQUNOOzs7OztJQUVPLG1CQUFtQjtRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQy9EOzs7Ozs7OztJQUVPLGtCQUFrQixDQUFJLE9BQXdCLEVBQUUsT0FBc0I7O2NBQ3BFLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNOLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUF5Qk8sT0FBTztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDbkIsR0FBRyxDQUFDO1lBQ0EsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1NBQ0osQ0FBQyxDQUNMLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDakI7OztZQWxTSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7O0tBTVQ7YUFDSjs7O1lBM0JHLFVBQVU7WUFRTCxjQUFjO1lBTm5CLE1BQU07Ozt3QkFxREwsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU07cUJBQ04sTUFBTTtxQkFDTixNQUFNO3NCQUNOLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO3dCQUVOLFdBQVcsU0FBQyxZQUFZO3lCQUd4QixXQUFXLFNBQUMsYUFBYTt1QkFHekIsV0FBVyxTQUFDLFdBQVc7MkJBR3ZCLFdBQVcsU0FBQyxlQUFlOzs7Ozs7O0FDdkZoQzs7OztJQWdCSSxZQUFtQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQURqQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztLQUNrQjs7O1lBYmxELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7S0FPVDthQUNKOzs7WUFaUSxnQkFBZ0I7OzswQkFjcEIsS0FBSzs7Ozs7OztBQ2ZWOzs7WUFFQyxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7OztLQUlUO2FBQ0o7Ozs7Ozs7QUNURDs7OztJQXFCSSxZQUFtQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUhqQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsdUJBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLE9BQU8sQ0FBQztLQUNXOzs7WUFsQmxELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVVDthQUNKOzs7WUFmUSxnQkFBZ0I7OztpQ0FpQnBCLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxLQUFLOzs7Ozs7O0FDcEJWOzs7OztJQVFJLFlBQW9CLEVBQWMsRUFBc0IsS0FBdUI7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFzQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMzRSxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDakMsQ0FBQyxDQUFDO1NBQ047S0FDSjs7O1lBWEosU0FBUyxTQUFDOztnQkFFUCxRQUFRLEVBQUUsYUFBYTthQUMxQjs7O1lBTm1CLFVBQVU7WUFDckIsZ0JBQWdCLHVCQU9nQixRQUFROzs7Ozs7O0FDUmpEOzs7WUFVQyxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsY0FBYztpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO2lCQUN2QjthQUNKOzs7Ozs7Ozs7Ozs7Ozs7In0=