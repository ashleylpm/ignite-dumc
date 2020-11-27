import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "../../routes/desktop/home";
import { FormContainer2 } from "../form/form-container/index2";
import * as RB from "react-bootstrap";

function igniteYouth() {

    return (
        <div>
            <div id="contentIYLS-desktop">
                <div className="igniteYouth">
                    <HomePage />
                    <RB.Row className="igniteTitle text-center">
                        <img src={require('../../images/assets/common/igniteSummit.png')} alt="ignite-summit"/>
                    </RB.Row>
                </div>

                <div className="scheduleContainer text-center">
                    <RB.Row className="scheduleRow">
                        <RB.Col className="leftSchedule">
                            <img src={require('../../images/assets/youth/schedule.png')} alt="schedule"/>
                        </RB.Col>
                        <RB.Col className="rightSchedule">
                            <img src={require('../../images/assets/youth/scheduleTime2.png')}  className="scheduleTime" alt="schedule-time"/><br/>
                            <img src={require('../../images/assets/youth/physicalText.png')}  className="scheduleOnline" alt="schedule-online"/><br/>
                            <FormContainer2 /><br/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="whatIsIgnite text-center">
                    <img src={require('../../images/assets/youth/whatIgnite.png')} alt="what-ignite" className="whatIsIgniteTitle"/><br/>
                    <img src={require('../../images/assets/youth/igniteText.png')} alt="ignite-text" className="whatIsIgniteText"/>
                </div>

                <div className="speakers-andy text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/andyText.png')} alt="andy-text"/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/andyImage.png')} alt="andy-image"/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-kenny text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/kennyText.png')} alt="kenny-text"/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/kennyImage.png')} alt="kenny-image"/>
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="speakers-marriane text-center">
                    <RB.Row className="topSpeaker">
                        <RB.Col className="leftSpeaker">
                            <img src={require('../../images/assets/youth/marrianeText.png')} alt="marriane-text"/>
                        </RB.Col>
                        <RB.Col className="rightSpeaker">
                            <img src={require('../../images/assets/youth/marrianeImage.png')} alt="marriane-image"/>
                        </RB.Col>
                    </RB.Row>
                </div>


                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                    <div className="section-4 text-center">
                        <RB.Row className="topTitle">
                            <RB.Col className="leftTitle">
                                <img src={require('../../images/assets/common/instagramPhone.png')} alt="instagram-phone"/>
                            </RB.Col>
                            <RB.Col className="rightTitle">
                                <img src={require('../../images/assets/common/followUs.png')} alt="follow-us"/>
                            </RB.Col>
                        </RB.Row>
                    </div>
                </a>

                <div className="specialPerformance">
                    <div className="text-center">
                        <img src={require('../../images/assets/youth/specialPerformance.png')} alt="special-performance" className="specialTitle"/>
                    </div>
                    <div className="absolute-title">
                        <img src={require('../../images/assets/youth/sekHao.png')} alt="sek-hao" className="specialName"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default igniteYouth;