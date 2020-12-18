import React, { Component } from 'react';
import './DeleteCommentCheckModal.scss';

class DeleteCommentCheckModal extends Component {
  onCancelDelete = () => {
    this.props.handleCancelDelete();
  };

  onCommentDelete = () => {
    this.props.handleCommentDelete();
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
