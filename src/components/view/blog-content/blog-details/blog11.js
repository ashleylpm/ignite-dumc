import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog11 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 13
                    </div>
                    <div className="content-title font-gothamBlack">
                    Frontier Learning centre
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
                                <td>Bonding Session</td>
                                <td>ZamZam party</td>
                                <td>Movie night</td>
                                <td>Karaoke session</td>
                                <td>Day trips/road trips</td>
                                <td>Baking day !</td>
                            </tr>
                            <tr>
                                <td>Music</td>
                                <td>Jam sessions</td>
                                <td>Christmas carolling at IOI</td>
                                <td>Worship sessions</td>
                                <td>A day where everyone dresses up as the Von trapp family and sings the sound of music ost for a day</td>
                                <td>High school musical sing off</td>
                            </tr>
                            <tr>
                                <td>FOOD</td>
                                <td>Fast food week (with lots of cake and ice cream-) </td>
                                <td>Hot pot day</td>
                                <td>Bbq day</td>
                                <td>Sushi day + Japanese cheesecake</td>
                                <td>All kinds of pure japanese ramen day</td>
                            </tr>
                            <tr>
                                <td>Competitions</td>
                                <td>Who can sing the worst </td>
                                <td>Who can eat the most (who can stuff the most pies…)</td>
                                <td>(for the boys) try not to get roasted by teacher phillip for a day</td>
                                <td>Who can dance the worst </td>
                                <td>Who can write the nicest letter to teacher Kat</td>
                            </tr>
                            <tr>
                                <td>Special days</td>
                                <td>A day where everyone writes a meaningful note to all the teachers</td>
                                <td>A day where everyone writes a meaningful letter to their classmates </td>
                                <td>A day where everyone helps the kakak to clean the school</td>
                                <td>A day where some people can help the lunch people to carry the food up</td>
                                <td>A fundraising event to help those in need </td>
                            </tr>
                            <tr>
                                <td>Things we can do for chapel</td>
                                <td>We can have a testimony time during chapel</td>
                                <td>A time during chapel where we have a group to share one thing that we are grateful for</td>
                                <td>5 min sharing during chapel</td>
                                <td>Teachers lead worship </td>
                                <td>One of the student’s have to share </td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog11;