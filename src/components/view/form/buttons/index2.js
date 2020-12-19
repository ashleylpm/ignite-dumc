import React from 'react';
const Trigger2 = ({ triggerText, buttonRef, showModal }) => {
    return (
        <img ref={buttonRef}
             onClick={showModal}
             className="liveStream"
             src={require('../../../images/forms/registerOnlineBtn.png')}/>
    );
};
export default Trigger2;
