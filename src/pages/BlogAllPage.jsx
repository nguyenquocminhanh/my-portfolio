import React, { Component, Fragment } from 'react';
import AllBlog from '../components/blog/allBlog/AllBlog';
import Cover from '../components/common/Cover';

import { Helmet } from "react-helmet";
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

class BlogAllPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            filteredBlogs: [],
            blogCategories: [],
            isLoading: true,
            searchKeyword: "",
            selectedPage: 1
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const getBlogs = axios.get(AppURL.AllBlog);
        const getBlogCategories = axios.get(AppURL.AllBlogCategory);

        axios.all([getBlogs, getBlogCategories]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];

                if(responseOne.status == 200 & responseTwo.status == 200) {
                    this.setState({
                        blogs: responseOne.data,
                        filteredBlogs: responseOne.data,
                        blogCategories: responseTwo.data,
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
    
    filterBlog = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = this.state.filteredBlogs.filter((blog) => {
              return blog['title'].toLowerCase().includes(keyword.toLowerCase());
            })
            this.setState({filteredBlogs: results, selectedPage: 1});
        } else {
            const results = this.state.blogs;
            this.setState({filteredBlogs: results})
        }
        this.setState({searchKeyword: keyword});
    }

    pageSelected = (pageNumber) => {
        this.setState({selectedPage: pageNumber})
    }

    previousPageClicked = () => {
        this.setState(prevState => {
            return {
                selectedPage: prevState.selectedPage - 1
            }
        })
    }

    nextPageClicked = () => {
        this.setState(prevState => {
            return {
                selectedPage: prevState.selectedPage + 1
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>My Blogs</title>
                </Helmet>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    title="My Blogs"
                    description="A collection of news, features & interesting things."
                    hasArrowDown
                    hrefArrowDown="#blog-all-container"/>
                <AllBlog
                    allBlogs={this.state.blogs}

                    filteredBlogs={this.state.filteredBlogs}
                    filterBlog={this.filterBlog}
                    searchKeyword={this.state.searchKeyword}

                    categories={this.state.blogCategories}

                    selectedPage={this.state.selectedPage}
                    pageSelected={this.pageSelected}
                    previousPageClicked={this.previousPageClicked}
                    nextPageClicked={this.nextPageClicked}/>
            </Fragment>
        );
    }
}

export default BlogAllPage;