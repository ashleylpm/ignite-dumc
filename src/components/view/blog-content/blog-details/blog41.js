import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog41 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 30
                    </div>
                    <div className="content-title font-gothamBlack">
                    Treasure Hunt
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
                                <td>Hangar (DUMC)</td>
                                <td>Mall</td>
                                <td>Park</td>
                                <td>Neighbourhood</td>
                                <td>School</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Airforce </td>
                                <td>Zombie</td>
                                <td>Tarzan </td>
                                <td>Lord of the rings</td>
                                <td>Jurassic Park</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>8-10pm</td>
                                <td>8-10am</td>
                                <td>3-4pm</td>
                                <td>1-3PM</td>
                                <td>9-11</td>
                            </tr>
                            <tr>
                                <td>Props</td>
                                <td>Clues (belongings)</td>
                                <td>Participants of other people</td>
                                <td>Bible verse as clues</td>
                                <td>treasures</td>
                                <td>Mystery solving</td>
                            </tr>
                            <tr>
                                <td>Target Audience</td>
                                <td>High-schoolers</td>
                                <td>kids</td>
                                <td>orphans</td>
                                <td>Orang asli</td>
                                <td>Retirees</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog41;