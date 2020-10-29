import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../form/index';
import FocusTrap from 'focus-trap-react';

export const Modal = ({
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
                        <Form onSubmit={onSubmit} />
                    </div>
                </div>
            </aside>
        </FocusTrap>,
        document.body
    );
};

export default Modal;
