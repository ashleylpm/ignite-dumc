import React from 'react';
import { Link } from "react-router-dom";

function NavigationBar () {
    return (
        <div className='nav-container'>
            <div className="ignite-Logo">
                <img src={require('../../images/assets/common/igniteMyLogo.png')}/>
            </div>

            <div className="navbar">
                <Link to="/">
                    <img src={require('../../images/assets/navbar/home.png')} className="navbar-home"/>
                </Link>

                <Link to="/ignite-youth">
                    <img src={require('../../images/assets/navbar/igniteyls.png')} className="navbar-igniteyls"/>
                </Link>

                <Link to="/ignite-rally">
                    <img src={require('../../images/assets/navbar/igniterally.png')} className="navbar-igniterally"/>
                </Link>

                <Link to="/blog">
                    <img src={require('../../images/assets/navbar/blog.png')} className="navbar-blog"/>
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;