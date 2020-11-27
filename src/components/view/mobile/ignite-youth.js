import React from "react";
import HomePage from "../../routes/desktop/home";
import { FormContainer2 } from "../form/form-container/index2";
import * as RB from "react-bootstrap";

function First() {

    return (
        <div>
            <div id="contentIYLS-desktop">
                <div className="igniteYouth">
                    <HomePage />
                    <RB.Row className="igniteTitle text-center">
                        <img src={require('../../images/assets/common/igniteSummit.png')}/>
                    </RB.Row>
                </div>

                <div className="scheduleContainer text-center">
                    <RB.Row className="scheduleRow">
                        <RB.Col className="leftSchedule">
                            <img src={require('../../images/assets/youth/schedule.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSchedule">
                            <img src={require('../../images/assets/youth/scheduleTime2.png')}  className="scheduleTime"/><br/>
                            <img src={require('../../images/assets/youth/physicalText.png')}  className="scheduleOnline"/><br/>
                            <FormContainer2 /><br/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="whatIsIgnite text-center">
                    <img src={require('../../images/assets/youth/whatIgnite.png')} className="whatIsIgniteTitle"/><br/>
                    <img src={require('../../images/assets/youth/igniteText.png')} className="whatIsIgniteText"/>
                </div>

                <div className="speakers-andy text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/andyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/andyImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-kenny text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/kennyText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/kennyImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-marriane text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/marrianeText.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/marrianeImage.png')}/>
                        </RB.Col>
                    </RB.Row>
                </div>


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

                <div className="specialPerformance">
                    <div className="text-center">
                        <img src={require('../../images/assets/youth/specialPerformance.png')} className="specialTitle"/>
                    </div>
                    <div className="absolute-title">
                        <img src={require('../../images/assets/youth/sekHao.png')} className="specialName"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default First;