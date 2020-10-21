import React from "react";
import '../styles/home.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormContainer } from '../view/form-container/index';
import styled from "styled-components";
import Header from "../header";

function Home() {
    const triggerText = 'Register Now for Free';
    const onSubmit = (event) => {
        event.preventDefault(event);
    };


    return (
        <Wrapper>
            <div>
                <div className="section-1 text-center">
                    <div className="registerBtn">
                        <FormContainer triggerText={triggerText} onSubmit={onSubmit} />
                    </div>
                </div>

                <div className="section-2 text-center">
                </div>

                <div className="section-3 text-center">
                    <RB.Container fluid>
                        <RB.Row>
                            <RB.Col className="column-1">
                                <Header />
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

                <div className="section-6 text-center">
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Home;