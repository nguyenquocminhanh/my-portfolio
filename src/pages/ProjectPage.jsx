import React, { Component, Fragment } from 'react';

import { Helmet } from "react-helmet";
import Cover from '../components/common/Cover';
import AllProject from '../components/project/allProject/AllProject';
import ProjectPreview from '../components/project/ProjectPreview';

class ProjectPage extends Component {    
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
                    <title>My Projects</title>
                </Helmet>
                
                <Cover 
                    bgColor="bg-dark"
                    title="My Projects"
                    description=""/>

                <AllProject>
                    <ProjectPreview/>
                    <ProjectPreview/>
                    <ProjectPreview/>
                </AllProject>
            </Fragment>
        );
    }
}

export default ProjectPage;