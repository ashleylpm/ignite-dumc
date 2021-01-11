import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog55 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 39
                    </div>
                    <div className="content-title font-gothamBlack">
                    Free Worship for CF Committee
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
                                <td>Zoom</td>
                                <td>Chapel</td>
                                <td>Someone’s house</td>
                                <td>School hall</td>
                                <td>School’s corridor</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>Afternoon</td>
                                <td>Right before CF</td>
                                <td>Before bedtime</td>
                                <td>evening</td>
                                <td>Weekends</td>
                            </tr>
                            <tr>
                                <td>Goal</td>
                                <td>To strengthen relationship between committee members and also with God</td>
                                <td>To encourage worship</td>
                                <td>To encourage prayer</td>
                                <td>To encourage non-believers</td>
                                <td>To intercede students/teacher</td>
                            </tr>
                            <tr>
                                <td>Frequency</td>
                                <td>Once a week</td>
                                <td>Once every two weeks</td>
                                <td>Once a month</td>
                                <td>Twice a week</td>
                                <td>Everyday</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>30 minutes</td>
                                <td>10 minutes </td>
                                <td>1 hour</td>
                                <td>20 minutes</td>
                                <td>2 hours </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog55;