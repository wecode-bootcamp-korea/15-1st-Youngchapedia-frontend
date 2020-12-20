import React, { Component } from 'react';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <li key={movie.index} className="movieCard">
        <a href="#">
          <div className="moviePoster">
            <div className="imgWrap">
              <img alt="poster" src={movie.main_image_url} />
            </div>
          </div>
          <div className="movieInfo">
            <p className="movieTitle">{movie.title_korean}</p>
            {movie.year && movie.country ? (
              <p className="yearAndCountry">
                {movie.year} ・ {movie.country}
              </p>
            ) : (
              <></>
            )}
            <p className="rating">{movie.category}</p>
          </div>
        </a>
      </li>
    );
  }
}

export default MovieCard;
