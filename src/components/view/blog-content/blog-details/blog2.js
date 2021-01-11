import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog2 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 2
                    </div>
                    <div className="content-title font-gothamBlack">
                        Watchnight
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes</th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                                <th>Option 4</th>
                            </tr>
                            <tr>
                                <td>Location/venue</td>
                                <td>church</td>
                                <td>Cell group member’s house</td>
                                <td>cruise</td>
                                <td>Concert stadium</td>
                                <td>school</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>31st dec</td>
                                <td>31st dec</td>
                                <td>31st dec</td>
                                <td>31st dec</td>
                                <td>31st dec</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Count your blessings</td>
                                <td>thanksgiving</td>
                                <td>Sailing into new year</td>
                                <td>Ignite conference</td>
                                <td>美好的夜晚 A beautiful night</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>Church member</td>
                                <td>Cell group member (invite friends)</td>
                                <td>Family members</td>
                                <td>Christians of all ages</td>
                                <td>School students</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Sharing session</td>
                                <td>Appreciation session</td>
                                <td>Watch fire woks</td>
                                <td>worship</td>
                                <td>Treasure hunt</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog2;