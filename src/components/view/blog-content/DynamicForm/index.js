import React from 'react';
import ReactDom from 'react-dom';

export default class DynamicForm extends React.Component {
    state = {

    }

    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.state);
    }

    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    renderForm = () => {
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type;
            let props = m.props || {};

            return (
              <div key={key} classname="form-group">
                  <label className="form-label"
                         key={"1" + m.key}
                         htmlFor={m.key}>
                      {m.label}
                  </label>
                  <input {...props}
                      ref={(key)=>{this[m.key]=key}}
                         className="form-input"
                         type={type}
                         key={"i" + m.key}
                         onChange={(e)=>{this.onChange(e, key)}}
                  />
              </div>
            );
        });
        return formUI;
    }

    render () {
        let title = this.props.title || "Submit Blog Content";
        return(
            <div>
                <h3>{title}</h3>
                <form className="dynamic-form" onSubmit={(e)=>{this.onSubmit(e)}}>
                    {this.renderForm()}
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}