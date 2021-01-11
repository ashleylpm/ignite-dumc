import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog37 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 28
                    </div>
                    <div className="content-title font-gothamBlack">
                    To have more hangout sessions
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                                <th>Option 4</th>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Online</td>
                                <td>Church field (Plan B)</td>
                                <td>Church hall</td>
                                <td>Kopitiam</td>
                                <td>Shane’s house</td>
                            </tr>
                            <tr>
                                <td>Timing / Duration</td>
                                <td>10 mins max</td>
                                <td>5 mins</td>
                                <td>24 hours (sleepover)</td>
                                <td>1 hour</td>
                                <td>5 hours</td>
                            </tr>
                            <tr>
                                <td>How often</td>
                                <td>Twice a year</td>
                                <td>Once a week</td>
                                <td>Once a month</td>
                                <td>Once every two weeks</td>
                                <td>Everyday</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Pillow fight</td>
                                <td>UFC</td>
                                <td>Devotion time + decorate the church</td>
                                <td>Drink coffee</td>
                                <td>Help Shane do house work</td>
                            </tr>
                            <tr>
                                <td>How many people</td>
                                <td>20</td>
                                <td>100</td>
                                <td>Unlimited</td>
                                <td>Full capacity</td>
                                <td>International</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog37;