import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Slider from 'react-slick';

class MovieContainerBottom extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: 5,
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
    const { movies } = this.props;
    console.log(this.props);
    return (
      <>
        <ul className="movies">
          <Slider {...settings}>
            {movies.slice(5, 15).map((movie, id) => (
              <MovieCard
                movie={movie}
                key={id}
                slidesToShow={this.props.slidesToShow}
              />
            ))}
          </Slider>
        </ul>
      </>
    );
  }
}

export default MovieContainerBottom;
