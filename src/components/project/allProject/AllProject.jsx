import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';

export default function AllProject(props) {
    // profects
    const allProjects = props.filteredProjects.length > 0 ? props.filteredProjects.slice(5 * (props.selectedPage - 1), 5 * props.selectedPage).map(project => {
        return <CSSTransition key={project['id']} timeout={700} classNames="item">
            <article class="col-12 pb-5 px-0 px-lg-3">
                <div class="card">
                    <div class="card-header p-0 position-relative">
                        <Link to={"/details/project/" + project['id']}>
                            <img src={project['thumbnail_image']} class="card-img" alt=""/>
                        </Link>
                        <Link to={"/category/project/" + project['category']['id']} class="badge badge-light badge-lg badge-blog">{project['category']['name']}</Link>
                        <Link to={"/details/project/" + project['id']} class="blog__link" title="Read more"><i class="fa fa-arrow-right"></i></Link>
                    </div>

                    <div className="card-body pt-0 pt-md-4">
                        <Link to={"/details/project/" + project['id']}>
                            <h4 className='card-text text-center mb-2' style={{color : '#1d1e29'}}>{project['title']}</h4>
                        </Link>
                        <p className="card-text text-center" style={{fontSize: '0.9rem'}}>{project['sub_title']}</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                                <a href={project['project_link']} target="_blank" className="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></a>
                                <a href={project['github_link']} target="_blank" className="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </CSSTransition>
    }) : <CSSTransition timeout={700} classNames="item">
        <div className='text-center'>
            <h3 class="text-center">Sorry, but no data available.</h3>
            <img className='mx-auto' style={{maxWidth: "100%"}} src="https://assets.materialup.com/uploads/b17ea0c7-df76-4ce1-bf82-4a2cf6ae866d/preview.jpg"></img>
        </div>
    </CSSTransition>;

    const allCategories = props.categories.map(category => {
        return <li class="sidebar__cat__item" key={category['id']}>
                <Link to={"/category/project/" + category['id']}>{category['name']} ({category['project'].length})</Link>
        </li>
    });

    let allTags = [];
    props.allProjects.forEach(project => {
        allTags = allTags.concat(project['technologies'].split(','));
    })

    const popularTags = removeDuplicate(allTags).map((tag, i) => {
    return <li key={i.toString()}><a style={{cursor: 'pointer'}}>{tag}</a></li>
    })

    const recentProjects = props.allProjects.slice(0, 3).map(project => {
        return <li class="rc__post__item">
        <div class="rc__post__thumb">
            <Link to={"/details/project/" + project['id']}><img style={{maxWidth: '100%'}} src={project['thumbnail_image']} alt=""/></Link>
        </div>
        <div class="rc__post__content">
            <h5 class="title"><Link to={"/details/project/" + project['id']}>{project['title']}</Link></h5>
            <span class="post-date">{project['sub_title']}</span>
        </div>
    </li>
    })

    // pagination
    const numberOfPage = Math.ceil(props.filteredProjects.length / 5);
    let pagination = [];
    let nextPage = null;
    let previousPage = null;

    if (props.filteredProjects.length > 0) {
    for (var i = 1; i <= numberOfPage; i++) {
        let selected = i;
        pagination.push(
            <li key={i.toString()} class={props.selectedPage == i ? 'page-item active' : 'page-item'}>
                <a class="page-link scrollto" href="#blog-all-container" onClick={() => props.pageSelected(selected)}>{i}</a>
            </li>
            )
    }
    nextPage = numberOfPage == props.selectedPage ? null : <li class="page-item"><a class="page-link px-7 scrollto" onClick={props.nextPageClicked} href="#blog-all-container">Next</a></li>;
    previousPage = 1 == props.selectedPage ? null : <li class="page-item"><a class="page-link px-7 scrollto" onClick={props.previousPageClicked} href="#blog-all-container">Previous</a></li>;
    } else {
        pagination = null
    }


    return (
    <section class="pt-5 pt-lg-0 pb-0" id="blog-all-container">
        <div class="bg-white p-6 p-lg-9 pt-lg-12 shadow-light-lg rounded">
            <div class="row">
                <div class="col-lg-8 px-0">
                    <TransitionGroup>
                        {allProjects}
                    </TransitionGroup>

                    {/* Pagination */}
                    <nav class="mt-8">
                        <ul class="pagination pagination-pill justify-content-center mb-0">
                            {previousPage}
                            {pagination}
                            {nextPage}
                        </ul>
                    </nav>

                </div>


                <div class="col-lg-4">
                    <aside class="blog__sidebar">
                        <div class="widget">
                            <form action="#" class="search-form">
                                <input onChange={props.filterProject} value={props.searchKeyword} type="text" placeholder="Search Project"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="widget">
                            <h4 class="widget-title">Recent Projects</h4>
                            <ul class="rc__post">
                                {recentProjects}
                            </ul>
                        </div>

                        <div class="widget">
                            <h4 class="widget-title">Categories</h4>
                            <ul class="sidebar__cat">
                                {allCategories}
                            </ul>
                        </div>
                        
                        <div class="widget">
                            <h4 class="widget-title">Popular Technologies</h4>
                            <ul class="sidebar__tags">
                                {popularTags}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>

    </section>
    )
}


//   return (
//     <section class="pt-5 pt-lg-9 pb-0" id="all-project-container">
//         <div class="bg-white p-6 p-lg-9 shadow-light-lg rounded">
//             <div class="row">
//                 <div class="col-lg-8 px-0">
//                     <article class="col-12 pb-5 px-0 px-lg-3">
//                         <div class="card">
//                             <div class="card-header p-0 position-relative">
//                                 <Link to={"/details/project/" + 1}>
//                                     <img src="../../assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
//                                 </Link>
//                                 <Link to={"/details/project/" + 1} class="blog__link"><i class="fa fa-arrow-right"></i></Link>
//                             </div>
//                             <div class="card-body text-center">
//                                 <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
//                                 <p class="card-text text-center">This is a wider card with supporting text</p>
//                             </div>
//                             <div class="card-footer text-gray-700 d-flex justify-content-center align-items-center pb-6 pt-0">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>

//                     <article class="col-12 pb-5 px-0 px-lg-3">
//                         <div class="card">
//                             <Link to={"/details/project/" + 1}>
//                                 <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
//                             </Link>
//                             <div class="card-body text-center">
//                                 <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
//                                 <p class="card-text text-center">This is a wider card with supporting text</p>
//                             </div>
//                             <div class="card-footer text-gray-700 d-flex justify-content-center align-items-center pb-6 pt-0">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>

//                     <article class="col-12 pb-5 px-0 px-lg-3">
//                         <div class="card">
//                             <Link to={"/details/blog/" + 1}>
//                                 <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
//                             </Link>
//                             <div class="card-body text-center">
//                                 <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
//                                 <p class="card-text text-center">This is a wider card with supporting text</p>
//                             </div>
//                             <div class="card-footer text-gray-700 d-flex justify-content-center align-items-center pb-6 pt-0">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>

//                     <article class="col-12 pb-5 px-0 px-lg-3">
//                         <div class="card">
//                             <Link to={"/details/blog/" + 1}>
//                                 <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
//                             </Link>
//                             <div class="card-body text-center">
//                                 <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
//                                 <p class="card-text text-center">This is a wider card with supporting text</p>
//                             </div>
//                             <div class="card-footer text-gray-700 d-flex justify-content-center align-items-center pb-6 pt-0">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>

//                     <article class="col-12 pb-5 px-0 px-lg-3">
//                         <div class="card">
//                             <Link to={"/details/blog/" + 1}>
//                                 <img src="assets/images/blog/image-blog-6.jpg" class="card-img" alt=""/>
//                             </Link>
//                             <div class="card-body text-center">
//                                 <Link to={"/details/blog/" + 1} style={{color: '#1d1e29'}}><h4 className='card-text'>Designer Confirmation API</h4></Link>
//                                 <p class="card-text text-center">This is a wider card with supporting text</p>
//                             </div>
//                             <div class="card-footer text-gray-700 d-flex justify-content-center align-items-center pb-6 pt-0">
//                                 <div class="btn-group">
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
//                                     <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>
                    
//                     <nav class="mt-8">
//                         <ul class="pagination pagination-pill justify-content-center mb-0">
//                             <li class="page-item active" aria-current="page"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
//                             <li class="page-item"><a class="page-link" href="#">2</a></li>
//                             <li class="page-item"><a class="page-link" href="#">3</a></li>
//                             <li class="page-item"><a class="page-link" href="#">4</a></li>
//                             <li class="page-item"><a class="page-link px-7" href="#">Next</a></li>
//                         </ul>
//                     </nav>

//                 </div>


//                 <div class="col-lg-4">
//                     <aside class="blog__sidebar">
//                         <div class="widget">
//                             <form action="#" class="search-form">
//                                 <input type="text" placeholder="Search Project"/>
//                                 <button type="submit"><i class="fa fa-search"></i></button>
//                             </form>
//                         </div>
//                         <div class="widget">
//                             <h4 class="widget-title">Recent Projects</h4>
//                             <ul class="rc__post">
//                                 <li class="rc__post__item">
//                                     <div class="rc__post__thumb">
//                                         <Link to={"/details/project/" + 1}><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-5.jpg" alt=""/></Link>
//                                     </div>
//                                     <div class="rc__post__content">
//                                         <h5 class="title"><Link to={"/blog/" + 1}>Best website traffick booster with
//                                         great tools.</Link></h5>
//                                         <span class="post-date"><i class="fa fa-calendar-alt"></i> 28 january 2021</span>
//                                     </div>
//                                 </li>
//                                 <li class="rc__post__item">
//                                     <div class="rc__post__thumb">
//                                         <a href="blog-details.html"><img style={{maxWidth: '100%'}} src="assets/images/blog/image-blog-1.jpg" alt=""/></a>
//                                     </div>
//                                     <div class="rc__post__content">
//                                         <h5 class="title"><a href="blog-details.html">How to become a best sale marketer
//                                         in a year!</a></h5>
//                                         <span class="post-date"><i class="fa fa-calendar-alt"></i> 28 january 2021</span>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div class="widget">
//                             <h4 class="widget-title">Categories</h4>
//                             <ul class="sidebar__cat">
//                                 <Link class="sidebar__cat__item" to={"/category/project/" + 1}><li><a href="blog.html">Web Design (6)</a></li></Link>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Web Development (4)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Product Design (9)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Animation (6)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Ui/Ux Design (8)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Branding Design (12)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Web Design (6)</a></li>
//                                 <li class="sidebar__cat__item"><a href="blog.html">Logo Design (6)</a></li>
//                             </ul>
//                         </div>
                        
//                         <div class="widget">
//                             <h4 class="widget-title">Popular Tags</h4>
//                             <ul class="sidebar__tags">
//                                 <li><a href="blog.html">Business</a></li>
//                                 <li><a href="blog.html">Design</a></li>
//                                 <li><a href="blog.html">apps</a></li>
//                                 <li><a href="blog.html">landing page</a></li>
//                                 <li><a href="blog.html">data</a></li>
//                                 <li><a href="blog.html">website</a></li>
//                                 <li><a href="blog.html">book</a></li>
//                                 <li><a href="blog.html">Design</a></li>
//                                 <li><a href="blog.html">product design</a></li>
//                                 <li><a href="blog.html">landing page</a></li>
//                                 <li><a href="blog.html">data</a></li>
//                             </ul>
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </div>

//     </section>
//   )
// }
