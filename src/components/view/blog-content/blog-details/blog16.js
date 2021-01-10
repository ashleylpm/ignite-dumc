import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog16 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 18
                    </div>
                    <div className="content-title font-gothamBlack">
                    Break Cliques
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
                                <td>Place</td>
                                <td>School </td>
                                <td>Park</td>
                                <td>Church </td>
                                <td>5-star hotel</td>
                                <td>Sunway convention centre </td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Afterschool</td>
                                <td>7-9pm</td>
                                <td>Evenings </td>
                                <td>Weekends </td>
                                <td>Over a few weeks </td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Food (makan time)</td>
                                <td>Preach the book of Acts </td>
                                <td>Volunteering </td>
                                <td>Games</td>
                                <td>Socialising event w/ forceful splitting</td>
                            </tr>
                            <tr>
                                <td>Methods of deconstructing cliques</td>
                                <td>Assign different groups</td>
                                <td>Volunteer as a group </td>
                                <td>Get Pr Terry </td>
                                <td>Large group activities </td>
                                <td>Wrestling </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog16;