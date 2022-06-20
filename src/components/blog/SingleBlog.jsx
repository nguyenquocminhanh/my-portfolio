import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/photo-12.jpeg';
import Avatar from '../../assets/images/avatar1.jpeg';

export default function SingleBlog() {
  return (
    <Fragment>
        <section class="bg-dark py-9 py-xl-12">
            <div class="overlay overlay-advanced mb-xl-n12">
              <div class="overlay-inner bg-cover" style={{backgroundImage: "url(" + Image + ")"}}></div>
              <div class="overlay-inner bg-gray-900 opacity-50"></div>
            </div>
            <div class="container my-5 my-xl-9">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center text-white">

                        <h2 class="h1">How to create successful app</h2>
                        <p>4 January 2015 - 2 minutes read</p>

                    </div>
                </div>
            </div>
            <a class="scrollto text-light" href="#blog-container"><i class="fa fa-angle-down arrow"></i></a>
        </section>

        <section class="py-0" id="blog-container">
            <div class="bg-white px-6 px-lg-9 py-9 py-xl-12 shadow-light-lg rounded">
                <div class="row">
                    <div class="col-lg-8">

                        <article class="article">
                            <div class="avatar mr-4">
                                <img src={Avatar} alt="" class="avatar-img rounded-circle"/>
                            </div>
                            <span>Minh Nguyen</span>
                            <figure className='mt-5'>
                                <img alt="Blog Article Figure" src="../assets/images/photos/photo-9.jpg" class="img-fluid rounded-3x"/>
                                <figcaption class="text-center">Here is a caption for this picture</figcaption>
                            </figure>
                            <ul class="blog__post__meta">
                                <li><i class="fa fa-calendar-alt"></i> 25 january 2021</li>
                                <li><i class="fa fa-comments"></i> <a href="#">Comment (08)</a></li>
                                <li class="post-share"><a href="#"><i class="fa fa-share"></i> (18)</a></li>
                            </ul>
                            <h3>This is a headline</h3>
                            <p>Morbi sed turpis sodales ante luctus rhoncus. Vestibulum hendrerit tristique eleifend. Vestibulum vitae magna accumsan, pellentesque orci a, varius augue. Suspendisse quis urna nisi. Morbi eget quam sit amet risus posuere molestie at a arcu. Morbi rhoncus lacus neque. Nam vehicula ultricies mauris. Praesent bibendum quam bibendum, suscipit erat at, vestibulum lorem.</p>
                            <blockquote>
                                Nam dignissim nulla cursus maximus pulvinar. Sed eu laoreet erat, sed gravida lacus. Nunc ut nunc id risus luctus egestas. Nullam fringilla ex tellus, ut semper odio fermentum non.
                            </blockquote>
                            <p class="mb-7">Quisque finibus est ipsum, nec pharetra lorem tempor eget. Maecenas ullamcorper sapien id augue malesuada, blandit lacinia ligula eleifend. Proin et egestas eros, vel ullamcorper massa. Suspendisse velit ex, cursus vel tincidunt eu, mollis id diam. Aenean tristique mauris at turpis ultricies blandit. Proin luctus metus tortor, non dictum ligula ornare ac. Proin a purus erat.</p>
                            <p>Mauris vehicula, diam non dapibus accumsan, neque tortor hendrerit leo, eu consequat elit arcu sed nulla. Suspendisse potenti. Vestibulum dignissim fermentum turpis, eget posuere erat placerat et. Curabitur ac turpis imperdiet, ornare diam eu, ultrices libero. Nam in turpis pellentesque, tincidunt erat et, ornare arcu. Suspendisse non nisl nisi. Nullam egestas pulvinar rhoncus. Vestibulum suscipit metus nulla, non consequat nisi luctus quis. Nam non luctus sapien. Etiam orci felis, efficitur ac ornare in, ultrices vitae mauris.</p>
                            <h3 class="mt-7">This is a headline</h3>
                            <p>Ut eget metus porttitor, euismod elit quis, luctus leo. Nulla non urna in quam aliquam tincidunt. Morbi lectus est, sagittis vel bibendum vitae, vulputate et mauris. Sed quis gravida elit. Vivamus mauris turpis, fringilla imperdiet mattis id, fringilla id justo. Integer commodo nunc vitae nisl tincidunt, at porttitor arcu porta.</p>
                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </article>

                        <hr class="my-7"/>

                        <div class="blog__details__bottom">
                            <ul class="blog__details__tag">
                                <li class="title">Tag:</li>
                                <li class="tags-list">
                                    <a href="#">Business</a>
                                    <a href="#">Design</a>
                                    <a href="#">apps</a>
                                    <a href="#">data</a>
                                </li>
                            </ul>
                            <ul class="blog__details__social">
                                <li class="title">Share :</li>
                                <li class="social-icons">
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                                    <a href="#"><i class="fab fa-linkedin"></i></a>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>

                        <hr class="my-7"/>

                        <div class="blog__next__prev">
                            <div class="row justify-content-between">
                                <div class="col-xl-5 col-md-6">
                                    <div class="blog__next__prev__item">
                                        <h4 class="title">Previous Post</h4>
                                        <div class="blog__next__prev__post">
                                            <div class="blog__next__prev__thumb">
                                                <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
                                            </div>
                                            <div class="blog__next__prev__content">
                                                <strong class="title"><a href="blog-details.html">Digital Marketing Agency Pricing Guide.</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-md-6">
                                    <div class="blog__next__prev__item next_post text-end">
                                        <h4 class="title">Next Post</h4>
                                        <div class="blog__next__prev__post">
                                            <div class="blog__next__prev__thumb">
                                                <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
                                            </div>
                                            <div class="blog__next__prev__content">
                                                <strong class="title"><a href="blog-details.html">App Prototyping
                                                Types, Example & Usages.</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="my-7"/>

                        <h4 class="mb-7">(04) Comments</h4>
                        <ul class="article-comments">
                            <li>

                                <div class="d-flex align-items-center mb-2">
                                <div class="avatar mr-4">
                                    <img src="../assets/images/avatars/avatar-2.jpg" alt="" class="avatar-img"/>
                                </div>
                                <div>
                                    <b class="fn">Amanda Rhodes</b>
                                    <div class="small text-muted">6 January 2020 07:16</div>
                                </div>
                                </div>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                <strong>Reply</strong>

                                <ul>
                                    <li>

                                        <div class="d-flex align-items-center mb-2">
                                        <div class="avatar mr-4">
                                            <span class="avatar-title rounded">MW</span>
                                        </div>
                                        <div>
                                            <b class="fn">Mark White</b>
                                            <div class="small text-muted">6 January 2020 07:16</div>
                                        </div>
                                        </div>
                                        <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                        <a href="#">Reply</a>

                                        <ul>
                                        <li>

                                            <div class="d-flex align-items-center mb-2">
                                            <div class="avatar mr-4">
                                                <span class="avatar-title rounded">JW</span>
                                            </div>
                                            <div>
                                                <b class="fn">John Work</b>
                                                <div class="small text-muted">6 January 2020 07:16</div>
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

                            <div class="d-flex align-items-center mb-2">
                                <div class="avatar mr-4">
                                    <span class="avatar-title rounded">AC</span>
                                </div>
                                <div>
                                    <b class="fn">Alice Cook</b>
                                    <div class="small text-muted">6 January 2020 07:16</div>
                                </div>
                            </div>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            <a href="#">Reply</a>

                        </li>
                        </ul>

                        <hr class="my-7"/>

                        <h4 class="mb-5">Add comment</h4>
                        <form>
                            <div class="form-row">
                                <div class="col-md-6 col-lg-4 form-group">
                                <input type="text" id="author" class="form-control" name="author" size="30" aria-required='true' placeholder="Name"/>
                                </div>
                                <div class="col-md-6 col-lg-4 form-group">
                                <input type="email" id="email" class="form-control" name="cf-email" size="30" aria-required='true' placeholder="E-mail"/>
                                </div>
                                <div class="col-lg-4 form-group">
                                <input type="text" id="url" class="form-control" name="url" size="30" placeholder="Website"/>
                                </div>
                                <div class="col-12 form-group">
                                <textarea id="comment" class="form-control" name="comment" cols="45" rows="8" aria-required="true" placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-dark" id="submit" name="submit">Submit</button>
                        </form>

                     </div>
                    <div class="col-lg-4">
                        <aside class="blog__sidebar">
                            
                            <div class="widget">
                                <h4 class="widget-title">Recent Blogs</h4>
                                <ul class="rc__post">
                                    <li class="rc__post__item">
                                        <div class="rc__post__thumb">
                                            <Link to={"/blog/" + 1}><img style={{maxWidth: '100%'}} src={Image} alt=""/></Link>
                                        </div>
                                        <div class="rc__post__content">
                                            <h5 class="title"><Link to={"/blog/" + 1}>Best website traffick booster with
                                            great tools.</Link></h5>
                                            <span class="post-date"><i class="fa fa-calendar-alt"></i> 28 january 2021</span>
                                        </div>
                                    </li>
                                    <li class="rc__post__item">
                                        <div class="rc__post__thumb">
                                            <a href="blog-details.html"><img style={{maxWidth: '100%'}} src={Image} alt=""/></a>
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
    </Fragment>
  )
}
