import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HireMe from '../common/HireMe';

class Testimonial extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    arrows: false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false
                  }
                }
              ]
        };
        return (
             // Testimonial
             <section id="testimonial" class="pt-9">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-lg-12 text-center mx-auto">
                            <h2 class="mb-4">Testimonial</h2>
                            {/* <p>What My Client Say About Me</p> */}
                        </div>
                    </div>

                    <Slider {...settings}>
                        <div>
                            <div class="w-lg-75 w-xl-50 mx-auto text-center">
                                <blockquote>
                                    <p class="mb-5"><i class="fa fa-quote-left" style={{color: '#FCAF17'}}></i> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="fa fa-quote-right" style={{color: '#FCAF17'}}></i></p>
                                    <footer class="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
                                    <div class="avatar">
                                        <img class="avatar-img rounded-circle" src="assets/images/avatars/avatar-2.jpg" alt=""/>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="h6 mb-0">Jessica Nelson</h4>
                                        <small>Director Business Planning, Amazon</small>
                                    </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        <div>
                            <div class="w-lg-75 w-xl-50 mx-auto text-center">
                                <blockquote>
                                    <p class="mb-5"><i class="fa fa-quote-left" style={{color: '#FCAF17'}}></i> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="fa fa-quote-right" style={{color: '#FCAF17'}}></i></p>
                                    <footer class="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
                                    <div class="avatar">
                                        <img class="avatar-img rounded-circle" src="assets/images/avatars/avatar-2.jpg" alt=""/>
                                    </div>
                                    <div class="ml-3">
                                        <h4 class="h6 mb-0">Jessica Nelson</h4>
                                        <small>Director Business Planning, Amazon</small>
                                    </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        <div>
                            <div class="w-lg-75 w-xl-50 mx-auto text-center">
                                <blockquote>
                                    <p class="mb-5"><i class="fa fa-quote-left" style={{color: '#FCAF17'}}></i> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="fa fa-quote-right" style={{color: '#FCAF17'}}></i></p>
                                    <footer class="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
                                        <div class="avatar">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatars/avatar-2.jpg" alt=""/>
                                        </div>
                                        <div class="ml-3">
                                            <h4 class="h6 mb-0">Jessica Nelson</h4>
                                            <small>Director Business Planning, Amazon</small>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </Slider>

                    <HireMe/>
                </div>
            </section>
           
        );
    }
}

export default Testimonial;