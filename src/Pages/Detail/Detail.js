import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import DetailHeader from './DetailHeader/DetailHeader';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import { API, MOVIES_DETAIL } from '../../config';
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
    runningtime: '',
    moivesGallery: '',
    moivesId: '',
    isLoading: true,
  };

  componentDidMount() {
    this.getMoiveDetail();
    this.getMoiveDescription();
    this.getMovieGallery();
  }

  getMoiveDetail = () => {
    fetch(`${MOVIES_DETAIL}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posterImgURL: res.RESULT[0].main_image_url,
          movieTitle: res.RESULT[0].title_korean,
          movieReleaseYear: res.RESULT[0].release_year,
          movieGenre: res.RESULT[0].genre,
          makeCountry: res.RESULT[0].country,
          isLoading: false,
          moivesId: res.RESULT[0].content_id,
        });
      });
  };

  getMoiveDescription = () => {
    fetch(`${API}/contents/${this.props.match.params.id}/overview`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          descriptionValue: response.RESULT.description,
          runningtime: response.RESULT.runtime,
        });
      });
  };

  getMovieGallery() {
    fetch(`${MOVIE_DETAIL_GALLERY}${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          moivesGallery: res.RESULT.gallery_images,
        });
      });
  }

  render() {
    const {
      posterImgURL,
      movieTitle,
      movieReleaseYear,
      movieGenre,
      makeCountry,
      moivesId,
      runningtime,
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
          <>
            <Nav />
            <div className="Detail">
              <DetailHeader
                posterImgURL={posterImgURL}
                movieTitle={movieTitle}
                movieReleaseYear={movieReleaseYear}
                movieGenre={movieGenre}
                makeCountry={makeCountry}
                moivesGallery={moivesGallery}
                Id={moivesId}
              />
              <div className="DetailMainAside">
                <DetailMain
                  movieTitle={movieTitle}
                  movieReleaseYear={movieReleaseYear}
                  makeCountry={makeCountry}
                  movieGenre={movieGenre}
                  descriptionValue={descriptionValue}
                  runningtime={runningtime}
                  Id={moivesId}
                />
                <DetailAside moivesGallery={moivesGallery} Id={moivesId} />
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Detail;
