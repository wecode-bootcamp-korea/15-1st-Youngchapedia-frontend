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
    } = this.props;

    return (
      <div className="DetailMainInfor">
        <div className="DetailMainInfoMore">
          <h1>기본 정보</h1>
          <span>더보기</span>
        </div>
        <div className="DetailMainInfoPTag">
          <p>{movieTitle}</p>
          <p>{`${movieReleaseYear} ∙ ${makeCountry} ∙ ${movieGenre}`}</p>
          <p>시간</p>
        </div>
        <div className="DetailMainInfoDesc">(줄거리){descriptionValue}</div>
      </div>
    );
  }
}

export default DetailMainInfor;
