import React from "react";
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "../../routes/desktop/home";
import YouTube from "react-youtube";
import LiveStream from "../../routes/desktop/watchStream";

function Rally() {

    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    return (
        <div>
            <div className="igniteRally">
                <HomePage/>
                <RB.Row className="rallyTitle text-center">
                    <img src={require('../../images/assets/rally/igniteRally.png')}/>
                </RB.Row>
            </div>

            <div className="rallySchedule">
                <div className="streamingTime">
                    <img src={require('../../images/assets/rally/streamingLive.png')}/>
                </div>
                <LiveStream />
                <div className="whatsHappening">
                    <img src={require('../../images/assets/rally/schedule.png')}/>
                </div>
            </div>

            <div className="rallyInfo">
                <div className="topText">
                    <img src={require('../../images/assets/rally/rallyTopText.png')}/>
                </div>
                <div className="middleImage">
                    <img src={require('../../images/assets/rally/igniteRally.png')}/>
                </div>
                <div className="bottomText">
                    <img src={require('../../images/assets/rally/rallyBottomText.png')}/>
                </div>
            </div>

            <div className="speakersRally">
                <img src={require('../../images/assets/rally/speaker.png')} alt="speakers-title" className="speakerTitle"/>
            </div>

            <div className="speakers-andy text-center">
                <RB.Row className="topSpeaker">
                    <RB.Col className="leftSpeaker">
                        <img src={require('../../images/assets/mobile/youth/andyText.png')}/>
                    </RB.Col>
                    <RB.Col className="rightSpeaker">
                        <img src={require('../../images/assets/mobile/youth/andyImage.png')}/>
                    </RB.Col>
                </RB.Row>
            </div>

            {/*<div className="streamingLive">*/}
            {/*    <div className="streamingTime">*/}
            {/*        <img src={require('../../images/assets/rally/schedule.png')}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Rally;