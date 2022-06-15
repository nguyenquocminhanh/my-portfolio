import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router';

class AppRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    window.scroll(0, 0);
    // this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <Switch>
            
        </Switch>
      </Fragment>
    )
  }
}

export default AppRoute;