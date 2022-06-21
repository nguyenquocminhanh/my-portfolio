import React, { Component, Fragment } from 'react';
import AllBlog from '../components/blog/allBlog/AllBlog';
import Cover from '../components/common/Cover';

import { Helmet } from "react-helmet";

class BlogAllPage extends Component {
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>My Blogs</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="My Blogs"
                    description="A collection of news, features & interesting things."
                    hasArrowDown
                    hrefArrowDown="#blog-all-container"/>
                <AllBlog/>
            </Fragment>
        );
    }
}

export default BlogAllPage;