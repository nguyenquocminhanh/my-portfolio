import React, { Component, Fragment } from 'react';
import AllBlog from '../components/blog/allBlog/AllBlog';
import Cover from '../components/common/Cover';

import HelmetMetaData from '../components/common/HelmetMetaData';
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
            comments: [],
            blog_page: null,
            isLoading: true,
            searchKeyword: "",
            selectedPage: 1,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const getBlogs = axios.get(AppURL.AllBlog);
        const getBlogCategories = axios.get(AppURL.AllBlogCategory);
        const getComments = axios.get(AppURL.AllComment);
        const getBlogPage = axios.get(AppURL.GetBlogPage);

        axios.all([getBlogs, getBlogCategories, getComments, getBlogPage]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];
                const responseFour = responses[3];

                if(responseOne.status == 200 & responseTwo.status == 200 && responseThree.status == 200 && responseFour.status == 200) {
                    this.setState({
                        blogs: responseOne.data,
                        filteredBlogs: responseOne.data,
                        blogCategories: responseTwo.data,
                        comments: responseThree.data,
                        blog_page: responseFour.data['blog_page']
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
                <HelmetMetaData
                    currentURL={window.location.href}
                    title="Minh Nguyen Blogs"
                    description={this.state.blog_page ? this.state.blog_page['description'] : null}
                    image={this.state.blog_page ? this.state.blog_page['cover_image'] : null}/>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    title="My Blogs"
                    description={this.state.blog_page ? this.state.blog_page['description'] : null}
                    coverImage={this.state.blog_page ? this.state.blog_page['cover_image'] : null}
                    hasArrowDown
                    hrefArrowDown="#blog-all-container"/>
                <AllBlog
                    allBlogs={this.state.blogs}

                    filteredBlogs={this.state.filteredBlogs}
                    filterBlog={this.filterBlog}
                    searchKeyword={this.state.searchKeyword}

                    categories={this.state.blogCategories}

                    comments={this.state.comments}

                    selectedPage={this.state.selectedPage}
                    pageSelected={this.pageSelected}
                    previousPageClicked={this.previousPageClicked}
                    nextPageClicked={this.nextPageClicked}/>
            </Fragment>
        );
    }
}

export default BlogAllPage;