import React from 'react';
import Image from '../../assets/images/photo-11.jpeg';

export default function ProjectPreview() {
  return (
    <div class="col mb-9 masonry-item branding">
        <div class="card shadow-sm bg-white">
            <div class="bd-placeholder-img card-img-top bg-white project-thumbnail">
            <img src={Image}/>
            </div>

            <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
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
