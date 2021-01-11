import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog45 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 32
                    </div>
                    <div className="content-title font-gothamBlack">
                    Easter
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
                                <td>Venue</td>
                                <td>Online</td>
                                <td>Church </td>
                                <td>Someone’s house / Gabe’s house</td>
                                <td>Public parks </td>
                                <td>School </td>
                            </tr>
                            <tr>
                                <td>Target audience </td>
                                <td>Friends who use social media </td>
                                <td>CF members </td>
                                <td>Classmates </td>
                                <td>Little kids </td>
                                <td>CG</td>
                            </tr>
                            <tr>
                                <td>Aim/goals</td>
                                <td>To evangelise / To preach the gospel to non-belivers </td>
                                <td>To fellowship / have fun </td>
                                <td>To deeper understand the meaning of easter </td>
                                <td>To bring back christians who do not regularly attend church </td>
                                <td>To invite people to CF / church </td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>A week before easter</td>
                                <td>Night of easter day </td>
                                <td>The day before easter </td>
                                <td>Good Friday </td>
                                <td>Easter morning </td>
                            </tr>
                            <tr>
                                <td>Method of delivery / Activity </td>
                                <td>Skit + discuss + mukbang </td>
                                <td>Game day </td>
                                <td>Easter rally </td>
                                <td>Treasure hunt </td>
                                <td>Invite a speaker</td>
                            </tr>
                            <tr>
                                <td>Topic </td>
                                <td>What is the purpose of easter? </td>
                                <td>Sin / death </td>
                                <td>Who is Jesus &amp; why is he related to easter?</td>
                                <td>Resurrection </td>
                                <td>Why do Christians celebrate easter? </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog45;