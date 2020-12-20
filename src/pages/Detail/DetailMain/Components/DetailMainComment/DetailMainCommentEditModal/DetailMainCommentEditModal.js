import React, { Component } from 'react';
import './DetailMainCommentEditModal.scss';

class DetailMainCommentEditModal extends React.Component {
  state = {
    comment: this.props.comment,
    commentBtnStatus: true,
  };

  onRemoveEditComment = () => {
    this.props.handleCommentEditToggle();
  };

  receiveValue = e => {
    const { comment } = this.state;
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
    this.props.handleEditCommentValue(comment);
  };

  EditComment = () => {
    const { comment } = this.state;
    fetch('http://192.168.219.156:8000/review/content/1', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.T66un2Tsk42sMvfJjqY1YO9Kh4gyuCBKJib6bizw_fE',
      },
      body: JSON.stringify({
        review: comment,
      }),
    }).then(response => response.json());
  };
  render() {
    const { comment, commentBtnStatus } = this.state;

    return (
      <section className="DetailMainCommentEditModal">
        <div className="modalContent">
          <form onSubmit={this.onReceiveCommentValue}>
            <div className="firstLine">
              <div className="icon" onClick={this.onRemoveEditComment}>
                <i className="fas fa-times" />
              </div>
              <p>원더우먼</p>
              <button
                className={
                  commentBtnStatus
                    ? 'enabledcommentSummit'
                    : 'abledcommentSummit'
                }
                disabled={commentBtnStatus}
                onClick={this.EditComment}
              >
                코멘트 수정
              </button>
            </div>
            <div className="SNS">
              <div>sns</div>

              <img
                src="https://t1.daumcdn.net/cfile/tistory/2179484B51E15ABC35"
                alt="트위터"
              />
            </div>

            <textarea onChange={this.receiveValue} value={comment} />
          </form>
        </div>
      </section>
    );
  }
}

export default DetailMainCommentEditModal;