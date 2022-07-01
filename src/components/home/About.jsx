import React, { Component } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about_me: null,
      highlights: [],
    }
  }

  componentDidMount = () => {
    axios.get(AppURL.AllAbout).then(response => {
        if(response.status == 200) {
            this.setState({
              about_me: response.data['about_me'],
              highlights: response.data['highlights'],
            });
        }
    }).catch(err => {
        console.log(err);
    })
  }

  render() {
    let image =  this.state.about_me ? this.state.about_me['image'] : null;
    let mainIntro =  this.state.about_me ? this.state.about_me['main_intro'] : '';
    let subIntro =  this.state.about_me ? this.state.about_me['sub_intro'] : '';
    let github_link =  this.state.about_me ? this.state.about_me['github_link'] : '';
    let linkedin_link =  this.state.about_me ? this.state.about_me['linkedin_link'] : '';
    let resume_link =  this.state.about_me ? this.state.about_me['resume'] : '';

    let highlights = this.state.highlights.map(highlight => {
      return <div className="col-6 col-md-4 p-4">
          <p className="h1 mb-2">{highlight['amount']}</p>
          <p className="h6 mb-0">{highlight['name']}</p>
        </div>
    });

    return (
      // About Me
      <section id="about" className="py-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-6 mb-lg-0">
              <img className="img-fluid w-100 rounded-3x shadow-light-lg" src={image} alt=""/>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <h2 className="mb-4">About me</h2>
              <p className="lead">{mainIntro}</p>
              <p className="mb-8">{subIntro}</p>
              <div className="row m-n4">
                {highlights}
              </div>
              
              <div className='d-flex align-items-center mt-7 mx-auto mx-lg-0'>
                <a href={github_link} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href={linkedin_link} target="_blank" className="btn btn-dark mx-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href={resume_link} target="_blank" className="btn btn-dark with-arrow smoth-scroll">
                  My Resume &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default home;