import React, { Component, Fragment } from 'react';
import SingleBlog from '../components/blog/SingleBlog';

import { Helmet } from "react-helmet";
import { appendScript } from '../utilities/script';

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
                <SingleBlog/>
            </Fragment>
        );
    }
}

export default BlogSinglePage;