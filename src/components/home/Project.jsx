import React, { Component } from 'react';
import ProjectPreview from '../project/ProjectPreview';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
          <section id="project" class="py-9 pb-0 bg-light">
            <div class="row mb-8">
              <div class="col-lg-10 mx-auto text-center">
                <h2 class="mb-4">Projects</h2>
                
                <nav class="masonry-filter">
                  <a href="#" class="btn btn-sm btn-soft-secondary m-1 px-4 active" data-filter="*">All</a>
                  <a href="#" class="btn btn-sm btn-soft-secondary m-1 px-4" data-filter=".web">Web</a>
                  <a href="#" class="btn btn-sm btn-soft-secondary m-1 px-4" data-filter=".branding">Branding</a>
                  <a href="#" class="btn btn-sm btn-soft-secondary m-1 px-4" data-filter=".design">Design</a>
                </nav>
              </div>
            </div>
          
            <div class="album py-3 bg-light">
              <div class="container" style={{maxWidth: '1320px'}}>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <ProjectPreview/>
                  <ProjectPreview/>
                  <ProjectPreview/>
                  <ProjectPreview/>
                  <ProjectPreview/>
                  <ProjectPreview/>
                </div>
              </div>
              <div class="text-center">
                <Link to="/project" class="btn btn-dark px-8">View More</Link>
              </div>
            </div>


          {/* <div class="masonry-container row mt-n6 mx-n4">

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item branding">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative bg-white">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/photos/photo-9.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Branding</p>
                    <h4 class="h5 text-dark mb-0">Cliff</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item design">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-6.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Design</p>
                    <h4 class="h5 text-dark mb-0">Mountains</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item web">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-2.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Web</p>
                    <h4 class="h5 text-dark mb-0">Tropical beach</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item web">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-3.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Web</p>
                    <h4 class="h5 text-dark mb-0">Small islands</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item design">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-7.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Design</p>
                    <h4 class="h5 text-dark mb-0">Waves</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item web">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-5.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Web</p>
                    <h4 class="h5 text-dark mb-0">Bridge</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item design">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-8.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Design</p>
                    <h4 class="h5 text-dark mb-0">Workspace</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item branding">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-4.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Branding</p>
                    <h4 class="h5 text-dark mb-0">Long river</h4>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-sm-6 col-lg-4 px-4 pt-6 masonry-item branding">
              <a class="card border-0 rounded-3x overflow-hidden shadow-light hover-parent" href="portfolio-single-1.html">
                <div class="h--96 position-relative">
                  <div class="overlay overlay-advanced">
                    <div class="overlay-inner bg-image-holder bg-cover hover-zoom">
                      <img src="assets/images/portfolio/portfolio-9.jpg" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="card-img-overlay card-img-overlay-hover">
                  <div class="card-body bg-white">
                    <p class="small text-uppercase mb-1 text-muted">Branding</p>
                    <h4 class="h5 text-dark mb-0">Desert</h4>
                  </div>
                </div>
              </a>
            </div>

          </div> */}
        </section>
      );
    }
}

export default Portfolio;