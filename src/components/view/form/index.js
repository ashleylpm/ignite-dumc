import React from 'react';

export const Form = ({ onSubmit }) => {
    return (
        <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScBBZVsWryNH8ashxCe4VURIqF7UuCkunc7rPh65tuObsnLBw/formResponse"
              method="POST"
              onsubmit="setTimeout(function () { window.location.reload(); }, 10)" >
            <div className="disclaimer-container">
                <div className="disclaimer-image">
                    .
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formName">NAME (AS PER NRIC)</label><br/>
                <input name="entry.721542083" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formAge">AGE</label><br/>
                <input name="entry.1143716750" />
            </div>
            <div className="form-group">
                <label htmlfor="name" className="formNRIC">NRIC</label><br/>
                <input name="entry.327666305" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formHP">HANDPHONE NUMBER</label><br/>
                <input name="entry.239975958" />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="formEmail">EMAIL</label><br/>
                <input name="entry.1655592159" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formHouse">HOUSE UNIT NUMBER</label><br/>
                <input name="entry.1437269770" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formCity">CITY</label><br/>
                <input name="entry.84102190" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formPostcode">POSTCODE</label><br/>
                <input name="entry.1929556469" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formState">STATE</label><br/>
                <input name="entry.1820238470" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formSchool">WHICH SCHOOL ARE YOU FROM?</label><br/>
                <input name="entry.625339323"/>
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formTeach">Are you a teacher or a student?</label><br/>
                <input name="entry.1397607618" />
            </div>
            <div className="form-group">
                <label htmlFor="name" className="formRemarks">REMARKS</label><br/>
                <input name="entry.951197177" />
            </div>
            <div className="form-group text-center">
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
export default Form;
