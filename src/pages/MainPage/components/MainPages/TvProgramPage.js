import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieContainerBottom from '../MovieContainerBottom/MovieContainerBottom';
import './MainPages.scss';

class TvProgramPage extends Component {
  state = {
    programs: [],
    collections: [],
  };

  componentDidMount = () => {
    this.loadMainMovieData();
  };

  loadMainMovieData = () => {
    fetch('/data/programList.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          programs: res.PROGRAM,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { programs } = this.state;
    return (
      <main className="MainPage">
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>한국 TV 프로그램 인기 순위</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={programs} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>왓챠 TV 프로그램 순위</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={programs} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">김순태님의 컬렉션</p>
              <p>자연과 환경에 관한 다큐멘터리</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={programs} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">김순태님의 컬렉션</p>
              <p>자연과 환경에 관한 다큐멘터리</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={programs} />
          </div>
        </section>
      </main>
    );
  }
}

export default TvProgramPage;
