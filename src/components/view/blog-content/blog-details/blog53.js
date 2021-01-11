import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog53 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 38
                    </div>
                    <div className="content-title font-gothamBlack">
                    Christmas Celebration
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                            </tr>
                            <tr>
                                <td>Location/venue</td>
                                <td>Church</td>
                                <td>Home </td>
                                <td>Club</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>Early morning 10:00 AM</td>
                                <td>Night 6:00 PM</td>
                                <td>Night 11:00 PM - Dawn</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Red or green or GOLD</td>
                                <td>Purple</td>
                                <td>Not too bright, Black, Gold</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>ALL
                                    <li>Christians</li>
                                    <li>Non-Christians</li>
                                </td>
                                <td>ALL
                                    <li>Family and friends</li>
                                    <li>Neighbours</li>
                                </td>
                                <td>ALL
                                    <li>Rich dudes</li>
                                    <li>Bachelors</li>
                                </td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Live skit</td>
                                <td>
                                Secret Santa
                                    <li>Gift exchange</li>
                                    <li>PS5</li>
                                    <li>Car Mercdes</li>
                                    <li>Bible verses</li>
                                </td>
                                <td>
                                    Sermon<br/>
                                    Makan-makan<br/>
                                    <li>Holy Communion</li>
                                    <li>Bread and wine</li>
                                    Pool
                                </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog53;