import React, { Component } from 'react';
import MovieCard from './Components/MovieCard';
import '../FilterPage/FilterPage.scss';

class FilterPage extends Component {
  state = {
    filterList: [],
  };
  componentDidMount = () => {
    fetch('http://192.168.219.113:8000/contents/people/1')
      .then(response => response.json())
      .then(response => {
        this.setState({
          filterList: response.RESULT[0].contents,
        });
      });
  };
  render() {
    const { filterList } = this.state;
    console.log(filterList);
    return (
      <>
        <main className="FilterPage">
          <header className="filterHeader">
            <div className="headerProfile">
              <img src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJYGVfYMr8_hCaiS6pOnvFGrXif_O9ukOeXDdsbwbRxbaJX6wZukiPhWSvzFVD" />
            </div>
            <div className="headerInfo">
              <h1 className="title">커트 러셀</h1>
              <p className="job">배우, 감독</p>
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
