import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog50 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 35
                    </div>
                    <div className="content-title font-gothamBlack">
                    Christmas Party
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
                                <td>Time</td>
                                <td>Midnight</td>
                                <td>Afternoon Saturday</td>
                                <td>Saturday night</td>
                                <td>After school friday</td>
                                <td>Wednesday night</td>
                            </tr>
                            <tr>
                                <td>Venue</td>
                                <td>North P.</td>
                                <td>Church</td>
                                <td>Different houses</td>
                                <td>House</td>
                                <td>School</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Ice Skating </td>
                                <td>Worship</td>
                                <td>Caroling</td>
                                <td>Pot Bless & Secret Santa</td>
                                <td>Bible Study</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>One way </td>
                                <td>Truth</td>
                                <td>Silent Night (not so)</td>
                                <td>Laughing all the way -Zach</td>
                                <td>Secured </td>
                            </tr>
                            <tr>
                                <td>Purpose</td>
                                <td>Children</td>
                                <td>Fellowship</td>
                                <td>Sharing the gospel</td>
                                <td>Orphanages/Children</td>
                                <td>School mates</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog50;