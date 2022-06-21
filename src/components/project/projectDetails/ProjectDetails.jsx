import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/photo-12.jpeg';
import Avatar from '../../../assets/images/avatar1.jpeg';

export default function ProjectDetails() {
  return (
    <section class="py-0" id="project-details-container">
        <div class="bg-white px-6 px-lg-9 py-9 py-xl-12 shadow-light-lg rounded">
            <div class="row">
                <div class="col-lg-8">

                    <article class="article">
                        <div class="avatar mr-4">
                            <img src={Avatar} alt="" class="avatar-img rounded-circle"/>
                        </div>
                        <span>Minh Nguyen</span>
                        <figure className='mt-5'>
                            <img alt="Blog Article Figure" src="../../assets/images/photos/photo-9.jpg" class="img-fluid rounded-3x"/>
                            <figcaption class="text-center">Here is a caption for this picture</figcaption>
                        </figure>
                        <ul class="blog__post__meta">
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
                                    <h4 class="title">Previous Project</h4>
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
                                    <h4 class="title">Next Project</h4>
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
                </div>
                <div class="col-lg-4">
                    <aside class="services__sidebar mb-9">
                        <div class="widget">
                            <h5 class="title">Project Information</h5>
                            <ul class="sidebar__contact__info">
                                <li><span>Date :</span> January, 2021</li>
                                <li><span>Location :</span> East Meadow NY 11554</li>
                                <li><span>Client :</span> American</li>
                                <li class="cagegory"><span>Category :</span>
                                    <a href="portfolio.html">Photo,</a>
                                    <a href="portfolio.html">UI/UX</a>
                                </li>
                                <li><span>Project Link :</span> <a href="portfolio-details.html">https://www.yournews.com/</a></li>
                                <li><span>Github Link :</span> <a href="portfolio-details.html">https://www.github.com/</a></li>
                            </ul>
                        </div>
                        
                        <div class="widget">
                            <h5 class="title">Contact Information</h5>
                            <ul class="sidebar__contact__info">
                                <li><span>Name :</span> Minh Nguyen</li>
                                <li><span>Address :</span> 8638 Amarica Stranfod, <br></br> Mailbon Star</li>
                                <li><span>Email :</span> yourmail@gmail.com</li>
                                <li><span>Phone :</span> +7464 0187 3535 645</li>
                            </ul>
                            <ul class="sidebar__contact__social">
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </aside>


                    <aside class="blog__sidebar">
                        <div class="widget">
                            <h4 class="widget-title">Recent Projects</h4>
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
                                <Link class="sidebar__cat__item" to={"/category/project/" + 1}><li><a href="blog.html">Web Design (6)</a></li></Link>
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
