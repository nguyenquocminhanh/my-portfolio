import React, { Component, Fragment } from 'react';
import About from '../components/home/About';
import Intro from '../components/home/Intro';
import Contact from '../components/home/Contact';
import Skill from '../components/home/Skill';
import Blog from '../components/home/Blog';
import Testimonial from '../components/home/Testimonial';
import Project from '../components/home/Project';

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends Component {
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
                <Intro/>
                <About/>
                <Skill/>
                <Testimonial/>
                <Project/>
                <Blog/>
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