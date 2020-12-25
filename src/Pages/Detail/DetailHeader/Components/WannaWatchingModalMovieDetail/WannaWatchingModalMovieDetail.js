import React, { Component } from 'react';
import './WannaWatchingModalMovieDetail.scss';

class WannaWatchingModalMovieDetail extends React.Component {
  render() {
    const { movieTitle, posterImgURL } = this.props;
    return (
      <div className="WannaWatchingModalMovieDetail">
        <div className="WannaWatchingModalMovieDetailImg">
          <img
            className="MovieDetailImg"
            src={posterImgURL}
            alt="moviePoster"
          />
        </div>
        <div className="ModalMovieDetailNameAndDetail">
          <p className="WannaWatchingMovieName">{movieTitle}</p>
          <p className="WannaWatchingMovieDetail">영화</p>
        </div>
      </div>
    );
  }
}

export default WannaWatchingModalMovieDetail;
