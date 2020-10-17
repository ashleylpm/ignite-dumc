import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/container";

const App = () => (
    <Router>
        <div>
            <Container />
        </div>
    </Router>
);

render(<App />, document.getElementById("root"));