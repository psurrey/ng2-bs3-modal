/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService } from './modal/modal.service';
import { BsModalComponent } from './modal/modal.component';
import { BsModalHeaderComponent } from './modal/header.component';
import { BsModalBodyComponent } from './modal/body.component';
import { BsModalFooterComponent } from './modal/footer.component';
import { BsAutofocusDirective } from './autofocus/autofocus.directive';
var BsModalModule = /** @class */ (function () {
    function BsModalModule() {
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
    return BsModalModule;
}());
export { BsModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJzMy1tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXZFO0lBQUE7SUFzQjZCLENBQUM7O2dCQXRCN0IsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDVixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLGNBQWM7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjtxQkFDdkI7aUJBQ0o7O0lBQzRCLG9CQUFDO0NBQUEsQUF0QjlCLElBc0I4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEJzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzTW9kYWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9hdXRvZm9jdXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCc01vZGFsQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQnNBdXRvZm9jdXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCc01vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCc01vZGFsQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBCc01vZGFsQm9keUNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgQnNBdXRvZm9jdXNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJzTW9kYWxNb2R1bGUgeyB9XG4iXX0=