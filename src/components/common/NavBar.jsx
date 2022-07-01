import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            // Site navigation
            <nav id="siteNavbar" className="site-navbar navbar navbar-expand-lg bg-white shadow-light fixed-top py-2 navbar-dark site-navbar-transparent" data-navbar-base="navbar-dark" data-navbar-toggled="navbar-light" data-navbar-scrolled="navbar-light">
                {this.props.history.location.pathname == '/' ? 
                <a className="navbar-brand" href="#home">MINH NGUYEN</a> :
                <Link to="/" className="navbar-brand">MINH NGUYEN</Link> }

                <button className="navbar-toggler-alternative" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-alternative-icon">
                    <span></span>
                    </span>
                </button>

                <div className="navbar-collapse collapse" id="navbarCollapse">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#home">Home</a> :
                                <Link to="/" class={this.props.history.location.pathname == '/' ? "active nav-link scrollto" : "nav-link scrollto"}>Home</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#about">About</a> :
                                <Link to="/about" class={this.props.history.location.pathname == '/about' ? "active nav-link scrollto" : "nav-link scrollto"}>About</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#testimonial">Testimonial</a> :
                                <Link to="/testimonial" class={this.props.history.location.pathname == '/testimonial' ? "active nav-link scrollto" : "nav-link scrollto"}>Testimonial</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#project">Project</a> :
                                <Link to="/projects" class={this.props.history.location.pathname == '/projects' || this.props.history.location.pathname.includes('/details/project') || this.props.history.location.pathname.includes('/category/project') ? "active nav-link scrollto" : "nav-link scrollto"}>Project</Link>
                            }
                            
                        </li>
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#blog">Blog</a> :
                                <Link to="/blogs" class={this.props.history.location.pathname == '/blogs' || this.props.history.location.pathname.includes('/details/blog') || this.props.history.location.pathname.includes('/category/blog') ? "active nav-link scrollto" : "nav-link scrollto"}>Blog</Link>
                            } 
                        </li>
                        <li className="nav-item">
                            {this.props.history.location.pathname == '/' ? 
                                <a className="nav-link scrollto" href="#contact">Contact</a> :
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