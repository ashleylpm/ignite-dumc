import React from "react";
import YouTube from 'react-youtube';
import '../styles/home.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Header from "../header";
import RegisterHome from "../register-home";

function Home() {
    const opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    return (
        <Wrapper>
            <div id="content-desktop">
                <div className="section-1 text-center">
                    <RB.Row className="topTitle">
                        <RB.Col className="leftTitle">
                            <img src={require('../images/assets/mainMenu/titleLeft.png')}/>
                        </RB.Col>
                        <RB.Col className="rightTitle">
                            <img src={require('../images/assets/mainMenu/titleRight.png')}/>
                        </RB.Col>
                    </RB.Row>
                    <RegisterHome />
                </div>

                <div className="section-2 text-center">
                    <img src={require('../images/assets/mainMenu/youtubeText.png')}/>
                    <YouTube videoId="wbX7kyp0Tbg" opts={opts} className='youtube-video'/>
                </div>

                <div className="section-3 text-center">
                    <RB.Container fluid>
                        <RB.Row>
                            <RB.Col className="column-1">
                                <img src={require('../images/assets/mainMenu/columnIYLS.png')}/>
                                <Header />
                            </RB.Col>
                            <RB.Col className="column-2" style={{color: "black"}}>
                            </RB.Col>
                        </RB.Row>
                    </RB.Container>
                </div>

                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                    <div className="section-4 text-center">
                        <RB.Row className="topTitle">
                            <RB.Col className="leftTitle">
                                <img src={require('../images/assets/mainMenu/instagramPhone.png')}/>
                            </RB.Col>
                            <RB.Col className="rightTitle">
                                <img src={require('../images/assets/mainMenu/instagramText.png')}/>
                            </RB.Col>
                        </RB.Row>
                    </div>
                </a>

                <div className="section-5 text-center">
                    <img src={require('../images/assets/mainMenu/speakers.png')} className="speakerTitle"/>
                    <RB.Row className="speakers">
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakersAndy.png')}/>
                        </RB.Col>
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakerKenny.png')}/>
                        </RB.Col>
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakerMarianne.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                {/*<div className="section-6 text-center">*/}
                {/*</div>*/}
            </div>

            <div id="content-mobile">
                <div className="section-1">
                    {/*<RB.Row className="igniteLogo">*/}
                    {/*    <img src={require('../images/assets/mainMenu/igniteMyLogo.png')} />*/}
                    {/*</RB.Row>*/}
                    <div className="titleContainer text-center">
                        <img src={require('../images/assets/mobile/mainMenuTitle.png')}/>
                        <br/>
                        <img src={require('../images/assets/mobile/timeTitle.png')}/>
                    </div>
                    <RegisterHome />
                </div>

                <div className="section-2 text-center">
                    <img src={require('../images/assets/mainMenu/youtubeText.png')}/>
                    <YouTube videoId="wbX7kyp0Tbg" opts={opts} className='youtube-video'/>
                </div>

                <div className="section-3 text-center">
                    <RB.Row>
                        <RB.Col>
                            <div className="titleContainer">
                                <img src={require('../images/assets/mainMenu/columnIYLS.png')}/>
                            </div>
                        </RB.Col>
                        <RB.Col>
                            <Header />
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="section-3-1 text-right">
                    <img src={require('../images/assets/mobile/comingSoon.png')}/>
                </div>

                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                    <div className="section-4 text-center">
                        <RB.Row className="topTitle">
                            <RB.Col className="leftTitle">
                                <img src={require('../images/assets/mainMenu/instagramPhone.png')}/>
                            </RB.Col>
                            <RB.Col className="rightTitle">
                                <img src={require('../images/assets/mainMenu/instagramText.png')}/>
                            </RB.Col>
                        </RB.Row>
                    </div>
                </a>

                <div className="section-5 text-center">
                    <img src={require('../images/assets/mainMenu/speakers.png')} className="speakerTitle"/>
                    <RB.Row className="speakers">
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakersAndy.png')}/>
                        </RB.Col>
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakerKenny.png')}/>
                        </RB.Col>
                        <RB.Col className="speakerName">
                            <img src={require('../images/assets/mainMenu/speakerMarianne.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Home;