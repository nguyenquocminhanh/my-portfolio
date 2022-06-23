import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            // skill
            <section className="py-9 bg-light">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h2 className="mb-4">Skills</h2>
                            {/* <p>Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec sed fringilla lectus, non vulputate orci. Integer id libero euismod, interdum ligula vel, porttitor magna. Sed euismod maximus finibus.</p> */}
                        </div>
                    </div>
                    <div className="row mb-6 mb-xl-9">
                        <div className="col-md-6 mb-4 mb-md-0 ">
                            <p className="h6 mb-2">React JS</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="h6 mb-2">Laravel</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="h6 mb-2">HTML</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="h6 mb-2">CSS</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="h6 mb-2">JavaScript</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p className="h6 mb-2">MySQL</p>
                            <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #FCAF17'}}>
                                <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-6 mb-xl-9">
                        <div className="col-md-6 mb-7 mb-md-0">
                            <h5 className="h3 text-center text-lg-left mb-6">Education</h5>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p className="h6 mb-0">MA Online Marketing</p>
                                <p className="text-muted">New York University, 2000 - 2003</p>
                            </div>
                            <br></br>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p className="h6 mb-0">BA Business &amp; Marketing</p>
                                <p className="text-muted">Silver Oak College, 1998 - 2000</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5 className="h3 text-center text-lg-left mb-6">Awards</h5>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p className="h6 mb-0">Best Product Launch</p>
                                <p className="text-muted">FGA Marketing Awards, 2015</p>
                            </div>
                            <br></br>
                            <div className='col-md-12 text-center text-lg-left p-0'>
                                <p className="h6 mb-0">Highly Commended</p>
                                <p className="text-muted">Women in Business, 2010</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-center text-lg-left mb-8">Experience</h2>

                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left">
                            <p className="h5 mb-0">2015 - 2020</p>
                            <p className="h6 mb-0">Marketing Manager, West House Productions</p>
                            <br></br>
                            <p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut.</p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left">
                            <p className="h5 mb-0">2012 - 2015</p>
                            <p className="h6 mb-0">Marketing Consultant, Jump High Marketing</p>
                            <br></br>
                            <p>Brief description of the position and the responsibilities you had in this post. Fusce massa dolor, mattis sed ultrices ut.</p>
                        </div>

                        <div className="col-lg-4 text-center text-lg-left">
                            <p className="h5 mb-0">2007 - 2011</p>
                            <p className="h6 mb-0">Product Manager, Trident Prototyping Studios</p>
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