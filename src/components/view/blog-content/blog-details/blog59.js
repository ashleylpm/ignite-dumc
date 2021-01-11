import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog59 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 41
                    </div>
                    <div className="content-title font-gothamBlack">
                    Prayer Altar/Life
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
                                <td>Time, date</td>
                                <td>Sunday 6am</td>
                                <td>Friday night </td>
                                <td>Saturday 1am</td>
                            </tr>
                            <tr>
                                <td>venue</td>
                                <td>discord</td>
                                <td>church</td>
                                <td>zoom</td>
                            </tr>
                            <tr>
                                <td>community</td>
                                <td>local</td>
                                <td>+non-believers</td>
                                <td>international believers</td>
                            </tr>
                            <tr>
                                <td>material</td>
                                <td>bible</td>
                                <td>Notebook + Alpha video  </td>
                                <td>Breakout rooms + agenda</td>
                            </tr>
                            <tr>
                                <td>elements</td>
                                <td>+worship</td>
                                <td>food </td>
                                <td>communion (only for believers)</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog59;