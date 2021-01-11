import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog51 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 36
                    </div>
                    <div className="content-title font-gothamBlack">
                    New Year’s Celebration Church
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
                                <td>Who we target</td>
                                <td>100 Church youths</td>
                                <td>Outside friends</td>
                                <td>Elderlies + Orphans</td>
                                <td>Families</td>
                                <td>Church volunteers/ Neighbours</td>
                            </tr>
                            <tr>
                                <td>Location / Venue</td>
                                <td>Church </td>
                                <td>Restaurant</td>
                                <td>Elderlies + Orphans (Their place)</td>
                                <td>Hotel</td>
                                <td>Book a Hall from another place</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>5.00 - 8.00pm</td>
                                <td>9.00 - 12.00PM</td>
                                <td>12.00 - 5.00pm</td>
                                <td>9.00am - 9.00pm </td>
                                <td>5.00pm - 9.00pm</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Worship</td>
                                <td>Games (Team quiz game)</td>
                                <td>Invite Musical Band </td>
                                <td>Invite a speaker</td>
                                <td>Magic Show! </td>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>Caterer</td>
                                <td>Chinese Dai Chow</td>
                                <td>Indian food</td>
                                <td>Potluck</td>
                                <td>Claypot Rice</td>
                            </tr>
                            <tr>
                                <td>Dress code</td>
                                <td>Dress appropriately </td>
                                <td>White + Red</td>
                                <td>Formal</td>
                                <td>Casual</td>
                                <td>Pyjamas</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog51;