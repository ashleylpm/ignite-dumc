import React from 'react';
import Popup from 'reactjs-popup';
import Content from "./read-more-content";

function ReadMore ({close}) {
    return (
        <div>
            <Popup modal trigger={<span className="read-more">Read More</span>}>
                {close => <Content close={close} />}
            </Popup>
        </div>
    );
}

export default ReadMore;