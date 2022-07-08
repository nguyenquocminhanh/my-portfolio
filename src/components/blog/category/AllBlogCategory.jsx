import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import parse from 'html-react-parser';
import truncate from 'truncate-html';

import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';

export default function AllBlogCategory(props) {
  const allBlogs = props.filteredBlogs.length > 0 ?props.filteredBlogs.slice(5 * (props.selectedPage - 1), 5 * props.selectedPage).map(blog => {
    return <CSSTransition key={blog['id']} timeout={700} classNames="item">
        <article class="col-12 pb-5 px-0 px-lg-3">
            <div class="card">
                <div class="card-header p-0 position-relative">
                    <Link to={"/details/blog/" + blog['id']}>
                        <img src={blog['thumbnail_image']} class="card-img" alt=""/>
                    </Link>
                    <Link to={"/category/blog/" + props.categoryID} class="badge badge-light badge-lg badge-blog">{props.category}</Link>
                    <Link to={"/details/blog/" + blog['id']} class="blog__link" title="Read more"><i class="fa fa-arrow-right"></i></Link>
                </div>
                <div class="card-body">
                    <Link to={"/details/blog/" + blog['id']}>
                        <h2 class="h5"><a href="blog-single.html" rel="bookmark" class="text-dark">{blog['title']}</a></h2>
                    </Link>
                    {parse(truncate(blog['description'], 35, { byWords: true }))}
                </div>
                <div class="card-footer text-gray-700 d-flex justify-content-between">
                    <span><i className='fa fa-calendar-alt'></i> &nbsp;{setTime(blog['created_at'])}</span>
                    <span><i className='fa fa-clock'></i> &nbsp;{blog['duration']} read</span>
                </div>
            </div>
        </article>
    </CSSTransition>
  }) : <CSSTransition timeout={700} classNames="item">
    <div className='text-center'>
        <h3 class="text-center">Sorry, but no data available.</h3>
        <img className='mx-auto' style={{maxWidth: "100%"}} src="https://assets.materialup.com/uploads/b17ea0c7-df76-4ce1-bf82-4a2cf6ae866d/preview.jpg"></img>
    </div>
  </CSSTransition>;;
  
  // categories
  const allCategories = props.categories.map(category => {
    return <li class="sidebar__cat__item" key={category['id']}>
            <Link to={"/category/blog/" + category['id']}>{category['name']} ({category['blog'].length})</Link>
    </li>
  });

  // comments
  const allComments = props.comments ? props.comments.map(comment => {
    return <li class="sidebar__comment__item">
        <Link to={"/details/blog/" + comment['blog_id']}>{comment['owner']}</Link>
        <p>{truncate(comment['content'], 15, { byWords: true })}</p>
    </li>
  }) : [];

  let allTags = [];
  props.allBlogs.forEach(blog => {
      allTags = allTags.concat(blog['tags'].split(','));
  })

  const popularTags = removeDuplicate(allTags).map((tag, i) => {
    return <li key={i.toString()}><a style={{cursor: 'pointer'}}>{tag}</a></li>
  })

  const recentBlogs = props.allBlogs.slice(0, 3).map(blog => {
      return <li class="rc__post__item">
      <div class="rc__post__thumb">
          <Link to={"/details/blog/" + blog['id']}><img style={{maxWidth: '100%'}} src={blog['thumbnail_image']} alt=""/></Link>
      </div>
      <div class="rc__post__content">
          <h5 class="title"><Link to={"/details/blog/" + blog['id']}>{blog['title']}</Link></h5>
          <span class="post-date"><i class="fa fa-calendar-alt"></i> {setTime(blog['created_at'])}</span>
      </div>
    </li>
  })

  // pagination
  const numberOfPage = Math.ceil(props.filteredBlogs.length / 5);
  let pagination = [];
  let nextPage = null;
  let previousPage = null;

  if (props.filteredBlogs.length > 0) {
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
    <section className="pt-0 pb-0" id="blog-category-container">
        <div className="bg-white p-6 p-lg-9  pt-9 pt-md-12 pt-xl-12 shadow-light-lg rounded">
            <div className="row">
                <div className="col-lg-8 px-0">
                    <TransitionGroup className="todo-list">
                        {allBlogs}
                    </TransitionGroup>

                    <nav className="mt-8">
                        <ul className="pagination pagination-pill justify-content-center mb-0">
                            {previousPage}
                            {pagination}
                            {nextPage}
                        </ul>
                    </nav>

                </div>


                <div className="col-lg-4">
                    <aside className="blog__sidebar">
                        <div className="widget">
                            <form action="#" class="search-form">
                                <input onChange={props.filterBlog} value={props.searchKeyword} type="text" placeholder="Search Blog"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div className="widget">
                            <h4 className="widget-title">Recent Blogs</h4>
                            <ul className="rc__post">
                                {recentBlogs}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Categories</h4>
                            <ul className="sidebar__cat">
                                {allCategories}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Recent Comments</h4>
                            <ul className="sidebar__comment">
                                {allComments}
                            </ul>
                        </div>
                        
                        <div className="widget">
                            <h4 className="widget-title">Popular Tags</h4>
                            <ul className="sidebar__tags">
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
