import React, { Component } from 'react';
import MovieContainerBottom from './MovieContainer/MovieContainer';

class movieInfo extends Component {
  render() {
    const {
      goToFilter,
      collectionTitle,
      collectionContent,
      slideMovies,
      slidesToShow,
    } = this.props;
    return (
      <section className="mainMovieList">
        <div className="movieHeader movieHeaderCollection personList">
          <div className="recoProfile">
            <img alt="profile" src="/images/profile2.png" />
          </div>
          <div onClick={event => goToFilter(event)}>
            <p className="collectionTxt">{collectionTitle}</p>
            <p>{collectionContent}</p>
          </div>
        </div>
        <div className="movieSlideContainer">
          <MovieContainerBottom
            movies={slideMovies}
            slidesToShow={slidesToShow}
          />
        </div>
      </section>
    );
  }
}

export default movieInfo;
