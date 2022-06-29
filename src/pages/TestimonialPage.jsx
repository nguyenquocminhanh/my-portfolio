import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Cover from '../components/common/Cover'
import Testimonial from '../components/testimonial/Testimonial';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class TestimonialPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
            testimonial_page: null,
            isLoading: true,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        axios.get(AppURL.GetTestimonial).then(response => {
            if(response.status == 200) {
                this.setState({
                    testimonials: response.data['testimonials'],
                    testimonial_page: response.data['testimonial_page'],
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
                <Helmet>
                    <title>Testimonials</title>
                </Helmet>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    title="Testimonials"
                    coverImage={this.state.testimonial_page ? this.state.testimonial_page['cover_image'] : null}
                    description={this.state.testimonial_page ? this.state.testimonial_page['description'] : null}/>

                <Testimonial
                    testimonials={this.state.testimonials}
                    showToast={this.showToast}/>

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

export default TestimonialPage;