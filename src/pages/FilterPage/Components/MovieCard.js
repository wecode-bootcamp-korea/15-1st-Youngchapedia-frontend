import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <li key={movie.index} className="movieCard">
        <a href="#">
          <div className="moviePoster">
            <img alt="poster" src={movie.main_image_url} />
          </div>
          <div className="movieInfo">
            <p className="movieTitle">{movie.title_korean}</p>
            <p className="yearAndCountry">{movie.title_original}</p>
          </div>
        </a>
      </li>
    );
  }
}

export default MovieCard;
