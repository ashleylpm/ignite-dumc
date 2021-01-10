import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog4 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 3
                    </div>
                    <div className="content-title font-gothamBlack">
                        Youth Camp
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
                                <td>Venue</td>
                                <td>Grand Kampar hotel</td>
                                <td>PDMC</td>
                                <td>Peacehaven</td>
                                <td>MBS</td>
                                <td>Penang</td>
                            </tr>
                    
                            <tr>
                                <td>Purpose</td>
                                <td>Equipping the next generations</td>
                                <td>Encouraging each other to learn more about God</td>
                                <td>Get to know each other more to improve chemistry</td>
                                <td>Inviting friends to learn about Christ</td>
                                <td>Spreading the Gospel to international students who can in turn bring the Gospel back to their native countries</td>
                            </tr>
                            <tr>
                                <td>Targeted group / audience</td>
                                <td>Campus students</td>
                                <td>Youth / young adults</td>
                                <td>teens</td>
                                <td>Highschool students</td>
                                <td>International students</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>3 days</td>
                                <td>1 week</td>
                                <td>4 days</td>
                                <td>5 days</td>
                                <td>2 days</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>June holidays</td>
                                <td>Year end holiday</td>
                                <td>Mid year holiday</td>
                                <td>School holidays</td>
                                <td>Semester break</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog4;