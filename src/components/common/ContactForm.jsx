import React, {Component} from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contactData: null,
        name: '',
        email: '',
        subject: '',
        message: ''
    }
  }

  componentDidMount = () => {
    axios.get(AppURL.AllContact).then(response => {
        if(response.status == 200) {
            this.setState({
                contactData: response.data
            });
        }
    }).catch(err => {
        console.log(err);
    })
  }

  messageSent = (e) => {
    e.preventDefault();
    
    let submitForm = document.getElementById('submitForm');
    if (this.state.name.length === 0) {
        this.props.showToast('error', 'Please enter your name');
    } else if (this.state.email.length === 0) {
        this.props.showToast('error', 'Please enter your email');
    } else if (this.state.message.length === 0) {
        this.props.showToast('error', 'Please enter your message');
    } else {
        let myFormData = new FormData();
    
        myFormData.append('name', this.state.name);
        myFormData.append('email', this.state.email);
        myFormData.append('message', this.state.message);
        myFormData.append('subject', this.state.subject);

        axios.post(AppURL.StoreMessage, myFormData).then(response => {
            if(response.status === 200) {
                submitForm.reset();
                this.props.showToast('success', response.data['message']);
            }
        }).catch(error => {
            console.log(error);
        })
    }
  }

  render() {
    let name = this.state.contactData ? this.state.contactData['name'] : '';
    let phone_number = this.state.contactData ? this.state.contactData['phone_number']: '';
    let email = this.state.contactData ? this.state.contactData['email'] : '';
    let address = this.state.contactData ?this.state.contactData['address'] : '';

    return (
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="row">

                    <div class="col-sm-6 col-md-4 mb-5 mb-md-0 text-center text-lg-left">
                        <div class="icon icon-4x text-dark mb-4">
                        <i class="ti-mobile"></i>
                        </div>
                        <p>{phone_number}</p>
                    </div>

                    <div class="col-sm-6 col-md-4 mb-5 mb-md-0 text-center text-lg-left">
                        <div class="icon icon-4x text-dark mb-4">
                        <i class="ti-location-pin"></i>
                        </div>
                        <p>{address}<br/>
                        USA</p>
                    </div>

                    <div class="col-sm-6 col-md-4 text-center text-lg-left">
                        <div class="icon icon-4x text-dark mb-4">
                            <i class="ti-email"></i>
                        </div>
                        <p>
                            <a href="mailto:minhanh.nguyenquoc@gmail.com" class="text-dark">{email}</a>
                        </p>
                    </div>

                </div>

                <hr class="my-8"></hr>

                <div class="contact-form">
                    <form class="mb-0" id="submitForm" name="cf" onSubmit={this.messageSent} autocomplete="off">
                        <div class="form-row">
                            <div class="form-process"></div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <input onChange={(e) => {this.setState({name: e.target.value})}} type="text" id="cf-name" name="cf-name" placeholder="Enter your name*" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                <input onChange={(e) => {this.setState({email: e.target.value})}} type="email" id="cf-email" name="cf-email" placeholder="Enter your email address*" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group">
                                <input onChange={(e) => {this.setState({subject: e.target.value})}} type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" class="form-control"/>
                                </div>
                            </div>

                            <div class="col-12 mb-4">
                                <div class="form-group">
                                <textarea onChange={(e) => {this.setState({message: e.target.value})}} name="cf-message" id="cf-message" placeholder="Message*" class="form-control" rows="10"></textarea>
                                </div>
                            </div>

                            <div class="col-12 text-center">
                                <button class="btn btn-dark" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                <div class="contact-form-result text-center"></div>
                </div>
            </div>
        </div>
    )
  }
}

export default ContactForm;