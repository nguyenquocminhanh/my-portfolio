import React, { Component, Fragment } from 'react';
import About from '../components/home/About';
import Intro from '../components/home/Intro';
import Contact from '../components/home/Contact';
import Skill from '../components/home/Skill';
import Blog from '../components/home/Blog';
import Testimonial from '../components/home/Testimonial';
import Project from '../components/home/Project';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';
import Avatar from '../assets/images/avatar.jpeg'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
            blogs: [],
            projects: [],
            filteredBlogs: [],
            blog_categories: [],
            selected_category: null,
            home_page: null,
            isLoading: true,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // get visitor
        axios.get(AppURL.GetVisitorDetails).then().catch();

        axios.get(AppURL.GetHomePage).then(response => {
            if(response.status == 200) {
                this.setState({
                    testimonials: response.data['testimonials'],
                    blogs: response.data['blogs'],
                    filteredBlogs: response.data['blogs'],
                    blog_categories: response.data['blog_categories'],
                    home_page: response.data['home_page'],
                    projects: response.data['projects']
                });
                setTimeout(() => {
                    this.setState({isLoading: false})
                }, 1750);
            }
        }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        })
    }

    showToast = (status, message) => {
        if (status == 'success') {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    blogFilterClicked = (categoryID) => {
        let allBlogs = this.state.blogs;

        this.setState({
            filteredBlogs: allBlogs.filter(blog => blog['category_id'] == categoryID),
            selected_category: categoryID
        })
    }
 
    render() {
        return (
            <Fragment>
                {this.state.isLoading ? <Loader/> : null }

                <Intro
                    cover_image={this.state.home_page ? this.state.home_page['cover_image'] : null}
                    avatar_image={Avatar}/>
                <About/>
                <Skill/>
                <Testimonial
                    testimonials={this.state.testimonials}
                    showToast={this.showToast}/>
                <Project
                    projects={this.state.projects}/>
                <Blog
                    blogs={this.state.filteredBlogs}
                    blog_categories={this.state.blog_categories}
                    blogFilterClicked={this.blogFilterClicked}
                    selected_category={this.state.selected_category}/>
                <Contact showToast={this.showToast}/>

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

export default HomePage;