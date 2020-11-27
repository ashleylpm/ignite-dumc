import React from "react";
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

export default HomePage;