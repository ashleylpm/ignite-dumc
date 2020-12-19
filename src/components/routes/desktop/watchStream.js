import React from "react";
import { Link } from "react-router-dom";

function LiveStream() {
    return (
        <div className="registerHomeBtn text-center">
            <Link to="/watch" className="container">
            <img src={require('../../images/assets/home/registerBtn.png')}/>
            </Link>
        </div>
    );
}

export default LiveStream;