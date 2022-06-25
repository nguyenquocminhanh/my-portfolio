import React, { Component, Fragment } from 'react';
import SingleBlog from '../components/blog/blogDetails/SingleBlog';

import { Helmet } from "react-helmet";
import Cover from '../components/blog/blogDetails/Cover';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

class BlogSinglePage extends Component {   
    constructor({match}) {
        super();
        this.state = {
            blogID: match.params.blogID,
            blog: {},
            blogs: [],
            blogCategories: [],
            isLoading: true
        }
    }
    
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const getBogDetails = axios.get(AppURL.BlogDetails(this.state.blogID));
        const getBlogs = axios.get(AppURL.AllBlog);
        const getBlogCategories = axios.get(AppURL.AllBlogCategory);
        
        axios.all([getBogDetails, getBlogs, getBlogCategories]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];

                if(responseOne.status == 200 & responseTwo.status == 200 && responseThree.status == 200) {
                    this.setState({
                        blog: responseOne.data,
                        blogs: responseTwo.data,
                        blogCategories: responseThree.data
                    });
                    setTimeout(() => {
                        this.setState({isLoading: false})
                    }, 1500);
                }          
            })
        ).catch(errors => {
            this.setState({
                isLoading: false
            });
            console.log(errors);
        })
    }

    render() {
        return (
            <Fragment>
                <Helmet> 
                    <title>My Title</title>
                </Helmet>
                
                {this.state.isLoading ? <Loader/> : null }

                <Cover
                    blog={this.state.blog}/>
                <SingleBlog
                    blogs={this.state.blogs}
                    blog={this.state.blog}
                    categories={this.state.blogCategories}/>
            </Fragment>
        );
    }
}

export default BlogSinglePage;