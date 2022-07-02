import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route/AppRoute';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import ScrollTopBtn from './components/common/ScrollTopBtn';
import { Helmet } from 'react-helmet';

// ROOT COMPONENT
class App extends Component {
  render() {
    return (
     <Fragment>

      <Helmet>
        <title>App Title</title>
        <meta name="description" content="Minh Nguyen Portfolio Website" data-react-helmet="true"/>
        <meta name="theme-color" content="#008f68" />
      </Helmet>


      <BrowserRouter>
        <NavBar/>
        <ScrollTopBtn/>

        <AppRoute/>
          
        <Footer/>
      </BrowserRouter>

     </Fragment>
    );
  }
}

export default App;