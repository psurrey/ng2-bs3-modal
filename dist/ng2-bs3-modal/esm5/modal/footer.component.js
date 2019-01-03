/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BsModalComponent } from './modal.component';
var BsModalFooterComponent = /** @class */ (function () {
    function BsModalFooterComponent(modal) {
        this.modal = modal;
        this.showDefaultButtons = false;
        this.dismissButtonLabel = 'Dismiss';
        this.closeButtonLabel = 'Close';
    }
    BsModalFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-modal-footer',
                    template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" (click)=\"modal.dismiss()\">\n                {{dismissButtonLabel}}\n            </button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">\n                {{closeButtonLabel}}\n              </button>\n        </div>\n    "
                },] },
    ];
    BsModalFooterComponent.ctorParameters = function () { return [
        { type: BsModalComponent }
    ]; };
    BsModalFooterComponent.propDecorators = {
        showDefaultButtons: [{ type: Input }],
        dismissButtonLabel: [{ type: Input }],
        closeButtonLabel: [{ type: Input }]
    };
    return BsModalFooterComponent;
}());
export { BsModalFooterComponent };
if (false) {
    /** @type {?} */
    BsModalFooterComponent.prototype.showDefaultButtons;
    /** @type {?} */
    BsModalFooterComponent.prototype.dismissButtonLabel;
    /** @type {?} */
    BsModalFooterComponent.prototype.closeButtonLabel;
    /** @type {?} */
    BsModalFooterComponent.prototype.modal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQWtCSSxnQ0FBbUIsS0FBdUI7UUFBdkIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFIakMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHVCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxPQUFPLENBQUM7SUFDVSxDQUFDOztnQkFsQmxELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsbWRBVVQ7aUJBQ0o7OztnQkFmUSxnQkFBZ0I7OztxQ0FpQnBCLEtBQUs7cUNBQ0wsS0FBSzttQ0FDTCxLQUFLOztJQUVWLDZCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FMWSxzQkFBc0I7OztJQUMvQixvREFBb0M7O0lBQ3BDLG9EQUF3Qzs7SUFDeEMsa0RBQW9DOztJQUN4Qix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsLWZvb3RlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dEZWZhdWx0QnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJtb2RhbC5kaXNtaXNzKClcIj5cbiAgICAgICAgICAgICAgICB7e2Rpc21pc3NCdXR0b25MYWJlbH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RGVmYXVsdEJ1dHRvbnNcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwibW9kYWwuY2xvc2UoKVwiPlxuICAgICAgICAgICAgICAgIHt7Y2xvc2VCdXR0b25MYWJlbH19XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxGb290ZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNob3dEZWZhdWx0QnV0dG9ucyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc21pc3NCdXR0b25MYWJlbCA9ICdEaXNtaXNzJztcbiAgICBASW5wdXQoKSBjbG9zZUJ1dHRvbkxhYmVsID0gJ0Nsb3NlJztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWw6IEJzTW9kYWxDb21wb25lbnQpIHsgfVxufVxuIl19