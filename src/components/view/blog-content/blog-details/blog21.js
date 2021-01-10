import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog21 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 21
                    </div>
                    <div className="content-title font-gothamBlack">
                        Christmas Party 
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
                                <td>Location</td>
                                <td>Someone’s house</td>
                                <td>Restaurants</td>
                                <td>Mall</td>
                                <td>Church</td>
                                <td>Holiday location</td>
                            </tr>
                            <tr>
                                <td>Activity</td>
                                <td>Singing</td>
                                <td>eating</td>
                                <td>Watch movie</td>
                                <td>Games</td>
                                <td>Secret santa </td>
                            </tr>
                            <tr>
                                <td>People to invite</td>
                                <td>Family</td>
                                <td>CG Members</td>
                                <td>Non-believers</td>
                                <td>Friends</td>
                                <td>schoolmates</td>
                            </tr>
                            <tr>
                                <td>Time</td>
                                <td>Night, Thursday</td>
                                <td>Saturday Morning</td>
                                <td>Afternoon Saturday</td>
                                <td>Christmas day </td>
                                <td>Christmas eve</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Jesus Birth</td>
                                <td>Shining star</td>
                                <td>Forgiveness</td>
                                <td>Love</td>
                                <td>The greatest gift</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog21;