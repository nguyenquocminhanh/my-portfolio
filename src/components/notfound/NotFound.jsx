import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <section class="py-0">
                <div class="container min-vh-100 d-flex flex-column justify-content-center text-center py-7 py-md-8">
                    <div class="my-4">
                        <h1 class="display-2 font-weight-bold">404</h1>
                        <h3 class="mb-7">Sorry, but this page doesn't exist.</h3>
                        <a href="index.html" class="btn btn-dark mr-2">Take Me Home</a>
                        <a href="#" class="btn btn-soft-secondary">Report This</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default NotFound;