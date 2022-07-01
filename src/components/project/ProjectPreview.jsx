import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectPreview(props) {
  let title = props.project ? props.project['title'] : '';
  let subTitle = props.project ? props.project['sub_title'] : '';
  let imgLink = props.project ? props.project['thumbnail_image'] : '';
  let projectLink = props.project ? props.project['project_link'] : '';
  let githubLink = props.project ? props.project['github_link'] : '';

  return (
    <div className="col mb-9 masonry-item branding">
        <div className="card shadow-sm bg-white h-100">
            <div className="bd-placeholder-img card-img-top bg-white project-thumbnail">
              <Link to={"/details/project/" + props.project['id']}>
                <img src={imgLink} style={{cursor: 'pointer', height: '225px', width: '100%'}}/>
              </Link>
            </div>

            <div className="card-body pt-0 pt-md-4">
              <Link to={"/details/project/" + props.project['id']}>
                <h5 className='card-text text-center mb-2' style={{color : '#1d1e29'}}>{title}</h5>
              </Link>
              <p className="card-text text-center" style={{fontSize: '0.9rem'}}>{subTitle}</p>
              <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                    <a href={projectLink} target="_blank" className="btn btn-sm btn-outline-secondary btnHover">View <i className='fa fa-eye'></i></a>
                    <a href={githubLink ? "https://" + githubLink : null} target="_blank" className="btn btn-sm btn-outline-secondary btnHover">Code <i className='fa fa-code'></i></a>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
