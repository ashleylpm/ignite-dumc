import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import './components/styles/desktop/home.css';
import './components/styles/mobile/home.css';
import './components/styles/desktop/youth.css';
import './components/styles/mobile/youth.css';
import './components/styles/desktop/rally.css';
import './components/styles/mobile/rally.css';
import './components/styles/desktop/blog.css';


import MainDesktop from "./components/routes/desktop/main";
import MainMobile from "./components/routes/mobile/main";
import ScrollToTop from "./scrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div id="content-desktop">
                <MainDesktop />
            </div>

            <div id="content-mobile">
                <MainMobile />
            </div>
        </Router>
    );
}


render(<App />, document.getElementById("root"));