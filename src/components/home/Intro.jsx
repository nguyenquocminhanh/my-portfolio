import React, { Component } from 'react';
import Image from '../../assets/images/photo-11.jpeg';
import ReactTypingEffect from 'react-typing-effect';

class Intro extends Component {
  render() {
      return (
        <section id="home" class="py-9 py-lg-10 min-vh-100 d-flex">
          <div class="overlay overlay-advanced mb-xl-n12" style={{maxHeight: '100vh'}}>
            <div class="overlay-inner bg-cover" style={{backgroundImage: "url(" + Image + ")"}}></div>
            <div class="overlay-inner bg-gray-900 opacity-50"></div>
          </div>
          <div class="container align-self-center">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto text-center text-white">
                <div class="avatar avatar-xl mb-7">
                  {/* <div class="avatar-shape avatar-shape-rounded mt-n2 mb-n2 mr-n2"></div> */}
                  <img src="assets/images/avatars/avatar1.jpeg" alt="" style={{border: "3px solid #fff"}} class="avatar-img rounded-circle shadow-light"/>
                </div>
                <p class="h5 mb-5">Welcome</p>
                <p class="h1 mb-5"><span class="font-weight-bold">I am Minh Nguyen</span></p>
                <h3 class="mb-5">
                  <ReactTypingEffect
                    className='font-weight-bold'
                    text={["Software Engineer", "Full Stack Developer"]}
                    speed={60}
                    eraseSpeed={60}
                    eraseDelay={3000}
                    typingDelay={300}
                  />
                </h3>
                {/* <a href="#!" class="btn btn-primary d-block d-md-inline-block mb-3 mb-md-0">Download CV</a>
                <a href="#about" class="btn btn-soft-white scrollto ml-md-3 d-block d-md-inline-block">Learn more</a> */}
              </div>
            </div>
          </div>
          {/* <div class="mouse-icon text-gray-600"></div> */}
          <a class="scrollto text-light" href="#about"><i class="fa fa-angle-down arrow"></i></a>
        </section>
      );
  }
}

export default Intro;