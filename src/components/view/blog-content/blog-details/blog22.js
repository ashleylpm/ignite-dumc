import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog22 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 22
                    </div>
                    <div className="content-title font-gothamBlack">
                    Project: The Family Blessing
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
                                <td>When</td>
                                <td>Christmas</td>
                                <td>Every other week</td>
                                <td>Birthdays</td>
                                <td>Wedding Anniversary</td>
                                <td>Every Sunday</td>
                                <td>Bi-weekly</td>
                            </tr>
                            <tr>
                                <td>What</td>
                                <td>Extra house chores</td>
                                <td>Extra acts of service at home</td>
                                <td>Babysitting</td>
                                <td>Writing Cards</td>
                                <td>Treasure hunt (post it)</td>
                                <td>Asking for Prayer Requests/blessings</td>
                            </tr>
                            <tr>
                                <td>What</td>
                                <td>Organising family worship</td>
                                <td>Ask how I can improve</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog22;