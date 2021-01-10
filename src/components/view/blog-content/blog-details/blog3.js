import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog3 extends Component {

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
                        Bible Study 
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
                                <td>Someone's dorm room</td>
                                <td>Book a classroom</td>
                                <td>Book the whole UM library</td>
                                <td>Auditorium somewhere</td>
                                <td>In the corridor</td>
                            </tr>
                            <tr>
                                <td>Purpose</td>
                                <td>Sharing the gospel </td>
                                <td>Improving understanding of God’s word</td>
                                <td>Bring people towards christ-likeness</td>
                                <td>Introducing God to unbelievers or new believers</td>
                                <td>Bring a revolution</td>
                            </tr>
                            <tr>
                                <td>Targeted group / audience</td>
                                <td>Campus students</td>
                                <td>High school students</td>
                                <td>Young working adults</td>
                                <td>Adults</td>
                                <td>families</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>1 week </td>
                                <td>2 hours</td>
                                <td>1 month</td>
                                <td>5 months</td>
                                <td>1 year</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>After classes</td>
                                <td>Early morning</td>
                                <td>Once a week</td>
                                <td>On someone’s birthday</td>
                                <td>Fortnightly</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>makannnn</td>
                                <td>Ice breaker</td>
                                <td>Supper again</td>
                                <td>Alpha videos</td>
                                <td>Discussion questions</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog3;