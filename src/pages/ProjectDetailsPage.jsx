import React, { Component, Fragment } from 'react';

import { Helmet } from "react-helmet";
import Cover from '../components/project/projectDetails/Cover';
import ProjectDetails from '../components/project/projectDetails/ProjectDetails';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

class ProjectDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state = {
            projectID: match.params.projectID,
            project: {},
            projects: [],
            projectCategories: [],
            isLoading: true,
            contactInfo: null,
            links: null
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const getProjectDetails = axios.get(AppURL.ProjectDetails(this.state.projectID));
        const getProjects = axios.get(AppURL.AllProject);
        const getProjectCategories = axios.get(AppURL.AllProjectCategory);
        const getContactInfo = axios.get(AppURL.AllContact);
        
        axios.all([getProjectDetails, getProjects, getProjectCategories, getContactInfo]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responseThree = responses[2];
                const responseFour = responses[3];

                if(responseOne.status == 200 & responseTwo.status == 200 && responseThree.status == 200 && responseFour.status == 200) {
                    this.setState({
                        project: responseOne.data,
                        projects: responseTwo.data,
                        projectCategories: responseThree.data,
                        contactInfo: responseFour.data['contact_info'],
                        links: responseFour.data['links']
                    });
                    setTimeout(() => {
                        this.setState({isLoading: false})
                    }, 1500);
                }          
            })
        ).catch(errors => {
            this.setState({
                isLoading: false
            });
            console.log(errors);
        })
    }
 
    render() {
        return (
            <Fragment>
                <Helmet> 
                    <title>{this.state.project ? this.state.project['title'] : 'My Project'}</title>
                </Helmet>

                {this.state.isLoading ? <Loader/> : null }
                
                <Cover
                    project={this.state.project}/>
                <ProjectDetails
                    projects={this.state.projects}
                    project={this.state.project}
                    categories={this.state.projectCategories}
                    contactInfo={this.state.contactInfo}
                    links={this.state.links}/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;