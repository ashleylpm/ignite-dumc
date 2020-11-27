import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
    return (
            <img ref={buttonRef}
                 onClick={showModal}
                 className="attendInPerson"
                 src={require('../../../images/forms/registerPersonBtn.png')}/>
    );
};
export default Trigger;
