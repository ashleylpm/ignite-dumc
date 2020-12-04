import React from "react";
import { Link } from "react-router-dom";

function TellMeMoreBtn2() {
    return (
        <div className="tellMeMoreBtn text-center">
            <Link to="/ignite-rally" className="container">
                <img src={require('../../images/assets/home/tellMeMoreBtn.png')}/>
            </Link>
        </div>
    );
}

export default TellMeMoreBtn2;