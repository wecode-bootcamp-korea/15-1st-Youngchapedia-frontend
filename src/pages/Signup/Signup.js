import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      name: '',
    };
  }
  handleInputValueChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  checkValidation = e => {
    e.preventDefault();
    const { id, pw, name } = this.state;
    if (id && pw && name) {
      alert('success');
    } else {
      alert('Fail');
    }
  };

  render() {
    const { id, pw, name } = this.state;
    console.log(this.state);

    return (
      <>
        <body className="Signup">
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
              onChange={this.handleInputValueChange}
            ></input>
            <input
              id="id"
              value={id}
              className="emailInput"
              placeholder="이메일"
              onChange={this.handleInputValueChange}
            ></input>
            <input
              id="pw"
              value={pw}
              className="passwordInput"
              placeholder="비밀번호"
              onChange={this.handleInputValueChange}
            ></input>
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
        </body>
      </>
    );
  }
}

export default Signup;
