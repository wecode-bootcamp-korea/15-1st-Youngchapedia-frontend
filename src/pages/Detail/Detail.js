import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';

class Detail extends React.Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <div>
        <DetailHeader />
        <DetailMain />
        <DetailAside />
      </div>
    );
  }
}

export default Detail;
