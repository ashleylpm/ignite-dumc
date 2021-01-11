import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog47 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 24
                    </div>
                    <div className="content-title font-gothamBlack">
                    Prayer Session
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
                                <td>Online</td>
                                <td>Cafe</td>
                                <td>Sports Centre</td>
                                <td>School</td>
                                <td>Church</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Food</td>
                                <td>Games</td>
                                <td>Sports </td>
                                <td>Jam/Worship</td>
                                <td>Homework</td>
                            </tr>
                            <tr>
                                <td>Who we wanna target</td>
                                <td>Students with Exams</td>
                                <td>Teachers</td>
                                <td>Classmates</td>
                                <td>Friends (BORED)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Speaker</td>
                                <td>Teacher </td>
                                <td>CG leader</td>
                                <td>Pastor/ Youth Pastor</td>
                                <td>Ourselves</td>
                                <td>Ex Cf Members</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Night time</td>
                                <td>Morning </td>
                                <td>After school</td>
                                <td>Lunch Time</td>
                                <td>Every Friday</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog47;