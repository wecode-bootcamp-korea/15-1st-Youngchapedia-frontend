import React, { Component } from 'react';
import './MainPage.scss';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import LoginSignUpControl from '../Login/LoginSignUpControl';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="MainTest">
        <div className="navBar">
          <Nav />
          {/* <LoginSignUpControl /> */}
        </div>
        <div className="mainBody">this is body</div>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
