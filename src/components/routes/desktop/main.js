import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../../view/desktop/home";
import Youth from "../../view/desktop/ignite-youth";
import Rally from "../../view/desktop/rally";
import Blog from "../../view/desktop/blog";
import SubmitBlog from "../../view/blog-content/submit-blog"

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
                        <Route path="/watch" component={() => {
                            window.location.href = 'https://ignitemy.online.church/';
                            return null;
                        }} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/submit-blog" component={SubmitBlog} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Container);