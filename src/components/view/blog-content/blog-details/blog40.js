import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog40 extends Component {

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
                    CG Outings
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
                                <td>CG Outings</td>
                                <td>Fast food</td>
                                <td>Picadilly</td>
                                <td>Steamboat</td>
                                <td>Mamak</td>
                                <td>K BBQ</td>
                            </tr>
                            <tr>
                                <td>Place</td>
                                <td>Avenue K</td>
                                <td>Cat Cafe</td>
                                <td>Gen Now</td>
                                <td>Mount KK</td>
                                <td>Someone’s house</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Sat afternoon</td>
                                <td>Fri nights</td>
                                <td>Sat nights</td>
                                <td>Fri afternoon</td>
                                <td>Sunday morning</td>
                            </tr>
                            <tr>
                                <td>Activites</td>
                                <td>Mini golf</td>
                                <td>Bowling</td>
                                <td>Ice skating</td>
                                <td>Sports</td>
                                <td>Indoor Skydiving</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog40;