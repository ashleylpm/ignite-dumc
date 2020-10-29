import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Wrapper>
            <div className="tellMeMoreBtn">
                <Link to="/iyls-info" className="container">
                    <img src={require('./images/buttons/buttons-full/button4.png')}/>
                </Link>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default Header;