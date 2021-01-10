import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog29 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 24
                    </div>
                    <div className="content-title font-gothamBlack">
                    Christmas Event
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
                                <td>location/venue</td>
                                <td>church building </td>
                                <td>park</td>
                                <td>someone's house</td>
                                <td>online</td>
                                <td>shopping mall</td>
                            </tr>
                            <tr>
                                <td>time / duration</td>
                                <td>at night</td>
                                <td>morning</td>
                                <td>dawn</td>
                                <td>evening</td>
                                <td>afternoon</td>
                            </tr>
                            <tr>
                                <td>theme</td>
                                <td>ugly christmas sweater </td>
                                <td>Christmas itself lol</td>
                                <td>Candy and chocolates </td>
                                <td>hope</td>
                                <td>Santa's workshop</td>
                            </tr>
                            <tr>
                                <td>activity </td>
                                <td>Ice breakers</td>
                                <td>The christmas story</td>
                                <td>Gift exchange</td>
                                <td>Name that christmas song</td>
                                <td>Gift hunt ( just like easter egg hunt)</td>
                            </tr>
                            <tr>
                                <td>decoration </td>
                                <td>Fairy lights</td>
                                <td>ornaments</td>
                                <td>Christmas tree</td>
                                <td>balloons</td>
                                <td>Christmas stockings</td>
                            </tr>
                            <tr>
                                <td>target group</td>
                                <td>teenagers</td>
                                <td>Senior citizens</td>
                                <td>Mix generations</td>
                                <td>Non- christians</td>
                                <td>CG members and friends</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog29;