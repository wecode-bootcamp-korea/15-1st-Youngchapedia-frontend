import React from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import './CogIconModalControl.scss';

class CogIconModalControl extends React.Component {
  deleteAccountHandler = () => {
    Swal.fire({
      text: '탈퇴 하시겠어요?',
      width: 260,
      height: 580,
      showDenyButton: true,
      confirmButtonText: `취소`,
      denyButtonText: `확인`,
    }).then(result => {
      if (result.isDenied) {
        Swal.fire('그동안 이용해주셔서 감사합니다!', '', 'success');
        this.props.myPageModalClose();
        this.props.history.push('/mainpage');
      }
    });
  };

  logoutHandler = () => {
    Swal.fire({
      text: '로그아웃 하시겠어요?',
      width: 260,
      height: 580,
      showDenyButton: true,
      confirmButtonText: `취소`,
      denyButtonText: `확인`,
    }).then(result => {
      if (result.isDenied) {
        sessionStorage.removeItem('access_token');
        this.props.myPageModalClose();
        this.props.history.push('/mainpage');
      }
    });
  };

  render() {
    const { myPageModalStatus, myPageModalOpen, myPageModalClose } = this.props;
    return (
      <>
        {myPageModalStatus ? (
          <div className="CogIconModalControl">
            <div
              className="underMyPageModal"
              onClick={e => {
                e.stopPropagation();
                myPageModalClose();
              }}
            >
              <div
                className="cogIconModalBox"
                onClick={e => {
                  e.stopPropagation();
                  myPageModalOpen();
                }}
              >
                설정
                <button className="logoutBtn" onClick={this.logoutHandler}>
                  로그아웃
                </button>
                <button
                  className="deleteAccountBtn"
                  onClick={this.deleteAccountHandler}
                >
                  탈퇴하기
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default withRouter(CogIconModalControl);
