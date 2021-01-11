import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog48 extends Component {

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
                    Sports Hangout
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
                                <td>Futsal Court</td>
                                <td>Padang</td>
                                <td>Garden</td>
                                <td>School Court</td>
                                <td>Community Courts (Near the tamans)</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Bball</td>
                                <td>Ping Pong</td>
                                <td>Captain Ball</td>
                                <td>Frisbee</td>
                                <td>Nerf War</td>
                            </tr>
                            <tr>
                                <td>Who we wanna target</td>
                                <td>Classmates</td>
                                <td>Common Interest groups </td>
                                <td>Orang Asli</td>
                                <td>Orphans</td>
                                <td>Friends</td>
                            </tr>
                            <tr>
                                <td>Speaker</td>
                                <td>Lee Chong Wei</td>
                                <td>Former Pro Sports player</td>
                                <td>Hannah Yeoh</td>
                                <td>Jeremy Lin</td>
                                <td>Pr Terry</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Evening </td>
                                <td>Morning</td>
                                <td>Afternoon</td>
                                <td>Saturday Mornings</td>
                                <td>Sunday Evenings</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog48;