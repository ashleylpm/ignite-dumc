import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog27 extends Component {

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
                    Alpha Course
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
                                <td>Building character </td>
                                <td>Grow and learn together</td>
                                <td>Building up relationship between one another</td>
                                <td>Get to know God </td>
                                <td>Recognise our own character and purpose</td>
                            </tr>
                            <tr>
                                <td>Who?</td>
                                <td>Youth</td>
                                <td>The whole youth</td>
                                <td>Youths and leaders</td>
                                <td>Anyone</td>
                                <td>Anyone</td>
                            </tr>
                            <tr>
                                <td>What?</td>
                                <td>Church camp</td>
                                <td>Movies, eating together, sharing, discussion</td>
                                <td>sermon, prayers, worship, music lesson</td>
                                <td>Hangouts , reflection on lives and scripture , activity and  prayers</td>
                                <td>Worship, bible study, discussion, ice breaker, prayer</td>
                            </tr>
                            <tr>
                                <td>When?</td>
                                <td>Saturday to Sunday</td>
                                <td>Saturday nights</td>
                                <td>Friday nights</td>
                                <td>Saturday afternoon</td>
                                <td>Thursday nights</td>
                            </tr>
                            <tr>
                                <td>Where?</td>
                                <td>Church</td>
                                <td>Church compound</td>
                                <td>Online</td>
                                <td>Depends </td>
                                <td>Online</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog27;