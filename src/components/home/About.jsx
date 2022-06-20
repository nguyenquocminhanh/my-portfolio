import React, { Component } from 'react';

class home extends Component {
    render() {
        return (
          // About Me
          <section id="about" class="py-9 py-xl-12">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 mb-6 mb-lg-0">
                  <img class="img-fluid w-100 rounded-3x shadow-light-lg" src="assets/images/avatars/avatar4.jpeg" alt=""/>
                </div>
                <div class="col-lg-7 offset-lg-1">
                  <h2 class="mb-4">About me</h2>
                  <p class="lead">I am a Full Stack Software Engineer with a love for problem-solving and a passion for technology. I love creating meaningful projects that will make an immediate impact on the world.</p>
                  <p class="mb-8">I am a problem solver, with quick abilities to learn and adapt, and I'm looking forward to bringing my skill set and knowledge to collaborate with a team and build high quality software.</p>
                  <div class="row m-n4">
                    <div class="col-6 col-md-4 p-4">
                      <p class="h1 mb-2" style={{color: '#FCAF17'}}>1+</p>
                      <p class="h6 mb-0">Years in field</p>
                    </div>
      
                    <div class="col-6 col-md-4 p-4">
                      <p class="h1 mb-2" style={{color: '#FCAF17'}}>10+</p>
                      <p class="h6 mb-0">Projects taken</p>
                    </div>
                  </div>
                  
                  <div className='d-flex align-items-center mt-7 mx-auto mx-lg-0'>
                    <a href="" target="_blank" class="btn btn-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href="" target="_blank" class="btn btn-dark mx-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="" target="_blank" class="btn btn-dark with-arrow smoth-scroll">
                      My Resume &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
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