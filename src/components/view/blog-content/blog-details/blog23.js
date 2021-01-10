import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog23 extends Component {

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
                        Birthdays
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
                                <td>Acts of service for others on this special occasion </td>
                                <td>Handmade cards</td>
                                <td>No gadget birthday</td>
                                <td>Plan a trip</td>
                                <td>Virtual visit to the zoo</td>
                                <td>Wake up early to clean the house and make breakfast</td>
                            </tr>
                            <tr>
                                <td>Acts of service for others on this special occasion </td>
                                <td>Surprise party</td>
                                <td>Sharing our faith story</td>
                                <td>Wish them a happy birthday</td>
                                <td>Buying a present and a cake</td>
                                <td>Write a song</td>
                            </tr>
                            <tr>
                                <td>Acts of service for others on this special occasion </td>
                                <td>Making a video, photo album</td>
                                <td>Lip sync video</td>
                                <td>Secret compilation of memories</td>
                                <td>Compilation of messages from their friends</td>
                                <td>Appreciating them with words</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog23;