import React, { Component } from 'react';
import './LoginSignUpControl.scss';
import LoginControl from './Components/LoginControl/LoginControl.js';
import SignUpControl from './Components/SignUpControl/SignUpControl.js';

class LoginSignUpControl extends Component {
  constructor() {
    super();
    this.state = {
      loginModalStatus: false,
      signUpModalStatus: false,
    };
  }
  loginOpen = () => {
    this.setState({ loginModalStatus: true });
  };
  loginClose = () => {
    this.setState({ loginModalStatus: false });
  };
  toSignUp = () => {
    this.setState({
      loginModalStatus: false,
      signUpModalStatus: true,
    });
  };

  signUpOpen = () => {
    this.setState({ signUpModalStatus: true });
  };
  signUpClose = () => {
    this.setState({ signUpModalStatus: false });
  };
  toLogin = () => {
    this.setState({
      loginModalStatus: true,
      signUpModalStatus: false,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="LoginSignUpControl">
        <div className="loginBtnControl">
          <button className="loginBtn" onClick={this.loginOpen}>
            Login
          </button>
          <LoginControl
            className="loginModal"
            loginModalStatus={this.state.loginModalStatus}
            loginOpen={this.loginOpen}
            loginClose={this.loginClose}
            toSignUp={this.toSignUp}
          />
        </div>
        <div className="signOutBtnControl">
          <button className="signOutBtn" onClick={this.signUpOpen}>
            SignUp
          </button>
          <SignUpControl
            className="signUpModal"
            signUpModalStatus={this.state.signUpModalStatus}
            signUpOpen={this.signUpOpen}
            signUpClose={this.signUpClose}
            toLogin={this.toLogin}
          />
        </div>
      </div>
    );
  }
}

export default LoginSignUpControl;
