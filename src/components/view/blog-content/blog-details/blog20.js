import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog20 extends Component {

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
                    Bible Study

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
                                <td>Location </td>
                                <td>School</td>
                                <td>Phone</td>
                                <td>Home</td>
                                <td>Park</td>
                                <td>Penang hill</td>
                            </tr>
                            <tr>
                                <td>Target group </td>
                                <td>Christian </td>
                                <td>Family </td>
                                <td>Youth</td>
                                <td>Non-Christian friends</td>
                                <td>Enemies</td>
                            </tr>
                            <tr>
                                <td>Type of bible studies </td>
                                <td>Videos </td>
                                <td>Mobile Application</td>
                                <td>Books</td>
                                <td>Sermon Podcasts</td>
                                <td>Awareness of creation </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog20;