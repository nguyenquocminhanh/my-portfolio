import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            // Site navigation
            <nav id="siteNavbar" class="site-navbar site-navbar-transparent navbar navbar-expand-lg bg-white shadow-light fixed-top py-2 navbar-dark" data-navbar-base="navbar-dark" data-navbar-toggled="navbar-light" data-navbar-scrolled="navbar-light">
                <a class="navbar-brand">
                    
                </a>

                <button class="navbar-toggler-alternative" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-alternative-icon">
                    <span></span>
                    </span>
                </button>

                <div class="navbar-collapse collapse" id="navbarCollapse">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#home">Home</a> :
                                <Link to="/" class={this.props.history.location.pathname == '/' ? "active nav-link scrollto" : "nav-link scrollto"}>Home</Link>
                            }
                        </li>
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#about">About</a> :
                                <Link to="/about" class={this.props.history.location.pathname == '/about' ? "active nav-link scrollto" : "nav-link scrollto"}>About</Link>
                            }
                        </li>
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#testimonial">Testimonial</a> :
                                <Link to="/testimonial" class={this.props.history.location.pathname == '/testimonial' ? "active nav-link scrollto" : "nav-link scrollto"}>Testimonial</Link>
                            }
                        </li>
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#project">Project</a> :
                                <Link to="/project" class={this.props.history.location.pathname == '/project' ? "active nav-link scrollto" : "nav-link scrollto"}>Project</Link>
                            }
                            
                        </li>
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#blog">Blog</a> :
                                <Link to="/blog" class={this.props.history.location.pathname == '/blog' || this.props.history.location.pathname.includes('/details/blog') ? "active nav-link scrollto" : "nav-link scrollto"}>Blog</Link>
                            } 
                        </li>
                        <li class="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a class="nav-link scrollto" href="#contact">Contact</a> :
                                <Link to="/contact" class={this.props.history.location.pathname == '/contact' ? "active nav-link scrollto" : "nav-link scrollto"}>Contact</Link>
                            }                
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);