import React, { Component } from 'react';
import MovieContainer from './components/MovieContainer/MovieContainer';
import './MainPage.scss';

class MainPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    fetch('/data/movieList.json')
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
      <>
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
            <div className="movieHeader">
              <p>넷플릭스 영화 순위</p>
            </div>
            <div className="movieSlideContainer">
              <MovieContainer movies={movies} />
            </div>
          </section>
          <section className="mainMovieList">
            <div className="movieHeader">
              <p>예상 별점이 높은 작품</p>
            </div>
            <div className="movieSlideContainer">
              <MovieContainer movies={movies} />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default MainPage;
