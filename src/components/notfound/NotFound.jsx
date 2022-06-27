import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <section class="py-0">
                <div class="container min-vh-100 d-flex flex-column justify-content-center text-center py-7 py-md-8">
                    <div class="my-4">
                        <h1 class="display-2 font-weight-bold">404</h1>
                        <h3 class="mb-7">Sorry, but this page doesn't exist.</h3>
                        <Link to="/" class="btn btn-dark mr-2">Take Me Home</Link>
                        <span onClick={this.goBack} class="btn btn-soft-secondary">Previous Page</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(NotFound);