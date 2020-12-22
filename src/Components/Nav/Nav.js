import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Search from './Search/Search';
import '../Nav/Nav.scss';

class Nav extends Component {
  state = {
    logged: false,
  };

  goToMoviePage = () => {
    this.props.history.push('/mainpage');
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
            <li className="menu" onClick={this.goToMoviePage}>
              영화
            </li>
            <li className="menu">TV 프로그램</li>
          </div>
          <div className="navRight">
            <div className="inputContainer">
              <Search />
            </div>
            {!logged ? (
              <>
                <li className="menu signIn">로그인</li>
                <button className="menu signUp">회원가입</button>
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

export default withRouter(Nav);
