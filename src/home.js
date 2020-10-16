import React from 'react';
import './home.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import iYLSLogo from './images/ignite-logo/iYLS-logo.png';

import { Container } from './Container/index';
import {Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";

const index = () => {
    // const triggerText = 'Register Now for Free';
    // const onSubmit = (event) => {
    //     event.preventDefault(event);
    //     console.log(event.target.name.value);
    //     console.log(event.target.email.value);
    // };

    return (
        <div>
            <div className="section-1 text-center">
                <Figure className="text-align-left">
                    <FigureImage
                        width={600 + 'vh'}
                        height={600 + 'vh'}
                        className="iYLS-image"
                        src={iYLSLogo}
                    />
                </Figure>
                {/*<RB.Container>*/}
                {/*    <Container triggerText={triggerText} onSubmit={onSubmit} />*/}
                {/*</RB.Container>*/}
            </div>
            <div className="section-2 text-center">
            </div>
            <div className="section-3 text-center">
                <RB.Container fluid>
                    <RB.Row>
                        <RB.Col className="column-1">
                        </RB.Col>
                        <RB.Col className="column-2" style={{color: "black"}}>
                        </RB.Col>
                    </RB.Row>
                </RB.Container>
            </div>
            <div className="section-4 text-center">
            </div>
            <div className="section-5 text-center">
            </div>
        </div>
    )
}

export default index;
