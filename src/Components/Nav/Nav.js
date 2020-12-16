import React, { Component } from 'react';
import Search from './Search/Search';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="container">
          <div className="navLeft">
            <img alt="logo image" src="images/logo.png" />
            <li className="menu">영화</li>
            <li className="menu">TV 프로그램</li>
            <li className="menu">책</li>
          </div>
          <div className="navRight">
            <div className="inputContainer">
              <Search />
            </div>
            <li className="menu">평가하기</li>
            <li className="profile">
              <img alt="profile" src="/images/profile.jpg" />
            </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
