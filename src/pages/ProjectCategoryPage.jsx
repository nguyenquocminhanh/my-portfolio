import React, { Component, Fragment } from 'react';

import Cover from '../components/common/Cover';
import { Helmet } from "react-helmet";
import AllProjectCategory from '../components/project/category/AllProjectCategory';

class ProjectCategoryPage extends Component {
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
                    <title>Projects By Category</title>
                </Helmet>

                <Cover 
                    bgColor="bg-dark"
                    title="Fullstack Application"
                    hasArrowDown
                    hrefArrowDown="#project-category-container"/>
                <AllProjectCategory/>
            </Fragment>
        );
    }
}

export default ProjectCategoryPage;