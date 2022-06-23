import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './comment/Comment';
import Image from '../../../assets/images/photo-12.jpeg';
import Avatar from '../../../assets/images/avatar1.jpeg';
import User from '../../../assets/images/profile-user.png';

export default function SingleBlog() {
  return (
    <section className="py-0" id="blog-container">
        <div className="bg-white px-6 px-lg-9 py-9 py-xl-12 shadow-light-lg rounded">
            <div className="row">
                <div className="col-lg-8">

                    <article className="article">
                        <div className="avatar mr-4">
                            <img src={Avatar} alt="" className="avatar-img rounded-circle"/>
                        </div>
                        <span>Minh Nguyen</span>
                        <figure className='mt-5'>
                            <img alt="Blog Article Figure" src="../../assets/images/photos/photo-9.jpg" className="img-fluid rounded-3x"/>
                            <figcaption className="text-center">Here is a caption for this picture</figcaption>
                        </figure>
                        <ul className="blog__post__meta">
                            <li><i className="fa fa-calendar-alt"></i> 25 january 2021</li>
                            <li><i className="fa fa-comments"></i> <a href="#">Comment (08)</a></li>
                            <li className="post-share"><a href="#"><i className="fa fa-share"></i> (18)</a></li>
                        </ul>
                        <h3>This is a headline</h3>
                        <p>Morbi sed turpis sodales ante luctus rhoncus. Vestibulum hendrerit tristique eleifend. Vestibulum vitae magna accumsan, pellentesque orci a, varius augue. Suspendisse quis urna nisi. Morbi eget quam sit amet risus posuere molestie at a arcu. Morbi rhoncus lacus neque. Nam vehicula ultricies mauris. Praesent bibendum quam bibendum, suscipit erat at, vestibulum lorem.</p>
                        <blockquote>
                            Nam dignissim nulla cursus maximus pulvinar. Sed eu laoreet erat, sed gravida lacus. Nunc ut nunc id risus luctus egestas. Nullam fringilla ex tellus, ut semper odio fermentum non.
                        </blockquote>
                        <p className="mb-7">Quisque finibus est ipsum, nec pharetra lorem tempor eget. Maecenas ullamcorper sapien id augue malesuada, blandit lacinia ligula eleifend. Proin et egestas eros, vel ullamcorper massa. Suspendisse velit ex, cursus vel tincidunt eu, mollis id diam. Aenean tristique mauris at turpis ultricies blandit. Proin luctus metus tortor, non dictum ligula ornare ac. Proin a purus erat.</p>
                        <p>Mauris vehicula, diam non dapibus accumsan, neque tortor hendrerit leo, eu consequat elit arcu sed nulla. Suspendisse potenti. Vestibulum dignissim fermentum turpis, eget posuere erat placerat et. Curabitur ac turpis imperdiet, ornare diam eu, ultrices libero. Nam in turpis pellentesque, tincidunt erat et, ornare arcu. Suspendisse non nisl nisi. Nullam egestas pulvinar rhoncus. Vestibulum suscipit metus nulla, non consequat nisi luctus quis. Nam non luctus sapien. Etiam orci felis, efficitur ac ornare in, ultrices vitae mauris.</p>
                        <h3 className="mt-7">This is a headline</h3>
                        <p>Ut eget metus porttitor, euismod elit quis, luctus leo. Nulla non urna in quam aliquam tincidunt. Morbi lectus est, sagittis vel bibendum vitae, vulputate et mauris. Sed quis gravida elit. Vivamus mauris turpis, fringilla imperdiet mattis id, fringilla id justo. Integer commodo nunc vitae nisl tincidunt, at porttitor arcu porta.</p>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    </article>

                    <hr className="my-7"/>

                    <div className="blog__details__bottom">
                        <ul className="blog__details__tag">
                            <li className="title">Tag:</li>
                            <li className="tags-list">
                                <a href="#">Business</a>
                                <a href="#">Design</a>
                                <a href="#">apps</a>
                                <a href="#">data</a>
                            </li>
                        </ul>
                        <ul className="blog__details__social">
                            <li className="title">Share :</li>
                            <li className="social-icons">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter-square"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-7"/>

                    <div className="blog__next__prev">
                        <div className="row justify-content-between">
                            <div className="col-xl-5 col-md-6">
                                <div className="blog__next__prev__item">
                                    <h4 className="title">Previous Post</h4>
                                    <div className="blog__next__prev__post">
                                        <div className="blog__next__prev__thumb">
                                            <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
                                        </div>
                                        <div className="blog__next__prev__content">
                                            <span className="title"><a href="blog-details.html">Digital Marketing Agency Pricing Guide.</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6">
                                <div className="blog__next__prev__item next_post text-end">
                                    <h4 className="title">Next Post</h4>
                                    <div className="blog__next__prev__post">
                                        <div className="blog__next__prev__thumb">
                                            <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
                                        </div>
                                        <div className="blog__next__prev__content">
                                            <span className="title"><a href="blog-details.html">App Prototyping
                                            Types, Example & Usages.</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-7"/>

                    <h4 className="mb-7">(04) Comments</h4>
                    <ul className="article-comments">
                        <Comment/>

                        <li className='mb-9'>
                            <div className="d-flex align-items-center mb-2">
                                <div className="avatar mr-4">
                                    <img src={User} alt="" className="avatar-img"/>
                                </div>
                                <div>
                                    <b className="fn">Amanda Rhodes</b>
                                    <div className="small text-muted">6 January 2020 07:16</div>
                                </div>
                            </div>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            <i className="far fa-thumbs-up"></i> 3 <strong style={{cursor: 'pointer', color: '#FCAF17'}}>Reply</strong>
                            <ul>
                                <li>

                                    <div className="d-flex align-items-center mb-2">
                                    <div className="avatar mr-4">
                                        <span className="avatar-title rounded">MW</span>
                                    </div>
                                    <div>
                                        <b className="fn">Mark White</b>
                                        <div className="small text-muted">6 January 2020 07:16</div>
                                    </div>
                                    </div>
                                    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                    <a href="#">Reply</a>

                                    <ul>
                                    <li>

                                        <div className="d-flex align-items-center mb-2">
                                        <div className="avatar mr-4">
                                            <span className="avatar-title rounded">JW</span>
                                        </div>
                                        <div>
                                            <b className="fn">John Work</b>
                                            <div className="small text-muted">6 January 2020 07:16</div>
                                        </div>
                                        </div>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                        <a href="#">Reply</a>

                                    </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    <li>

                        <div className="d-flex align-items-center mb-2">
                            <div className="avatar mr-4">
                                <span className="avatar-title rounded">AC</span>
                            </div>
                            <div>
                                <b className="fn">Alice Cook</b>
                                <div className="small text-muted">6 January 2020 07:16</div>
                            </div>
                        </div>
                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        <a href="#">Reply</a>

                    </li>
                    </ul>

                    <hr className="my-7"/>

                    <h4 className="mb-5">Add comment</h4>
                    <form>
                        <div className="form-row">
                            <div className="col-md-6 col-lg-4 form-group">
                            <input type="text" id="author" className="form-control" name="author" size="30" aria-required='true' placeholder="Name*"/>
                            </div>
                            <div className="col-md-6 col-lg-4 form-group">
                            <input type="email" id="email" className="form-control" name="cf-email" size="30" aria-required='true' placeholder="E-mail*"/>
                            </div>
                            <div className="col-lg-4 form-group">
                            <input type="text" id="url" className="form-control" name="url" size="30" placeholder="Phone Number*"/>
                            </div>
                            <div className="col-12 form-group">
                            <textarea id="comment" className="form-control" name="comment" cols="45" rows="8" aria-required="true" placeholder="Comment*"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark" id="submit" name="submit">Submit</button>
                    </form>

                    </div>
                <div className="col-lg-4">
                    <aside className="blog__sidebar">
                        
                        <div className="widget">
                            <h4 className="widget-title">Recent Blogs</h4>
                            <ul className="rc__post">
                                <li className="rc__post__item">
                                    <div className="rc__post__thumb">
                                        <Link to={"/blog/" + 1}><img style={{maxWidth: '100%'}} src={Image} alt=""/></Link>
                                    </div>
                                    <div className="rc__post__content">
                                        <h5 className="title"><Link to={"/blog/" + 1}>Best website traffick booster with
                                        great tools.</Link></h5>
                                        <span className="post-date"><i className="fa fa-calendar-alt"></i> 28 january 2021</span>
                                    </div>
                                </li>
                                <li className="rc__post__item">
                                    <div className="rc__post__thumb">
                                        <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
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
