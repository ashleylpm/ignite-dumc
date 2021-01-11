import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog60 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 42
                    </div>
                    <div className="content-title font-gothamBlack">
                    Acts of Kindness
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
                                <td>Location/Venue</td>
                                <td>School</td>
                                <td>Class</td>
                                <td>Garden</td>
                                <td>Canteen</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Writing notes of encouragement</td>
                                <td>Story-telling (through art: origami, sketching)</td>
                                <td>Bible Story Skit</td>
                                <td>Sharing Food (picnic)</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Recess Time</td>
                                <td>Before School Assembly</td>
                                <td>When School ends</td>
                                <td>Class Party</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog60;