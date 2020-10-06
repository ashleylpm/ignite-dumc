import React from 'react';

export const Form = ({onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">NAME (AS PER NRIC)</label>
                <input className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">NRIC NUMBER</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">EMAIL</label>
                <input className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">ADDRESS</label>
                <input className="form-control" id="address"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">POSTCODE</label>
                <input className="form-control" id="postcode"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">STATE</label>
                <input className="form-control" id="state"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">CONTACT NUMBER</label>
                <input className="form-control" id="contactNumber"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">EMERGENCY CONTACT NUMBER</label>
                <input className="form-control" id="eContactNumber"/>
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
