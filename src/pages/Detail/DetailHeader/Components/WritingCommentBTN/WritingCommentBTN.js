import React, { Component } from 'react';
import './WritingCommentBTN.scss';

class WritingCommentBTN extends Component {
  render() {
    return (
      <div className="WritingCommentBTN">
        <span>코멘트 작성하기</span>
        <i className="fas fa-comment" />
      </div>
    );
  }
}

export default WritingCommentBTN;
