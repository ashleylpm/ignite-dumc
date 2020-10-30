import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Container from "./components/container";
import ScrollToTop from "./scrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Container />
        </Router>
    );
}


render(<App />, document.getElementById("root"));