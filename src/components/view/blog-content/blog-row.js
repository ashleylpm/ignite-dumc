import React from "react";
import * as RB from "react-bootstrap";
import Blog1 from "./blog-details/blog1";
import Blog2 from "./blog-details/blog2";

function BlogRow () {
    return (
        <div className="blog-row">
            <Blog1 />
            <Blog2 />
        </div>
    );
}

export default BlogRow;