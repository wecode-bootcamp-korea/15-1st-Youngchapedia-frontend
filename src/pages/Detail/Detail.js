import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import './Detail.scss';

class Detail extends React.Component {
  state = {
    movies: [],
    posterImgURL: '',
    movieTitle: '',
    movieReleaseYear: '',
    movieGenre: '',
    makeCountry: '',
    descriptionValue: '',
  };

  componentDidMount() {
    fetch('http://192.168.219.113:8000/contents/1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          posterImgURL: res.RESULT[0].main_image_url,
          movieTitle: res.RESULT[0].title_korean,
          movieReleaseYear: res.RESULT[0].release_year,
          movieGenre: res.RESULT[0].genre,
          makeCountry: res.RESULT[0].country,
        });
      });

    fetch('http://192.168.219.113:8000/contents/1/overview')
      .then(response => response.json())
      .then(response =>
        this.setState({ descriptionValue: response.MESSAGE[0].description })
      );
  }

  render() {
    const {
      posterImgURL,
      movieTitle,
      movieReleaseYear,
      movieGenre,
      makeCountry,
      descriptionValue,
    } = this.state;
    return (
      <div className="Detail">
        <DetailHeader
          posterImgURL={posterImgURL}
          movieTitle={movieTitle}
          movieReleaseYear={movieReleaseYear}
          movieGenre={movieGenre}
          makeCountry={makeCountry}
        />
        <div className="DetailMainAside">
          <DetailMain
            movieTitle={movieTitle}
            movieReleaseYear={movieReleaseYear}
            makeCountry={makeCountry}
            movieGenre={movieGenre}
            descriptionValue={descriptionValue}
          />
          <DetailAside />
        </div>
      </div>
    );
  }
}

export default Detail;
