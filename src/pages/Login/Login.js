import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { APILOGIN } from '../../config.js';

//1@test.com 111111qqq
//2@test.com 222222www
// access_token: " “eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.VUCJcgl9ZEFdjr20lj0cLy7ngiMSkb9p-3bH4L3KBDU”"

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      emailList: [],
      emailStatus: false,
      passwordStatus: false,
    };
  }

  handleClick = () => {
    fetch(APILOGIN, {
      method: 'POST',
      body: JSON.stringify({
        // name: this.state.name,
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  handleIdValueChange = e => {
    const id = e.target.value;
    const idRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const idRuleSet = !id.match(idRule);
    this.setState({
      id,
      emailStatus: idRuleSet ? true : false,
    });
  };

  handlePwValueChange = e => {
    const pw = e.target.value;
    const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const pwRuleSet = !pw.match(pwRule);
    this.setState({
      pw,
      passwordStatus: pwRuleSet ? true : false,
    });
  };

  handleInputValueChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  checkValidation = e => {
    e.preventDefault();
    const { id, pw } = this.state;
    const idRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const pwRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const idRuleSet = !id.match(idRule);
    const pwRuleSet = !pw.match(pwRule);
    const inputPass = !idRuleSet && !pwRuleSet;

    this.setState({
      emailStatus: idRuleSet ? true : false,
      passwordStatus: pwRuleSet ? true : false,
    });
    if (inputPass) {
      alert('welcome to YoungChaPedia');
      this.props.history.push('/mainpage');
    }
  };

  render() {
    const { id, pw, emailStatus, passwordStatus } = this.state;
    // console.log(this.state.emailList.email);
    // console.log(this.state.emailList.password);
    return (
      <>
        <div className="Login">
          <div className="loginBox">
            <div className="loginLogo">
              <div className="loginPageLogoHigh">YOUNGCHA</div>
              <div className="loginPageLogoLow">PEDIA</div>
            </div>
            <div className="loginText">로그인</div>
            <input
              id="id"
              value={id}
              className="emailInput"
              placeholder="이메일"
              type="text"
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
            <button
              className="loginBtn"
              //onClick={this.checkValidation}
              onClick={this.handleClick}
            >
              로그인
            </button>
            <Link className="forgotPwTxt" to="/forgotpassword">
              비밀번호를 잊어버리셨나요?
            </Link>
            <div className="noAccountTxt">
              계정이 없으신가요?
              <Link className="signUpNowBtn" to="/signup">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
