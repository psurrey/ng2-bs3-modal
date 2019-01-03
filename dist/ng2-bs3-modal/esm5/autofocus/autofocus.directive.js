/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Optional } from '@angular/core';
import { BsModalComponent } from '../modal/modal.component';
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
    BsAutofocusDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[autofocus]'
                },] },
    ];
    BsAutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: BsModalComponent, decorators: [{ type: Optional }] }
    ]; };
    return BsAutofocusDirective;
}());
export { BsAutofocusDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsAutofocusDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BsAutofocusDirective.prototype.modal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJhdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVEO0lBS0ksOEJBQW9CLEVBQWMsRUFBc0IsS0FBdUI7UUFBL0UsaUJBTUM7UUFObUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFzQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMzRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN4QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDOztnQkFYSixTQUFTLFNBQUM7O29CQUVQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjs7O2dCQU5tQixVQUFVO2dCQUNyQixnQkFBZ0IsdUJBT2dCLFFBQVE7O0lBT2pELDJCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksb0JBQW9COzs7Ozs7SUFDakIsa0NBQXNCOzs7OztJQUFFLHFDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1thdXRvZm9jdXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0F1dG9mb2N1c0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBtb2RhbDogQnNNb2RhbENvbXBvbmVudCkge1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwub25PcGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==