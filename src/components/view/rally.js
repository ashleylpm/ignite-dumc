import React from "react";
import '../styles/rally.css';
import '../styles/igniteYouth.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function Rally() {
    return (
        <Wrapper>

            <div id="contentIYLS-desktop">
                <div className="igniteRally">
                    <RB.Row className="rallyLogo">
                        <img src={require('../images/assets/iyls/igniteMyLogo.png')} />
                    </RB.Row>
                    <RB.Row className="rallyTitle text-center">
                        <img src={require('../images/assets/rally/desktop/assets1.png')}/>
                    </RB.Row>
                </div>

                <div className="rallySchedule">
                    <div className="streamingTime">
                        <img src={require('../images/assets/rally/desktop/assets2.png')} />
                    </div>
                    <div className="whatsHappening">
                        <img src={require('../images/assets/rally/desktop/assets3.png')} />
                    </div>
                </div>

                <div className="rallyInfo">
                    <div className="topText">
                        <img src={require('../images/assets/rally/desktop/assets5-1.png')} />
                    </div>
                    <div className="middleImage">
                        <img src={require('../images/assets/rally/desktop/assets4.png')} />
                    </div>
                    <div className="bottomText">
                        <img src={require('../images/assets/rally/desktop/assets5-2.png')} />
                    </div>
                </div>

                <div className="speakers">
                    <img src={require('../images/assets/mainMenu/speakers.png')}/>
                </div>

                <div className="speakers-andy text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/iyls/andyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/iyls/andyImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="streamingLive">
                    <div className="streamingTime">
                        <img src={require('../images/assets/rally/desktop/assets2.png')} />
                    </div>
                </div>
            </div>

            <div id="contentIYLS-mobile">
                <div className="igniteRally">
                    <RB.Row className="rallyLogo">
                        <img src={require('../images/assets/iyls/igniteMyLogo.png')} />
                    </RB.Row>
                    <RB.Row className="rallyTitle text-center">
                        <img src={require('../images/assets/rally/desktop/assets1.png')}/>
                    </RB.Row>
                </div>

                <div className="rallySchedule">
                    <div className="streamingTime">
                        <img src={require('../images/assets/rally/desktop/assets2.png')} />
                    </div>
                    <div className="whatsHappening">
                        <img src={require('../images/assets/rally/desktop/assets3.png')} />
                    </div>
                </div>

                <div className="rallyInfo">
                    <div className="topText">
                        <img src={require('../images/assets/rally/desktop/assets5-1.png')} />
                    </div>
                    <div className="middleImage">
                        <img src={require('../images/assets/rally/desktop/assets4.png')} />
                    </div>
                    <div className="bottomText">
                        <img src={require('../images/assets/rally/desktop/assets5-2.png')} />
                    </div>
                </div>

                <div className="speakers">
                    <img src={require('../images/assets/mainMenu/speakers.png')}/>
                </div>

                <div className="speakers-andy text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/iyls/andyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/iyls/andyImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="streamingLive">
                    <div className="streamingTime">
                        <img src={require('../images/assets/rally/desktop/assets2.png')} />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Rally;