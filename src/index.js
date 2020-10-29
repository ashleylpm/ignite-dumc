import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./react/scrollToTop";
import './index.css';

import Container from "./components/container";

const App = () => (
    <Router>
        <ScrollToTop>
            <Container />
        </ScrollToTop>
    </Router>
);

render(<App />, document.getElementById("root"));