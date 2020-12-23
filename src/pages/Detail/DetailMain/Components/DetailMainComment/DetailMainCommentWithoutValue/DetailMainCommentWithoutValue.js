import React, { Component } from 'react';
import './DetailMainCommentWithoutValue.scss';

class DetailMainCommentWithoutValue extends React.Component {
  onAddLeaveComment = e => {
    e.preventDefault();
    this.props.handleLeaveCommentToggle();
  };

  render() {
    return (
      <div className="DetailMainCommentWithoutValue">
        <div>대단한 작품이군요! YoungCHA 님의 감동을 글로 남겨보세요</div>
        <button onClick={this.onAddLeaveComment}>코멘트 남기기</button>
      </div>
    );
  }
}

export default DetailMainCommentWithoutValue;
