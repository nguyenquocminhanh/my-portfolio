import React from 'react';
import setTime from '../../../utility/setTime';

export default function Cover(props) {
  return (
    <section class="bg-dark py-9 py-xl-12">
        <div class="overlay overlay-advanced mb-xl-n12">
          <div class="overlay-inner bg-cover" style={{backgroundImage: "url(" + props.blog['wallpaper_image'] + ")"}}></div>
          <div class="overlay-inner bg-gray-900 opacity-50"></div>
        </div>
        <div class="container my-5 my-xl-9">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center text-white">

                    <h2 class="h1">{props.blog['title']}</h2>
                    <p>{setTime(props.blog['created_at'])} - {props.blog['duration']} read</p>

                </div>
            </div> 
        </div>
        <a class="scrollto text-light" href="#blog-container"><i class="fa fa-angle-down arrow"></i></a>
    </section>
  )
}
