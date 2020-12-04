import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../../view/mobile/home";
import Youth from "../../view/mobile/ignite-youth";
import Rally from "../../view/mobile/rally";

function Container({ location }) {
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/ignite-youth" component={Youth} />
                        <Route path="/ignite-rally" component={Rally} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Container);