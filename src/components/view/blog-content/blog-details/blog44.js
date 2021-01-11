import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog44 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 32
                    </div>
                    <div className="content-title font-gothamBlack">
                    Workshops
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
                                <td>Venue </td>
                                <td>Church </td>
                                <td>School </td>
                                <td>Someone’s house / home</td>
                                <td>At a cafe </td>
                                <td>Online!</td>
                            </tr>
                            <tr>
                                <td>Time </td>
                                <td>During the afternoon on weekends </td>
                                <td>Before/after CF </td>
                                <td>Friday/weekday nights </td>
                                <td>Sunday afternoon</td>
                                <td>School holidays </td>
                            </tr>
                            <tr>
                                <td>Topic </td>
                                <td>The purpose of worship </td>
                                <td>Leadership </td>
                                <td>Peer pressure </td>
                                <td>Time management </td>
                                <td>Prayer </td>
                            </tr>
                            <tr>
                                <td>Method of delivery</td>
                                <td>Invite a speaker </td>
                                <td>Watching some videos </td>
                                <td>Do a study </td>
                                <td>Do a bunch of small activities that involve multitasking </td>
                                <td>Discussions in groups </td>
                            </tr>
                            <tr>
                                <td>Target audience </td>
                                <td>People who want to serve in worship team (church & school CF) </td>
                                <td>Teenagers </td>
                                <td>Friends in the park </td>
                                <td>Close friends </td>
                                <td>Classmates </td>
                            </tr>
                            <tr>
                                <td>Aim/goal</td>
                                <td>To understand what is the privilege of serving God </td>
                                <td>To encourage christians to be leaders in their own communities </td>
                                <td>To equip people in skills that are helpful for leadership </td>
                                <td>Make new friends </td>
                                <td>To show others that you care for them </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog44;