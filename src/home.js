import React from 'react';
import './home.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from './Container/index';

const index = () => {
    const triggerText = 'Register Now for Free';
    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    };

    return (
        <div>
            <div className="section-1 text-center">
                <RB.Container>
                    <Container triggerText={triggerText} onSubmit={onSubmit} />
                </RB.Container>
            </div>
            <div className="section-2 text-center">
                <RB.Container>
                </RB.Container>
            </div>
            <div className="section-3 text-center">
                <RB.Container>
                </RB.Container>
            </div>
            <div className="section-4 text-center">
                <RB.Container fluid>
                    <RB.Row>
                        <RB.Col className="column-1">
                            Test 1
                        </RB.Col>
                        <RB.Col className="column-2" style={{color: "black"}}>
                            Test 2
                        </RB.Col>
                    </RB.Row>
                </RB.Container>
            </div>
            <div className="section-5 text-center">
                <RB.Container>
                </RB.Container>
            </div>
        </div>
    )
}

export default index;
