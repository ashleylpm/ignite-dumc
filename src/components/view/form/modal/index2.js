import React from 'react';
import ReactDOM from 'react-dom';
import { Form2 } from '../form/index2';
import FocusTrap from 'focus-trap-react';

export const Modal2 = ({
                          onClickOutside,
                          onKeyDown,
                          modalRef,
                          buttonRef,
                          closeModal,
                          onSubmit
                      }) => {
    return ReactDOM.createPortal(
        <FocusTrap>
            <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
            >
                <div className="modal-area formBackground" ref={modalRef}>
                    <div className="modal-body">
                        <Form2 onSubmit={onSubmit} />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

export default Modal2;
