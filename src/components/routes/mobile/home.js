import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="igniteLogo rallyLogo">
            <Link to="/" className="container">
                <img src={require('../../images/assets/common/igniteMyLogo.png')}/>
            </Link>
        </div>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default HomePage;