import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieContainerBottom from '../MovieContainerBottom/MovieContainerBottom';
import './MainPages.scss';

class MoviePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    this.loadMainMovieData();
  };

  loadMainMovieData = async () => {
    await fetch('/data/movieList.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          movies: res.MOVIES,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { movies } = this.state;
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
          <div className="movieHeader movieHeaderCollection personList">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">한준희님의 추천</p>
              <p>아카데미 작품상 수상작</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection personList">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">조아람님의 추천</p>
              <p>나를 다른 세계로 데려다 주는 영화</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection personList">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">이재혁님의 추천</p>
              <p>감독의 화면, 그 색채적 미술적 취향</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={movies} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection personList">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">김순태님의 추천</p>
              <p>아카데미 여우주연상 수상작</p>
            </div>
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
