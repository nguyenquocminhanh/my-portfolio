import React from 'react';
import { Link } from 'react-router-dom';

export default function AllProject(props) {
  return (
    <section class="pt-9 pb-0" id="all-project-container">
        <div class="bg-white p-6 p-lg-9 shadow-light-lg rounded">
            <div class="row">
                <div class="col-lg-8">
                    <article class="col-12 pb-5">
                        <div class="card">
                            <Link to={"/details/project/" + 1}>
                                <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
                            </Link>
                            <div class="card-body text-center">
                                <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
                                <p class="card-text text-center">This is a wider card with supporting text</p>
                            </div>
                            <div class="card-footer text-gray-700 d-sm-flex justify-content-center align-items-center pb-6 pt-0">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="col-12 pb-5">
                        <div class="card">
                            <Link to={"/details/project/" + 1}>
                                <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
                            </Link>
                            <div class="card-body text-center">
                                <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
                                <p class="card-text text-center">This is a wider card with supporting text</p>
                            </div>
                            <div class="card-footer text-gray-700 d-sm-flex justify-content-center align-items-center pb-6 pt-0">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="col-12 pb-5">
                        <div class="card">
                            <Link to={"/details/blog/" + 1}>
                                <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
                            </Link>
                            <div class="card-body text-center">
                                <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
                                <p class="card-text text-center">This is a wider card with supporting text</p>
                            </div>
                            <div class="card-footer text-gray-700 d-sm-flex justify-content-center align-items-center pb-6 pt-0">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="col-12 pb-5">
                        <div class="card">
                            <Link to={"/details/blog/" + 1}>
                                <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
                            </Link>
                            <div class="card-body text-center">
                                <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
                                <p class="card-text text-center">This is a wider card with supporting text</p>
                            </div>
                            <div class="card-footer text-gray-700 d-sm-flex justify-content-center align-items-center pb-6 pt-0">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article class="col-12 pb-5">
                        <div class="card">
                            <Link to={"/details/blog/" + 1}>
                                <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
                            </Link>
                            <div class="card-body text-center">
                                <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
                                <p class="card-text text-center">This is a wider card with supporting text</p>
                            </div>
                            <div class="card-footer text-gray-700 d-sm-flex justify-content-center align-items-center pb-6 pt-0">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    <nav class="mt-8">
                        <ul class="pagination pagination-pill justify-content-center mb-0">
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link px-7" href="#">Next</a></li>
                        </ul>
                    </nav>

                </div>


                <div class="col-lg-4">
                    <aside class="blog__sidebar">
                        <div class="widget">
                            <form action="#" class="search-form">
                                <input type="text" placeholder="Search Project"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="widget">
                            <h4 class="widget-title">Recent Projects</h4>
                            <ul class="rc__post">
                                <li class="rc__post__item">
                                    <div class="rc__post__thumb">
                                        <Link to={"/details/project/" + 1}><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-5.jpg" alt=""/></Link>
                                    </div>
                                    <div class="rc__post__content">
                                        <h5 class="title"><Link to={"/blog/" + 1}>Best website traffick booster with
                                        great tools.</Link></h5>
                                        <span class="post-date"><i class="fa fa-calendar-alt"></i> 28 january 2021</span>
                                    </div>
                                </li>
                                <li class="rc__post__item">
                                    <div class="rc__post__thumb">
                                        <a href="blog-details.html"><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-1.jpg" alt=""/></a>
                                    </div>
                                    <div class="rc__post__content">
                                        <h5 class="title"><a href="blog-details.html">How to become a best sale marketer
                                        in a year!</a></h5>
                                        <span class="post-date"><i class="fa fa-calendar-alt"></i> 28 january 2021</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="widget">
                            <h4 class="widget-title">Categories</h4>
                            <ul class="sidebar__cat">
                                <li class="sidebar__cat__item"><a href="blog.html">Web Design (6)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Web Development (4)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Product Design (9)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Animation (6)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Ui/Ux Design (8)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Branding Design (12)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Web Design (6)</a></li>
                                <li class="sidebar__cat__item"><a href="blog.html">Logo Design (6)</a></li>
                            </ul>
                        </div>
                        
                        <div class="widget">
                            <h4 class="widget-title">Popular Tags</h4>
                            <ul class="sidebar__tags">
                                <li><a href="blog.html">Business</a></li>
                                <li><a href="blog.html">Design</a></li>
                                <li><a href="blog.html">apps</a></li>
                                <li><a href="blog.html">landing page</a></li>
                                <li><a href="blog.html">data</a></li>
                                <li><a href="blog.html">website</a></li>
                                <li><a href="blog.html">book</a></li>
                                <li><a href="blog.html">Design</a></li>
                                <li><a href="blog.html">product design</a></li>
                                <li><a href="blog.html">landing page</a></li>
                                <li><a href="blog.html">data</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

    </section>
  )
}
