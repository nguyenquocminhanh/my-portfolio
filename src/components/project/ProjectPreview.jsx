import React from 'react';
import Image from '../../assets/images/photo-11.jpeg';

export default function ProjectPreview() {
  return (
    <div class="col mb-9 masonry-item branding">
        <div class="card shadow-sm bg-white">
            <div class="bd-placeholder-img card-img-top bg-white project-thumbnail">
              <img src={Image}/>
            </div>

            <div class="card-body pt-0 pt-md-4">
              <h4 className='card-text text-center'>Designer Confirmation API</h4>
              <p class="card-text text-center">This is a wider card with supporting text</p>
              <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
