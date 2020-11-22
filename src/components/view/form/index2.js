import React from 'react';

export const Form2 = ({onSubmit}) => {

    let name = React.createRef();
    let age = React.createRef();
    let nric = React.createRef();
    let hp = React.createRef();
    let email = React.createRef();
    let address = React.createRef();
    let city = React.createRef();
    let postcode = React.createRef();
    let state = React.createRef();
    let school = React.createRef();
    let teacher = React.createRef();

    function handleKeyUp(e) {
        e.which = e.which || e.keyCode;

        // If the key press is Enter
        if (e.which === 13) {
            switch (e.target.id) {
                case "input-one":
                    age.current.focus();
                    break;
                case "input-two":
                    nric.current.focus();
                    break;
                case "input-three":
                    hp.current.focus();
                    break;
                case "input-four":
                    email.current.focus();
                    break;
                case "input-five":
                    address.current.focus();
                    break;
                case "input-six":
                    city.current.focus();
                    break;
                case "input-seven":
                    postcode.current.focus();
                    break;
                case "input-eight":
                    state.current.focus();
                    break;
                case "input-nine":
                    school.current.focus();
                    break;
                case "input-ten":
                    teacher.current.focus();
                    break;

                default:
                    break;
            }
        }
    }
    return (
        //Online
        <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScBBZVsWryNH8ashxCe4VURIqF7UuCkunc7rPh65tuObsnLBw/formResponse"
            method="POST"
            target="_blank"
            onSubmit={onSubmit}>
            <img src={require('../../images/form/registration.png')} className="registrationTitle"/>
            <div className="form-group">
                <label htmlFor="name" className="formName">NAME (AS PER NRIC)</label><br/>
                <input id="input-one" onKeyUp={name} ref={name} name="entry.721542083" required/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formAge">AGE</label><br/>
                <input id="input-two" type="number" onKeyUp={age} ref={age} name="entry.1143716750" required/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formNRIC">NRIC</label><br/>
                <input name="entry.327666305" id="input-three" onKeyUp={nric} ref={nric} required
                       pattern="[0-9]{6}-[0-9]{2}-[0-9]{4}"/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formHP">HANDPHONE NUMBER</label><br/>
                <input name="entry.239975958" id="input-four" onKeyUp={hp} ref={hp} required pattern="[0-9]{3}-[0-9]{7}|[0-9]{3}-[0-9]{8}"/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="formEmail">EMAIL</label><br/>
                <input name="entry.1655592159" id="input-five" onKeyUp={email} ref={email} required type="email"/>
            </div>
            <img src={require('../../images/form/participantKit2.png')} className="participantKit"/>
            {/*<div className="form-group">*/}
            {/*    <label htmlFor="name" className="formHouse">HOUSE UNIT NUMBER</label><br/>*/}
            {/*    <input name="entry.1437269770" id="input-six" onKeyUp={address} ref={address} required />*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*    <label htmlFor="name" className="formCity">CITY</label><br/>*/}
            {/*    <input name="entry.84102190" id="input-seven" onKeyUp={city} ref={city} required/>*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*    <label htmlFor="name" className="formPostcode">POSTCODE</label><br/>*/}
            {/*    <input name="entry.1929556469" id="input-eight" onKeyUp={postcode} ref={postcode} required/>*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*    <label htmlFor="name" className="formState">STATE</label><br/>*/}
            {/*    <input name="entry.1820238470" id="input-nine" onKeyUp={state} ref={state} required/>*/}
            {/*</div>*/}
            <div className="form-group">
                <label htmlFor="name" className="formSchool">WHICH SCHOOL ARE YOU FROM?</label><br/>
                <input name="entry.625339323" id="input-ten" onKeyUp={school} ref={school} required/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formTeach">Are you a teacher or a student?</label><br/>
                <input name="entry.1397607618" id="input-eleven" onKeyUp={teacher} ref={teacher} required/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formRemarks">REMARKS</label><br/>
                <input name="entry.951197177"/>
            </div>
            <div className="disclaimer-container">
                <div className="disclaimer-image">
                    .
                </div>
            </div>
            <div className="disclaimer-container">
                <img src={require('../../images/form/disclaimer.png')} className="disclaimerImg"/>
            </div>
            <label className="checkbox-container">
                <input type="checkbox" required/>
                <span className="checkmark"></span>
                <img src={require('../../images/form/I Agree Button-23.png')} className="formCheckbox"/>
            </label>
            <div className="form-group text-center">
                <button type="submit" onSubmit="post();return false;">
                    <img src={require('../../images/form/IGNITEYLS Form-14.png')} className="submitButton"/>
                </button>
            </div>
        </form>

    );
};
export default Form2;
