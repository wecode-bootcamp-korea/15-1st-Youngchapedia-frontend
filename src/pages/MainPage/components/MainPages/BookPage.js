import React, { Component } from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieContainerBottom from '../MovieContainerBottom/MovieContainerBottom';
import './MainPages.scss';

class BookPage extends Component {
  state = {
    books: [],
  };

  componentDidMount = () => {
    this.loadMainMovieData();
  };

  loadMainMovieData = () => {
    fetch('/data/bookList.json')
      .then(response => response.json())
      .then(res => {
        this.setState({
          books: res.BOOKS,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log(this.state);
    const { books } = this.state;
    return (
      <main className="MainPage">
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>전체 베스트 셀러</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={books} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>신간 베스트 셀러</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainer movies={books} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader movieHeaderCollection">
            <div className="recoProfile">
              <img alt="profile" src="/images/profile.jpeg" />
            </div>
            <div>
              <p className="collectionTxt">김별이님의 컬렉션</p>
              <p>예술이 있는 서재</p>
            </div>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={books} />
          </div>
        </section>
        <section className="mainMovieList">
          <div className="movieHeader">
            <p>크리스마스에는 이 책과 함께! 🎄</p>
          </div>
          <div className="movieSlideContainer">
            <MovieContainerBottom movies={books} />
          </div>
        </section>
      </main>
    );
  }
}

export default BookPage;
