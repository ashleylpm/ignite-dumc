import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog39 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 29
                    </div>
                    <div className="content-title font-gothamBlack">
                    Christmas Party
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
                                <th>Option 4</th>
                                <th>Option 4</th>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>Turkey</td>
                                <td>Chicken rice</td>
                                <td>Spaghetti</td>
                                <td>Snow cones</td>
                                <td>Gold steaks</td>
                                <td>Tang Yuan</td>
                                <td>Fake cakes</td>
                            </tr>
                            <tr>
                                <td>Place</td>
                                <td>Church</td>
                                <td>Cat cafe</td>
                                <td>Pool</td>
                                <td>Beach</td>
                                <td>Farm</td>
                                <td>Trampoline Park</td>
                                <td>Skating rink</td>
                            </tr>
                            <tr>
                                <td>Colour scheme</td>
                                <td>Red &amp; Green</td>
                                <td>Monochrome</td>
                                <td>Ombre</td>
                                <td>Yellow and pink</td>
                                <td>Black and red</td>
                                <td>Black and gold</td>
                                <td>Pure white</td>
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>Sing carols</td>
                                <td>Gift exchange</td>
                                <td>Escape room</td>
                                <td>Scavenger hunt</td>
                                <td>Murder mystery</td>
                                <td>Food fights</td>
                                <td>Snowball/Paintball fight</td>
                            </tr>
                            <tr>
                                <td>Items</td>
                                <td>Christmas tree</td>
                                <td>Snow machine</td>
                                <td>Fake snow spray</td>
                                <td>Balloons</td>
                                <td>Santa hats</td>
                                <td>Fat guy in Santa outfit</td>
                                <td>Banana suits</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog39;