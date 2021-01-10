import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog18 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 19
                    </div>
                    <div className="content-title font-gothamBlack">
                    Recess Revolution

                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                            </tr>
                            <tr>
                                <td>Location / venue </td>
                                <td>Cafeteria </td>
                                <td>Staff room</td>
                                <td>Garden</td>
                            </tr>
                            <tr>
                                <td>Duration/ Length</td>
                                <td>Once a week </td>
                                <td>Five days a week (aircon) </td>
                                <td>Until we graduated (cause that/’s what heroes do)</td>
                            </tr>
                            <tr>
                                <td>Timing (30 min) </td>
                                <td>Recess time </td>
                                <td>After school/ class/Recess time</td>
                                <td>Recess time</td>
                            </tr>
                            <tr>
                                <td>Target group</td>
                                <td>Students / Classmates</td>
                                <td>Teachers</td>
                                <td>Janitors</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Games </td>
                                <td>Get to know the teacher</td>
                                <td>Clean with them/ buy nasi lemak</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog18;