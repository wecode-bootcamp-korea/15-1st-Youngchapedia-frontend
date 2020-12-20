import React, { Component } from 'react';
import MovieContainer from './MovieContainer/MovieContainer';
import MovieContainerBottom from './MovieContainerBottom/MovieContainerBottom';
import './MoviePage.scss';
import {
  NETFLIX_LIST,
  WATCHA_LIST,
  COLLECTION_LIST,
  COLLECTION_DIRECTOR_LIST,
  ACTION_LIST,
} from '../../../../config';

class MoviePage extends Component {
  state = {
    movieList1: [],
    movieList2: [],
    movieList3: [],
    movieList4: [],
    movieList5: [],
    isLoading: true,
    isLoading2: true,
    isLoading3: true,
    isLoading4: true,
    isLoading5: true,
  };

  componentDidMount = () => {
    this.movieList1();
    this.movieList2();
    this.movieList3();
    this.movieList4();
    this.movieList5();
  };

  movieList1 = () => {
    fetch(NETFLIX_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList1: response.RESULT[0], isLoading: false })
      )
      .catch(error => console.log(error));
  };

  movieList2 = () => {
    fetch(WATCHA_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList2: response.RESULT[0], isLoading2: false })
      )
      .catch(error => console.log(error));
  };

  movieList3 = () => {
    fetch(COLLECTION_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList3: response.RESULT[0], isLoading3: false })
      )
      .catch(error => console.log(error));
  };

  movieList4 = () => {
    fetch(COLLECTION_DIRECTOR_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList4: response.RESULT[0], isLoading4: false })
      )
      .catch(error => console.log(error));
  };

  movieList5 = () => {
    fetch(ACTION_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList5: response.MESSAGE[0], isLoading5: false })
      )
      .catch(error => console.log(error));
  };

  render() {
    const {
      movieList1,
      movieList2,
      movieList3,
      movieList4,
      movieList5,
      isLoading,
      isLoading2,
      isLoading3,
      isLoading4,
      isLoading5,
    } = this.state;

    return (
      <>
        <main className="MainPage">
          {isLoading ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader">
                <p>{movieList1.service_name} 영화 순위</p>
              </div>
              <MovieContainer movies={movieList1.contents} />
            </section>
          )}
          {isLoading2 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader">
                <p>{movieList2.service_name} 영화 순위</p>
              </div>
              <MovieContainer movies={movieList2.contents} />
            </section>
          )}
          {isLoading3 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderCollection personList">
                <div>
                  <p>#{movieList3.tag_name}</p>
                </div>
              </div>
              <div className="movieSlideContainer">
                <MovieContainerBottom movies={movieList3.contents} />
              </div>
            </section>
          )}
          {isLoading4 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderCollection personList">
                <div className="recoProfile">
                  <img alt="profile" src={movieList4.profile_image_url} />
                </div>
                <div>
                  <p className="collectionTxt">#김별이님의 추천</p>
                  <p>화제의 감독 {movieList4.name}의 작품</p>
                </div>
              </div>
              <div className="movieSlideContainer">
                <MovieContainerBottom movies={movieList4.contents} />
              </div>
            </section>
          )}
          {isLoading5 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderCollection personList">
                <div className="recoProfile">
                  <img alt="profile" src="/images/profile.jpeg" />
                </div>
                <div>
                  <p className="collectionTxt">김별이님의 추천</p>
                  <p>크리스마스에는 #{movieList5.genre_name}</p>
                </div>
              </div>
              <div className="movieSlideContainer">
                <MovieContainerBottom movies={movieList5.contents} />
              </div>
            </section>
          )}
        </main>
      </>
    );
  }
}

export default MoviePage;
