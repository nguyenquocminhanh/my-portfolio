import React from 'react';
import { Link } from 'react-router-dom';
import setTime from '../../../utility/setTime';
import removeDuplicate from '../../../utility/removeDuplicate';
import parse from 'html-react-parser';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, FacebookMessengerShareButton, FacebookMessengerIcon} from 'react-share';

export default function ProjectDetails(props) {
  let contactName = props.contactInfo ? props.contactInfo['name'] : '';
  let contactAddress = props.contactInfo ? props.contactInfo['address'] : '';
  let contactEmail = props.contactInfo ? props.contactInfo['email'] : '';
  let contactPhone = props.contactInfo ? props.contactInfo['phone_number'] : '';
  let githubLink = props.links ? props.links['github_link'] : '';
  let linkedinLink = props.links ? props.links['linkedin_link'] : '';

  let client = props.project ? props.project['client'] : '';
  let location = props.project ? props.project['location'] : '';
  let project_link = props.project ? props.project['project_link'] : '';
  let github_link = props.project ? props.project['github_link'] : '';
  // content
  let content = props.project['content'] ? props.project['content'] : '';
  let video_link = props.project ? props.project['demo_video'] : null;
  let design_img = props.project ? props.project['design_image'] : null;
  let db_img = props.project ? props.project['db_image'] : null;
  let projectDate = props.project ? props.project['date'] : '';

  const allCategories = props.categories.map(category => {
    return <li class="sidebar__cat__item" key={category['id']}>
            <Link to={"/category/project/" + category['id']}>{category['name']} ({category['project'].length})</Link>
      </li>
  });

  // recentProjects
  const recentProjects = props.projects.filter(project => JSON.stringify(project) !== JSON.stringify(props.project))
  .slice(0, 3).map(project => {
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

  // technologies
  let technologies = props.project['technologies'] ? props.project['technologies'].split(',') : [];

  const technologiesUsed = removeDuplicate(technologies).map((tech, i) => {
    return <li key={i.toString()}><a style={{cursor: 'pointer'}}>{tech}</a></li>
  })


  // previous, next project
  let previousProject = null;
  let nextProject = null;

  if (props.projects && props.project) {
    // NEXT PROJECT
    if (JSON.stringify(props.projects[props.projects.length - 1]) === JSON.stringify(props.project)) {        // last element in array => get next is first element in array
        nextProject = props.projects[0];
    } else {
        let index = props.projects.findIndex(project => {
            return project.id === props.project['id'];
        });
        nextProject = props.projects[index + 1];
    }

    // PREVIOUS PROJECT
    if (JSON.stringify(props.projects[0]) === JSON.stringify(props.project)) {        // first element in array => get previous is last element in array
        previousProject = props.projects[props.projects.length - 1];
    } else {
        let index = props.projects.findIndex(project => {
            return project.id === props.project['id'];
        });
        previousProject = props.projects[index - 1];
    }
  }

  let prevProject = previousProject ? <div className="col-xl-5 col-md-6">
    <div className="blog__next__prev__item">
        <h4 className="title"><Link to={"/details/project/" + previousProject['id']}>Previous Project</Link></h4>
        <div className="blog__next__prev__post">
            <div className="blog__next__prev__thumb">
                <Link to={"/details/project/" + previousProject['id']}><img style={{maxWidth: '100%'}} src={previousProject['thumbnail_image']} alt=""/></Link>
            </div>
            <div className="blog__next__prev__content">
                <span className="title"><Link to={"/details/project/" + previousProject['id']}>{previousProject['title']}</Link></span>
            </div>
        </div>
    </div>
  </div> : null;

  let nProject = nextProject ? <div className="col-xl-5 col-md-6">
    <div className="blog__next__prev__item next_post text-end">
        <h4 className="title text-right"><Link to={"/details/project/" + nextProject['id']}>Next Project</Link></h4>
        <div className="blog__next__prev__post">
            <div className="blog__next__prev__thumb">
                <Link to={"/details/project/" + nextProject['id']}><img style={{maxWidth: '100%'}} src={nextProject['thumbnail_image']} alt=""/></Link>
            </div>
            <div className="blog__next__prev__content">
                <span className="title"><Link to={"/details/project/" + nextProject['id']}>{nextProject['title']}</Link></span>
            </div>
        </div>
    </div>
  </div> : null;

  return (
    <section className="py-0" id="project-details-container">
        <div className="bg-white px-6 px-lg-9 py-9 py-xl-12 shadow-light-lg rounded">
            <div className="row">
                <div className="col-lg-8">

                    <article className="article-content">
                        <figure className='mt-0'>
                            <div className='p-0 position-relative'>
                            <img alt="Blog Article Figure" src={props.project['thumbnail_image']} className="img-fluid rounded-3x"/>
                            {props.project['category'] ? <Link to={"/category/project/" + props.project['category']['id']} class="badge badge-light badge-lg badge-blog">{props.project['category']['name']}</Link> : null}
                            </div>
                            <figcaption className="text-center mt-3">
                                <small className='text-muted'>{props.project['thumbnail_caption']}</small>
                            </figcaption>
                        </figure>
                        {parse(content)}

                        <h4 className='mt-7'>Technologies</h4>
                        <ul>
                            {technologies.map(tech => {
                                return <li>{tech}</li>
                            })}
                        </ul>

                        {design_img ? 
                        <div className='p-0 my-7'>
                            <h4>Design</h4>
                            <pre>
                                <img src={design_img}/>
                            </pre>
                        </div> : null}

                        {db_img ? 
                        <div className='p-0 my-7'>
                            <h4>Database</h4>
                            <pre>
                                <img src={db_img}/>
                            </pre>
                        </div> : null}

                        {video_link ? 
                        <div className='p-0 my-7'>
                            <h4>Demo Video</h4>
                            <div class="video-container">
                                <iframe className='responsive-iframe' src={video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div> : null}
                    </article>

                    <hr className="my-7"/>

                    <div className="blog__details__bottom justify-content-end">
                        <ul className="blog__details__social">
                            <li className="title">Share :</li>
                            <li className="social-icons">
                                <a>
                                    <LinkedinShareButton
                                        url={props.currentURL}
                                    >
                                        <LinkedinIcon size={25}/>
                                        
                                    </LinkedinShareButton>    
                                </a>
                                <a>
                                    <TwitterShareButton
                                        url={props.currentURL}
                                    >
                                        <TwitterIcon size={25}/>
                                        
                                    </TwitterShareButton>    
                                </a>
                                <a>
                                    <FacebookShareButton
                                        url={props.currentURL}
                                    >
                                        <FacebookIcon size={25}/>
                                        
                                    </FacebookShareButton>
                                </a>
                                <a>
                                    <FacebookMessengerShareButton
                                        url={props.currentURL}
                                        appId={process.env.REACT_APP_MESSENGER_APP_ID}
                                    >
                                        <FacebookMessengerIcon size={25} round/>
                                        
                                    </FacebookMessengerShareButton>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-7"/>

                    <div className="blog__next__prev">
                        <div className="row justify-content-between">
                            {prevProject}

                            {nProject}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="services__sidebar mb-9">
                        <div className="widget">
                            <h5 className="title">Project Information</h5>
                            <ul className="sidebar__contact__info">
                                <li><span>Date :</span> {setTime(projectDate, false, true)}</li>
                                <li><span>Location :</span> {location}</li>
                                <li><span>Client :</span> {client}</li>
                                <li><span>Project Link :</span> <a href={project_link} target="_blank">{project_link}</a></li>
                                <li><span>Github Link :</span> <a href={github_link != '' ? github_link : null} target="_blank">{github_link}</a></li>
                            </ul>
                        </div>
                        
                        <div className="widget">
                            <h5 className="title">Contact Information</h5>
                            <ul className="sidebar__contact__info">
                                <li><span>Name :</span> {contactName}</li>
                                <li><span>Address :</span> {contactAddress} USA</li>
                                <li><span>Email :</span> <a href={"mailto:" + contactEmail + "?subject=To Know More About You"}>minhanh.nguyenquoc@gmail.com</a></li>
                                <li><span>Phone :</span> + {contactPhone}</li>
                            </ul>
                            <ul className="sidebar__contact__social">
                                <li><a href={githubLink} target="_blank"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href={linkedinLink} target="_blank"><i className="fab fa-linkedin fa-lg"></i></a></li>
                            </ul>
                        </div>
                    </aside>
                    
                    <aside className="blog__sidebar">
                        <div className="widget">
                            <h4 className="widget-title">Technologies Used</h4>
                            <ul className="sidebar__tags">
                                {technologiesUsed}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Other Projects</h4>
                            <ul className="rc__post">
                                {recentProjects}
                            </ul>
                        </div>

                        <div className="widget">
                            <h4 className="widget-title">Categories</h4>
                            <ul className="sidebar__cat">
                                {allCategories}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
  )
}
