import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TellMeMoreBtn() {
    return (
        <div className="tellMeMoreBtn text-center">
            <Link to="/ignite-youth" className="container">
                <img src={require('../../images/assets/home/tellMeMoreBtn.png')}/>
            </Link>
        </div>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default TellMeMoreBtn;