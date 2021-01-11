import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog43 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 31
                    </div>
                    <div className="content-title font-gothamBlack">
                    Worship Rally
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
                                <td>Team</td>
                                <td>Dylan (WL)</td>
                                <td>Backup singers</td>
                                <td>Pastor Terry (DUMC Band) </td>
                                <td>Acapella, Car’s horn</td>
                                <td>Combined CF/YF</td>
                            </tr>
                            <tr>
                                <td>Venue</td>
                                <td>Bukit Jalil Stadium</td>
                                <td>Beach/football field</td>
                                <td>DUMC</td>
                                <td>Sunway Conf Hall</td>
                                <td>KLCC</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>1am - 2pm</td>
                                <td>9am -12pm</td>
                                <td>Overnight </td>
                                <td>Sunrise - sunset</td>
                                <td>Zoom</td>
                            </tr>
                            <tr>
                                <td>Purpose/Theme</td>
                                <td>Fun</td>
                                <td>Honouring God</td>
                                <td>Giving Him the glory</td>
                                <td>To get to know other CF’s</td>
                                <td>To learn instrumental skills</td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>Pr Steven Furtick</td>
                                <td>Marianne </td>
                                <td>Pr Andy Yeoh</td>
                                <td>Pr Kenny Goh</td>
                                <td>Pr Terry</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog43;