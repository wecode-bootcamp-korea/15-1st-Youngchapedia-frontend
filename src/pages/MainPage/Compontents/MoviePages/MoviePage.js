import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieContainer from './MovieContainer/MovieContainer';
import MovieContainerBottom from './MovieContainerBottom/MovieContainerBottom';
import './MoviePage.scss';
import {
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
          movieList1: data1.RESULT[0],
          movieList2: data2.RESULT[0],
          movieList3: data3.RESULT[0],
          movieList4: data4.RESULT[0],
          movieList5: data5.RESULT[0],
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
      movieList1,
      movieList2,
      movieList3,
      movieList4,
      movieList5,
      isLoading1,
      isLoading2,
      isLoading3,
      isLoading4,
      isLoading5,
    } = this.state;
    return (
      <>
        <main className="MainPage">
          {isLoading3 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderCollection personList">
                <div className="recoProfile">
                  <img alt="profile" src="/images/profile2.png" />
                </div>
                <div
                  onClick={() => {
                    this.props.history.push({
                      pathname: `/filterPage/${movieList3.id}`,
                      state: { movieList3: movieList3 },
                    });
                  }}
                >
                  <p className="collectionTxt">영차가 추천하는 작품 💁‍♀️</p>
                  <p>
                    🎄크리스마스에는 {movieList3.name} {movieList3.title}의
                    작품과 함께🎄
                  </p>
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
                  <img alt="profile" src="/images/profile2.png" />
                </div>
                <div>
                  <p className="collectionTxt">영차가 추천하는 작품 💁</p>
                  <p>
                    😎 이번 크리스마스에는 {movieList4.genre_name}과 함께! 🦾
                  </p>
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
                  <img alt="profile" src="/images/profile2.png" />
                </div>
                <div>
                  <p className="collectionTxt">영차가 추천하는 작품 👼</p>
                  <p>#{movieList5.tag_name}</p>
                </div>
              </div>
              <div className="movieSlideContainer">
                <MovieContainerBottom movies={movieList5.contents} />
              </div>
            </section>
          )}
          {isLoading1 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderStreaming personList">
                <div className="recoProfile">
                  <img
                    alt="profile"
                    src="https://an2-img.amz.wtchn.net/image/v1/updatable_images/2571/original/42e70f1bc34d7af54478a311983ecf6d3601eefa.png"
                  />
                </div>
                <div>
                  <p>😎 넷플릭스 영화</p>
                </div>
              </div>
              <MovieContainer movies={movieList1.contents.slice(10, 20)} />
            </section>
          )}
          {isLoading2 ? (
            <div className="lds-heart">
              <div></div>
            </div>
          ) : (
            <section className="mainMovieList">
              <div className="movieHeader movieHeaderStreaming personList">
                <div className="recoProfile">
                  <img
                    alt="profile"
                    src="https://an2-img.amz.wtchn.net/image/v1/updatable_images/2570/original/f72039e19e3d483c3c6d8178c526a1c979537975.png"
                  />
                </div>
                <div>
                  <p>🥳 영차 영화</p>
                </div>
              </div>
              <MovieContainer movies={movieList2.contents.slice(0, 10)} />
            </section>
          )}
        </main>
      </>
    );
  }
}

export default withRouter(MoviePage);
