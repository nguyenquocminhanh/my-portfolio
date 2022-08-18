import React, { Component } from 'react';
import ProjectPreview from '../project/ProjectPreview';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <section id="project" class="py-9 pb-0 bg-light">
        <div class="row mb-4">
          <div class="col-lg-10 mx-auto text-center">
            <h2>My Projects</h2>
          </div>
        </div> 
        <div class="album py-3 bg-light">
          <div class="container" style={{maxWidth: '1320px'}}>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {this.props.projects.slice(this.props.projects.length - 6, this.props.projects.length).map(project => {
                return <ProjectPreview key={project['id']} project={project}/>
              })}
            </div>
          </div>
          <div class="text-center">
            <Link to="/projects" class="btn btn-dark px-8">View More</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;