import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog13 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 17
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
                                <td>Topic &amp; Purpose </td>
                                <td>To grow in our faith with God</td>
                                <td>Spreading the gospel</td>
                                <td>Having a deeper understanding of the bible/gospel</td>
                                <td>Character studies in the bible </td>
                                <td>Discuss what the bible has to say on different relationships/ how to love each other</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Someone’s house</td>
                                <td>Cafe</td>
                                <td>Church/ after service</td>
                                <td>At home</td>
                                <td>Park</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Friday Night</td>
                                <td>After school hours</td>
                                <td>After service </td>
                                <td>Morning</td>
                                <td>Sunrise </td>
                            </tr>
                            <tr>
                                <td>Target audience/ People</td>
                                <td>Youth in high school</td>
                                <td>School friends</td>
                                <td>Youth in church</td>
                                <td>Family </td>
                                <td>Neighbours </td>
                            </tr>
                            <tr>
                                <td>Type of study/ materials </td>
                                <td>Video ie bible project</td>
                                <td>Evangelistic approach</td>
                                <td>Bible commentaries </td>
                                <td>Read from the bible itself </td>
                                <td>Devotional </td>
                            </tr>
                            <tr>
                                <td>Activity/ Ice breakers</td>
                                <td>Bringing snacks </td>
                                <td>Games</td>
                                <td>A meal </td>
                                <td>Catch up with family members</td>
                                <td>Exercising </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog13;