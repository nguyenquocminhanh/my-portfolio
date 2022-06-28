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

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
            blogs: [],
            home_page: null,
            isLoading: true,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        axios.get(AppURL.GetHomePage).then(response => {
            if(response.status == 200) {
                this.setState({
                    testimonials: response.data['testimonials'],
                    blogs: response.data['blogs'],
                    home_page: response.data['home_page'],
                });
                setTimeout(() => {
                    this.setState({isLoading: false})
                }, 1500);
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
 
    render() {
        return (
            <Fragment>
                {this.state.isLoading ? <Loader/> : null }

                <Intro
                    cover_image={this.state.home_page ? this.state.home_page['cover_image'] : null}
                    avatar_image={this.state.home_page ? this.state.home_page['avatar_image'] : null}/>
                <About/>
                <Skill/>
                <Testimonial
                    testimonials={this.state.testimonials}/>
                <Project/>
                <Blog
                    blogs={this.state.blogs}/>
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