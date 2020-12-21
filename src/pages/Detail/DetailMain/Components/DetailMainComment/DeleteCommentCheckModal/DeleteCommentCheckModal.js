import React, { Component } from 'react';
import { MOVIE_REVIEW } from '../../../../../../config';
import './DeleteCommentCheckModal.scss';

class DeleteCommentCheckModal extends Component {
  onCancelDelete = () => {
    this.props.handleLeaveCommentToggle();
  };

  onCommentDelete = () => {
    this.props.handleCommentDelete();
    fetch(MOVIE_REVIEW, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.T66un2Tsk42sMvfJjqY1YO9Kh4gyuCBKJib6bizw_fE',
      },
    }).then(response => response.json());
  };

  render() {
    return (
      <section className="DeleteCommentCheckModal">
        <div className="DeleteCommentCheckModalStyle">
          <div className="DeleteCommentCheckModalCheck">
            <p className="DeleteCommentCheckModalAlarm">알림</p>
            <p className="DeleteCommentCheckModalCheckMessage">
              코멘트를 삭제하시겠어요?
            </p>
          </div>
          <div className="DeleteCommentCheckModalButton">
            <button
              className="DeleteCommentCheckModalCancel"
              onClick={this.onCancelDelete}
            >
              취소
            </button>
            <button
              className="DeleteCommentCheckModalSubmit"
              onClick={this.onCommentDelete}
            >
              확인
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default DeleteCommentCheckModal;
