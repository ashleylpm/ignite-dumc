import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog5 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 6
                    </div>
                    <div className="content-title font-gothamBlack">
                    CF/YF Activity
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
                                <td>Audience</td>
                                <td>Strangers</td>
                                <td>Relatives</td>
                                <td>Cousin/siblings</td>
                                <td>Youths no longer attending</td>
                                <td>Youth friends</td>
                            </tr>
                            <tr>
                                <td>Purpose</td>
                                <td>Introduce what church does</td>
                                <td>Share Gospel</td>
                                <td>To bring to church</td>
                                <td>Bring back to church</td>
                                <td>To know the bible</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Pay for meal when they are ordering & converse/talk on Discord</td>
                                <td>Yum cha</td>
                                <td>Play games /online games</td>
                                <td>Record/edit/act in video together</td>
                                <td>Church Camp</td>
                            </tr>
                            <tr>
                                <td>Venue</td>
                                <td>Kopitiam/ restaurants</td>
                                <td>Kopitiam</td>
                                <td>Badminton court</td>
                                <td>Home/park/church</td>
                                <td>Treasure Hunt, Praise &amp; Worship, Campfire, talk</td>
                            </tr>
                            <tr>
                                <td>How often</td>
                                <td>weekly/fortnightly</td>
                                <td>1-2 a year</td>
                                <td>Weekly</td>
                                <td>1 month project</td>
                                <td>4 days (once a year)</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog5;