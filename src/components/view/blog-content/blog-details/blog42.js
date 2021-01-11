import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog42 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 31
                    </div>
                    <div className="content-title font-gothamBlack">
                    Visitation to Old Folks Home
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
                                <td>Purpose</td>
                                <td>Making them feel less lonely</td>
                                <td>Evangelism</td>
                                <td>Make them feel happy/happier</td>
                                <td>Fundraising/Awareness</td>
                                <td>Lending an ear </td>
                            </tr>
                            <tr>
                                <td>Transport</td>
                                <td>Car</td>
                                <td>Van</td>
                                <td>Lorry</td>
                                <td>Bus</td>
                                <td>Train</td>
                            </tr>
                            <tr>
                                <td>Donation/Items</td>
                                <td>Money (Fundraise)</td>
                                <td>Dry Food &amp; Fruits</td>
                                <td>KFC</td>
                                <td>Home supplies</td>
                                <td>Supplements</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Choir</td>
                                <td>Worship</td>
                                <td>Non-physical games</td>
                                <td>Drama/skit/Story-telling</td>
                                <td>Movie</td>
                            </tr>
                            <tr>
                                <td>Volunteers</td>
                                <td>Marianne</td>
                                <td>Pastor</td>
                                <td>Counsellor</td>
                                <td>Non-Christians</td>
                                <td>Family </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog42;