import React, { Component } from 'react';
import MovieContainer from './MovieContainer/MovieContainer';
import MovieContainerBottom from './MovieContainerBottom/MovieContainerBottom';
import './MoviePage.scss';

class MoviePage extends Component {
  state = {
    movies: [],
    directorSection: [],
    genreSection: [],
    tagSection: [],
    tagName: '',
  };

  componentDidMount = () => {
    this.loadMainMovieData();
  };

  loadMainMovieData = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(res => {
        this.setState({
          movies: res.RESULT[0].contents,
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
          <MovieContainer movies={movies} />
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>넷플릭스 </p>
          </div>
          <MovieContainer movies={movies} />
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection personList">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">한준희님의 추천</p>
              <p>#</p>
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
