import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import parse from 'html-react-parser';
import truncate from 'truncate-html';

import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';

export default function AllBlog(props) {
  const allBlogs = props.filteredBlogs.slice(5 * (props.selectedPage - 1), 5 * props.selectedPage).map(blog => {
    return <CSSTransition key={blog['id']} timeout={700} classNames="item">
        <article class="col-12 pb-5 px-0 px-lg-3">
            <div class="card">
                <div class="card-header p-0 position-relative">
                    <Link to={"/details/blog/" + blog['id']}>
                        <img src={blog['thumbnail_image']} class="card-img" alt=""/>
                    </Link>
                    <Link to={"/category/blog/" + blog['category']['id']} class="badge badge-light badge-lg badge-blog">{blog['category']['name']}</Link>
                    <Link to={"/details/blog/" + blog['id']} class="blog__link"><i class="fa fa-arrow-right"></i></Link>
                </div>
                <div class="card-body">
                    <Link to={"/details/blog/" + blog['id']}>
                        <h2 class="h5"><a href="blog-single.html" rel="bookmark" class="text-dark">{blog['title']}</a></h2>
                    </Link>
                    {parse(truncate(blog['content'], 35, { byWords: true }))}
                </div>
                <div class="card-footer text-gray-700 d-flex justify-content-between">
                    <span><i className='fa fa-calendar-alt'></i> &nbsp;{setTime(blog['created_at'])}</span>
                    <span><i className='fa fa-clock'></i> &nbsp;{blog['duration']} read</span>
                </div>
            </div>
        </article>
    </CSSTransition>
  });
  
  const allCategories = props.categories.map(category => {
      return <li class="sidebar__cat__item" key={category['id']}>
              <Link to={"/category/blog/" + category['id']}>{category['name']} ({category['blog'].length})</Link>
        </li>
  });

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
  for (var i = 1; i <= numberOfPage; i++) {
      let selected = i;
      pagination.push(
        <li key={i.toString()} class={props.selectedPage == i ? 'page-item active' : 'page-item'}>
            <a class="page-link scrollto" href="#blog-all-container" onClick={() => props.pageSelected(selected)}>{i}</a>
        </li>
        )
  }
  let nextPage = numberOfPage == props.selectedPage ? null : <li class="page-item"><a class="page-link px-7 scrollto" onClick={props.nextPageClicked} href="#blog-all-container">Next</a></li>;
  let previousPage = 1 == props.selectedPage ? null : <li class="page-item"><a class="page-link px-7 scrollto" onClick={props.previousPageClicked} href="#blog-all-container">Previous</a></li>;

  
  return (
    <section class="pt-5 pt-lg-6 pb-0" id="blog-all-container">
        <div class="bg-white p-6 p-lg-9 shadow-light-lg rounded">
            <div class="row">
                <div class="col-lg-8 px-0">
                    <TransitionGroup className="todo-list">
                        {allBlogs}
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
                                <input onChange={props.filterBlog} value={props.searchKeyword} type="text" placeholder="Search Blog"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div class="widget">
                            <h4 class="widget-title">Recent Blogs</h4>
                            <ul class="rc__post">
                                {recentBlogs}
                            </ul>
                        </div>

                        <div class="widget">
                            <h4 class="widget-title">Categories</h4>
                            <ul class="sidebar__cat">
                                {allCategories}
                            </ul>
                        </div>

                        <div class="widget">
                            <h4 class="widget-title">Recent Comments</h4>
                            <ul class="sidebar__comment">
                                <li class="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li class="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li class="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                                <li class="sidebar__comment__item">
                                    <a href="blog-details.html">Rasalina Sponde</a>
                                    <p>There are many variations of passages of lorem ipsum available, but the majority have</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="widget">
                            <h4 class="widget-title">Popular Tags</h4>
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
