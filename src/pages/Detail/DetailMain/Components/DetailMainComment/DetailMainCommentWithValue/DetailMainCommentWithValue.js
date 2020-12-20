import React, { Component } from 'react';
import DetailMainCommentModal from '../DetailMainCommentModal/DetailMainCommentModal';
import './DetailMainCommentWithValue.scss';

class DetailMainCommentWithValue extends React.Component {
  onCommentDelete = () => {
    this.props.handleDeleteValueToggle();
  };

  onCommentEdit = () => {
    this.props.handleCommentEditToggle();
  };

  render() {
    const { comment } = this.props;
    return (
      <div className="DetailMainCommentWithValue">
        <div className="profile">
          <img
            src="https://pyxis.nymag.com/v1/imgs/e77/f86/c097ab5b7adf3ba4f84ccf013693ab6a48-kendall-jenner.2x.rsocial.w600.jpg"
            alt="profile"
          />
        </div>
        <div className="commentValue">{comment}</div>
        <div className="commentIcons">
          <div className="iconTrash" onClick={this.onCommentDelete}>
            <i className="far fa-trash-alt" />
            <span>삭제</span>
          </div>
          <div className="pencil" onClick={this.onCommentEdit}>
            <i className="fas fa-pencil-alt" />
            <span>수정</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailMainCommentWithValue;
