import React from 'react';
import Popup from 'reactjs-popup';
import Content from "./read-more-content";

function ReadMore () {
    return (
        <div>
            <Popup modal trigger={<span className="read-more font-gothamLight">Read More</span>}>
                {close => <Content close={close} />}
            </Popup>
        </div>
    );
}

export default ReadMore;