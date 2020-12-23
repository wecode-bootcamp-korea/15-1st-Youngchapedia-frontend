import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Search from './Search/Search';
import '../Nav/Nav.scss';
import LoginSignUpControl from '../../Pages/Login/LoginSignUpControl';

class Nav extends Component {
  goToMoviePage = () => {
    this.props.history.push('/mainpage');
  };

  goToMyPage = () => {
    this.props.history.push('/mypage');
  };
  render() {
    return (
      <nav className="Nav">
        <div className="container">
          <div className="navLeft">
            <div className="logoSection" onClick={this.goToMoviePage}>
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
            {sessionStorage.length === 0 ? (
              <>
                <LoginSignUpControl />
              </>
            ) : (
              <>
                <li className="menu">평가하기</li>
                <li className="profile">
                  <img
                    alt="profile"
                    src="/images/profile.jpg"
                    onClick={this.goToMyPage}
                  />
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
