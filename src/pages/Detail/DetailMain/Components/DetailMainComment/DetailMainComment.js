import React, { Component } from 'react';
import './DetailMainComment.scss';

class DetailMainComment extends React.Component {
  render() {
    return (
      <div className="DetailMainComment">
        <div>대단한 작품이군요!WATCHA 님의 감동을 글로 남겨보세요</div>
        <button>코멘트 남기기</button>
      </div>
    );
  }
}

export default DetailMainComment;
