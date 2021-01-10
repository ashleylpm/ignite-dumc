import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog1 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 1
                    </div>
                    <div className="content-title font-gothamBlack">
                        Winter Solstice Festival
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
                                <td>Cell group leader’s house</td>
                                <td>Shopping mall</td>
                                <td>Hybrid (in respective homes)</td>
                                <td>genting</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>After sunday service</td>
                                <td>Friday night</td>
                                <td>Whole day on 21st dec</td>
                                <td>Weekend night</td>
                                <td>2 days 1 night</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>一家大团圆 Reunion</td>
                                <td>从新开始 (a new beginning</td>
                                <td>Spread love/warmth</td>
                                <td>幸福团圆 Reunion</td>
                                <td>Chill and rest in the Lord 从新得力</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>会友及家人 Church members</td>
                                <td>Cg member and new friends (non-believers)</td>
                                <td>Shoppers (街头布道)</td>
                                <td>组员及家人 Cg member and new friends (non-believers)</td>
                                <td>Family retreat</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>煮汤圆比赛 glutinous rice balls cooking competition</td>
                                <td>Board games night</td>
                                <td>glutinous rice balls aating competiton</td>
                                <td>Sharing recipe For glutinous rice balls</td>
                                <td>Amazing race</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog1;