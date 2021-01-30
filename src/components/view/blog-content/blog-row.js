import React, { Component } from "react";
import * as RB from "react-bootstrap";
import { blogData } from "./blog-details/blogData";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export const BlogRow = () => {
    return (
        <div className="blog-row">
            <RB.Row>
                {blogData.map((data, key) => {
                    return (
                        <div key={key}>
                            <BlogContent
                                key={key}
                                group={data.group}
                                title={data.title}
                                html={data.html}
                            />
                        </div>
                    );
                })}
            </RB.Row>
        </div>
    );
};

const BlogContent = ({ group, title, html }) => {
    if (!group) return <div />;
    return (
        <div className="content-column">
            <div className="content-nameDate font-gothamBlack">
                {group}
            </div>
            <div className="content-title font-gothamBlack">
                {title}
            </div>
            <div className="blog-text font-gothamLight">
                { ReactHtmlParser(html) }
            </div>
        </div>
    );
};

export default BlogRow;