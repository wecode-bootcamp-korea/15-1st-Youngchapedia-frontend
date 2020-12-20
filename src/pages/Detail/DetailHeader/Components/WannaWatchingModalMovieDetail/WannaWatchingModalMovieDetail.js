import React, { Component } from 'react';
import './WannaWatchingModalMovieDetail.scss';

class WannaWatchingModalMovieDetail extends React.Component {
  render() {
    return (
      <div className="WannaWatchingModalMovieDetail">
        <div className="WannaWatchingModalMovieDetailImg">
          <img
            src="https://img.yts.mx/assets/images/movies/gabriels_rapture_2020/medium-cover.jpg"
            alt="moviePoster"
          />
        </div>
        <div className="WannaWatchingModalMovieDetailNameAndDetail">
          <p className="WannaWatchingMovieName">아람피터와 진실의방</p>
          <p className="WannaWatchingMovieDetail">영화</p>
        </div>
      </div>
    );
  }
}

export default WannaWatchingModalMovieDetail;
