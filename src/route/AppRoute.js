import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BlogAllPage from '../pages/BlogAllPage';
import BlogSinglePage from '../pages/BlogSinglePage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()}/>}/>
          {/* blog */}
          <Route exact path="/blog-all" render={(props) => <BlogAllPage {...props} key={Date.now()}/>}/>
          <Route exact path="/blog/:id" render={(props) => <BlogSinglePage {...props} key={Date.now()}/>}/>
          {/* 404 */}
          <Route path="/404" render={(props) => <NotFoundPage {...props} key={Date.now()}/>}/>
          <Redirect to="/404"/>
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute;