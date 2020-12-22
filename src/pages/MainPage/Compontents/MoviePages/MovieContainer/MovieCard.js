import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './MovieCard.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <li
        key={movie.index}
        className="movieCard"
        onClick={() => {
          this.props.history.push({
            pathname: `/details/${movie.id}`,
            state: { movie: movie },
          });
        }}
      >
        <div className="moviePoster">
          <div className="imgWrap">
            <img alt="poster" src={movie.main_image_url} />
          </div>
        </div>
        <div className="movieInfo">
          <p className="movieTitle">{movie.title_korean}</p>
          <p className="yearAndCountry">2020 ・ 대한민국</p>
          <p className="rating">예상 ★ 2.5점</p>
        </div>
      </li>
    );
  }
}

export default withRouter(MovieCard);
