import React from 'react';
const Trigger2 = ({ triggerText, buttonRef, showModal }) => {
    return (
        <button
            ref={buttonRef}
            onClick={showModal}
            className="attendOnline"
        >
            {triggerText}
        </button>
    );
};
export default Trigger2;
