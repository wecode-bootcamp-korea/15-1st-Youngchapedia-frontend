import React, { Component } from 'react';
import { USER2_TOKEN, ACRIVE_USER_COMMENT_LIKE } from '../../../../../config';
import './DetailMainCommentReadList.scss';

class DetailMainCommentReadList extends React.Component {
  state = {
    isActiveUserCommentLike: false,
  };

  onActiveUserCommentLike = () => {
    const { isActiveUserCommentLike } = this.state;
    this.setState({
      isActiveUserCommentLike: !this.state.isActiveUserCommentLike,
    });
    if (isActiveUserCommentLike) {
      this.deleteActiveUserCommentLike();
    }
    if (!isActiveUserCommentLike) {
      this.postActiveUserCommentLike();
    }
  };

  postActiveUserCommentLike = () => {
    const currentToken = sessionStorage.getItem('access_token');
    fetch(`${ACRIVE_USER_COMMENT_LIKE}/${currentToken}`, {
      method: 'POST',
      headers: {
        Authorization: currentToken,
      },
    }).then(response => response.json());
  };

  deleteActiveUserCommentLike = () => {
    const currentToken = sessionStorage.getItem('access_token');
    fetch(`${ACRIVE_USER_COMMENT_LIKE}/${currentToken}`, {
      method: 'DELETE',
      headers: {
        Authorization: currentToken,
      },
    }).then(response => response.json());
  };

  render() {
    const { isActiveUserCommentLike } = this.state;
    const { userName, userProfileImg, review, likes } = this.props;
    return (
      <div className="DetailMainCommentReadList">
        <div className="CommentListUserName">
          <img src={userProfileImg} alt="프로필사진" />
          <span>{userName}</span>
        </div>
        <div className="CommentListUserReview">
          <span>{review}</span>
        </div>
        <div className="UserLikeAndComment">
          <div className="UserLike">
            <i className="far fa-thumbs-up" />
            <span>{likes}</span>
          </div>
        </div>
        <div
          className={
            isActiveUserCommentLike
              ? 'ActiveUserCommentLike'
              : 'inActiveUserCommentLike'
          }
          onClick={this.onActiveUserCommentLike}
        >
          <span>좋아요</span>
        </div>
      </div>
    );
  }
}

export default DetailMainCommentReadList;
