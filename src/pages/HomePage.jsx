import React, { Component, Fragment } from 'react';
import About from '../components/home/About';
import Intro from '../components/home/Intro';
import Contact from '../components/home/Contact';
import Skill from '../components/home/Skill';
import Blog from '../components/home/Blog';
import Testimonial from '../components/home/Testimonial';
import Project from '../components/home/Project';

class HomePage extends Component {
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
                <Contact/>
            </Fragment>
        );
    }
}

export default HomePage;