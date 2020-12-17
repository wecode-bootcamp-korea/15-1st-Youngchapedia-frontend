import React, { Component } from 'react';
import './ButtonLoginSignUp.scss';
import Login from './Login.js';
import Signup from './Signup.js';

class ButtonLoginSignUp extends Component {
  constructor() {
    super();
    this.state = {
      loginModalOpen: false,
      signUpModalOpen: false,
    };
  }
  openModalLogin = () => {
    this.setState({ loginModalOpen: true });
  };
  closeModalLogin = () => {
    this.setState({ loginModalOpen: false });
  };
  openModalSignUp = () => {
    this.setState({ signUpModalOpen: true });
  };
  closeModalSignUp = () => {
    this.setState({ signUpModalOpen: false });
  };
  render() {
    return (
      <div className="Button">
        <div className="buttonTest">
          <button className="button1" onClick={this.openModalLogin}>
            Login
          </button>
          <Login
            className="loginModal"
            loginOpen={this.state.loginModalOpen}
            loginClose={this.closeModalLogin}
          />
        </div>
        <div className="buttonTest2">
          <button className="button2" onClick={this.openModalSignUp}>
            SignUp
          </button>
          <Signup
            className="loginModal2"
            signUpOpen={this.state.signUpModalOpen}
            signUpClose={this.closeModalSignUp}
          />
        </div>
      </div>
    );
  }
}

export default ButtonLoginSignUp;
