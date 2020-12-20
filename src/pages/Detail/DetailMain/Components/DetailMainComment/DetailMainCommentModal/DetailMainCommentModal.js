import React, { Component } from 'react';
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

  render() {
    const { comment, commentBtnStatus } = this.state;

    return (
      <section className="DetailMainCommentModal">
        <div className="modalContent">
          <form onSubmit={this.onReceiveCommentValue}>
            <div className="firstLine">
              <div className="icon" onClick={this.onCloseComment}>
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
