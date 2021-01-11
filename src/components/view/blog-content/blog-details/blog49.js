import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog49 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 34
                    </div>
                    <div className="content-title font-gothamBlack">
                    Camp
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
                                <td>Theme</td>
                                <td>Christian</td>
                                <td>Scouts/Girl Guiddes</td>
                                <td>Leadership Camp</td>
                                <td>Retreat</td>
                                <td>Sports </td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Germany </td>
                                <td>ISS</td>
                                <td>Mount Everest/ Mount Kinabalu</td>
                                <td>School Padang </td>
                                <td>Bahamas</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Skydiving </td>
                                <td>Skating</td>
                                <td>Scuba Diving</td>
                                <td>Hiking </td>
                                <td>Prayer Session</td>
                            </tr>
                            <tr>
                                <td>Who we wanna targe</td>
                                <td>People who like baking</td>
                                <td>People who have nothing to do or are bored or are interested</td>
                                <td>People who like sports</td>
                                <td>Homeless</td>
                                <td>Fresh College men and women</td>
                            </tr>
                            <tr>
                                <td>Speaker</td>
                                <td>Pr Terry </td>
                                <td>Homeless person </td>
                                <td>Breakthrough comeback person inspired by my BIG G</td>
                                <td>BAKER. GARETH LXY</td>
                                <td>Celebrities</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Evening </td>
                                <td>Morning</td>
                                <td>Afternoon</td>
                                <td>School Holidays</td>
                                <td>Long weekend holiday</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog49;