import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog15 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 18
                    </div>
                    <div className="content-title font-gothamBlack">
                    Prayer Meetings

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
                                <td>Time </td>
                                <td>New years</td>
                                <td>All night </td>
                                <td>12 pm - 5 am</td>
                                <td>Afterschool</td>
                                <td>Not Election day (everyday) </td>
                            </tr>
                            <tr>
                                <td>Place </td>
                                <td>School </td>
                                <td>Overseas </td>
                                <td>Parliament build</td>
                                <td>Masjid</td>
                                <td>Petrol station</td>
                            </tr>
                            <tr>
                                <td>Food </td>
                                <td>Banana </td>
                                <td>Roti canai</td>
                                <td>Mc D(Happy meals) </td>
                                <td>Nandos</td>
                                <td>Porridge </td>
                            </tr>
                            <tr>
                                <td>Praying about.../theme</td>
                                <td>New year dedication </td>
                                <td>Country</td>
                                <td>Anti corruption (Money laundering+ Tax Evasion)</td>
                                <td>Addictions (to handbags and etc)</td>
                                <td>For Matthew </td>
                            </tr>
                            <tr>
                                <td>Who to invite</td>
                                <td>Politicians </td>
                                <td>School mates  </td>
                                <td>Teachers </td>
                                <td>Less fortunate people</td>
                                <td>Orphans</td>
                            </tr>
                            <tr>
                                <td>Who to invite to speak</td>
                                <td>Pr Terry </td>
                                <td>Pr Daniel</td>
                                <td>Nolan Krishnan</td>
                                <td>Ethan Leong </td>
                                <td>Trinity Annual Conference Bishop</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog15;