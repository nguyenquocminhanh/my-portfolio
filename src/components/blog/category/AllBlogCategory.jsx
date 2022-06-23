import React from 'react';
import { Link } from 'react-router-dom';

export default function AllBlogCategory() {
  return (
    <section className="pt-9 pb-0" id="blog-category-container">
        <div className="bg-white p-6 p-lg-9 shadow-light-lg rounded">
            <div className="row">
                <div className="col-lg-8">
                    <article className="col-12 pb-5">
                        <div className="card">
                            <div className="card-header p-0 position-relative">
                                <Link to={"/details/blog/" + 1}>
                                    <img src="../../assets/images/blog/image-blog-6.jpg" className="card-img" alt=""/>
                                </Link>
                                <Link to={"/details/blog/" + 1} className="blog__link"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                            <div className="card-body">
                                <h2 className="h5"><a href="blog-single.html" rel="bookmark" className="text-dark">She was having the most beautiful dream</a></h2>
                                <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula. Etiam molestie placerat elit nec tincidunt. Sed eu venenatis purus, at posuere mi...</p>
                            </div>
                            <div className="card-footer text-gray-700 d-sm-flex justify-content-between">
                                <span>
                                    <a href="blog-single.html" rel="bookmark" className="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00">4 May 2015</time></a>
                                </span>
                                <span>1 minute read</span>
                            </div>
                        </div>
                    </article>

                    <article className="col-12 pb-5">
                        <div className="card">
                            <a href="blog-single.html" rel="bookmark">
                                <img src="assets/images/blog/image-blog-3.jpg" className="card-img" alt=""/>
                            </a>
                            <div className="card-body">
                                <h2 className="h5"><a href="blog-single.html" rel="bookmark" className="text-dark">Something that I’ve never told anyone before</a></h2>
                                <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula. Etiam molestie placerat elit nec tincidunt. Sed eu venenatis purus, at posuere mi...</p>
                            </div>
                            <div className="card-footer text-gray-700 d-sm-flex justify-content-between">
                                <span>
                                    <a href="blog-single.html" rel="bookmark" className="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00">4 May 2015</time></a>
                                </span>
                                <span>1 minute read</span>
                            </div>
                        </div>
                    </article>

                    <article className="col-12 pb-5">
                        <div className="card">
                            <a href="blog-single.html" rel="bookmark">
                            <img src="assets/images/blog/image-blog-1.jpg" className="card-img" alt=""/>
                            </a>
                            <div className="card-body">
                            <h2 className="h5"><a href="blog-single.html" rel="bookmark" className="text-dark">Take your music with you everywhere</a></h2>
                            <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula. Etiam molestie placerat elit nec tincidunt. Sed eu venenatis purus, at posuere mi...</p>
                            </div>
                            <div className="card-footer text-gray-700 d-sm-flex justify-content-between">
                            <span>
                                <a href="blog-single.html" rel="bookmark" className="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00">4 May 2015</time></a>
                            </span>
                            <span>1 minute read</span>
                            </div>
                        </div>
                    </article>

                    <article className="col-12 pb-5">
                        <div className="card">
                            <a href="blog-single.html" rel="bookmark">
                            <img src="assets/images/blog/image-blog-7.jpg" className="card-img" alt=""/>
                            </a>
                            <div className="card-body">
                            <h2 className="h5"><a href="blog-single.html" rel="bookmark" className="text-dark">Why do people think clouds are interesting?</a></h2>
                            <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula. Etiam molestie placerat elit nec tincidunt. Sed eu venenatis purus, at posuere mi...</p>
                            </div>
                            <div className="card-footer text-gray-700 d-sm-flex justify-content-between">
                            <span>
                                <a href="blog-single.html" rel="bookmark" className="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00">4 May 2015</time></a>
                            </span>
                            <span>1 minute read</span>
                            </div>
                        </div>
                    </article>

                    <article className="col-12 pb-5">
                        <div className="card">
                            <a href="blog-single.html" rel="bookmark">
                            <img src="assets/images/blog/image-blog-5.jpg" className="card-img" alt=""/>
                            </a>
                            <div className="card-body">
                            <h2 className="h5"><a href="blog-single.html" rel="bookmark" className="text-dark">Lessons I’ve learned by staying positive</a></h2>
                            <p>Donec volutpat leo eget est venenatis, quis sollicitudin mauris vehicula. Etiam molestie placerat elit nec tincidunt. Sed eu venenatis purus, at posuere mi...</p>
                            </div>
                            <div className="card-footer text-gray-700 d-sm-flex justify-content-between">
                            <span>
                                <a href="blog-single.html" rel="bookmark" className="text-gray-700"><time datetime="2015-05-04T15:05:34+00:00">4 May 2015</time></a>
                            </span>
                            <span>1 minute read</span>
                            </div>
                        </div>
                    </article>

                    <nav className="mt-8">
                        <ul className="pagination pagination-pill justify-content-center mb-0">
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1 <span className="sr-only">(current)</span></a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link px-7" href="#">Next</a></li>
                        </ul>
                    </nav>

                </div>


                <div className="col-lg-4">
                    <aside className="blog__sidebar">
                        <div className="widget">
                            <form action="#" className="search-form">
                                <input type="text" placeholder="Search Blog"/>
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div className="widget">
                            <h4 className="widget-title">Recent Blogs</h4>
                            <ul className="rc__post">
                                <li className="rc__post__item">
                                    <div className="rc__post__thumb">
                                        <Link to={"/blog/" + 1}><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-5.jpg" alt=""/></Link>
                                    </div>
                                    <div className="rc__post__content">
                                        <h5 className="title"><Link to={"/blog/" + 1}>Best website traffick booster with
                                        great tools.</Link></h5>
                                        <span className="post-date"><i className="fa fa-calendar-alt"></i> 28 january 2021</span>
                                    </div>
                                </li>
                                <li className="rc__post__item">
                                    <div className="rc__post__thumb">
                                        <a href="blog-details.html"><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-1.jpg" alt=""/></a>
                                    </div>
                                    <div className="rc__post__content">
                                        <h5 className="title"><a href="blog-details.html">How to become a best sale marketer
                                        in a year!</a></h5>
                                        <span className="post-date"><i className="fa fa-calendar-alt"></i> 28 january 2021</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Categories</h4>
                            <ul className="sidebar__cat">
                                <Link className="sidebar__cat__item" to={"/category/blog/" + 1}><li><a href="blog.html">Web Design (6)</a></li></Link>
                                <li className="sidebar__cat__item"><a href="blog.html">Web Development (4)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Product Design (9)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Animation (6)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Ui/Ux Design (8)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Branding Design (12)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Web Design (6)</a></li>
                                <li className="sidebar__cat__item"><a href="blog.html">Logo Design (6)</a></li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Recent Comments</h4>
                            <ul className="sidebar__comment">
                                <li className="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li className="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li className="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li className="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="widget">
                            <h4 className="widget-title">Popular Tags</h4>
                            <ul className="sidebar__tags">
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
