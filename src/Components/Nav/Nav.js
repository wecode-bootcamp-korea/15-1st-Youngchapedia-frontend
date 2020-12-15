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
            <div className="searchForm">
              <Search inputRef={this.input} />
            </div>
            <li className="menu">평가하기</li>
            <li className="profile">
              <img
                alt="profile"
                src="https://d3sz5r0rl9fxuc.cloudfront.net/assets/default/user/photo_file_name_small-bc8b334acec6a4e386249dedf9e763b5e6aff523fa85cc29211f22e6bed540df.jpg"
              />
            </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
