import React, { Component, Fragment } from 'react';
import About from '../components/home/About';
import Cover from '../components/common/Cover'
import Skill from '../components/home/Skill';
import { Helmet } from 'react-helmet';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';
import axios from 'axios';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about_page: null,
            isLoading: true,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        axios.get(AppURL.GetAboutPage).then(response => {
            if(response.status == 200) {
                this.setState({
                    about_page: response.data['about_page'],
                });
                setTimeout(() => {
                    this.setState({isLoading: false})
                }, 1500);
            }
        }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        })
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>About Me</title>
                </Helmet>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    title="About Me"
                    coverImage={this.state.about_page ? this.state.about_page['cover_image'] : null}
                    description={this.state.about_page ? this.state.about_page['description'] : null}
                    hasArrowDown
                    hrefArrowDown="#about"/>
                    
                <About/>
                <Skill/>
            </Fragment>
        );
    }
}

export default AboutPage;