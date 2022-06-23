import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            // Blog 
            <section id="blog" class="py-9 zindex-2">
                <div class="container" style={{maxWidth: '1320px'}}>
                    <div class="row mb-8">
                        <div class="col-lg-12 mx-auto text-center">
                            <h2 class="mb-4">Latest Blogs</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-4 col-sm-6 mb-5 mb-md-0">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                                <Link to={"/details/blog/" + 1}>
                                    <img class="card-img-top" style={{cursor: 'pointer'}} src="assets/images/blog/image-blog-6.jpg" alt=""/>
                                </Link>
                                <div class="card-body">
                                    {/* <small class="text-muted d-block mb-3">March 10, 2020</small> */}
                                    <Link to={"/details/blog/" + 1}>
                                        <h5 class="mb-0"><a href="blog-single.html" class="text-dark">Building an enduring online audience</a></h5>
                                    </Link>
                                    <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula...</p>
                                </div>
                                <div class="card-footer text-gray-700 d-flex justify-content-between text-muted">
                                    <small>
                                        <a href="blog-single.html" rel="bookmark" class="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00" style={{color: '#FCAF17'}}>4 May 2015</time></a>
                                    </small>
                                    <small><i className='fa fa-clock'></i> 1 minute read</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 mb-5 mb-md-0">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                                <img class="card-img-top" style={{cursor: 'pointer'}} src="assets/images/blog/image-blog-1.jpg" alt=""/>
                                <div class="card-body">
                                    {/* <small class="text-muted d-block mb-3">March 10, 2020</small> */}
                                    <Link to={"/details/blog/" + 1}>
                                        <h5 class="mb-0"><a href="blog-single.html" class="text-dark">Building an enduring online audience</a></h5>
                                    </Link>
                                    <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula...</p>
                                </div>
                                <div className="card-footer text-gray-700 d-flex justify-content-between text-muted">
                                    <small>
                                        <a href="blog-single.html" rel="bookmark" class="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00" style={{color: '#FCAF17'}}>4 May 2015</time></a>
                                    </small>
                                    <small><i className='fa fa-clock'></i> 1 minute read</small>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                                <img class="card-img-top" style={{cursor: 'pointer'}} src="assets/images/blog/image-blog-7.jpg" alt=""/>
                                 <div class="card-body">
                                    {/* <small class="text-muted d-block mb-3">March 10, 2020</small> */}
                                    <Link to={"/details/blog/" + 1}>
                                        <h5 class="mb-0"><a href="blog-single.html" class="text-dark">Building an enduring online audience</a></h5>
                                    </Link>
                                    <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula...</p>
                                </div>
                                <div class="card-footer text-gray-700 d-flex justify-content-between text-muted">
                                    <small>
                                        <a href="blog-single.html" rel="bookmark" class="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00" style={{color: '#FCAF17'}}>4 May 2015</time></a>
                                    </small>
                                    <small><i className='fa fa-clock'></i> 1 minute read</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 mt-lg-8 text-center">
                        <Link to="/blog" class="btn btn-dark px-8">View More</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;