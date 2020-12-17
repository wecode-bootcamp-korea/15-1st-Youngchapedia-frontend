import React, { Component } from 'react';
import './MainPage.scss';
import Login from '../Login/Login.js';
import Footer from '../../Components/Footer/Footer';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      LoginDisplay: false,
    };
  }
  LoginClickChange = () => {
    console.log('clicked');
  };
  SignUpClickChange = () => {
    console.log('clicked');
  };
  render() {
    return <Footer />;
  }
}

export default MainPage;
