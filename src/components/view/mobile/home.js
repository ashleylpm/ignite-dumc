import React from "react";
import YouTube from 'react-youtube';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBtn from "../../routes/mobile/youth1";
import TellMeMoreBtn from "../../routes/mobile/youth2";
import TellMeMoreBtn2 from "../../routes/mobile/rally";
import InstagramMobile from "./instagram";

function Home() {
    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    return (
        <div>
            <div className="section-1">
                <div className="titleContainer text-center">
                    <img src={require('../../images/assets/common/igniteSummit.png')}/>
                    <br/>
                    <img src={require('../../images/assets/mobile/timeTitle.png')}/>
                </div>
                <RegisterBtn />
            </div>

            <div className="section-2 text-center">
                <img src={require('../../images/assets/home/heartsBurning.png')}/>
                <YouTube videoId="wbX7kyp0Tbg" opts={opts} className='youtube-video'/>
            </div>

            <div className="section-3 text-center">
                <RB.Row>
                    <RB.Col>
                        <div className="titleContainer">
                            <img src={require('../../images/assets/common/igniteSummit.png')}/>
                        </div>
                    </RB.Col>
                    <RB.Col>
                        <TellMeMoreBtn />
                    </RB.Col>
                </RB.Row>
            </div>

            <div className="section-3-1 text-center">
                <RB.Row>
                    <RB.Col>
                        <div className="titleContainer">
                            <img src={require('../../images/assets/common/igniteRally.png')}/>
                        </div>
                    </RB.Col>
                    <RB.Col>
                        <TellMeMoreBtn2 />
                    </RB.Col>
                </RB.Row>
            </div>

            <InstagramMobile />

            <div className="section-5 text-center">
                <img src={require('../../images/assets/home/speakersTitle.png')} className="speakerTitle"/>
                <RB.Row className="speakers">
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/prAndy.png')}/>
                    </RB.Col>
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/prKenny.png')}/>
                    </RB.Col>
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/marianneLiaw.png')}/>
                    </RB.Col>
                </RB.Row>
            </div>
        </div>
    );
}

export default Home;