import React from "react";
import { Link } from "react-router-dom";

function LiveStream() {
    return (
        <div className="watchLive text-center">
            <Link to="/watch" className="container">
            <img src={require('../../images/assets/common/steamingLive.png')}/>
            </Link>
        </div>
    );
}

export default LiveStream;