import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';

export default function AllProject(props) {
    // projects
    const allProjects = props.filteredProjects.length > 0 ? props.filteredProjects.reverse().slice(5 * (props.selectedPage - 1), 5 * props.selectedPage).map(project => {
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
                                <a href={project['project_link']} target="_blank" className="btn btn-sm btn-outline-secondary btnHover">View <i className='fa fa-eye'></i></a>
                                <a href={project['frontend_link'] ? project['frontend_link'] : null} target="_blank" className="btn btn-sm btn-outline-secondary btnHover">Code <i className='fa fa-code'></i></a>
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
    <section class="pt-0 pb-0" id="blog-all-container">
        <div class="bg-white p-6 p-lg-9 pt-9 pt-md-12 pt-xl-12 shadow-light-lg rounded">
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