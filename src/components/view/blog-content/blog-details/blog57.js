import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog57 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 40
                    </div>
                    <div className="content-title font-gothamBlack">
                    For more participation in CF
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
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>Sports</td>
                                <td>Food</td>
                                <td>Music/ Jam sessions</td>
                                <td>Gifts and prizes</td>
                                <td>Carnivals</td>
                                <td>Board games</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Futsal Court</td>
                                <td>Classroom</td>
                                <td>School hall</td>
                                <td>Field</td>
                                <td>Church</td>
                                <td>Someone’s house</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Movies</td>
                                <td>Anime</td>
                                <td>Kpop!!! </td>
                                <td>Holiday events</td>
                                <td>Games (PS5, Xbox) / Gaming Tournament</td>
                                <td>Talent Show</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>School Holidays</td>
                                <td>Sultan’s bday</td>
                                <td>Festive holidays</td>
                                <td>Every Sunday</td>
                                <td>Bi-weekly</td>
                                <td>Once a month</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog57;