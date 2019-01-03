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
export class BsModalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJzMy1tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBd0J2RSxNQUFNOzs7WUF0QkwsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGNBQWM7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7b0JBQ2hCLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDdkI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBCc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vZGFsQm9keUNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNNb2RhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc0F1dG9mb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vYXV0b2ZvY3VzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnNNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgICAgIEJzTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEJzQXV0b2ZvY3VzRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQnNNb2RhbFNlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQnNNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgQnNNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgICAgIEJzTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgICAgIEJzQXV0b2ZvY3VzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCc01vZGFsTW9kdWxlIHsgfVxuIl19