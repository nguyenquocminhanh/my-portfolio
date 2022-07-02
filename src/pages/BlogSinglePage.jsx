import React, { Component, Fragment } from 'react';
import SingleBlog from '../components/blog/blogDetails/SingleBlog';

import HelmetMetaData from '../components/common/HelmetMetaData';
import Cover from '../components/blog/blogDetails/Cover';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';
import { withRouter } from 'react-router-dom';

import truncate from 'truncate-html';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import setTime from '../utility/setTime';

class BlogSinglePage extends Component {   
    constructor({match}) {
        super();
        this.state = {
            blogID: match.params.blogID,
            blog: {},
            blogs: [],
            blogCategories: [],
            isLoading: true,
            currentURL: ''
        }
    }
    
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        this.setState({currentURL: window.location.href});

        const getBlogDetails = axios.get(AppURL.BlogDetails(this.state.blogID));
        const getBlogs = axios.get(AppURL.AllBlog);
        const getBlogCategories = axios.get(AppURL.AllBlogCategory);
        
        axios.all([getBlogDetails, getBlogs, getBlogCategories]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];

                if(responseOne.status == 200 & responseTwo.status == 200 && responseThree.status == 200) {
                    this.setState({
                        blog: responseOne.data,
                        blogs: responseTwo.data,
                        blogCategories: responseThree.data,
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
        });
    }

    commentPosted = (name, email, phone, content, target_name, reply_id) => {
        let submitForm1 = document.getElementById('submitForm');

        if (name.length === 0) {
            toast.error('Please enter your name');
        } else if (email.length === 0) {
            toast.error('Please enter your email');
        } else if (phone.length === 0) {
            toast.error('Please enter your phone');
        } else if (content.length === 0) {
            toast.error('Please enter your comment');
        } else {
            let myFormData = new FormData();
    
            myFormData.append('owner', name);
            myFormData.append('content', content);
            myFormData.append('email', email);
            myFormData.append('blog_id', this.state.blog['id']);
            myFormData.append('phone', phone);

            if (reply_id !== null) {
                myFormData.append('comment_reply_id', reply_id);
            }
            if (target_name !== null) {
                myFormData.append('target_name', target_name);
            }
    
            axios.post(AppURL.StoreComment, myFormData).then(response => {
                if(response.status === 200) {
                    submitForm1.reset();
                    // update comments
                    axios.get(AppURL.BlogDetails(this.state.blogID))
                        .then(res => {
                            this.setState({blog: res.data});
                            toast.success(response.data['message']);
                        }).catch(err => {
                            console.log(err)
                        })
                }
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    toast.error(error.response.data);
                    toast.error(error.response.status);
                    toast.error(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    toast.error(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error('Error', error.message);
                }
                toast.error(error.config);
            })
        }
    }


    likeComment = (commentID) => {
        axios.get(AppURL.LikeComment(commentID)).then(response => {
            if(response.status == 200) {
                toast.success(response.data['message']);
                this.setState({blog: response.data['blog']})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    unLikeComment = (commentID) => {
        axios.get(AppURL.UnLikeComment(commentID)).then(response => {
            if(response.status == 200) {
                toast.success(response.data['message']);
                this.setState({blog: response.data['blog']})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Fragment>
                <HelmetMetaData
                    currentURL={window.location.href}
                    title={this.state.blog ? this.state.blog['title'] + ' - ' + this.state.blog['author_name'] : 'My Blog'}
                    description={this.state.blog ? this.state.blog['duration'] + ' read - ' + setTime(this.state.blog['created_at']) + ' - ' + truncate(this.state.blog['description'], 50, { byWords: true }) : null}
                    image={this.state.blog ? this.state.blog['thumbnail_image'] : null}/>
                
                {this.state.isLoading ? <Loader/> : null }

                <Cover
                    blog={this.state.blog}/>
                <SingleBlog
                    blogs={this.state.blogs}
                    blog={this.state.blog}
                    categories={this.state.blogCategories}

                    commentPosted={this.commentPosted}
                    likeComment={this.likeComment}
                    unLikeComment={this.unLikeComment}
                    
                    currentURL={this.state.currentURL}/>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Fragment>
        );
    }
}

export default withRouter(BlogSinglePage);