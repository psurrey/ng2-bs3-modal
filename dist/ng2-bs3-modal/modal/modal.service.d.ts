import { Observable } from 'rxjs';
import { BsModalComponent } from './modal.component';
import { BsModalHideType } from './models';
export declare class BsModalService {
    private modals;
    private $body;
    onBackdropClose$: Observable<BsModalHideType>;
    onKeyboardClose$: Observable<BsModalHideType>;
    onModalStack$: Observable<Event>;
    constructor();
    add(modal: BsModalComponent): void;
    remove(modal: BsModalComponent): void;
    focusNext(): void;
    dismissAll(): Promise<{}[]>;
}
