import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog36 extends Component {

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
                    Christmas Fundraising Project
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                                <th>Option 4</th>
                            </tr>
                            <tr>
                                <td>Activities</td>
                                <td>Skill class</td>
                                <td>Raising awareness of people with limitations and disorders</td>
                                <td>Giveaways/ Lucky Draw</td>
                                <td>Food Truck Festival</td>
                            </tr>
                            <tr>
                                <td>Organisations </td>
                                <td>SU *this event will be tied to non-profit organisations/NGO</td>
                                <td>Malaysian Care</td>
                                <td>Refuge for the Refugees</td>
                                <td>Teach for Malaysia</td>
                            </tr>
                            <tr>
                                <td>Place</td>
                                <td>Stadium </td>
                                <td>Community Hall</td>
                                <td>Park</td>
                                <td>School Hall</td>
                            </tr>
                            <tr>
                                <td>Duration </td>
                                <td>3-4 days </td>
                                <td>1 day</td>
                                <td>1 hour</td>
                                <td>Half a day </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog36;