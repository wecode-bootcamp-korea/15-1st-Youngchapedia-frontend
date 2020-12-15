import React from 'react';
import './Forgotpassword.scss';

class Forgotpassword extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
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
    const { id } = this.state;
    if (id) {
      alert('success');
    } else {
      alert('Fail');
    }
  };
  render() {
    const { id } = this.state;
    console.log(this.state);
    return (
      <>
        <body className="Forgotpassword">
          <div className="forgotPwBox">
            <div className="forgotPwUp">
              <div className="forgotPwTitle">비밀번호 재설정</div>
            </div>
            <div className="forgotPwDown">
              <div className="didYouForget">비밀번호를 잊으셨나요?</div>
              <div className="signedUpEmail">가입했던 이메일을 적어주세요.</div>
              <div className="pleaseType">
                입력하신 이메일 주소로 비밀번호 변경 메일을 보낼게요
              </div>
              <input
                id="id"
                value={id}
                className="forgotEmailInput"
                placeholder="이메일"
                onChange={this.handleInputValueChange}
              ></input>
              <button
                className="resetEmailButton"
                onClick={this.checkValidation}
              >
                비밀번호 변경 이메일 보내기
              </button>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Forgotpassword;
