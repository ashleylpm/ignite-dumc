import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog32 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 25
                    </div>
                    <div className="content-title font-gothamBlack">
                    Post Exams Party
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
                                <td>Community hall</td>
                                <td>Classroom</td>
                                <td>Park</td>
                                <td>Beach</td>
                                <td>Theme park</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>After school</td>
                                <td>Friday night</td>
                                <td>Holiday/semester break</td>
                                <td>Afternoon</td>
                                <td>Morning to afternoon/ all-day</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>The Gospel</td>
                                <td>How to cope with stress</td>
                                <td>Hope</td>
                                <td>Angels</td>
                                <td>Relaxation</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>Teachers</td>
                                <td>Special needs</td>
                                <td>Residents/people in the park</td>
                                <td>Schoolmates</td>
                                <td>Kids</td>
                            </tr>
                            <tr>
                                <td>Activity </td>
                                <td>Karaoke</td>
                                <td>Talk</td>
                                <td>Giving words of encouragement</td>
                                <td>Volleyball</td>
                                <td>Challenge people to relax in the midst of a scary ride </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog32;