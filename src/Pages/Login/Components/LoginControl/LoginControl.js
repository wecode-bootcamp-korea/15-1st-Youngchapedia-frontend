import React from 'react';
import './LoginControl.scss';
import { APILOGIN } from '../../../../config';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
//id:test123@test.com pw:123123qweqwe mrtest123
//1@test.com 111111qqq
//2@test.com 222222www
// access_token: " “eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.VUCJcgl9ZEFdjr20lj0cLy7ngiMSkb9p-3bH4L3KBDU”"
const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
      emailStatus: false,
      passwordStatus: false,
    };
  }

  handleClickLogin = () => {
    fetch(APILOGIN, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          sessionStorage.setItem('access_token', result.access_token);
          Swal.fire({
            icon: 'success',
            text: 'welcomeback!!',
          });
          this.props.loginClose();
          this.resetInputStatus();
          this.props.history.push('/mainpage');
        } else {
          Swal.fire({
            icon: 'error',
            text: 'invalid email or password!',
          });
        }
      });
  };

  handleInputValueChange = e => {
    const { id, value } = e.target;
    if (id === 'email') {
      const idRuleSet = !value.match(emailRule);
      this.setState({
        [id]: value,
        emailStatus: idRuleSet ? true : false,
      });
    }
    if (id === 'pw') {
      const pwRuleSet = !value.match(pwRule);
      this.setState({
        [id]: value,
        passwordStatus: pwRuleSet ? true : false,
      });
    }
  };

  checkValidation = () => {
    const { email, pw } = this.state;
    const emailRuleSet = !email.match(emailRule);
    const pwRuleSet = !pw.match(pwRule);
    const inputPass = !emailRuleSet && !pwRuleSet;
    this.setState({
      emailStatus: emailRuleSet ? true : false,
      passwordStatus: pwRuleSet ? true : false,
    });
    inputPass && this.handleClickLogin();
  };

  resetInputStatus = () => {
    this.setState({
      email: '',
      pw: '',
      emailStatus: false,
      passwordStatus: false,
    });
  };

  render() {
    const { email, pw, emailStatus, passwordStatus } = this.state;
    const { loginModalStatus, loginOpen, loginClose, toSignUp } = this.props;
    return (
      <div className="LoginControl" onClick={this.resetInputStatus}>
        {loginModalStatus ? (
          <div className="Login">
            <div className="underLogin" onClick={loginClose}>
              <div
                className="loginBox"
                onClick={e => {
                  e.stopPropagation();
                  loginOpen();
                }}
              >
                <div className="loginLogo">
                  <div className="loginPageLogoHigh">YOUNGCHA</div>
                  <div className="loginPageLogoLow">PEDIA</div>
                </div>
                <div className="loginText"></div>
                <div className="emailSection">
                  <input
                    id="email"
                    value={email}
                    className="emailInput"
                    placeholder="이메일"
                    type="text"
                    onChange={this.handleInputValueChange}
                  />
                </div>
                <div className={emailStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 이메일입니다
                </div>
                <div className="passWordSection">
                  <input
                    id="pw"
                    value={pw}
                    className="passwordInput"
                    placeholder="비밀번호"
                    type="password"
                    onChange={this.handleInputValueChange}
                  />
                </div>
                <div className={passwordStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 비밀번호입니다
                </div>
                <button className="loginBtn" onClick={this.checkValidation}>
                  로그인
                </button>
                <div className="noAccountTxt">
                  계정이 없으신가요?
                  <div className="signUpNow">
                    <div
                      className="signUpNowBtn"
                      onClick={e => {
                        e.stopPropagation();
                        toSignUp();
                        this.resetInputStatus();
                      }}
                    >
                      회원가입
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(LoginControl);
