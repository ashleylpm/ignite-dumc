import React from "react";
import '../styles/igniteYouth.css';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormContainer } from '../view/form-container/index';
import { FormContainer2} from "./form-container/index2";
import styled from "styled-components";
import * as RB from "react-bootstrap";

function First() {
    function goBack() {
        window.history.back();
    }

    return (
        <Wrapper>
            <div id="contentIYLS-desktop">
                <div className="igniteYouth">
                    <RB.Row className="igniteLogo">
                        <img src={require('../images/assets/iyls/igniteMyLogo.png')} />
                    </RB.Row>
                    <RB.Row className="igniteTitle text-center">
                        <img src={require('../images/assets/iyls/columnIYLS.png')}/>
                    </RB.Row>
                </div>

                <div className="attention text-center">
                    <img src={require('../images/assets/iyls/attentionTitle.png')} className="attentionTitle"/><br/>
                    <img src={require('../images/assets/iyls/attentionText.png')} className="attentionText"/>
                </div>

                <div className="scheduleContainer text-center">
                    <RB.Row className="scheduleRow">
                        <RB.Col className="leftSchedule">
                            <img src={require('../images/assets/iyls/schedule.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSchedule">
                            <img src={require('../images/assets/iyls/scheduleTime.png')} className="scheduleTime"/> <br/>
                            <FormContainer /><br/>
                            <img src={require('../images/assets/iyls/registrationClose.png')}  className="registrationCloses"/><br/>
                            <img src={require('../images/assets/iyls/physicalText.png')}  className="scheduleOnline"/><br/>
                            <FormContainer2 /><br/>
                            <img src={require('../images/assets/iyls/registrationClose.png')}  className="registrationCloses"/><br/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="whatIsIgnite text-center">
                    <img src={require('../images/assets/iyls/whatIgnite.png')} className="whatIsIgniteTitle"/><br/>
                    <img src={require('../images/assets/iyls/igniteText.png')} className="whatIsIgniteText"/>
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

                <div className="speakers-kenny text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/iyls/kennyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/iyls/kennyImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-marriane text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/iyls/marrianeText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/iyls/marrianeImage.png')}/>
                        </RB.Col>
                    </RB.Row>
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

                <div className="specialPerformance">
                    <div className="text-center">
                        <img src={require('../images/assets/iyls/specialPeformance.png')} className="specialTitle"/>
                    </div>
                    <div className="absolute-title">
                        <img src={require('../images/assets/iyls/sekHao.png')} className="specialName"/>
                    </div>
                </div>

                {/*<div className="countdownIgnite text-center">*/}
                {/*</div>*/}
            </div>

            <div id="contentIYLS-mobile">
                <div className="igniteYouth text-center">
                    {/*<RB.Row className="igniteLogo">*/}
                    {/*    <img src={require('../images/assets/iyls/igniteMyLogo.png')} />*/}
                    {/*</RB.Row>*/}
                    <img src={require('../images/assets/iyls/columnIYLS.png')}/>
                </div>

                <div className="attention text-center">
                    <img src={require('../images/assets/iyls/attentionTitle.png')} className="attentionTitle"/><br/>
                    <img src={require('../images/assets/mobile/attenttionText.png')} className="attentionText"/>
                </div>

                <div className="scheduleContainer text-center">
                    <img src={require('../images/assets/iyls/scheduleTime.png')} className="scheduleTime"/> <br/>
                    <FormContainer /><br/>
                    <img src={require('../images/assets/iyls/registrationClose.png')}  className="registrationCloses"/><br/>
                    <img src={require('../images/assets/iyls/physicalText.png')}  className="scheduleOnline"/><br/>
                    <FormContainer2 /><br/>
                    <img src={require('../images/assets/iyls/registrationClose.png')}  className="registrationCloses"/><br/>
                    <img src={require('../images/assets/iyls/schedule.png')} className="scheduleTime"/>
                </div>

                <div className="whatIsIgnite">
                    <img src={require('../images/assets/mobile/whatIYLS.png')} className="whatIsIgniteTitle"/><br/>
                    <img src={require('../images/assets/mobile/IYLSText.png')} className="whatIsIgniteText"/>
                </div>

                <div className="speakers-andy text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/mobile/andyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/mobile/andy.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-kenny text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/mobile/kennyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/mobile/kenny.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-marriane text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../images/assets/mobile/marianneText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../images/assets/mobile/marianne.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank">
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

                <div className="specialPerformance">
                    <div className="text-center">
                        <img src={require('../images/assets/iyls/specialPeformance.png')} className="specialTitle"/>
                    </div>
                    <img src={require('../images/assets/iyls/sekHao.png')} className="specialName"/>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default First;