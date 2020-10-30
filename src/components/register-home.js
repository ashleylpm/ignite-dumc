import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function RegisterHome() {
    return (
        <div className="registerHomeBtn text-center">
            <Link to="/iyls-info" className="container">
                <img src={require('./images/buttons/buttons-full/button1.png')}/>
            </Link>
        </div>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default RegisterHome;