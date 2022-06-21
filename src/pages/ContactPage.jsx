import React, { Component, Fragment } from 'react';
import ContactForm from '../components/common/ContactForm';
import Cover from '../components/common/Cover';

import { Helmet } from "react-helmet";

class ContactPage extends Component {
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
                    <title>Contact</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="Contact"
                    description="Want to know more about me? Give me a call or drop me an email and I will get back to you as soon as I can."
                    hasArrowDown
                    hrefArrowDown="#contact-container"/>


                <section class="py-9 py-xl-12" id="contact-container">
                    <div class="container">
                        <ContactForm/>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ContactPage;