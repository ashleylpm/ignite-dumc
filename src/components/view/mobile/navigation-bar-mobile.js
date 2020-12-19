import React from 'react';
import { Link } from "react-router-dom";

function NavigationBarMobile () {
    return (
        <div className='nav-container'>
            <div className="navbar">
                <img src={require('../../images/assets/common/igniteMyLogo.png')} className="ignite-logoMobile"/>
                <Link to="/">
                    <img src={require('../../images/assets/navbar/home.png')} className="navbar-homeMobile"/>
                </Link>

                <Link to="/ignite-youth">
                    <img src={require('../../images/assets/navbar/igniteyls.png')} className="navbar-igniteylsMobile"/>
                </Link>

                <Link to="/ignite-rally">
                    <img src={require('../../images/assets/navbar/igniterally.png')} className="navbar-igniterallyMobile"/>
                </Link>

                <Link to="/blog">
                    <img src={require('../../images/assets/navbar/blog.png')} className="navbar-blogMobile"/>
                </Link>
            </div>
        </div>
    );
}

export default NavigationBarMobile;