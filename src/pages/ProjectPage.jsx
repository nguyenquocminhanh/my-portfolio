import React, { Component, Fragment } from 'react';

import HelmetMetaData from '../components/common/HelmetMetaData';
import Cover from '../components/common/Cover';
import AllProject from '../components/project/allProject/AllProject';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';

class ProjectPage extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            filteredProjects: [],
            projectCategories: [],
            project_page: null,

            isLoading: true,
            searchKeyword: "",
            selectedPage: 1,
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        axios.get(AppURL.GeProjectPage).then(response => {
            if(response.status == 200) {
                this.setState({
                    project_page: response.data['project_page'],

                    projects: response.data['projects'].reverse(),
                    filteredProjects: response.data['projects'].reverse(),
                    projectCategories: response.data['project_categories'],
                });
                setTimeout(() => {
                    this.setState({isLoading: false})
                }, 1500);
            }
        }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log(err);
        })
    }

    filterProject = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = this.state.filteredProjects.filter((project) => {
              return project['title'].toLowerCase().includes(keyword.toLowerCase());
            });
            this.setState({filteredProjects: results, selectedPage: 1});
        } else {
            const results = this.state.projects;
            this.setState({filteredProjects: results})
        }
        this.setState({searchKeyword: keyword});
    }

    pageSelected = (pageNumber) => {
        this.setState({selectedPage: pageNumber})
    }

    previousPageClicked = () => {
        this.setState(prevState => {
            return {
                selectedPage: prevState.selectedPage - 1
            }
        })
    }

    nextPageClicked = () => {
        this.setState(prevState => {
            return {
                selectedPage: prevState.selectedPage + 1
            }
        })
    }

    render() {
        return (
            <Fragment>
                <HelmetMetaData
                    currentURL={window.location.href}
                    title="Minh Nguyen Projects"
                    description={this.state.project_page ? this.state.project_page['description'] : null}
                    image={this.state.project_page ? this.state.project_page['cover_image'] : null}/>

                {this.state.isLoading ? <Loader/> : null }
                
                <Cover 
                    bgColor="bg-dark"
                    title="My Projects"
                    description={this.state.project_page ? this.state.project_page['description'] : null}
                    coverImage={this.state.project_page ? this.state.project_page['cover_image'] : null}
                    hasArrowDown
                    hrefArrowDown="#all-project-container"/>

                <AllProject
                    allProjects={this.state.projects}

                    filteredProjects={this.state.filteredProjects}
                    filterProject={this.filterProject}
                    searchKeyword={this.state.searchKeyword}

                    categories={this.state.projectCategories}

                    selectedPage={this.state.selectedPage}
                    pageSelected={this.pageSelected}
                    previousPageClicked={this.previousPageClicked}
                    nextPageClicked={this.nextPageClicked}/>
            </Fragment>
        );
    }
}

export default ProjectPage;