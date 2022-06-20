import React, { Component, Fragment } from 'react';
import AllBlog from '../components/blog/AllBlog';

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
                <AllBlog/>
            </Fragment>
        );
    }
}

export default BlogAllPage;