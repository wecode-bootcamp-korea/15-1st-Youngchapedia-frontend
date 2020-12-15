import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      emailList: [],
    };
  }
  componentDidMount = () => {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          emailList: res.users,
        });
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
    const { id, pw, emailList } = this.state;
    if (id == emailList.email && pw == emailList.password) {
      alert('success');
    } else {
      alert('Fail');
    }
  };

  render() {
    const { id, pw } = this.state;
    console.log(this.state.emailList.email);
    console.log(this.state.emailList.password);
    return (
      <>
        <body className="Login">
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
              onChange={this.handleInputValueChange}
            ></input>
            <input
              id="pw"
              value={pw}
              className="passwordInput"
              placeholder="비밀번호"
              type="password"
              onChange={this.handleInputValueChange}
            ></input>
            <button className="loginBtn" onClick={this.checkValidation}>
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
        </body>
      </>
    );
  }
}

export default Login;
