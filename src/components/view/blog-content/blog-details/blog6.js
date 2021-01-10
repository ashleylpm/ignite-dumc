import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog6 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 8
                    </div>
                    <div className="content-title font-gothamBlack">
                    Christmas Event
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
                                <td>Theme</td>
                                <td>Christmas story</td>
                                <td>The birth of Jesus</td>
                                <td>The meaning of gift.</td>
                                <td>Christlike towards others.</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Church</td>
                                <td>College</td>
                                <td>Home or college</td>
                                <td>Outskirts of the city</td>
                            </tr>
                            <tr>
                                <td>When</td>
                                <td>Christmas eve night</td>
                                <td>Christmas season. </td>
                                <td>After the Christmas event. </td>
                                <td>A month before Christmas</td>
                            </tr>
                            <tr>
                                <td>Target group</td>
                                <td>CF member’s friends.</td>
                                <td>Non believers. </td>
                                <td>anyone.</td>
                                <td>Those living in poverty.</td>
                            </tr>
                            <tr>
                                <td>What to do</td>
                                <td>Short film</td>
                                <td>Christmas play</td>
                                <td>Gift exchange</td>
                                <td>Charity work</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog6;