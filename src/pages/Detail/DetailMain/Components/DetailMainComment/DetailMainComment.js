import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DetailMainComment.scss';

class DetailMainComment extends React.Component {
  render() {
    return (
      <div className="DetailMainComment">
        <div onClick={this.consoleCheck}>
          대단한 작품이군요!WATCHA 님의 감동을 글로 남겨보세요
        </div>
        <NavLink to="/detailmain/commentlink" comment={this.props.comment}>
          <button>코멘트 남기기</button>
        </NavLink>
      </div>
    );
  }
}

export default DetailMainComment;
