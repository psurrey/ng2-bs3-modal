/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { BsModalComponent } from './modal.component';
export class BsModalHeaderComponent {
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
if (false) {
    /** @type {?} */
    BsModalHeaderComponent.prototype.showDismiss;
    /** @type {?} */
    BsModalHeaderComponent.prototype.modal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1iczMtbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWFyRCxNQUFNOzs7O0lBRUYsWUFBbUIsS0FBdUI7UUFBdkIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFEakMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFDaUIsQ0FBQzs7O1lBYmxELFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7S0FPVDthQUNKOzs7WUFaUSxnQkFBZ0I7OzswQkFjcEIsS0FBSzs7OztJQUFOLDZDQUE2Qjs7SUFDakIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdicy1tb2RhbC1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93RGlzbWlzc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1sYWJlbD1cIkRpc21pc3NcIiAoY2xpY2spPVwibW9kYWwuZGlzbWlzcygpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxIZWFkZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNob3dEaXNtaXNzID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IocHVibGljIG1vZGFsOiBCc01vZGFsQ29tcG9uZW50KSB7IH1cbn1cbiJdfQ==