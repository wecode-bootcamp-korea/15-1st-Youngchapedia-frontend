import React from 'react';
import './LoginControl.scss';
import { APILOGIN } from '../../../../config.js';
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
            text: 'welcome to YoungchaPedia!',
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

  handleEmailValueChange = e => {
    const email = e.target.value;
    const idRuleSet = !email.match(emailRule);
    this.setState({
      email,
      emailStatus: idRuleSet ? true : false,
    });
  };

  handlePwValueChange = e => {
    const pw = e.target.value;
    const pwRuleSet = !pw.match(pwRule);
    this.setState({
      pw,
      passwordStatus: pwRuleSet ? true : false,
    });
  };

  resetInputStatus = () => {
    this.setState({
      email: '',
      pw: '',
      emailStatus: false,
      passwordStatus: false,
    });
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
                <div className="loginText">로그인</div>
                <input
                  id="email"
                  value={email}
                  className="emailInput"
                  placeholder="이메일"
                  type="text"
                  onChange={this.handleEmailValueChange}
                />
                <div className={emailStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 이메일입니다
                </div>
                <input
                  id="pw"
                  value={pw}
                  className="passwordInput"
                  placeholder="비밀번호"
                  type="password"
                  onChange={this.handlePwValueChange}
                />
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
