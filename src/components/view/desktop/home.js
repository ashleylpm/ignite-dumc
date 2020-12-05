import React from "react";
import YouTube from 'react-youtube';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBtn from "../../routes/desktop/youth1";
import TellMeMoreBtn from "../../routes/desktop/youth2";
import TellMeMoreBtn2 from "../../routes/desktop/rally";
import Instagram from "./instagram";

function Home() {
    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    return (
        <div>
            <div className="section-1 text-center">
                <RB.Row className="topTitle">
                    <RB.Col className="leftTitle">
                        <img src={require('../../images/assets/common/igniteSummit.png')} alt="ignite-summit"/>
                    </RB.Col>
                    <RB.Col className="rightTitle">
                        <img src={require('../../images/assets/home/dateLocation.png')} alt="date-location"/>
                    </RB.Col>
                </RB.Row>
                <RegisterBtn />
            </div>

            <div className="section-2 text-center">
                <img src={require('../../images/assets/home/heartsBurning.png')} alt="hearts-burning"/>
                <YouTube videoId="wbX7kyp0Tbg" opts={opts} className='youtube-video'/>
            </div>

            <div className="section-3 text-center">
                <RB.Container fluid>
                    <RB.Row>
                        <RB.Col className="column-1">
                            <img src={require('../../images/assets/common/igniteSummit.png')} alt="ignite-summit"/>
                            <TellMeMoreBtn />
                        </RB.Col>
                        <RB.Col className="column-2" style={{color: "black"}}>
                            {/*<img src={require('../../images/assets/common/igniteRally.png')} alt="ignite-summit"/>*/}
                            {/*<TellMeMoreBtn2 />*/}
                        </RB.Col>
                    </RB.Row>
                </RB.Container>
            </div>

            <Instagram />

            <div className="section-5 text-center">
                <img src={require('../../images/assets/home/speakersTitle.png')} alt="speakers-title" className="speakerTitle"/>
                <RB.Row className="speakers">
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/prAndy.png')} alt="pr-andy"/>
                    </RB.Col>
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/prKenny.png')} alt="pr-kenny"/>
                    </RB.Col>
                    <RB.Col className="speakerName">
                        <img src={require('../../images/assets/home/marianneLiaw.png')} alt="marriane-liaw"/>
                    </RB.Col>
                </RB.Row>
            </div>
        </div>
    );
}

export default Home;