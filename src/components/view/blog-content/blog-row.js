import React from "react";
import * as RB from "react-bootstrap";
import BlogColumn from "./blog-column";

function BlogRow () {
    return (
        <div>
            <RB.Row className="blog-row">
                <BlogColumn />
                <BlogColumn />
                <BlogColumn />
                <BlogColumn />
            </RB.Row>
        </div>
    );
}

export default BlogRow;