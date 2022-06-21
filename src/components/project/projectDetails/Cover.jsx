import React from 'react';
import Image from '../../../assets/images/photo-12.jpeg';

export default function Cover() {
  return (
    <section class="bg-dark py-9 py-xl-12">
        <div class="overlay overlay-advanced mb-xl-n12">
        <div class="overlay-inner bg-cover" style={{backgroundImage: "url(" + Image + ")"}}></div>
        <div class="overlay-inner bg-gray-900 opacity-50"></div>
        </div>
        <div class="container my-5 my-xl-9">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center text-white">

                    <h2 class="h1">Ecommerce App</h2>
                    <p>Javascript</p>

                </div>
            </div>
        </div>
        <a class="scrollto text-light" href="#project-details-container"><i class="fa fa-angle-down arrow"></i></a>
    </section>
  )
}
