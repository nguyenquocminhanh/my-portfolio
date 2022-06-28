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
        let testimonials = this.props.testimonials.map(testimonial => {
            return  <div>
                <div className="w-lg-75 w-xl-50 mx-auto text-center">
                    <blockquote>
                        <p className="mb-5"><i className="fa fa-quote-left" style={{color: '#FCAF17'}}></i> {testimonial['content']} <i className="fa fa-quote-right" style={{color: '#FCAF17'}}></i></p>
                        <footer className="d-flex justify-content-center align-items-center w-lg-50 mx-auto text-left">
                        <div className="avatar">
                            <img className="avatar-img rounded-circle" src={testimonial['profile_image']} alt=""/>
                        </div>
                        <div className="ml-3">
                            <h4 className="h6 mb-0">{testimonial['name']}</h4>
                            <small>{testimonial['position']}</small>
                        </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        });
        return (
             // Testimonial
             <section id="testimonial" className="pt-9">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-12 text-center mx-auto">
                            <h2 className="mb-4">Testimonials</h2>
                            {/* <p>What My Client Say About Me</p> */}
                        </div>
                    </div>

                    <Slider {...settings}>
                       {testimonials}
                    </Slider>

                    <HireMe/>
                </div>
            </section>
           
        );
    }
}

export default Testimonial;