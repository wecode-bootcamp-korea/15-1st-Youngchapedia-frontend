import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <>
        <label class="searchWrap">
          <input
            className="searchInput"
            type="search"
            placeholder="작품 제목,배우,감독을 검색해보세요."
          />
        </label>
      </>
    );
  }
}

export default Search;
