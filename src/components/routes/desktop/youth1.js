import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RegisterBtn() {
    return (
        <div className="registerHomeBtn">
            <Link to="/ignite-youth">
                <img src={require('../../images/assets/home/registerBtn.png')}/>
            </Link>
        </div>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default RegisterBtn;