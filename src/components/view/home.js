import React from "react";
import YouTube from 'react-youtube';
import '../styles/home.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Header from "../header";
import RegisterHome from "../register-home";

function Home() {
    const triggerText = 'Register Now for Free';
    const onSubmit = (event) => {
        event.preventDefault(event);
    };
    const opts = {
        height: '490',
        width: '940',
        playerVars: {
            autoplay: 0,
        }
    };


    return (
        <Wrapper>
            <div>
                <div className="section-1 text-center">
                    <RegisterHome />
                </div>

                <div className="section-2 text-center">
                    <YouTube videoId="st3Y70Z6tio" opts={opts} className='youtube-video'/>
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

                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                    <div className="section-4 text-center">
                    </div>
                </a>

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