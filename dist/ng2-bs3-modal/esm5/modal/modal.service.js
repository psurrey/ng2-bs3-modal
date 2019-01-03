/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, map, share, tap } from 'rxjs/operators';
import { BsModalHideType } from './models';
/** @type {?} */
var EVENT_SUFFIX = 'ng2-bs3-modal';
/** @type {?} */
var KEYUP_EVENT_NAME = "keyup." + EVENT_SUFFIX;
/** @type {?} */
var CLICK_EVENT_NAME = "click." + EVENT_SUFFIX;
/** @type {?} */
var SHOW_EVENT_NAME = "show.bs.modal." + EVENT_SUFFIX;
var BsModalService = /** @class */ (function () {
    function BsModalService() {
        var _this = this;
        this.modals = [];
        this.$body = jQuery(document.body);
        this.onBackdropClose$ = fromEvent(this.$body, CLICK_EVENT_NAME).pipe(filter(function (e) { return jQuery(e.target).is('.modal'); }), map(function () { return BsModalHideType.Backdrop; }), share());
        this.onKeyboardClose$ = fromEvent(this.$body, KEYUP_EVENT_NAME).pipe(filter(function (e) { return e.which === 27; }), map(function () { return BsModalHideType.Keyboard; }), share());
        this.onModalStack$ = fromEvent(this.$body, SHOW_EVENT_NAME).pipe(tap(function () {
            /** @type {?} */
            var zIndex = 1040 + (10 * jQuery('.modal:visible').length);
            jQuery(_this).css('z-index', zIndex);
            setTimeout(function () {
                jQuery('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
            }, 0);
        }), share());
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
        { type: Injectable },
    ];
    BsModalService.ctorParameters = function () { return []; };
    return BsModalService;
}());
export { BsModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.modals;
    /**
     * @type {?}
     * @private
     */
    BsModalService.prototype.$body;
    /** @type {?} */
    BsModalService.prototype.onBackdropClose$;
    /** @type {?} */
    BsModalService.prototype.onKeyboardClose$;
    /** @type {?} */
    BsModalService.prototype.onModalStack$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7O0lBRXJDLFlBQVksR0FBRyxlQUFlOztJQUM5QixnQkFBZ0IsR0FBRyxXQUFTLFlBQWM7O0lBQzFDLGdCQUFnQixHQUFHLFdBQVMsWUFBYzs7SUFDMUMsZUFBZSxHQUFHLG1CQUFpQixZQUFjO0FBRXZEO0lBVUk7UUFBQSxpQkF5QkM7UUFoQ08sV0FBTSxHQUF1QixFQUFFLENBQUM7UUFRcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDaEUsTUFBTSxDQUFDLFVBQUMsQ0FBYSxJQUFLLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQTdCLENBQTZCLENBQUMsRUFDeEQsR0FBRyxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsUUFBUSxFQUF4QixDQUF3QixDQUFDLEVBQ25DLEtBQUssRUFBRSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQ2hFLE1BQU0sQ0FBQyxVQUFDLENBQWdCLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFDNUMsR0FBRyxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsUUFBUSxFQUF4QixDQUF3QixDQUFDLEVBQ25DLEtBQUssRUFBRSxDQUNWLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBUSxJQUFJLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FDbkUsR0FBRyxDQUFDOztnQkFDTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM1RCxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwQyxVQUFVLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDVixDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCw0QkFBRzs7OztJQUFILFVBQUksS0FBdUI7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCwrQkFBTTs7OztJQUFOLFVBQU8sS0FBdUI7O1lBQ3BCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGtDQUFTOzs7SUFBVDs7WUFDVSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG1DQUFVOzs7SUFBVjtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkE1REosVUFBVTs7O0lBNkRYLHFCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E1RFksY0FBYzs7Ozs7O0lBRXZCLGdDQUF3Qzs7Ozs7SUFDeEMsK0JBQXNCOztJQUV0QiwwQ0FBOEM7O0lBQzlDLDBDQUE4Qzs7SUFDOUMsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9kYWxIaWRlVHlwZSB9IGZyb20gJy4vbW9kZWxzJztcblxuY29uc3QgRVZFTlRfU1VGRklYID0gJ25nMi1iczMtbW9kYWwnO1xuY29uc3QgS0VZVVBfRVZFTlRfTkFNRSA9IGBrZXl1cC4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgQ0xJQ0tfRVZFTlRfTkFNRSA9IGBjbGljay4ke0VWRU5UX1NVRkZJWH1gO1xuY29uc3QgU0hPV19FVkVOVF9OQU1FID0gYHNob3cuYnMubW9kYWwuJHtFVkVOVF9TVUZGSVh9YDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbW9kYWxzOiBCc01vZGFsQ29tcG9uZW50W10gPSBbXTtcbiAgICBwcml2YXRlICRib2R5OiBKUXVlcnk7XG5cbiAgICBvbkJhY2tkcm9wQ2xvc2UkOiBPYnNlcnZhYmxlPEJzTW9kYWxIaWRlVHlwZT47XG4gICAgb25LZXlib2FyZENsb3NlJDogT2JzZXJ2YWJsZTxCc01vZGFsSGlkZVR5cGU+O1xuICAgIG9uTW9kYWxTdGFjayQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkgPSBqUXVlcnkoZG9jdW1lbnQuYm9keSk7XG5cbiAgICAgICAgdGhpcy5vbkJhY2tkcm9wQ2xvc2UkID0gZnJvbUV2ZW50KHRoaXMuJGJvZHksIENMSUNLX0VWRU5UX05BTUUpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKGU6IE1vdXNlRXZlbnQpID0+IGpRdWVyeShlLnRhcmdldCkuaXMoJy5tb2RhbCcpKSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiBCc01vZGFsSGlkZVR5cGUuQmFja2Ryb3ApLFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm9uS2V5Ym9hcmRDbG9zZSQgPSBmcm9tRXZlbnQodGhpcy4kYm9keSwgS0VZVVBfRVZFTlRfTkFNRSkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoZTogS2V5Ym9hcmRFdmVudCkgPT4gZS53aGljaCA9PT0gMjcpLFxuICAgICAgICAgICAgbWFwKCgpID0+IEJzTW9kYWxIaWRlVHlwZS5LZXlib2FyZCksXG4gICAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5vbk1vZGFsU3RhY2skID0gZnJvbUV2ZW50PEV2ZW50Pih0aGlzLiRib2R5LCBTSE9XX0VWRU5UX05BTUUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHpJbmRleCA9IDEwNDAgKyAoMTAgKiBqUXVlcnkoJy5tb2RhbDp2aXNpYmxlJykubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuY3NzKCd6LWluZGV4JywgekluZGV4KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5tb2RhbC1iYWNrZHJvcCcpLm5vdCgnLm1vZGFsLXN0YWNrJykuY3NzKCd6LWluZGV4JywgekluZGV4IC0gMSkuYWRkQ2xhc3MoJ21vZGFsLXN0YWNrJyk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGQobW9kYWw6IEJzTW9kYWxDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNOZXh0KCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5tb2RhbHMuZmlsdGVyKG0gPT4gbS52aXNpYmxlKTtcbiAgICAgICAgaWYgKHZpc2libGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICB2aXNpYmxlW3Zpc2libGUubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc21pc3NBbGwoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLm1vZGFscy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtLmRpc21pc3MoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==