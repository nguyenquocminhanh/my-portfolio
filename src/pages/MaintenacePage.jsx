import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AppURL from '../api/AppURL';

class MaintenacePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home_page: null,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // get visitor
        axios.get(AppURL.GetVisitorDetails).then().catch();

        axios.get(AppURL.GetHomePage).then(response => {
            if(response.status == 200) {
                this.setState({
                    home_page: response.data['home_page']
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Fragment>
                <section class="py-0">
                    <div className="overlay overlay-advanced mb-xl-n12" style={{maxHeight: '100vh'}}>
                        <div className="overlay-inner bg-cover" style={{backgroundImage: "url(" + (this.state.home_page ? this.state.home_page['cover_image'] : null) + ")"}}></div>
                        <div className="overlay-inner bg-gray-900 opacity-50"></div>
                    </div>
                    <div class="container min-vh-100 d-flex flex-column justify-content-between text-center py-7 py-md-8">
                        <a className="navbar-brand text-white" href="#home">MINH NGUYEN PORTFOLIO</a>
                        <div class="my-5 text-white">
                            <h1>The new website is under construction.</h1>
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