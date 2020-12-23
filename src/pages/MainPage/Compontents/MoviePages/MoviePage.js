import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Movieinfo from './Movieinfo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MoviePage.scss';
import {
  COLLECTION_LIST,
  COLLECTION_DIRECTOR_LIST,
  ACTION_LIST,
  NETFLIX_LIST,
  WATCHA_LIST,
} from '../../../../config';

class MoviePage extends Component {
  state = {
    netflixMovieList: [],
    watchaMovieList: [],
    collectionDirectorList: [],
    collectionGenreList: [],
    movieActionList: [],
    isLoading1: true,
    isLoading2: true,
    isLoading3: true,
    isLoading4: true,
    isLoading5: true,
  };

  componentDidMount = () => {
    this.getApis();
  };

  getApis = () => {
    Promise.all([
      fetch('/data/netflix.json'),
      fetch('/data/watcha.json'),
      fetch('/data/people.json'),
      fetch('/data/genre.json'),
      fetch('/data/tag.json'),
    ])
      .then(([res1, res2, res3, res4, res5]) =>
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
        ])
      )
      .then(([data1, data2, data3, data4, data5]) =>
        this.setState({
          netflixMovie: data1.RESULT,
          watchaMovieList: data2.RESULT,
          collectionDirectorList: data3.RESULT[0],
          collectionGenreList: data4.RESULT[0],
          movieActionList: data5.RESULT[0],
          isLoading1: false,
          isLoading2: false,
          isLoading3: false,
          isLoading4: false,
          isLoading5: false,
        })
      );
  };

  render() {
    const {
      netflixMovie,
      watchaMovieList,
      collectionDirectorList,
      collectionGenreList,
      movieActionList,
      isLoading1,
      isLoading2,
      isLoading3,
      isLoading4,
      isLoading5,
    } = this.state;
    return (
      <main className="MainPage">
        {isLoading5 ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <Movieinfo
            goToFilter={event => {
              this.props.history.push({
                pathname: `/filterPage/${collectionDirectorList.id}`,
                state: { collectionDirectorList: collectionDirectorList },
              });
            }}
            collectionTitle={'영차가 추천하는 작품 💁‍♀️'}
            collectionContent={`🎄크리스마스에는 ${collectionDirectorList.name} ${collectionDirectorList.title}의 작품과 함께`}
            slideMovies={collectionDirectorList.contents}
            slidesToShow={5}
          />
        )}
        {isLoading4 ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <Movieinfo
            goToFilter={event => {
              event.stopPropagation();
            }}
            collectionTitle={'영차가 추천하는 작품 💁'}
            collectionContent={`😎 이번 크리스마스에는 ${collectionGenreList.genre_name}과 함께! 🦾`}
            slideMovies={collectionGenreList.contents}
            slidesToShow={5}
          />
        )}
        {isLoading3 ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <Movieinfo
            goToFilter={event => {
              event.stopPropagation();
            }}
            collectionTitle={'영차가 추천하는 작품 👼'}
            collectionContent={`#${movieActionList.tag_name}`}
            slideMovies={movieActionList.contents}
            slidesToShow={5}
          />
        )}
        {isLoading2 ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <Movieinfo
            goToFilter={event => {
              event.stopPropagation();
            }}
            collectionContent={'😎 넷플릭스 영화'}
            slideMovies={netflixMovie.contents.slice(10, 20)}
            slidesToShow={4}
          />
        )}
        {isLoading1 ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <Movieinfo
            goToFilter={event => {
              event.stopPropagation();
            }}
            collectionContent={'🥳 영차 영화'}
            slideMovies={watchaMovieList.contents.slice(0, 10)}
            slidesToShow={4}
          />
        )}
      </main>
    );
  }
}

export default withRouter(MoviePage);
