import React, { Component } from 'react';
import MovieCard from '../MovieContainer/MovieCard';
import Slider from 'react-slick';
import '../MovieContainer/MovieContainer.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
