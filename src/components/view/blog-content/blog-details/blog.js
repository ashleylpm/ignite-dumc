import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group XX
                    </div>
                    <div className="content-title font-gothamBlack">
                        GROUP NAME
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
                                <td>TITLE1</td>
                                <td>ROW1</td>
                                <td>ROW1</td>
                                <td>ROW1</td>
                                <td>ROW1</td>
                                <td>ROW1</td>
                            </tr>
                            <tr>
                                <td>TITLE2</td>
                                <td>ROW2</td>
                                <td>ROW2</td>
                                <td>ROW2</td>
                                <td>ROW2</td>
                                <td>ROW2</td>
                            </tr>
                            <tr>
                                <td>TITLE3</td>
                                <td>ROW3</td>
                                <td>ROW3</td>
                                <td>ROW3</td>
                                <td>ROW3</td>
                                <td>ROW3</td>
                            </tr>
                            <tr>
                                <td>TITLE4</td>
                                <td>ROW4</td>
                                <td>ROW4</td>
                                <td>ROW4</td>
                                <td>ROW4</td>
                                <td>ROW4</td>
                            </tr>
                            <tr>
                                <td>TITLE5 </td>
                                <td>ROW5</td>
                                <td>ROW5</td>
                                <td>ROW5</td>
                                <td>ROW5</td>
                                <td>ROW5</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog;