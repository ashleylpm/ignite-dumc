import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog9 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 10
                    </div>
                    <div className="content-title font-gothamBlack">
                    Connect With People 
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
                                <td>Who should do it</td>
                                <td>Leaders</td>
                                <td>Members/volunteers</td>
                                <td>ushers</td>
                                <td>everyone</td>
                                <td>Friend of friend</td>
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>Icebreakers</td>
                                <td>Group discussion</td>
                                <td>Visitor’s lounge time</td>
                                <td>Kahoot quiz/activities</td>
                                <td>Include newcomers in a WhatsApp group</td>
                            </tr>
                            <tr>
                                <td>Frequency</td>
                                <td>10 minutes each session</td>
                                <td>Half hour</td>
                                <td>Special events</td>
                                <td>Throughout the whole week</td>
                                <td>Throughout the program</td>
                            </tr>
                            <tr>
                                <td>How to teach</td>
                                <td>Sermon/Message</td>
                                <td>Group discussion</td>
                                <td>mentor/mentee</td>
                                <td>Accountability group</td>
                                <td>Ongoing training</td>
                            </tr>
                            <tr>
                                <td>Announcement</td>
                                <td>Informing programs</td>
                                <td>QOTD</td>
                                <td>A slot to connect</td>
                                <td>Upcoming events</td>
                                <td>identifying newcomers</td>
                            </tr>
                            <tr>
                                <td>Overcoming obstacles (why people are not connecting)</td>
                                <td>Reward system</td>
                                <td>threat/punishment</td>
                                <td>1-to-1 settings choice</td>
                                <td>Ongoing encouragement/reminders</td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog9;