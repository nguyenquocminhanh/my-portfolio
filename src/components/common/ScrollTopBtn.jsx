import React, { Component } from 'react';

class ScrollTopBtn extends Component {
    render() {
        return (
            <a href="#" class="btn-back-to-top scrollto btn btn-icon btn-dark shadow-light mb-4 mr-4" tabindex="-1">
                <i class="fas fa-chevron-up btn-icon-inner"></i>
            </a>
        );
    }
}

export default ScrollTopBtn;