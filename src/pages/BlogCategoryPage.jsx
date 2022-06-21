import React, { Component, Fragment } from 'react';
import AllBlogCategory from '../components/blog/category/AllBlogCategory';
import Cover from '../components/common/Cover';

import { Helmet } from "react-helmet";

class BlogCategoryPage extends Component {
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
                    <title>Blogs By Category</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="Laravel"/>
                <AllBlogCategory/>
            </Fragment>
        );
    }
}

export default BlogCategoryPage;