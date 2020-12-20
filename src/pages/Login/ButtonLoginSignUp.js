import React, { Component } from 'react';
import './ButtonLoginSignUp.scss';
import Login from './Login.js';
import Signup from './Signup.js';

class ButtonLoginSignUp extends Component {
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
      <div className="Button">
        <div className="buttonTest">
          <button className="button1" onClick={this.loginOpen}>
            Login
          </button>
          <Login
            className="loginModal"
            loginModalStatus={this.state.loginModalStatus}
            loginOpen={this.loginOpen}
            loginClose={this.loginClose}
            toSignUp={this.toSignUp}
            // stateStatus={this.state}
          />
        </div>
        <div className="buttonTest2">
          <button className="button2" onClick={this.signUpOpen}>
            SignUp
          </button>
          <Signup
            className="loginModal2"
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

export default ButtonLoginSignUp;
