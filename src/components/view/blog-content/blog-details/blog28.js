import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog28 extends Component {

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
                                <td>Purpose</td>
                                <td>To get the people to know more about Christianity </td>
                                <td>Understand the bible more</td>
                                <td>Maybe relationships will be formed. (Not just with people but also with God) </td>
                                <td>Bring backslidden Christians closer to God</td>
                                <td>Thinking about certain subjects will be easier</td>
                            </tr>
                            <tr>
                                <td>Location / venue </td>
                                <td>Zoom</td>
                                <td>Discord</td>
                                <td>Starbucks/ somewhere cheaper lol</td>
                                <td>A room at church</td>
                                <td>Shopping mall </td>
                            </tr>
                            <tr>
                                <td>duration / length </td>
                                <td>once a week</td>
                                <td>2 hours, every Sunday</td>
                                <td>1 hour, per day?</td>
                                <td>once a month</td>
                                <td>twice a month </td>
                            </tr>
                            <tr>
                                <td>target group</td>
                                <td>youths </td>
                                <td>close friends </td>
                                <td>Non-Christians</td>
                                <td>Relatives</td>
                                <td>family members </td>
                            </tr>
                            <tr>
                                <td>type </td>
                                <td>Ice breakers </td>
                                <td>topical study</td>
                                <td>videos</td>
                                <td>book study (bible book) </td>
                                <td>bible character study </td>
                            </tr>
                            <tr>
                                <td>Bible chapter/ content</td>
                                <td>Randomly </td>
                                <td>World matters</td>
                                <td>Verses from the bible that is related to real-world problems</td>
                                <td>Gray area matters</td>
                                <td>Important and famous stuff in the bible</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog28;