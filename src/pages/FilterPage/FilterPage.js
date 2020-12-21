import React, { Component } from 'react';
import MovieCard from './Components/MovieCard';
import '../FilterPage/FilterPage.scss';

class FilterPage extends Component {
  render() {
    const { profile_image_url, name, title, contents } = this.props.movies;
    return (
      <>
        <main className="FilterPage">
          <header className="filterHeader">
            <div className="headerProfile">
              <img src={profile_image_url} />
            </div>
            <div className="headerInfo">
              <h1 className="title">{name}</h1>
              <p className="job">{title}</p>
            </div>
          </header>
          <ul className="resultList">
            {contents.map((movie, id) => (
              <MovieCard movie={movie} key={id} />
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default FilterPage;
