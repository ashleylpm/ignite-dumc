import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog17 extends Component {

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
                    Easter Event

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
                                <td>Location/venue</td>
                                <td>Church building (nearby)</td>
                                <td>Orphanage/ Old folks home</td>
                                <td>Children's hospital</td>
                                <td>Somebody's house</td>
                                <td>A school</td>
                            </tr>
                            <tr>
                                <td>Timing </td>
                                <td>Saturday Night </td>
                                <td>Sunday afternoon</td>
                                <td>Friday night</td>
                                <td>Easter Sunday</td>
                                <td>Good Friday</td>
                            </tr>
                            <tr>
                                <td>Theme </td>
                                <td>Resurrection </td>
                                <td>Good news theme</td>
                                <td>Hope</td>
                                <td>Red and white</td>
                                <td>Yellow/ Sun </td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>Non-Christian youth</td>
                                <td>Old folks</td>
                                <td>Children</td>
                                <td>Friends</td>
                                <td>Teenagers</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Skits </td>
                                <td>Mini concert</td>
                                <td>Easter egg hunt </td>
                                <td>Sing songs/ Makan</td>
                                <td>Sports</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog17;