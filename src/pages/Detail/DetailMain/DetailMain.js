import React, { Component } from 'react';
import DetailMainComment from './Components/DetailMainComment/DetailMainComment';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import './DetailMain.scss';

class DetailMain extends React.Component {
  state = {
    comment: [],
    isCommentValue: false,
  };
  render() {
    const { comment, isCommentValue } = this.state;
    return (
      <main className="DetailMain">
        <DetailMainComment comment={comment} isCommentValue={isCommentValue} />
        <div>
          <DetailMainInfor />
          <DetailMainAct />
        </div>
      </main>
    );
  }
}

export default DetailMain;
