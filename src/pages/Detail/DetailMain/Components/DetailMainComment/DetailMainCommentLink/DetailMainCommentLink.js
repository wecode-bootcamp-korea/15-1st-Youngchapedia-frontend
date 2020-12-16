import React, { Component } from 'react';
import './DetailMainCommentLink.scss';

class DetailMainCommentLink extends React.Component {
  consoleCheck = () => {
    console.log(this.props.comment);
  };
  render() {
    return (
      <section className="DetailMainCommentLink">
        <div className="firstLine">
          <div className="icon">
            <i class="fas fa-times"></i>
          </div>
          <p>원더우먼</p>
          <div className="commentSummit" onClick={this.consoleCheck}>
            코멘트 작성
          </div>
        </div>
        <div className="SNS">
          <div>sns</div>

          <img
            src="https://t1.daumcdn.net/cfile/tistory/2179484B51E15ABC35"
            alt="트위터"
          />
        </div>

        <textarea></textarea>
      </section>
    );
  }
}

export default DetailMainCommentLink;
