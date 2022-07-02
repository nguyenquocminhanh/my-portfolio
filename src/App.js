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
    return (
     <Fragment>
      {process.env.REACT_APP_MAINTENANCE ? 
      <MaintenacePage/>
      :
      <BrowserRouter>
        <NavBar/>
        <ScrollTopBtn/>

        <AppRoute/>
          
        <Footer/>
      </BrowserRouter>}

     </Fragment>
    );
  }
}

export default App;