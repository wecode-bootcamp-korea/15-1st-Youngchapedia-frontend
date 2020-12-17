import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieContainerBottom from '../MovieContainerBottom/MovieContainerBottom';
import './MainPages.scss';

class MoviePage extends Component {
  state = {
    movies: [],
    collections: [],
  };

  componentDidMount = () => {
    this.loadMainMovieData();
    this.loadMainCollectionMovieData();
  };

  loadMainMovieData = () => {
    fetch('/data/movieList.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          movies: res.MOVIES,
        });
      })
      .catch(error => console.log(error));
  };

  loadMainCollectionMovieData = () => {
    fetch('/data/movieCollectionList.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          collections: res.COLLECTION,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { movies, collections } = this.state;
    return (
      <main className="MainPage">
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>박스오피스</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>왓챠 영화 순위</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">김별이님의 추천</p>
              <p>화제의 감독 김종관의 작품</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>감독의 화면, 그 색채적 미술적 취향 모두 보기</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={movies} />
          </div>
        </section>
      </main>
    );
  }
}

export default MoviePage;
