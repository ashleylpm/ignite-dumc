import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog14 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 18
                    </div>
                    <div className="content-title font-gothamBlack">
                    Evangelistic Events
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
                                <td>Places</td>
                                <td>Mall </td>
                                <td>School</td>
                                <td>Refugee camp</td>
                                <td>Orphanage</td>
                                <td>5-star hotel</td>
                            </tr>
                            <tr>
                                <td>Audience</td>
                                <td>Politicians</td>
                                <td>Non-christian students</td>
                                <td>"Christian" students</td>
                                <td>Refugees</td>
                                <td>Orang Asli(native people)</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Food</td>
                                <td>Sports</td>
                                <td>Debate</td>
                                <td>E-sports</td>
                                <td>Rave</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Midnight</td>
                                <td>After school</td>
                                <td>During school</td>
                                <td>On a weekend </td>
                                <td>Christmas day</td>
                            </tr>
                            <tr>
                                <td>Theme </td>
                                <td>Party all night - Malaysian theme</td>
                                <td>Blue </td>
                                <td>Ignite. 2.0</td>
                                <td>Refugee farewell party</td>
                                <td>He defeated the G in Grave </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog14;