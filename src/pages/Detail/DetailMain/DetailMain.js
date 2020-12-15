import React, { Component } from 'react';
import './DetailMain.scss';
import DetailMainComment from './Components/DetailMainComment/DetailMainComment';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';

class DetailMain extends React.Component {
  render() {
    return (
      <main>
        <DetailMainComment />
        <DetailMainAct />
        <DetailMainInfor />
      </main>
    );
  }
}

export default DetailMain;
