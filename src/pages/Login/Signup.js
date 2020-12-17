import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { APISIGNUP } from '../../config.js';

const emailRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

class Signup extends React.Component {
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

  testFunction = () => {
    console.log('passsed');
  };

  handleClickSign = () => {
    fetch(APISIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'SUCCESS'
          ? (alert('welcome to YoungChaPedia'),
            this.props.history.push('/mainpage'),
            console.log(result))
          : console.log('result was unsuccessful')
      );
  };

  handleNameValueChange = e => {
    const name = e.target.value;
    const nameRule = name.length <= 0;
    this.setState({
      name,
      nameStatus: nameRule ? true : false,
    });
  };
  handleEmailValueChange = e => {
    const email = e.target.value;
    const emailRuleSet = !email.match(emailRule);
    this.setState({
      email,
      emailStatus: emailRuleSet ? true : false,
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

  checkValidation = e => {
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

    inputPass && this.testFunction();
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
    const { signUpOpen, signUpClose } = this.props;

    return (
      <>
        {signUpOpen ? (
          <div className="Signup">
            <div className="underSignup" onClick={signUpClose}>
              <div className="signUpBox" onClick={signUpOpen}>
                <div className="signUpLogo">
                  <div className="sigUpPageLogoHigh">YOUNGCHA</div>
                  <div className="sigUpPageLogoLow">PEDIA</div>
                </div>
                <div className="signUpText">회원가입</div>
                <input
                  id="name"
                  value={name}
                  className="nameInput"
                  placeholder="이름"
                  onChange={this.handleNameValueChange}
                ></input>
                <div className={nameStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 이름입니다
                </div>

                <input
                  id="email"
                  value={email}
                  className="emailInput"
                  placeholder="이메일"
                  onChange={this.handleEmailValueChange}
                ></input>
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
                ></input>
                <div className={passwordStatus ? 'inputStatus' : 'displayNone'}>
                  정확하지 않은 비밀번호입니다
                </div>

                <button className="signUpBtn" onClick={this.checkValidation}>
                  회원가입
                </button>
                <div className="signUpCheckTxt">
                  이미 가입하셨나요?
                  <Link className="loginNowBtn" to="/login">
                    로그인
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Signup;
