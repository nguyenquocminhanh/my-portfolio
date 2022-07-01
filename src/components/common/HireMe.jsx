import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class HireMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: '',
      email: '',
      phone_number: '',
      message: '',
      submitBtn: 'Send Message'
    }
  }

  hiringSent = (e) => {
    e.preventDefault();
    let submitForm = document.getElementById('hiringForm');

    if (this.state.name.length === 0) {
        this.props.showToast('error', 'Please enter your name');
    } else if (this.state.email.length === 0) {
        this.props.showToast('error', 'Please enter your email');
    } else if (this.state.message.length === 0) {
        this.props.showToast('error', 'Please enter your message');
    } else {
        this.setState({submitBtn: 'Sending...'});
        let myFormData = new FormData();
    
        myFormData.append('name', this.state.name);
        myFormData.append('email', this.state.email);
        myFormData.append('phone_number', this.state.phone_number);
        myFormData.append('message', this.state.message);

        axios.post(AppURL.StoreHireMessage, myFormData).then(response => {
            if(response.status === 200) {
              setTimeout(() => {
                submitForm.reset();
                this.setState({submitBtn: 'Send Message'});
                // close modal
                this.setState({show: false})
                this.props.showToast('success', response.data['message']);
              }, 500);
            }
        }).catch(error => {
            console.log(error);
        })
    }
  }

  render() {
    return (
      <div class="bg-light rounded-lg mt-6 mt-lg-8 p-5 p-sm-8 p-lg-10 text-center">
        <h5 class="mb-5 mb-md-7">Start a project. Get in touch</h5>
        <button type="button" onClick={() => this.setState({show: true})} data-toggle="modal" data-target="#hireModal" class="btn btn-dark px-8">Hire Me</button>

        <Modal show={this.state.show} onHide={() => this.setState({show: false})}>
          <Modal.Header>
            <Modal.Title className='text-center'>Hiring Information</Modal.Title>
            <button type="button" class="close" onClick={() => this.setState({show: false})} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.hiringSent} id="hiringForm" autocomplete="off">
              <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Your Name*:</label>
                  <input onChange={(e) => this.setState({name: e.target.value})} type="text" class="form-control"/>
              </div>
              <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Email*:</label>
                  <input onChange={(e) => this.setState({email: e.target.value})} type="email" class="form-control"/>
              </div>
              <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Phone Number (Optional):</label>
                  <input onChange={(e) => this.setState({phone_number: e.target.value})} type="text" class="form-control"/>
              </div>
              <div class="mb-3">
                  <label for="message-text" class="col-form-label">Project Information*:</label>
                  <textarea onChange={(e) => this.setState({message: e.target.value})} rows="4" class="form-control"></textarea>
              </div>
              <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-dark">{this.state.submitBtn}</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default HireMe;
