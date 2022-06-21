import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Cover from '../components/common/Cover'
import Testimonial from '../components/testimonial/Testimonial';

class TestimonialPage extends Component {
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
                    <title>Testimonials</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="Testimonials"
                    description="What My Clients Say About Me"/>

                <Testimonial/>
            </Fragment>
        );
    }
}

export default TestimonialPage;