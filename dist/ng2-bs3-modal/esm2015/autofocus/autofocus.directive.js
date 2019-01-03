/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Optional } from '@angular/core';
import { BsModalComponent } from '../modal/modal.component';
export class BsAutofocusDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJhdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTTVELE1BQU07Ozs7O0lBQ0YsWUFBb0IsRUFBYyxFQUFzQixLQUF1QjtRQUEzRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQXNCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDOzs7WUFYSixTQUFTLFNBQUM7O2dCQUVQLFFBQVEsRUFBRSxhQUFhO2FBQzFCOzs7WUFObUIsVUFBVTtZQUNyQixnQkFBZ0IsdUJBT2dCLFFBQVE7Ozs7Ozs7SUFBakMsa0NBQXNCOzs7OztJQUFFLHFDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgICBzZWxlY3RvcjogJ1thdXRvZm9jdXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBCc0F1dG9mb2N1c0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBtb2RhbDogQnNNb2RhbENvbXBvbmVudCkge1xuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwub25PcGVuLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==