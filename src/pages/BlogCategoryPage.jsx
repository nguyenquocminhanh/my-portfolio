import React, { Component, Fragment } from 'react';
import AllBlogCategory from '../components/blog/category/AllBlogCategory';
import Cover from '../components/common/Cover';

import HelmetMetaData from '../components/common/HelmetMetaData';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';
import {withRouter} from 'react-router-dom';

class BlogCategoryPage extends Component {
    constructor({match}) {
        super();
        this.state = {
            categoryID: match.params.categoryID,
            category: '',
            categoryImg: null,
            blogs: [],
            cover: '',
            filteredBlogs: [],
            blogCategories: [],
            comments: [],
            isLoading: true,
            searchKeyword: "",
            selectedPage: 1
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const getCategory = axios.get(AppURL.AllBlogByCategory(this.state.categoryID));
        const getBlogCategories = axios.get(AppURL.AllBlogCategory);
        const getComments = axios.get(AppURL.AllComment);

        axios.all([getCategory, getBlogCategories, getComments]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];

                if(responseOne.status == 200 & responseTwo.status == 200 && responseThree.status == 200) {
                    this.setState({
                        category: responseOne.data.name,
                        categoryImg: responseOne.data.image,
                        cover: responseOne.data.image,
                        blogs: responseOne.data.blog,
                        filteredBlogs: responseOne.data.blog,
                        blogCategories: responseTwo.data,
                        comments: responseThree.data
                    });
                    setTimeout(() => {
                        this.setState({isLoading: false})
                    }, 1500);
                } else {
                    this.props.history.replace('/404');
                }
            })
        ).catch(errors => {
            this.setState({
                isLoading: false
            });
            console.log(errors);
            this.props.history.replace('/404');
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
                    title={this.state.category ? this.state.category + " - Minh Nguyen Portfolio" : 'Blogs By Category'}
                    description={"Minh Nguyen gives you several Blogs Categories to select"}
                    image={this.state.categoryImg}/>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    coverImage={this.state.cover}
                    title={this.state.category}
                    hasArrowDown
                    hrefArrowDown="#blog-category-container"/>
                    
                <AllBlogCategory
                    allBlogs={this.state.blogs}
                    category={this.state.category}
                    categoryID={this.state.categoryID}
                    
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

export default withRouter(BlogCategoryPage);