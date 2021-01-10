import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog10 extends Component {

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
                    Arrows Learning Centre
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
                                <td>worship rally</td>
                                <td>Full night</td>
                                <td>Overnight camp</td>
                                <td>Hunt for tissues </td>
                                <td>Mini food bank for breaks</td>
                                <td>spontaneous!</td>
                            </tr>
                            <tr>
                                <td>24-hour mystery programme/Games</td>
                                <td>Solving puzzle pieces</td>
                                <td>riddles</td>
                                <td>Treasure hunt that will lead people to a church and lock them inside then we preach &lt;3</td>
                                <td>Game night!</td>
                                <td>Challenges </td>
                            </tr>
                            <tr>
                                <td>Large-scale party</td>
                                <td>Food trucks</td>
                                <td>activities</td>
                                <td>Buffet</td>
                                <td>Praise &amp; worship</td>
                                <td>workshops</td>
                            </tr>
                            <tr>
                                <td>Surprise visits (by students)</td>
                                <td>Teachers (giving gifts/sharing testimonies)</td>
                                <td>Ex teachers (Bringing them tissues when we visit as we cry when we visit them)</td>
                                <td>School staff (spreading the gospel to non believers)</td>
                                <td>Aop students (We tell them how being in secondary is hard and they need Jesus to survive in there)
</td>
                                <td>Friends</td>
                            </tr>
                            <tr>
                                <td>Community services</td>
                                <td>DIY gift makings</td>
                                <td>Sending food love</td>
                                <td>Old folks home visits</td>
                                <td>Refugee camps</td>
                                <td>streets/malls</td>
                            </tr>
                            <tr>
                                <td>Student’s own school youtube channel (vlogging!!)</td>
                                <td>Youth church</td>
                                <td>Classes</td>
                                <td>programmes</td>
                                <td>parties</td>
                                <td>Casual daily ones (Random)</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog10;