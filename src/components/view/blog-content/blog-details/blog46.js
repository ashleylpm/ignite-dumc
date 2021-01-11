import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog46 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 33
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
                                <td>Location</td>
                                <td>PD (Campsite)</td>
                                <td>Beach</td>
                                <td>Forrest</td>
                                <td>Overseas</td>
                                <td>Cruise</td>
                            </tr>
                            <tr>
                                <td>Duration/ Length</td>
                                <td>4d3n</td>
                                <td>7D6N</td>
                                <td>2 weeks</td>
                                <td>1 month</td>
                                <td>6 months</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Light</td>
                                <td>Freedom Reigns</td>
                                <td>Call of Jesus</td>
                                <td>Revival is Everywhere</td>
                                <td>Jesus Feeds The 5000</td>
                            </tr>
                            <tr>
                                <td>Target group</td>
                                <td>School Students</td>
                                <td>Senior Citizens</td>
                                <td>Children</td>
                                <td>Parents</td>
                                <td>Secondary School Boys</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Games</td>
                                <td>Buffet</td>
                                <td>Campfire</td>
                                <td>Sports</td>
                                <td>Surviving</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog46;