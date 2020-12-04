import * as RB from "react-bootstrap";
import React from "react";

function InstagramMobile() {
    return (
        <div>
            <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                <div className="section-4 text-center">
                    <RB.Row className="topTitle">
                        <RB.Col className="leftTitle">
                            <img src={require('../../images/assets/common/instagramPhone.png')}/>
                        </RB.Col>
                        <RB.Col className="rightTitle">
                            <img src={require('../../images/assets/common/followUs.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>
            </a>
        </div>
    );
}

export default InstagramMobile;