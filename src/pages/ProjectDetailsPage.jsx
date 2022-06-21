import React, { Component, Fragment } from 'react';

import { Helmet } from "react-helmet";
import Cover from '../components/project/projectDetails/Cover';
import ProjectDetails from '../components/project/projectDetails/ProjectDetails';

class ProjectDetailsPage extends Component {
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
                    <title>My Title</title>
                </Helmet>
                
                <Cover/>
                <ProjectDetails/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;