import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog33 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 26
                    </div>
                    <div className="content-title font-gothamBlack">
                    Prayer Retreat (Sarawak’s side of things)
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
                                <td>Bau prayer chapel </td>
                                <td>Bako National Park</td>
                                <td>Mount Murud </td>
                                <td>Borneo Highland</td>
                                <td>Mount singai </td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>Day trip (during Holidays)</td>
                                <td>Day trip</td>
                                <td>3 days 2 nights</td>
                                <td>3 days 2 nights</td>
                                <td>3 days two night</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Earth echoing Heaven (?) //Touching Heaven Changing Earth</td>
                                <td>Bonding session</td>
                                <td>Determined by them</td>
                                <td>Song of Ascents</td>
                                <td>Go tell it on the mountains</td>
                            </tr>
                            <tr>
                                <td>People of Focus</td>
                                <td>Youths </td>
                                <td>School friends</td>
                                <td>Church people</td>
                                <td>Church youths</td>
                                <td>School CF</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Hiking (30 mins) then Worship and Prayer </td>
                                <td>Picnic</td>
                                <td>Attend the Ba’kelalang prayer conference</td>
                                <td>Bible study, worship, reflection</td>
                                <td>Hit the summit then have a prayer session there</td>
                            </tr>
                            <tr>
                                <td>Goal - Purpose of the activity</td>
                                <td>To encounter Jesus and to empower the youths.</td>
                                <td>Heart-to-heart, to know their struggles and hope to spread God’s love to them</td>
                                <td>To be lit on fire for Sarawak </td>
                                <td>Revival in youths</td>
                                <td>Remind teens about endurance needed as a Christian</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog33;