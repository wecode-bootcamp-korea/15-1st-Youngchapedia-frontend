import React, { Component } from 'react';
import MovieCard from './Components/MovieCard';
import '../FilterPage/FilterPage.scss';

class FilterPage extends Component {
  state = {
    filterList: [],
    name: '',
    title: '',
    profile: '',
  };

  componentDidMount = () => {
    this.getContents();
    this.getName();
    this.getTitle();
  };

  getContents = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(response => {
        this.setState({
          filterList: response.RESULT[0].contents,
        });
      });
  };

  getName = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(response => {
        this.setState({
          name: response.RESULT[0].name,
        });
      });
  };

  getTitle = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(response => {
        this.setState({
          title: response.RESULT[0].title,
        });
      });
  };

  getProfile = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(response => {
        this.setState({
          profile: response.RESULT[0].profile_image_url,
        });
      });
  };

  render() {
    const { filterList, name, title, profile } = this.state;
    return (
      <>
        <main className="FilterPage">
          <header className="filterHeader">
            <div className="headerProfile">
              <img src={profile} />
            </div>
            <div className="headerInfo">
              <h1 className="title">{name}</h1>
              <p className="job">{title}</p>
            </div>
          </header>
          <ul className="resultList">
            {filterList.map((movie, id) => (
              <MovieCard movie={movie} key={id} />
            ))}
          </ul>
        </main>
      </>
    );
  }
}

export default FilterPage;
