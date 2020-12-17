import React, { Component } from 'react';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieContainerBottom from './components/MovieContainerBottom/MovieContainerBottom';
import './MainPage.scss';
import Footer from '../../Components/Footer/Footer';

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
            <div className="movieHeader movieHeaderCollection">
              <p className="collectionTxt">김별이님의 추천</p>
              <p>화제의 감독 김종관의 작품</p>
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
      </>
    );
    return <Footer />;
  }
}

export default MainPage;
