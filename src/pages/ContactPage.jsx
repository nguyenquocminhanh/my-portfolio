import React, { Component, Fragment } from 'react';
import ContactForm from '../components/common/ContactForm';
import Cover from '../components/common/Cover';
import axios from 'axios';

import HelmetMetaData from '../components/common/HelmetMetaData';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_page: null,
            isLoading: true,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        axios.get(AppURL.GetContactPage).then(response => {
            if(response.status == 200) {
                this.setState({
                    contact_page: response.data['contact_page'],
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
                <HelmetMetaData
                    currentURL={window.location.href}
                    title="Contact Me"
                    description="Want to know more about me? Give me a call or drop me an email and I will get back to you as soon as I can."
                    image={this.state.contact_page ? this.state.contact_page['cover_image'] : null}/>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    title="Contact"
                    coverImage={this.state.contact_page ? this.state.contact_page['cover_image'] : null}
                    description={this.state.contact_page ? this.state.contact_page['description'] : null}
                    hasArrowDown
                    hrefArrowDown="#contact-container"/>


                <section class="py-9 py-xl-12" id="contact-container">
                    <div class="container">
                        <ContactForm
                            showToast={this.showToast}/>
                    </div>
                </section>

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

export default ContactPage;