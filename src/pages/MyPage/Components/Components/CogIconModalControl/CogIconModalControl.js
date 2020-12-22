import React from 'react';
import './CogIconModalControl.scss';
// import { APILOGIN } from '../../../../config';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
//id:test123@test.com pw:123123qweqwe mrtest123
//1@test.com 111111qqq
//2@test.com 222222www
// access_token: " “eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.VUCJcgl9ZEFdjr20lj0cLy7ngiMSkb9p-3bH4L3KBDU”"

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
      //   title: '알림',
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
