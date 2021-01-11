import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog38 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 28
                    </div>
                    <div className="content-title font-gothamBlack">
                    School - Wanna start prayer groups in hostel
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>hostel</td>
                                <td>classroom</td>
                                <td>canteen</td>
                                <td>library</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>2 hours</td>
                                <td>30 mins</td>
                                <td>1 hr</td>
                                <td>1 hr 30 mins</td>
                            </tr>
                            <tr>
                                <td>How often</td>
                                <td>Once a week</td>
                                <td>Twice a week</td>
                                <td>Three times a week</td>
                                <td>Everyday</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>dance</td>
                                <td>Sharing of experience</td>
                                <td>Worship in songs</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>How many people</td>
                                <td>Whoever wants to join (not limited</td>
                                <td>10</td>
                                <td>20</td>
                                <td>30</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog38;