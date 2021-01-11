import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog52 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 37
                    </div>
                    <div className="content-title font-gothamBlack">
                    New Year Meet Up
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>Pot Luck </td>
                                <td>Encouragement </td>
                            </tr>
                            <tr>
                                <td>Timing </td>
                                <td>Dinner </td>
                                <td>After lunch</td>
                            </tr>
                            <tr>
                                <td>Venue</td>
                                <td>Someone’s house</td>
                                <td>twitch</td>
                            </tr>
                            <tr>
                                <td>Target Audience</td>
                                <td>Friends</td>
                                <td>Everyone </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog52;