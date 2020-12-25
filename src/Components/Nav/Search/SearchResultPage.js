import React, { Component } from 'react';
import MovieCard from '../../../Pages/MainPage/Compontents/MoviePages/MovieContainer/MovieCard';
import Nav from '../Nav';
import Footer from '../../Footer/Footer';
import './SearchResultPage.scss';

class SearchResultPage extends Component {
  render() {
    const { searchList } = this.props.location.state;
    console.log(searchList);
    return (
      <>
        <Nav />
        <main className="SearchResultPage">
          <header className="resultHeader">
            <p>상위 검색 결과</p>
          </header>
          <ul className="searchResults">
            {searchList.length !== 0 ? (
              searchList.map((movie, id) => (
                <MovieCard movie={movie} key={id} />
              ))
            ) : (
              <div className="resultPageError">
                <img src="/images/profile2.png" />
                <p>검색 결과 없어요. 다른 검색어를 입력해보세요.</p>
              </div>
            )}
          </ul>
        </main>
        <Footer />
      </>
    );
  }
}

export default SearchResultPage;
