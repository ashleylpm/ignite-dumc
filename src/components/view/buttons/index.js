import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            ref={buttonRef}
            onClick={showModal}
            className="attendInPerson"
        >
            {triggerText}
        </button>
    );
};
export default Trigger;