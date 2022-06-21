import React, { Component, Fragment } from 'react';
import About from '../components/home/About';
import Cover from '../components/common/Cover'
import Skill from '../components/home/Skill';
import { Helmet } from 'react-helmet';

class AboutPage extends Component {
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
                    <title>About Me</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="About Me"/>
                <About/>
                <Skill/>
            </Fragment>
        );
    }
}

export default AboutPage;