import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogAllPage from '../pages/BlogAllPage';
import BlogCategoryPage from '../pages/BlogCategoryPage';
import BlogSinglePage from '../pages/BlogSinglePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProjectCategoryPage from '../pages/ProjectCategoryPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import ProjectPage from '../pages/ProjectPage';
import TestimonialPage from '../pages/TestimonialPage';


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
          {/* about */}
          <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()}/>}/>
          {/* testimonial */}
          <Route exact path="/testimonial" render={(props) => <TestimonialPage {...props} key={Date.now()}/>}/>
          {/* project */}
          <Route exact path="/project" render={(props) => <ProjectPage {...props} key={Date.now()}/>}/>
          <Route exact path="/details/project/:id" render={(props) => <ProjectDetailsPage {...props} key={Date.now()}/>}/>
          <Route exact path="/category/project/:id" render={(props) => <ProjectCategoryPage {...props} key={Date.now()}/>}/>
          {/* blog */}
          <Route exact path="/blog" render={(props) => <BlogAllPage {...props} key={Date.now()}/>}/>
          <Route exact path="/details/blog/:id" render={(props) => <BlogSinglePage {...props} key={Date.now()}/>}/>
          <Route exact path="/category/blog/:id" render={(props) => <BlogCategoryPage {...props} key={Date.now()}/>}/>
          {/* contact */}
          <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()}/>}/>
          {/* 404 */}
          <Route path="/404" render={(props) => <NotFoundPage {...props} key={Date.now()}/>}/>
          <Redirect to="/404"/>
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute;