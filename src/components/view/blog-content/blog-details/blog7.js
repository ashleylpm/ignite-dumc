import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog7 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 9
                    </div>
                    <div className="content-title font-gothamBlack">
                    Worship Session/Concert
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                            </tr>
                            <tr>
                                <td>Purpose</td>
                                <td>To help ppl connect with God</td>
                                <td>Bonding</td>
                            </tr>
                            <tr>
                                <td>Location / Venue</td>
                                <td>Event concert from any worship band </td>
                                <td>Uni hall </td>
                            </tr>
                            <tr>
                                <td>Duration / Length</td>
                                <td>2 hours </td>
                                <td>30 mins every wednesday</td>
                            </tr>
                            <tr>
                                <td>Target Group</td>
                                <td>Christian friends</td>
                                <td>People in uni </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog7;