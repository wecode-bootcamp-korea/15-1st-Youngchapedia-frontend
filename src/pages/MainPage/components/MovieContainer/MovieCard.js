import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <li key={movie.index} className="movieCard">
        <a href="#">
          <div className="moviePoster">
            <img alt="poster" src={movie.moviePoster} />
          </div>
          <div className="movieInfo">
            <p className="movieTitle">{movie.title}</p>
            <p className="yearAndCountry">
              {movie.year} ・ {movie.country}
            </p>
            <p className="rating">예상 ★ {movie.rating}</p>
          </div>
        </a>
      </li>
    );
  }
}

export default MovieCard;
