import React, { Component, useState } from "react";
import * as RB from "react-bootstrap";
import { blogData } from "./blog-details/blogData";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Pagination from "react-js-pagination";

export const BlogRow = () => {

    const todosPerPage = 10;
    const [ activePage, setCurrentPage ] = useState( 1 );

    // Logic for displaying current todos
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos     = blogData.slice( indexOfFirstTodo, indexOfLastTodo );

    const renderBlogPost = currentTodos.map((data, key) => {
        return (
            <RB.Row key={key}>
                <BlogContent
                    key={key}
                    group={data.group}
                    title={data.title}
                    html={data.html}
                />
            </RB.Row>
        )
    });

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
    };

    return (
        <div>
            <div className="font-gothamUltraItalic">
                <Pagination
                    hideFirstLastPages
                    hideDisabled
                    prevPageText='<'
                    nextPageText='>'
                    activePage={ activePage }
                    itemsCountPerPage={ 10 }
                    totalItemsCount={ blogData.length }
                    pageRangeDisplayed={ 3 }
                    onChange={ handlePageChange }
                />
            </div>
            <br/>
            <div className="blog-row">
                {renderBlogPost}
            </div>
            <div className="font-gothamUltraItalic">
                <Pagination
                    hideFirstLastPages
                    hideDisabled
                    prevPageText='<'
                    nextPageText='>'
                    activePage={ activePage }
                    itemsCountPerPage={ 10 }
                    totalItemsCount={ blogData.length }
                    pageRangeDisplayed={ 3 }
                    onChange={ handlePageChange }
                />
            </div>
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