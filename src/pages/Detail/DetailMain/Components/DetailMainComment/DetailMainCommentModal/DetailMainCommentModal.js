import React, { Component } from 'react';
import './DetailMainCommentModal.scss';

class DetailMainCommentModal extends React.Component {
  state = {
    comment: '',
    commentBtnColor: true,
    commentBtnStatus: true,
  };

  onCloseComment = () => {
    this.props.handleCloseComment();
  };

  receiveValue = e => {
    this.setState({ comment: e.target.value });
    this.buttonChange();
  };

  buttonChange = () => {
    const { comment } = this.state;
    const check = comment.length > 1;
    this.setState({
      commentBtnColor: check ? false : true,
      commentBtnStatus: check ? false : true,
    });
  };

  onReceiveCommentValue = e => {
    const { comment } = this.state;
    e.preventDefault();
    this.props.handleCommentValue(comment);
  };

  render() {
    const { comment, commentBtnStatus, commentBtnColor } = this.state;

    return (
      <section className="DetailMainCommentModal">
        <div className="modalContent">
          <form onSubmit={this.onReceiveCommentValue}>
            <div className="firstLine">
              <div className="icon" onClick={this.onCloseComment}>
                <i className="fas fa-times"></i>
              </div>
              <p>원더우먼</p>
              <button
                className={
                  commentBtnColor
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
