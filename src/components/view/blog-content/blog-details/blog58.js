import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog58 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                    Group 41
                    </div>
                    <div className="content-title font-gothamBlack">
                    Worship Session
                    </div>
                    <div className="blog-text font-gothamLight">
                        <table>
                            <tr>
                                <th>Part/Attributes </th>
                                <th>Original</th>
                                <th>Option 1</th>
                                <th>Option 2</th>
                                <th>Option 3</th>
                            </tr>
                            <tr>
                                <td>Time, date</td>
                                <td>Sunday 10am</td>
                                <td>friday, 8pm</td>
                                <td>Wednesday, 8pm</td>
                                <td>Saturday, 3pm</td>
                            </tr>
                            <tr>
                                <td>venue</td>
                                <td>church</td>
                                <td>online</td>
                                <td>cafe</td>
                                <td>house</td>
                            </tr>
                            <tr>
                                <td>community</td>
                                <td>Believers </td>
                                <td>non-believers</td>
                                <td>High school students only </td>
                                <td>Family &amp; friends/family friends</td>
                            </tr>
                            <tr>
                                <td>material</td>
                                <td>Song list + instruments + bible</td>
                                <td>Laptop + Song list + instruments + bible + mic</td>
                                <td>Bible + DJ + MC</td>
                                <td>Bible + tv + instruments </td>
                            </tr>
                            <tr>
                                <td>elements</td>
                                <td>Prayer </td>
                                <td>Preaching (international speaker 15-20 mins)</td>
                                <td>5 min sharing</td>
                                <td>Food (bbq) + prayer + testimonies</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog58;