import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog19 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 20
                    </div>
                    <div className="content-title font-gothamBlack">
                    Sharing The Gospel
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
                                <th>Option 5</th>
                            </tr>
                            <tr>
                                <td>Target Group </td>
                                <td>Orang Asli</td>
                                <td>The homeless</td>
                                <td>Non-believer friends</td>
                                <td>School non-Christian friends</td>
                                <td>Family members</td>
                                <td>Canteen Uncle Aunty</td>
                            </tr>
                            <tr>
                                <td>Location </td>
                                <td>Outstation </td>
                                <td>Streets </td>
                                <td>School </td>
                                <td>Kampung</td>
                                <td>Home</td>
                                <td>Canteen</td>
                            </tr>
                            <tr>
                                <td>Partner </td>
                                <td>Church </td>
                                <td>Friends </td>
                                <td>CF</td>
                                <td>SU</td>
                                <td>School CF Teacher</td>
                                <td>Youth Leader </td>
                            </tr>
                            <tr>
                                <td>Youth Leader</td>
                                <td>Mission</td>
                                <td>Soup Kitchen</td>
                                <td>Recess Revo</td>
                                <td>Writing short encouraging messages</td>
                                <td>Sports</td>
                                <td>Makan</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog19;