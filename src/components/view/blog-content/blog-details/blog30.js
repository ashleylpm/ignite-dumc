import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog30 extends Component {

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
                    Conference/Rally
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
                                <td>location / venue</td>
                                <td>Methodist centre</td>
                                <td>Zoom</td>
                                <td>Google meet</td>
                                <td>church</td>
                                <td>orphanage homes</td>
                            </tr>
                            <tr>
                                <td>time / duration</td>
                                <td>2 hours</td>
                                <td>3 hours</td>
                                <td>4 hours</td>
                                <td>5 hours</td>
                                <td>6 hours</td>
                            </tr>
                            <tr>
                                <td>target group</td>
                                <td>youths</td>
                                <td>teenagers</td>
                                <td>Non-christians</td>
                                <td>adults?</td>
                                <td>orphans </td>
                            </tr>
                            <tr>
                                <td>program</td>
                                <td>invite speakers for sharing </td>
                                <td>testimony sharing </td>
                                <td>Bible sharing </td>
                                <td>video sharing</td>
                                <td>live stream - collaboration with other church </td>
                            </tr>
                            <tr>
                                <td>groupings</td>
                                <td>breakout room members generator </td>
                                <td>randomizer</td>
                                <td>with friends </td>
                                <td>same age group</td>
                                <td>geographically groupings </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog30;