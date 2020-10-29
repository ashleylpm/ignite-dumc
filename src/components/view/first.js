import React from "react";
import '../styles/igniteYouth.css';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormContainer } from '../view/form-container/index';
import { FormContainer2} from "./form-container/index2";
import styled from "styled-components";
import * as RB from "react-bootstrap";

function First() {
    return (
        <Wrapper>
            <div>
                <div className="igniteYouth text-center">
                    <img src={require('../images/assets/iyls/columnIYLS.png')}/>
                </div>

                <div className="scheduleContainer text-center">
                    <RB.Row className="scheduleRow">
                        <RB.Col className="leftSchedule">
                            <img src={require('../images/assets/iyls/schedule.png')}/>
                        </RB.Col>
                        <RB.Col className="rightSchedule">
                            <img src={require('../images/assets/iyls/scheduleTime.png')} className="scheduleTime"/> <br/>
                            <FormContainer /><br/>
                            <img src={require('../images/assets/iyls/physicalText.png')}  className="scheduleOnline"/><br/>
                            <FormContainer2 />
                        </RB.Col>
                    </RB.Row>
                </div>

                <div className="whatIsIgnite text-center">
                    <img src={require('../images/assets/iyls/whatIgnite.png')} className="whatIsIgniteTitle"/><br/>
                    <img src={require('../images/assets/iyls/igniteText.png')} className="whatIsIgniteText"/>
                </div>

                {/*<div className="speakers text-center">*/}
                {/*</div>*/}

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

                {/*<div className="specialPeformance text-center">*/}
                {/*</div>*/}

                {/*<div className="countdownIgnite text-center">*/}
                {/*</div>*/}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default First;