import React, { Component, Fragment } from 'react';
import SingleBlog from '../components/blog/blogDetails/SingleBlog';

import { Helmet } from "react-helmet";
import Cover from '../components/blog/blogDetails/Cover';

class BlogSinglePage extends Component {    
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
                    <title>My Title</title>
                </Helmet>
                
                <Cover/>
                <SingleBlog/>
            </Fragment>
        );
    }
}

export default BlogSinglePage;