import React, { Component } from 'react';
import { Modal2 } from '../modal/index2';
import Trigger2 from '../buttons/index2';

export class FormContainer2 extends Component {
    state = { isShown: false };
    showModal = () => {
        this.setState({ isShown: true }, () => {
        });
        this.toggleScrollLock();
    };
    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };
    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };
    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render() {
        return (
            <React.Fragment>
                <Trigger2
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                    triggerText={this.props.triggerText}
                />
                {this.state.isShown ? (
                    <Modal2
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}

export default FormContainer2;
