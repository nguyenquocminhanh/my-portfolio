import React, { Component } from 'react';
import Image from '../../assets/images/photo-11.jpeg';
import Avatar from '../../assets/images/avatar1.jpeg';
import ReactTypingEffect from 'react-typing-effect';

class Intro extends Component {
  render() {
      return (
        <section id="home" className="py-9 py-lg-10 min-vh-100 d-flex">
          <div className="overlay overlay-advanced mb-xl-n12" style={{maxHeight: '100vh'}}>
            <div className="overlay-inner bg-cover" style={{backgroundImage: "url(" + this.props.cover_image + ")"}}></div>
            <div className="overlay-inner bg-gray-900 opacity-50"></div>
          </div>
          <div className="container align-self-center">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto text-center text-white">
                <div className="avatar avatar-xl mb-7">
                  {/* <div className="avatar-shape avatar-shape-rounded mt-n2 mb-n2 mr-n2"></div> */}
                  <img src={this.props.avatar_image} alt="" style={{border: "3px solid #fff"}} className="avatar-img rounded-circle shadow-light"/>
                </div>
                <p className="h5 mb-5">Welcome</p>
                <p className="h1 mb-5"><span className="font-weight-bold">I am Minh Nguyen</span></p>
                <h3 className="mb-5">
                  <ReactTypingEffect
                    className='font-weight-bold'
                    text={["Software Engineer", "Full Stack Developer"]}
                    speed={100}
                    eraseSpeed={100}
                    eraseDelay={3000}
                    typingDelay={2000}
                  />
                </h3>
                {/* <a href="#!" className="btn btn-primary d-block d-md-inline-block mb-3 mb-md-0">Download CV</a>
                <a href="#about" className="btn btn-soft-white scrollto ml-md-3 d-block d-md-inline-block">Learn more</a> */}
              </div>
            </div>
          </div>
          {/* <div className="mouse-icon text-gray-600"></div> */}
          <a className="scrollto text-light" href="#about"><i className="fa fa-angle-down arrow"></i></a>
        </section>
      );
  }
}

export default Intro;