import React, { Component } from 'react';
import MovieCard from '../MovieContainer/MovieCard';
import Slider from 'react-slick';
import '../MovieContainer/MovieContainer.scss';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

class MovieContainerBottom extends Component {
  render() {
    const { movies } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
