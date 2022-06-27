import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Comment from './comment/Comment';

import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';
import parse from 'html-react-parser';

export default function SingleBlog(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contentComment, setContent] = useState('');

  // tags
  let tags = props.blog['tags'] ? props.blog['tags'] : '';
  // content
  let content = props.blog['content'] ? props.blog['content'] : '';
  // comments
  let commentsElement = null;
  if(props.blog['comments']) {
      let comments = props.blog['comments'].filter(com => com['comment_reply_id'] == null);
      commentsElement = comments.map(comment => {
        return <Comment comment={comment} reply_id={comment['id']} commentPosted={props.commentPosted} key={comment['id']} likeComment={props.likeComment} unLikeComment={props.unLikeComment}/>
    })
  }

  // further readings
  const furtherReadings = props.blogs.filter(blog => JSON.stringify(blog) !== JSON.stringify(props.blog))
    .slice(0, 3).map(blog => {
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

  const allCategories = props.categories.map(category => {
    return <li class="sidebar__cat__item" key={category['id']}>
            <Link to={"/category/blog/" + category['id']}>{category['name']} ({category['blog'].length})</Link>
      </li>
  });

  // tags
  let allTags = [];
  props.blogs.forEach(blog => {
      allTags = allTags.concat(blog['tags'].split(','));
  })

  const popularTags = removeDuplicate(allTags).map((tag, i) => {
    return <li key={i.toString()}><a style={{cursor: 'pointer'}}>{tag}</a></li>
  })

  // previous, next blog
  let previousBlog = null;
  let nextBlog = null;

  if (props.blogs && props.blog) {
    // NEXT BLOG
    if (JSON.stringify(props.blogs[props.blogs.length - 1]) === JSON.stringify(props.blog)) {        // last element in array => get next is first element in array
        nextBlog = props.blogs[0];
    } else {
        let index = props.blogs.findIndex(blog => {
            return blog.id === props.blog['id'];
        });
        nextBlog = props.blogs[index + 1];
    }

    // PREVIOUS BLOG
    if (JSON.stringify(props.blogs[0]) === JSON.stringify(props.blog)) {        // first element in array => get previous is last element in array
        previousBlog = props.blogs[props.blogs.length - 1];
    } else {
        let index = props.blogs.findIndex(blog => {
            return blog.id === props.blog['id'];
        });
        previousBlog = props.blogs[index - 1];
    }
  }

  let prevBlog = previousBlog ? <div className="col-xl-5 col-md-6">
    <div className="blog__next__prev__item">
        <h4 className="title"><Link to={"/details/blog/" + previousBlog['id']}>Previous Post</Link></h4>
        <div className="blog__next__prev__post">
            <div className="blog__next__prev__thumb">
                <Link to={"/details/blog/" + previousBlog['id']}><img style={{maxWidth: '100%'}} src={previousBlog['thumbnail_image']} alt=""/></Link>
            </div>
            <div className="blog__next__prev__content">
                <span className="title"><Link to={"/details/blog/" + previousBlog['id']}>{previousBlog['title']}</Link></span>
            </div>
        </div>
    </div>
  </div> : null;

  let nBlog = nextBlog ? <div className="col-xl-5 col-md-6">
    <div className="blog__next__prev__item next_post text-end">
        <h4 className="title text-right"><Link to={"/details/blog/" + nextBlog['id']}>Next Post</Link></h4>
        <div className="blog__next__prev__post">
            <div className="blog__next__prev__thumb">
                <Link to={"/details/blog/" + nextBlog['id']}><img style={{maxWidth: '100%'}} src={nextBlog['thumbnail_image']} alt=""/></Link>
            </div>
            <div className="blog__next__prev__content">
                <span className="title"><Link to={"/details/blog/" + nextBlog['id']}>{nextBlog['title']}</Link></span>
            </div>
        </div>
    </div>
  </div> : null;

  return (
    <section className="py-0" id="blog-container">
        <div className="bg-white px-6 px-lg-9 py-9 shadow-light-lg rounded">
            <div className="row">
                <div className="col-lg-8">

                    <article className="article-content">
                        <div className="avatar mr-4">
                            <img src={props.blog['author_image']} alt="" className="avatar-img rounded-circle"/>
                        </div>
                        <span>{props.blog['author_name']}</span>
                        <figure className='mt-5'>
                            <img alt="Blog Article Figure" src={props.blog['thumbnail_image']} className="img-fluid rounded-3x"/>
                            <figcaption className="text-center mt-3">{props.blog['thumbnail_caption']}</figcaption>
                        </figure>
                        <ul className="blog__post__meta">
                            <li><i className="fa fa-calendar-alt"></i> {setTime(props.blog['created_at'])}</li>
                            <li><i className="fa fa-comments"></i><span className='text-muted'>Comment ({props.blog['comments'] ? props.blog['comments'].length : '0' })</span></li>
                            <li className="post-share"><span className='text-muted'><i className="fa fa-share"></i> ({props.blog['share_count']})</span></li>
                        </ul>
                        {parse(content)}
                    </article>

                    <hr className="my-7"/>

                    <div className="blog__details__bottom">
                        <ul className="blog__details__tag">
                            <li className="title">Tag:</li>
                            <li className="tags-list">
                                {tags.split(',').map((tag, i) => {
                                    return <a style={{cursor: 'pointer'}} key={i.toString()}>{tag}</a>
                                })}
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
                            {prevBlog}

                            {nBlog}
                        </div>
                    </div>

                    <hr className="my-7"/>

                    <h4 className="mb-7">({props.blog['comments'] ? props.blog['comments'].length : '0' }) Comments</h4>
                    <ul className="article-comments pl-0 pl-lg-5">
                        {commentsElement}
                    </ul>

                    <hr className="my-7"/>

                    <h4 className="mb-5">Add comment</h4>
                    <form onSubmit={e => { e.preventDefault(); props.commentPosted(name, email, phone, contentComment, null, null) }} id="submitForm">
                        <div className="form-row">
                            <div className="col-md-6 col-lg-4 form-group">
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} name="author" size="30" aria-required='true' placeholder="Name*"/>
                            </div>
                            <div className="col-md-6 col-lg-4 form-group">
                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} name="cf-email" size="30" aria-required='true' placeholder="E-mail*"/>
                            </div>
                            <div className="col-lg-4 form-group">
                            <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} name="url" size="30" placeholder="Phone Number*"/>
                            </div>
                            <div className="col-12 form-group">
                            <textarea className="form-control" onChange={(e) => setContent(e.target.value)} name="comment" cols="45" rows="8" aria-required="true" placeholder="Comment*"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark" id="submit" name="submit">Submit</button>
                    </form>

                    </div>
                <div className="col-lg-4">
                    <aside className="blog__sidebar">
                        
                        <div className="widget">
                            <h4 className="widget-title">Further Readings</h4>
                            <ul className="rc__post">
                                {furtherReadings}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Categories</h4>
                            <ul className="sidebar__cat">
                                {allCategories}
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
