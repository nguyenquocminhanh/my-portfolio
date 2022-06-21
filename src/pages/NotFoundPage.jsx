import React, { Component, Fragment } from 'react';
import NotFound from '../components/notfound/NotFound';

import { Helmet } from "react-helmet";

class NotFoundPage extends Component {
    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Not Found</title>
                </Helmet>
                <NotFound/>
            </Fragment>
        );
    }
}

export default NotFoundPage;