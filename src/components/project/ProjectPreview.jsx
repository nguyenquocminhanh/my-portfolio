import React from 'react';
import Image from '../../assets/images/photo-11.jpeg';

export default function ProjectPreview() {
  return (
    <div className="col mb-9 masonry-item branding">
        <div className="card shadow-sm bg-white">
            <div className="bd-placeholder-img card-img-top bg-white project-thumbnail">
              <img src={Image}/>
            </div>

            <div className="card-body pt-0 pt-md-4">
              <h4 className='card-text text-center mb-2'>Designer Confirmation API</h4>
              <p className="card-text text-center" style={{fontSize: '0.9rem'}}>This is a wider card with supporting text</p>
              <div className="d-flex justify-content-center align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View <i className='fa fa-eye'></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Code <i className='fa fa-code'></i></button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
