/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BsModalComponent } from './modal.component';
var BsModalHeaderComponent = /** @class */ (function () {
    function BsModalHeaderComponent(modal) {
        this.modal = modal;
        this.showDismiss = false;
    }
    BsModalHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-modal-header',
                    template: "\n        <div class=\"modal-header\">\n            <button *ngIf=\"showDismiss\" type=\"button\" class=\"close\" aria-label=\"Dismiss\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
                },] },
    ];
    BsModalHeaderComponent.ctorParameters = function () { return [
        { type: BsModalComponent }
    ]; };
    BsModalHeaderComponent.propDecorators = {
        showDismiss: [{ type: Input }]
    };
    return BsModalHeaderComponent;
}());
export { BsModalHeaderComponent };
if (false) {
    /** @type {?} */
    BsModalHeaderComponent.prototype.showDismiss;
    /** @type {?} */
    BsModalHeaderComponent.prototype.modal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRDtJQWFJLGdDQUFtQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQURqQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUNpQixDQUFDOztnQkFibEQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxzVEFPVDtpQkFDSjs7O2dCQVpRLGdCQUFnQjs7OzhCQWNwQixLQUFLOztJQUVWLDZCQUFDO0NBQUEsQUFkRCxJQWNDO1NBSFksc0JBQXNCOzs7SUFDL0IsNkNBQTZCOztJQUNqQix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JzLW1vZGFsLWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dEaXNtaXNzXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiRGlzbWlzc1wiIChjbGljayk9XCJtb2RhbC5kaXNtaXNzKClcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb2RhbEhlYWRlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc2hvd0Rpc21pc3MgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kYWw6IEJzTW9kYWxDb21wb25lbnQpIHsgfVxufVxuIl19