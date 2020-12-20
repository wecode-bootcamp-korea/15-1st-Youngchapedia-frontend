import React, { Component } from 'react';
import MovieCard from '../MovieContainer/MovieCard';
import Slider from 'react-slick';

class MovieContainerBottom extends Component {
  render() {
    const { movies } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <>
        <ul className="movies">
          <Slider {...settings}>
            {movies.map((movie, id) => (
              <MovieCard movie={movie} key={id} />
            ))}
          </Slider>
        </ul>
      </>
    );
  }
}

export default MovieContainerBottom;
