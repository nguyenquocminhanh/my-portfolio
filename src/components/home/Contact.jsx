import React, { Component } from 'react';
import ContactForm from '../common/ContactForm';

class Contact extends Component {
    render() {
        return (
            // Contact Me
            <section id="contact" class="py-9 bg-light">
                <div class="container" style={{maxWidth: '1320px'}}>
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <h2 class="mb-4 text-center">Contact Me</h2>
                            <p class="text-center mb-8">Want to know more about me? Give me a call or drop me an email and I will get back to you as soon as I can.</p>
                            <ContactForm showToast={this.props.showToast}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;