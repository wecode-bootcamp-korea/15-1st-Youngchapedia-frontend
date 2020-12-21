import React from 'react';
import './SignUpControl.scss';
import { APISIGNUP } from '../../../../config';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

const emailRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

class SignUpControl extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
      name: '',
      nameStatus: false,
      emailStatus: false,
      passwordStatus: false,
    };
  }

  handleClickSignUp = () => {
    fetch(APISIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
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
          this.props.signUpClose();
          this.resetInputStatus();
          this.props.history.push('/mainpage');
        } else if (result.message === 'ALREADY_EXISTS_USERNAME') {
          Swal.fire({
            icon: 'error',
            text: 'name already exists',
          });
        } else if (result.message === 'ALREADY_EXISTS_ACCOUNT') {
          Swal.fire({
            icon: 'error',
            text: 'email already exists',
          });
        }
      });
  };

  handleInputValueChange = e => {
    const { id, value } = e.target;
    if (id === 'name') {
      const nameRule = value.length <= 0;
      this.setState({
        [id]: value,
        nameStatus: nameRule ? true : false,
      });
    } else if (id === 'email') {
      const idRuleSet = !value.match(emailRule);
      this.setState({
        [id]: value,
        emailStatus: idRuleSet ? true : false,
      });
    } else if (id === 'pw') {
      const pwRuleSet = !value.match(pwRule);
      this.setState({
        [id]: value,
        passwordStatus: pwRuleSet ? true : false,
      });
    } else {
      Swal.fire({
        icon: 'error',
        text: 'something went wrong',
      });
    }
  };

  checkValidationInput = e => {
    e.preventDefault();
    const { email, pw, name } = this.state;
    const nameRule = name.length <= 0;
    const emailRuleSet = !email.match(emailRule);
    const pwRuleSet = !pw.match(pwRule);
    const inputPass = !nameRule && !emailRuleSet && !pwRuleSet;
    this.setState({
      nameStatus: nameRule ? true : false,
      emailStatus: emailRuleSet ? true : false,
      passwordStatus: pwRuleSet ? true : false,
    });
    inputPass && this.handleClickSignUp();
  };

  resetInputStatus = () => {
    this.setState({
      email: '',
      pw: '',
      name: '',
      nameStatus: false,
      emailStatus: false,
      passwordStatus: false,
    });
  };

  render() {
    const {
      email,
      pw,
      name,
      nameStatus,
      emailStatus,
      passwordStatus,
    } = this.state;
    const { signUpModalStatus, signUpOpen, signUpClose, toLogin } = this.props;

    return (
      <div className="SignUpControl" onClick={this.resetInputStatus}>
        {signUpModalStatus ? (
          <div className="Signup">
            <div className="underSignup" onClick={signUpClose}>
              <div
                className="signUpBox"
                onClick={e => {
                  e.stopPropagation();
                  signUpOpen();
                }}
              >
                <div className="signUpLogo">
                  <div className="sigUpPageLogoHigh">YOUNGCHA</div>
                  <div className="sigUpPageLogoLow">PEDIA</div>
                </div>
                <div className="signUpText"></div>
                <input
                  id="name"
                  value={name}
                  className="nameInput"
                  placeholder="이름"
                  onChange={this.handleInputValueChange}
                />
                <div className={nameStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 이름입니다
                </div>
                <input
                  id="email"
                  value={email}
                  className="emailInput"
                  placeholder="이메일"
                  onChange={this.handleInputValueChange}
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
                  onChange={this.handleInputValueChange}
                />
                <div className={passwordStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 비밀번호입니다
                </div>
                <button
                  type="button"
                  className="signUpBtn"
                  onClick={this.checkValidationInput}
                >
                  회원가입
                </button>
                <div className="signUpCheckTxt">
                  이미 가입하셨나요?
                  <div
                    className="loginNowBtn"
                    onClick={e => {
                      e.stopPropagation();
                      toLogin();
                      this.resetInputStatus();
                    }}
                  >
                    로그인
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

export default withRouter(SignUpControl);
