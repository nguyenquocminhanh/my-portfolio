import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import truncate from 'truncate-html';
import setTime from '../../utility/setTime';

class Blog extends Component {
    render() {
        let blogs = this.props.blogs.map(blog => {
            return <div class="col-md-4 col-sm-6 mb-5 mb-md-0">
                <div class="card border-0 bg-white shadow-light shadow-lift rounded-3x overflow-hidden">
                    <div class="card-header p-0 position-relative">
                        <Link to={"/details/blog/" + blog['id']}>
                            <img class="card-img-top" style={{cursor: 'pointer'}} src={blog['thumbnail_image']} alt=""/>
                        </Link>
                        <Link to={"/category/blog/" + blog['category']['id']} class="badge badge-light badge-blog">{blog['category']['name']}</Link>
                    </div>
                    <div class="card-body">
                        {/* <small class="text-muted d-block mb-3">March 10, 2020</small> */}
                        <Link to={"/details/blog/" + blog['id']}>
                            <h5 class="mb-2"><a href="blog-single.html" class="text-dark">{blog['title']}</a></h5>
                        </Link>
                        <p style={{fontSize: '0.9rem'}}>{parse(truncate(blog['content'], 13, { byWords: true }))}</p>
                    </div>
                    <div class="card-footer text-gray-700 d-flex justify-content-between text-muted">
                        <small><i className='fa fa-calendar-alt'></i> &nbsp;{setTime(blog['created_at'])}</small>
                        <small><i className='fa fa-clock'></i> &nbsp;{blog['duration']} read</small>
                    </div>
                </div>
            </div>
        });

        return (
            // Blog 
            <section id="blog" class="py-9 zindex-2">
                <div class="container" style={{maxWidth: '1320px'}}>
                    <div class="row mb-8">
                        <div class="col-lg-12 mx-auto text-center">
                            <h2 class="mb-2">Latest Blogs</h2>
                            {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p> */}
                        </div>
                    </div>

                    <div class="row">
                        {blogs}
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