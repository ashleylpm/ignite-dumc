import React, { Component } from 'react';
import DynamicForm from "./DynamicForm";
import { blogData } from "./blog-details/blogData";

class submitBlog extends Component {
    state = {
        data : [ blogData ]
    }

    onSubmit = (model) => {
        alert(JSON.stringify(model));
        this.setState({
            data: [model, ...this.state.data]
        })
    }

    render() {
        return (
            <div>
                <DynamicForm
                    title = "Submit Blog Content"
                    model = {[
                        {key: "group", label: "Group", props: {required: true}},
                        {key: "title", label: "Title", props: {required: true}},
                        {key: "html", label: "Content", props: {required: true}}
                    ]}
                    onSubmit = {(model) => {this.onSubmit(model)}}
                >

                </DynamicForm>
            </div>
        );
    }
}

export default submitBlog;