import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import './Detail.scss';

class Detail extends React.Component {
  state = {
    movies: [],
  };

  handleLeaveComment = () => {};

  render() {
    return (
      <div className="Detail">
        <DetailHeader />
        <div className="DetailMainAside">
          <DetailMain />
          <DetailAside />
        </div>
      </div>
    );
  }
}

export default Detail;
