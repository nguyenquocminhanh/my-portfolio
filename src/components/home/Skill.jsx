import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            // skill
            <section class="py-9 bg-light">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-lg-9 text-center text-lg-left">
                            <h2 class="mb-4">Skills</h2>
                            {/* <p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus.</p> */}
                        </div>
                    </div>
                    <div class="row mb-6 mb-xl-9">
                        <div class="col-md-6 mb-4 mb-md-0 ">
                            <p class="h6 mb-2">React JS</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="h6 mb-2">Laravel</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="h6 mb-2">HTML</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p class="h6 mb-2">CSS</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="h6 mb-2">JavaScript</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p class="h6 mb-2">MySQL</p>
                            <div class="progress mb-5 rounded-0 bg-white" style={{height: "7px"}}>
                                <div class="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-6 mb-xl-9">
                        <div class="col-md-6 mb-7 mb-md-0">
                            <h5 class="h3 text-center text-lg-left mb-6">Education</h5>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p class="h6 mb-0">MA Online Marketing</p>
                                <p class="text-muted">New York University, 2000 - 2003</p>
                            </div>
                            <br></br>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p class="h6 mb-0">BA Business &amp; Marketing</p>
                                <p class="text-muted">Silver Oak College, 1998 - 2000</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <h5 class="h3 text-center text-lg-left mb-6">Awards</h5>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p class="h6 mb-0">Best Product Launch</p>
                                <p class="text-muted">FGA Marketing Awards, 2015</p>
                            </div>
                            <br></br>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p class="h6 mb-0">Highly Commended</p>
                                <p class="text-muted">Women in Business, 2010</p>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-center text-lg-left mb-8">Experience</h2>

                    <div class="row">
                        <div class="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left">
                            <p class="h5 mb-0">2015 - 2020</p>
                            <p class="h6 mb-0">Marketing Manager, West House Productions</p>
                            <br></br>
                            <p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut.</p>
                        </div>

                        <div class="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left">
                            <p class="h5 mb-0">2012 - 2015</p>
                            <p class="h6 mb-0">Marketing Consultant, Jump High Marketing</p>
                            <br></br>
                            <p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut.</p>
                        </div>

                        <div class="col-lg-4 text-center text-lg-left">
                            <p class="h5 mb-0">2007 - 2011</p>
                            <p class="h6 mb-0">Product Manager, Trident Prototyping Studios</p>
                            <br></br>
                            <p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut.</p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Skill;