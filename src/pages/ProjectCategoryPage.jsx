import React, { Component, Fragment } from 'react';
import AllProjectCategory from '../components/project/category/AllProjectCategory';
import Cover from '../components/common/Cover';

import HelmetMetaData from '../components/common/HelmetMetaData';
import axios from 'axios';
import AppURL from '../api/AppURL';
import Loader from '../components/common/Loader';
import { withRouter } from 'react-router-dom';

class ProjectCategoryPage extends Component {
    constructor({match}) {
        super();
        this.state = {
            categoryID: match.params.categoryID,
            categoryImg: null,
            category: '',
            projects: [],
            cover: '',
            filteredProjects: [],
            projectCategories: [],
   
            isLoading: true,
            searchKeyword: "",
            selectedPage: 1
        }
    }

    componentDidMount = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        const getCategory = axios.get(AppURL.AllProjectByCategory(this.state.categoryID));
        const getProjectCategories = axios.get(AppURL.AllProjectCategory);

        axios.all([getCategory, getProjectCategories]).then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];

                if(responseOne.status == 200 & responseTwo.status == 200) {
                    this.setState({
                        category: responseOne.data['name'],
                        categoryImg: responseOne.data['image'],
                        cover: responseOne.data['image'],
                        projects: responseOne.data['project'],
                        filteredProjects: responseOne.data['project'],
                        projectCategories: responseTwo.data,
                    });
                    setTimeout(() => {
                        this.setState({isLoading: false})
                    }, 1500);
                } else {
                    this.props.history.replace('/404');
                }
            })
        ).catch(errors => {
            this.setState({
                isLoading: false
            });
            console.log(errors);
            this.props.history.replace('/404');
        })
    }

    filterProject= (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = this.state.filteredProjects.filter((project) => {
              return project['title'].toLowerCase().includes(keyword.toLowerCase());
            })
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
                    title={this.state.category ? this.state.category + " - Minh Nguyen Portfolio" : 'Projects By Category'}
                    description={"Minh Nguyen gives you several Project Categories to select"}
                    image={this.state.categoryImg}/>

                {this.state.isLoading ? <Loader/> : null }

                <Cover 
                    bgColor="bg-dark"
                    coverImage={this.state.cover}
                    title={this.state.category}
                    hasArrowDown
                    hrefArrowDown="#project-category-container"/>
                <AllProjectCategory
                    allProjects={this.state.projects}
                    category={this.state.category}
                    categoryID={this.state.categoryID}
                    
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

export default withRouter(ProjectCategoryPage);