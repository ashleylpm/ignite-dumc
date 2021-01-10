import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog26 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 23
                    </div>
                    <div className="content-title font-gothamBlack">
                    Mentoring/Discipleship
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
                                <td>Why?</td>
                                <td>To keep our faith in check (accountability)</td>
                                <td>To build a safe space to grow spiritually</td>
                                <td>To influence and let people around us know about Christ</td>
                                <td>To guide and help someone on a personal level (mental health)</td>
                                <td>To strengthen bonds and learn and grow together</td>
                            </tr>
                            <tr>
                                <td>Who?</td>
                                <td>Church leaders</td>
                                <td>School leaders</td>
                                <td>Church members and new friends</td>
                                <td>Youths</td>
                                <td>Church members, strangers and new friends</td>
                            </tr>
                            <tr>
                                <td>What?</td>
                                <td>Bible study, worship, watch online service together, sharing our lives</td>
                                <td>Sharing, eat together, encourage one another</td>
                                <td>Bible study, devotions, sharing, worship, altar calls</td>
                                <td>Sharing, watch movies together (spreading awareness)</td>
                                <td>Day trips!, games, day camp, interesting activities, adventuring</td>
                            </tr>
                            <tr>
                                <td>When?</td>
                                <td>Every Sunday</td>
                                <td>After school on Fridays</td>
                                <td>Every Saturday night (more convenient for youths)</td>
                                <td>Saturday nights</td>
                                <td>Once a month</td>
                            </tr>
                            <tr>
                                <td>Where?</td>
                                <td>Someone’s house</td>
                                <td>School canteen, or a cafe nearby</td>
                                <td>Church activity center </td>
                                <td>Online, someone’s house</td>
                                <td>sports center, church activity center</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog26;