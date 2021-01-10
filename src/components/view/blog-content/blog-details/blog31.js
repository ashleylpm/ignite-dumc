import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog31 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 25
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
                            </tr>
                            <tr>
                                <td>Location/venue</td>
                                <td>KFC</td>
                                <td>Someone’s house</td>
                                <td>Library</td>
                                <td>Church</td>
                                <td>Shopping mall</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>Christmas Eve</td>
                                <td>Midnight</td>
                                <td>Afternoon</td>
                                <td>Morning</td>
                                <td>After Christmas</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Christmas</td>
                                <td>The perfect gift</td>
                                <td>The Bright Star</td>
                                <td>Garden of Eden</td>
                                <td>Death of Christ</td>
                            </tr>
                            <tr>
                                <td>People reaching out to</td>
                                <td>Homeless people</td>
                                <td>Neighbours</td>
                                <td>Schoolmates</td>
                                <td>Refugees</td>
                                <td>Anyone who wants to join</td>
                            </tr>
                            <tr>
                                <td>Activity </td>
                                <td>Free chicken</td>
                                <td>Skit</td>
                                <td>Bible study</td>
                                <td>Carolling </td>
                                <td>Give gifts</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog31;