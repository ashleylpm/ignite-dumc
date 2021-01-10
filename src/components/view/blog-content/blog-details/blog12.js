import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog12 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 13
                    </div>
                    <div className="content-title font-gothamBlack">
                    Cempaka International
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
                                <td>Resting Session</td>
                                <td>Fiesta Time zzzzzzzzzz</td>
                                <td>Massaging while sharing the gospel (invite masters)</td>
                                <td>Quiet Time w/ God</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>MUNCHING time</td>
                                <td>A.S.M.R~~~</td>
                                <td>Fried Chicken Buffet</td>
                                <td>Cooking competitions</td>
                                <td>Eating with HUGE chopsticks session</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Games</td>
                                <td>Nintendo Switch Battles</td>
                                <td>Life Board Games</td>
                                <td>Protect your water balloons </td>
                                <td>AMONG US CHAMPIONSHIP (LIMITED)</td>
                                <td>PUBG TOURNAMENTS (get to win toy guns, Pubg helmets… ARMOR!!)</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog12;