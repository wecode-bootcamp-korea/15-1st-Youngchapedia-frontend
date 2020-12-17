import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { APISIGNUP } from '../../config.js';

// const API = "http://192.168.219.185"
const idRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      name: '',
      nameStatus: false,
      emailStatus: false,
      passwordStatus: false,
      // btnStatus: true,
    };
  }

  handleClick = () => {
    fetch(APISIGNUP, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.id,
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

  testFunction = () => {
    console.log('passed');
  };

  handleNameValueChange = e => {
    const name = e.target.value;
    const nameRule = name.length <= 0;
    this.setState({
      name,
      nameStatus: nameRule ? true : false,
    });
  };

  handleIdValueChange = e => {
    const id = e.target.value;
    const idRuleSet = !id.match(idRule);
    this.setState({
      id,
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

  checkValidation = e => {
    e.preventDefault();
    const { id, pw, name } = this.state;

    const nameRule = name.length <= 0;

    const idRuleSet = !id.match(idRule);
    const pwRuleSet = !pw.match(pwRule);
    const inputPass = !nameRule && !idRuleSet && !pwRuleSet;
    this.setState({
      nameStatus: nameRule ? true : false,
      emailStatus: idRuleSet ? true : false,
      passwordStatus: pwRuleSet ? true : false,
    });

    inputPass && this.handleClick();
  };

  render() {
    const {
      id,
      pw,
      name,
      nameStatus,
      emailStatus,
      passwordStatus,
    } = this.state;

    return (
      <>
        <div className="Signup">
          <div className="signUpBox">
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
              id="id"
              value={id}
              className="emailInput"
              placeholder="이메일"
              onChange={this.handleIdValueChange}
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
      </>
    );
  }
}

export default Signup;
