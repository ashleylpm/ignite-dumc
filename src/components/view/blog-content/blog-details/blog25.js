import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog25 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 23
                    </div>
                    <div className="content-title font-gothamBlack">
                    Fellowship Night
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
                                <td>Why?</td>
                                <td>To practice showing kindness to strangers by starting with our own families</td>
                                <td>To practice showing kindness to others</td>
                                <td>To practice being vulnerable with others</td>
                                <td>To learn to ask for help when in need</td>
                                <td>To build connections and relationships</td>
                            </tr>
                            <tr>
                                <td>Who?</td>
                                <td>Our own family</td>
                                <td>Church members</td>
                                <td>Friends</td>
                                <td>Friends</td>
                                <td>Friends and strangers</td>
                            </tr>
                            <tr>
                                <td>What?</td>
                                <td>Worship songs, Bible study, prayer, sharing</td>
                                <td>Worship songs, Bible study, prayer, sharing, play games</td>
                                <td>Sharing our lives, games, worship songs, prayer</td>
                                <td>Sharing our lives, praying for each other’s needs</td>
                                <td>Sports, games, eat together</td>
                            </tr>
                            <tr>
                                <td>When?</td>
                                <td>Friday nights</td>
                                <td>Wednesday nights</td>
                                <td>Saturday nights</td>
                                <td>Once a week</td>
                                <td>Once a month</td>
                            </tr>
                            <tr>
                                <td>Where?</td>
                                <td>In our own homes</td>
                                <td>Online</td>
                                <td>Online</td>
                                <td>At a friend’s house</td>
                                <td>Sports centre, parks</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog25;