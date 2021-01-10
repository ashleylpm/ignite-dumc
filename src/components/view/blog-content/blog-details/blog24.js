import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog24 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 22
                    </div>
                    <div className="content-title font-gothamBlack">
                        Evangelistic Events
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
                                <td>Program</td>
                                <td>Youth Alpha</td>
                                <td>Carolling</td>
                                <td>Prayer Meeting</td>
                                <td>Free dinner!</td>
                                <td>Play/skit/drama</td>
                            </tr>
                            <tr>
                                <td>Program</td>
                                <td>Sports event</td>
                                <td>Baking/cooking sesh</td>
                                <td>Jamming</td>
                                <td>Book Club</td>
                                <td>Chess Club</td>
                            </tr>
                            <tr>
                                <td>Program</td>
                                <td>Movie night</td>
                                <td>Rock Climbing</td>
                                <td>Environmental Education</td>
                                <td>Sharing Food and goodies</td>
                                <td>Practical gifts</td>
                            </tr>
                            <tr>
                                <td>Program</td>
                                <td>Make posters</td>
                                <td>Make tik tok videos</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Who</td>
                                <td>Relatives</td>
                                <td>Neighbours</td>
                                <td>Old school friends</td>
                                <td>Tuition/classes</td>
                                <td>Parent's friends</td>
                            </tr>
                            <tr>
                                <td>Who</td>
                                <td>Random people</td>
                                <td>Security guards</td>
                                <td>Close Friends</td>
                                <td>Regular Strangers</td>
                                <td>Cleaners/janitors</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog24;