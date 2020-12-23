import React, { Component } from 'react';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import { MOVIES_DETAIL } from '../../config';
import { MOVIES_DESCRIPTION, MOVIE_DETAIL_GALLERY } from '../../config';
import './Detail.scss';

class Detail extends Component {
  state = {
    movies: [],
    posterImgURL: '',
    movieTitle: '',
    movieReleaseYear: '',
    movieGenre: '',
    makeCountry: '',
    descriptionValue: '',
    moivesGallery: '',
    isLoading: true,
  };

  componentDidMount() {
    this.getMoiveDetail();
    this.getMoiveDescription();
    this.getMovieGallery();
  }

  getMoiveDetail = () => {
    fetch(MOVIES_DETAIL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posterImgURL: res.RESULT[0].main_image_url,
          movieTitle: res.RESULT[0].title_korean,
          movieReleaseYear: res.RESULT[0].release_year,
          movieGenre: res.RESULT[0].genre,
          makeCountry: res.RESULT[0].country,
          isLoading: false,
        });
      });
  };

  getMoiveDescription = () => {
    fetch(MOVIES_DESCRIPTION)
      .then(response => response.json())
      .then(response =>
        this.setState({ descriptionValue: response.MESSAGE[0].description })
      );
  };

  getMovieGallery() {
    fetch('./data/gallery.json')
      // MOVIE_DETAIL_GALLERY
      .then(res => res.json())
      .then(res => {
        console.log(this.state.moivesGallery);
        this.setState({ moivesGallery: res.RESULT[0].galleris_image });
      });
  }

  render() {
    const {
      posterImgURL,
      movieTitle,
      movieReleaseYear,
      movieGenre,
      makeCountry,
      descriptionValue,
      isLoading,
      moivesGallery,
    } = this.state;
    return (
      <>
        {isLoading ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <div className="Detail">
            <DetailHeader
              posterImgURL={posterImgURL}
              movieTitle={movieTitle}
              movieReleaseYear={movieReleaseYear}
              movieGenre={movieGenre}
              makeCountry={makeCountry}
              moivesGallery={moivesGallery}
            />
            <div className="DetailMainAside">
              <DetailMain
                movieTitle={movieTitle}
                movieReleaseYear={movieReleaseYear}
                makeCountry={makeCountry}
                movieGenre={movieGenre}
                descriptionValue={descriptionValue}
              />
              <DetailAside moivesGallery={moivesGallery} />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Detail;
