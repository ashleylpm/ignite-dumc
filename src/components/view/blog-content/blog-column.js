import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "./read-more";

class BlogColumn extends Component {

    render() {
        return (
            <RB.Col className="content-column">
                <div className="blog-image text-center">
                    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                    className="sample-img"/>
                </div>
                <div className="content-title font-gothamBlack">
                    THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                </div>
                <div className="content-nameDate font-gothamLight">
                    JOHN APPLESEED<br/>
                    22nd Dec 2020
                </div>
                <div className="blog-text font-gothamLight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                    in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                    viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                    pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                    eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                    vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                    tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                    eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                    nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                </div>
                <ReadMore />
            </RB.Col>
); }

}

export default BlogColumn;