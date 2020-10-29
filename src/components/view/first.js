import React from "react";
import '../styles/igniteYouth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormContainer } from '../view/form-container/index';
import { FormContainer2} from "./form-container/index2";
import styled from "styled-components";

function First() {
    return (
        <Wrapper>
            <div>
                <div className="igniteYouth text-center">
                    <FormContainer />
                    <FormContainer2 className="attendOnline"/>
                </div>

                <div className="whatIsIgnite text-center">
                </div>

                <div className="speakers text-center">
                </div>

                <a href="https://instagram.com/ignitemy______?igshid=jkcmbphuplgl" target="_blank" >
                    <div className="instagramIgnite text-center">
                    </div>
                </a>

                <div className="specialPeformance text-center">
                </div>

                <div className="countdownIgnite text-center">
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default First;