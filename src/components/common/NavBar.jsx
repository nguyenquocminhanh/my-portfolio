import React, { Component, Fragment } from 'react';

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
                            <a class="nav-link scrollto" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scrollto" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scrollto" href="#testimonial">Testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scrollto" href="#project">Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scrollto" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scrollto" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;