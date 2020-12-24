import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Search from './Search/Search';
import '../Nav/Nav.scss';
import LoginSignUpControl from '../../Pages/Login/LoginSignUpControl';

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
            <div className="logoSection" onClick={this.goToMoviePage}>
              <div className="mainLogoHigh">YOUNGCHA</div>
              <div className="mainLogoLow">PEDIA</div>
            </div>
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

export default withRouter(Nav);
