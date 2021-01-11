import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog35 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 27
                    </div>
                    <div className="content-title font-gothamBlack">
                    Easter Event
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                            </tr>
                            <tr>
                                <td>Who is it for?</td>
                                <td>Non-christian friends</td>
                                <td>Christian friends </td>
                                <td>Church members</td>
                            </tr>
                            <tr>
                                <td>Activities </td>
                                <td>Easter crafts, finding easter eggs, eating, skit  </td>
                                <td>2 hours sermon/bible sermon, a ball, sports (badminton), esports, eating</td>
                                <td>Movie, snacks</td>
                            </tr>
                            <tr>
                                <td>Place </td>
                                <td>Church, community hall, school </td>
                                <td>Church, park</td>
                                <td>Zoom, Netflix party </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog35;