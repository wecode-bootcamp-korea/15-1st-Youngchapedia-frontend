import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Slider from 'react-slick';
import './MovieContainer.scss';

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

class MovieContainer extends Component {
  state = {
    image: '',
  };
  render() {
    console.log(this.props);
    const { movies } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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

export default MovieContainer;
