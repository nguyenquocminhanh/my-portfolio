import React from 'react';
import { Link } from 'react-router-dom';

export default function HireMe() {
  return (
    <div class="bg-light rounded-lg mt-6 mt-lg-8 p-5 p-sm-8 p-lg-10 text-center">
        <h3 class="mb-5 mb-md-7">Start a project. Get in touch</h3>
        <Link to="/go" class="btn btn-dark px-8">Hire Me</Link>
    </div>
  )
}
