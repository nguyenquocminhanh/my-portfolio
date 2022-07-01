import React, { Component, Fragment } from 'react';
import NotFound from '../components/notfound/NotFound';

import HelmetMetaData from '../components/common/HelmetMetaData';

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
                <HelmetMetaData
                    currentURL={window.location.href}
                    title="Page Not Found - Minh Nguyen Portfolio"
                    image="https://assets.materialup.com/uploads/b17ea0c7-df76-4ce1-bf82-4a2cf6ae866d/preview.jpg"
                    description={null}/>
                <NotFound/>
            </Fragment>
        );
    }
}

export default NotFoundPage;