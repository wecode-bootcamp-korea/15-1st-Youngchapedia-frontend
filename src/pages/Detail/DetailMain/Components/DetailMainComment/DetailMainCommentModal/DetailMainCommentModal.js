import React, { Component } from 'react';
import { MOVIE_REVIEW } from '../../../../../../config';
import { USER1_TOKEN, USER2_TOKEN } from '../../../../../../config';
import './DetailMainCommentModal.scss';

class DetailMainCommentModal extends React.Component {
  state = {
    comment: '',
    commentBtnStatus: true,
  };

  onCloseComment = () => {
    this.props.handleLeaveCommentToggle();
  };

  receiveValue = e => {
    this.setState({ comment: e.target.value });
    this.buttonChange();
  };

  buttonChange = () => {
    const { comment } = this.state;
    const check = comment.length > 1;
    this.setState({
      commentBtnStatus: check ? false : true,
    });
  };

  onReceiveCommentValue = e => {
    const { comment } = this.state;
    e.preventDefault();
    this.props.handleCommentValue(comment);
  };

  writingComment = () => {
    const { comment } = this.state;
    fetch(MOVIE_REVIEW, {
      method: 'POST',
      headers: {
        Authorization: USER2_TOKEN,
      },
      body: JSON.stringify({
        review: comment,
      }),
    }).then(response => response.json());
  };

  render() {
    const { comment, commentBtnStatus } = this.state;
    const { movieTitle } = this.props;
    return (
      <section className="DetailMainCommentModal">
        <div className="modalContent">
          <form onSubmit={this.onReceiveCommentValue}>
            <div className="firstLine">
              <div className="icon" onClick={this.onCloseComment}>
                <i className="fas fa-times" />
              </div>
              <p>{movieTitle}</p>
              <button
                className={
                  commentBtnStatus
                    ? 'enabledcommentSummit'
                    : 'abledcommentSummit'
                }
                disabled={commentBtnStatus}
                onClick={this.writingComment}
              >
                코멘트 작성
              </button>
            </div>
            <div className="SNS">
              <div>sns</div>

              <img
                src="https://t1.daumcdn.net/cfile/tistory/2179484B51E15ABC35"
                alt="트위터"
              />
            </div>

            <textarea onChange={this.receiveValue} value={comment}></textarea>
          </form>
        </div>
      </section>
    );
  }
}

export default DetailMainCommentModal;
