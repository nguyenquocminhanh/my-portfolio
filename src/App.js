import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route/AppRoute';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import ScrollTopBtn from './components/common/ScrollTopBtn';
import MaintenacePage from './pages/MaintenacePage';

// ROOT COMPONENT
class App extends Component {
  render() { 
    let content = <BrowserRouter>
      <NavBar/>
      <ScrollTopBtn/>

      <AppRoute/>
        
      <Footer/>
    </BrowserRouter>
    if (process.env.REACT_APP_MAINTENANCE === "true") {
      content = <MaintenacePage/>;
    }
    return (
      <Fragment>
        {content}
      </Fragment>
    );
  }
}

export default App;