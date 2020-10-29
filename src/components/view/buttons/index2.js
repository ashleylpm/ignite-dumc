import React from 'react';
const Trigger2 = ({ triggerText, buttonRef, showModal }) => {
    return (
        <img ref={buttonRef}
             onClick={showModal}
             className="attendInPerson"
             src={require('../../images/buttons/buttons-full/registerOnline.png')}/>
    );
};
export default Trigger2;
