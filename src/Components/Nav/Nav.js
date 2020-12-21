import React, { Component } from 'react';
import Search from './Search/Search';
import '../Nav/Nav.scss';
import LoginSignUpControl from '../../Pages/Login/LoginSignUpControl';

class Nav extends Component {
  state = {
    logged: false,
  };
  render() {
    const { logged } = this.state;
    return (
      <nav className="Nav">
        <div className="container">
          <div className="navLeft">
            <div className="logoSection">
              <div className="mainLogoHigh">YOUNGCHA</div>
              <div className="mainLogoLow">PEDIA</div>
            </div>
            <li className="menu">영화</li>
            <li className="menu">TV 프로그램</li>
            <li className="menu">책</li>
          </div>
          <div className="navRight">
            <div className="inputContainer">
              <Search />
            </div>
            {!logged ? (
              <>
                <LoginSignUpControl />
              </>
            ) : (
              <>
                <li className="menu">평가하기</li>
                <li className="profile">
                  <img alt="profile" src="/images/profile.jpg" />
                </li>
              </>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
