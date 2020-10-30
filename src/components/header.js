import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './styles/home.css';

function Header() {
    return (
        <div className="tellMeMoreBtn">
            <Link to="/iyls-info" className="container">
                <img src={require('./images/buttons/buttons-full/button4.png')}/>
            </Link>
        </div>
    );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export default Header;