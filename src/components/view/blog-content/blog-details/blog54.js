import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog54 extends Component {

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
                    Church Camp
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
                                <td>Hotel</td>
                                <td>Amazon</td>
                                <td>International
                                    <li>Different places in a week</li> 
                                </td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>3 days 2 nights</td>
                                <td>10 days
                                    <li>Activities in the middle of night</li>
                                </td>
                                <td>1 month</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>War against the worldviews </td>
                                <td>Against the Wild<br/>
                                    Into the Wild 
                                </td>
                                <td>Against COVID-19</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>Youths</td>
                                <td>Sportsmen<br/>
                                    Athletic people
                                </td>
                                <td>Homeless people from around the world</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Discussing current issues<br/>
                                    Team building activities 
                                </td>
                                <td>
                                    <li>Tag (ice and fire)</li>
                                    <li>Paintball</li>
                                    <li>Jungle trekking</li>
                                    <li>Bond fire (Praise and Worship)</li>
                                </td>
                                <td>Buy houses and give it to the homeless
                                    <li>Furnished</li>
                                    <li>Car</li>
                                    <li>Hang bible verses </li>
                                </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog54;