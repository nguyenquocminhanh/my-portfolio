import React, { Component, Fragment } from 'react';
import Image from '../../src/assets/images/maintenance.jpeg';

class MaintenacePage extends Component {
    render() {
        return (
            <Fragment>
                <section class="py-0">
                    <div className="overlay overlay-advanced mb-xl-n12" style={{maxHeight: '100vh'}}>
                        <div className="overlay-inner bg-cover" style={{backgroundImage: "url(" + Image + ")"}}></div>
                        <div className="overlay-inner bg-gray-900 opacity-50"></div>
                    </div>
                    <div class="container min-vh-100 d-flex flex-column justify-content-between text-center py-7 py-md-8">
                        <a className="navbar-brand text-white" href="#home">MINH NGUYEN</a>
                        <div class="my-5 text-white">
                            <h1>The website is under maintenance.</h1>
                            <p class="lead mb-7">I`ll be here soon with my new awesome site.</p>
                            <div class="row">
                                <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
                                <div class="subscribe-form">
                                    
                                    <div class="subscribe-form-result text-center"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default MaintenacePage;