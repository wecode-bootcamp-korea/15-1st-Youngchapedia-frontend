import React, { Component } from 'react';
import './DetailMainInfor.scss';

class DetailMainInfor extends React.Component {
  render() {
    const {
      movieTitle,
      movieReleaseYear,
      makeCountry,
      movieGenre,
      descriptionValue,
      runningtime,
    } = this.props;

    return (
      <div className="DetailMainInfor">
        <div className="DetailMainInfoMore">
          <h1>기본 정보</h1>
        </div>
        <div className="DetailMainInfoPTag">
          <p>{movieTitle}</p>
          <p>{`${movieReleaseYear} ${makeCountry} ${movieGenre}`}</p>
          <p>{runningtime} 분</p>
        </div>
        <div className="DetailMainInfoDesc">{descriptionValue}</div>
      </div>
    );
  }
}

export default DetailMainInfor;
