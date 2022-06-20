import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            // Blog 
            <section id="blog" class="py-9 py-xl-12 zindex-2">
                <div class="container">
                    <div class="row mb-8">
                        <div class="col-lg-12 mx-auto text-center">
                            <h2 class="mb-4">Latest Blog</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-4 col-sm-6 mb-5 mb-md-0">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                            <img class="card-img-top" src="assets/images/blog/image-blog-6.jpg" alt=""/>
                            <div class="card-body p-6">
                                <small class="text-muted d-block mb-3">March 10, 2020</small>
                                <h5 class="mb-0"><a href="blog-single.html" class="text-dark">Building an enduring online audience</a></h5>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 mb-5 mb-md-0">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                            <img class="card-img-top" src="assets/images/blog/image-blog-1.jpg" alt=""/>
                            <div class="card-body p-6">
                                <small class="text-muted d-block  mb-3">April 24, 2020</small>
                                <h5 class="mb-0"><a href="blog-single.html" class="text-dark">Building a site for your small business</a></h5>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                            <img class="card-img-top" src="assets/images/blog/image-blog-7.jpg" alt=""/>
                            <div class="card-body p-6">
                                <small class="text-muted d-block  mb-3">May 13, 2020</small>
                                <h5 class="mb-0"><a href="blog-single.html" class="text-dark">A day in the life of a fitness blogger</a></h5>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 mt-lg-8 text-center">
                        <Link to="/blog-all" class="btn btn-dark px-8">View More</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;