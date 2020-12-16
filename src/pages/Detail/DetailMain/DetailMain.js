import React, { Component } from 'react';
import DetailMainComment from './Components/DetailMainComment/DetailMainComment';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import './DetailMain.scss';

class DetailMain extends React.Component {
  render() {
    return (
      <main className="DetailMain">
        <DetailMainComment />
        <div>
          <DetailMainInfor />
          <DetailMainAct />
        </div>
      </main>
    );
  }
}

export default DetailMain;
