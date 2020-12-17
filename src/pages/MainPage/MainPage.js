import React, { Component } from 'react';
import './MainPage.scss';
import Login from '../Login/Login.js';
import Footer from '../../Components/Footer/Footer';
import ButtonLoginSignUp from '../Login/ButtonLoginSignUp.js';
// import ButtonSignup from '../Signup/ButtonSignup.js';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="MainTest">
        <div className="navBar">
          <ButtonLoginSignUp />
        </div>
        <div className="mainBody">this is body</div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
