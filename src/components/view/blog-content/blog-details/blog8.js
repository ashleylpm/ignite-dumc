import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog5 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 9
                    </div>
                    <div className="content-title font-gothamBlack">
                    Make Covers of Christian Songs
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                            </tr>
                            <tr>
                                <td>Purpose</td>
                                <td>Act as a bridge to non-Christian friends who would listen to your music but not go to church</td>
                                <td>To remind Christians of the Gospel</td>
                            </tr>
                            <tr>
                                <td>Platform</td>
                                <td>Instagram</td>
                                <td>YouTube</td>
                            </tr>
                            <tr>
                                <td>Target Group</td>
                                <td>Non-Christians</td>
                                <td>Christian friends</td>
                            </tr>
                            <tr>
                                <td>Collaborators </td>
                                <td>Singer (name?)</td>
                                <td>Singer (name?)</td>
                            </tr>
                            <tr>
                                <td>Song choice</td>
                                <td>O Come, All You Unfaithful</td>
                                <td>Any Christmas songs?</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog5;