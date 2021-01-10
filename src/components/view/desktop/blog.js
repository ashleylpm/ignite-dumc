import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogRow from "../blog-content/blog-row";
import NavigationBar from "./navigation-bar";

class Blog extends Component {
    render() {
        return (
            <div>
                <div className="blog-header text-center">
                    <NavigationBar />
                    <div className="header-content">
                        <div>
                            <img src={require('../../images/assets/blog/summitUpTitle.png')} alt="blog-title"
                                 className="blog-title"/>
                        </div>
                        <div>
                            <img src={require('../../images/assets/blog/summitUpText.png')} alt="blog-text"
                                 className="header-text"/>
                        </div>
                        {/*<img src={require('../../images/assets/blog/shareButton.png')} alt="blog-button"*/}
                        {/*     className="blog-button"/>*/}
                    </div>
                </div>

                <div className="blog-content">
                    <BlogRow />
                </div>
            </div>
        )
    }
}

export default Blog;