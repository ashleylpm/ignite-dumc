import React from 'react';

export const Form = ({ onSubmit }) => {
    return (
        <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScBBZVsWryNH8ashxCe4VURIqF7UuCkunc7rPh65tuObsnLBw/formResponse"
              method="POST"
              onsubmit="setTimeout(function () { window.location.reload(); }, 10)" >
            <div className="form-group">
                <label htmlFor="name">NAME (AS PER NRIC)</label>
                <input name="entry.721542083" />
            </div>
            <div className="form-group">
                <label htmlFor="name">AGE</label>
                <input name="entry.1143716750" />
            </div>
            <div className="form-group">
                <label htmlfor="name">NRIC</label>
                <input name="entry.327666305" />
            </div>
            <div className="form-group">
                <label htmlFor="name">HANDPHONE NUMBER</label>
                <input name="entry.239975958" />
            </div>
            <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input name="entry.1655592159" />
            </div>
            <div className="form-group">
                <label htmlFor="name">HOUSE UNIT NUMBER</label>
                <input name="entry.1437269770" />
            </div>
            <div className="form-group">
                <label htmlFor="name">CITY</label>
                <input name="entry.84102190" />
            </div>
            <div className="form-group">
                <label htmlFor="name">POSTCODE</label>
                <input name="entry.1929556469" />
            </div>
            <div className="form-group">
                <label htmlFor="name">STATE</label>
                <input name="entry.1820238470" />
            </div>
            <div className="form-group">
                <label htmlFor="name">WHICH SCHOOL ARE YOU FROM?</label>
                <input name="entry.625339323"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Are you a teacher or a student?</label>
                <input name="entry.1397607618" />
            </div>
            <div className="form-group">
                <label htmlFor="name">REMARKS</label>
                <input name="entry.951197177" />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};
export default Form;
