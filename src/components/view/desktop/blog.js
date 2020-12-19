import React, { Component } from "react";
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowMoreText from 'react-show-more-text';


class Blog extends Component {

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <div>
                <div className="blog-header text-center">
                    <div className="header-content">
                        <div>
                            <img src={require('../../images/assets/blog/summitUpTitle.png')} alt="blog-title"
                                 className="blog-title"/>
                        </div>
                        <div>
                            <img src={require('../../images/assets/blog/summitUpText.png')} alt="blog-text"
                                 className="header-text"/>
                        </div>
                        <img src={require('../../images/assets/blog/shareButton.png')} alt="blog-button"
                             className="blog-button"/>
                    </div>
                </div>

                <div className="blog-content">
                    <RB.Row className="blog-row">
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                    </RB.Row>
                    <RB.Row>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                        <RB.Col>
                            <div className="blog-image text-center">
                                <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"
                                     className="sample-img"/>
                            </div>
                            <div className="content-title">
                                THIS IS THE TITLE THAT COULD GO UP TO 2 LINES
                            </div>
                            <div className="content-nameDate">
                                JOHN APPLESEED<br/>
                                22nd Dec 2020
                            </div>
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more='Show more'
                                less='Show less'
                                className='content-text blog-text'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit consequat urna,
                                in congue purus eleifend in. Integer vehicula, velit non faucibus egestas, massa nunc
                                viverra risus, et efficitur turpis metus vitae felis. Sed et aliquam odio, sit amet
                                pharetra odio. Proin lacinia mauris ac nulla dictum iaculis. Integer odio est, pharetra
                                eget est eget, imperdiet sodales leo. Sed sit amet nisi non nulla suscipit hendrerit a
                                vel dolor. Phasellus blandit non libero eget viverra. Nam posuere, odio in rhoncus
                                tincidunt, ex leo blandit est, mattis viverra tortor sapien vitae erat. Donec sit amet
                                eleifend est. Integer vitae posuere nulla. Curabitur turpis neque, malesuada non metus
                                nec, porta tempor nibh. Proin nisl ante, commodo eget lorem et, egestas luctus erat.
                            </ShowMoreText>
                        </RB.Col>
                    </RB.Row>
                </div>
            </div>
        )
    }
}

export default Blog;