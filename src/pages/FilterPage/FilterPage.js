import React, { Component } from 'react';
import MovieCard from '../MainPage/Compontents/MoviePages/MovieContainer/MovieCard';
import '../FilterPage/FilterPage.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

class FilterPage extends Component {
  render() {
    const { collectionDirectorList } = this.props.location.state;
    const contents = collectionDirectorList.contents;
    return (
      <>
        <Nav />
        <main className="FilterPage">
          <ul className="resultList">
            <header className="filterHeader">
              <div className="headerProfile">
                <img src={collectionDirectorList.profile_image_url} />
              </div>
              <div className="headerInfo">
                <h1 className="title">{collectionDirectorList.name}</h1>
                <p className="job">{collectionDirectorList.title}</p>
              </div>
            </header>
            {contents.slice(0, 30).map((movie, id) => (
              <MovieCard movie={movie} key={id} />
            ))}
          </ul>
        </main>
        <Footer />
      </>
    );
  }
}

export default FilterPage;
