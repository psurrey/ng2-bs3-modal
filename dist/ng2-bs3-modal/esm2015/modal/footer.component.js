/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BsModalComponent } from './modal.component';
export class BsModalFooterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWdCckQsTUFBTTs7OztJQUlGLFlBQW1CLEtBQXVCO1FBQXZCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBSGpDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsT0FBTyxDQUFDO0lBQ1UsQ0FBQzs7O1lBbEJsRCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7O0tBVVQ7YUFDSjs7O1lBZlEsZ0JBQWdCOzs7aUNBaUJwQixLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSzs7OztJQUZOLG9EQUFvQzs7SUFDcEMsb0RBQXdDOztJQUN4QyxrREFBb0M7O0lBQ3hCLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnMtbW9kYWwtZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0RlZmF1bHRCdXR0b25zXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm1vZGFsLmRpc21pc3MoKVwiPlxuICAgICAgICAgICAgICAgIHt7ZGlzbWlzc0J1dHRvbkxhYmVsfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dEZWZhdWx0QnV0dG9uc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJtb2RhbC5jbG9zZSgpXCI+XG4gICAgICAgICAgICAgICAge3tjbG9zZUJ1dHRvbkxhYmVsfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNNb2RhbEZvb3RlckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc2hvd0RlZmF1bHRCdXR0b25zID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzbWlzc0J1dHRvbkxhYmVsID0gJ0Rpc21pc3MnO1xuICAgIEBJbnB1dCgpIGNsb3NlQnV0dG9uTGFiZWwgPSAnQ2xvc2UnO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogQnNNb2RhbENvbXBvbmVudCkgeyB9XG59XG4iXX0=