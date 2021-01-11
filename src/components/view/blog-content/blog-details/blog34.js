import React, {Component} from "react";
import * as RB from "react-bootstrap";
import ReadMore from "../read-more";

class Blog34 extends Component {

    render() {
        return (
            <RB.Row>
                <div className="content-column">
                    {/*<div className="blog-image text-center">*/}
                    {/*    <img src={require('../../images/assets/blog/sampleImg.png')} alt="blog-title"*/}
                    {/*    className="sample-img"/>*/}
                    {/*</div>*/}
                    <div className="content-nameDate font-gothamBlack">
                        Group 26
                    </div>
                    <div className="content-title font-gothamBlack">
                    CNY Party
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
                                <td>Someone’s big house!</td>
                                <td>Shopping Mall</td>
                                <td>Church</td>
                                <td>School </td>
                                <td>Outreach areas (kampung)</td>
                            </tr>
                            <tr>
                                <td>Timing</td>
                                <td>Afternoon </td>
                                <td>Weekend</td>
                                <td>Free and easy</td>
                                <td>School hours </td>
                                <td>Day trip?</td>
                            </tr>
                            <tr>
                                <td>Theme</td>
                                <td>Collect angpow, inside angpow got bible verse and dream cafe voucher</td>
                                <td>CNY Treats</td>
                                <td>Jesus washed our sins (FOR FREE)</td>
                                <td>Exposure through the Gospel through explaining chinese history/lore/characters</td>
                                <td>Reunion with Christ</td>
                            </tr>
                            <tr>
                                <td>People of Focus</td>
                                <td>School friends </td>
                                <td>Anyone in the mall</td>
                                <td>Anyone who drives a car </td>
                                <td>Students </td>
                                <td>The poor- B40 fams</td>
                            </tr>
                            <tr>
                                <td>Activity </td>
                                <td>Makan + firecrackers</td>
                                <td>GIve CNY kuih muih with gospel note </td>
                                <td>Free car wash </td>
                                <td>CNY Convention </td>
                                <td>Games! Worship! Deliver food + essential resources + food aid + hampers + fun times yes </td>
                            </tr>
                            <tr>
                                <td>Goal - Purpose of the activity </td>
                                <td>Secretly invite them to church w/o knowing!</td>
                                <td>To let them taste the sweetness of God (Psalms 34 :8) </td>
                                <td>Spread Gospel </td>
                                <td>Sharing Gospel through chinese heritage, culture and history!</td>
                                <td>To make God’s love seen through our actions</td>
                            </tr>
                        </table>
                    </div>
                    {/*<ReadMore />*/}
                </div>
            </RB.Row>
); }

}

export default Blog34;