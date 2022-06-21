import React from 'react';

// bgColor, title, description

export default function Cover(props) {
  return (
    <section class={props.bgColor + " py-9 py-xl-12"}>
        <div class="container my-5 my-xl-9">
            <div class="row">
            <div class="col-lg-8 mx-auto text-center text-white">

                <h2 class="h1">{props.title}</h2>
                <p>{props.description}</p>

            </div>
            </div>
        </div>
        {props.hasArrowDown ? 
          <a class="scrollto text-light" href={props.hrefArrowDown}><i class="fa fa-angle-down arrow"></i></a>
          : null}
    </section>
  )
}
