import React from 'react'
import HireMe from '../common/HireMe'

export default function Testimonial(props) {
  const testimonials = props.testimonials === [] ? [] :
  props.testimonials.map(testimonial => {
      return <div class="col-md-6 col-lg-6 px-4 pt-6" key={testimonial['id']}>
          <div class="p-7 shadow-light shadow-lift rounded-3x bg-white">
              <footer class="d-flex align-items-center text-left mb-6">
                  <div class="avatar" style={{minWidth: "100%"}}>
                      <img class="avatar-img rounded-circle" src={testimonial['profile_image']} alt=""/>
                  </div>
                  <div class="ml-3">
                      <h4 class="h6 mb-0">{testimonial['name']}</h4>
                      <small>{testimonial['position']}</small>
                  </div>
              </footer>
          
              <p><i class="fa fa-quote-left"></i> {testimonial['content']} <i class="fa fa-quote-right"></i></p>
          </div>
      </div>
  });

  return (
        <section class="pt-0 pb-9 pb-xl-12">
            <div class="container mt-n9 mt-xl-n12">
                <div class="row mx-n4 mt-n6 mb-9 mb-xl-12">

                    {testimonials}

                </div>

                <HireMe showToast={props.showToast}/>

            </div>
        </section>
  )
}
