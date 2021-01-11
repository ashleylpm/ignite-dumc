import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog56 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 40
                    </div>
                    <div className="content-title font-gothamBlack">
                    Appreciation Day
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
                                <th>Option 5</th>
                            </tr>
                            <tr>
                                <td>People</td>
                                <td>Workers</td>
                                <td>Church members</td>
                                <td>Teachers</td>
                                <td>Leaders</td>
                                <td>Parents</td>
                                <td>School Friends</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Everywhere</td>
                                <td>Church</td>
                                <td>Streets</td>
                                <td>Schools</td>
                                <td>Home</td>
                                <td>Radio shoutout</td>
                            </tr>
                            <tr>
                                <td>How?</td>
                                <td>Cook/Bake for them</td>
                                <td>Giving vouchers/ presents</td>
                                <td>Spending time with them, take them out</td>
                                <td>Praying for them</td>
                                <td>Write cards</td>
                                <td>Love offering </td>
                            </tr>
                            <tr>
                                <td>Time?</td>
                                <td>Once a month</td>
                                <td>Every weekend</td>
                                <td>Birthdays/Special days</td>
                                <td>When needed</td>
                                <td>Every Friday during CF</td>
                                <td>Bi-weekly</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog56;