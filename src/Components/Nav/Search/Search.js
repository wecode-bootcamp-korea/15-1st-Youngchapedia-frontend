import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchList: ['조제', '원더우먼', '리플레이', '해리포터'],
      searchValue: '',
      isListActive: false,
    };
  }

  onTextChanged = event => {
    this.setState({ searchValue: event.target.value });
  };

  renderSuggestions() {
    const { searchValue, searchList } = this.state;
    if (searchValue.length === 0) {
      return null;
    }
    return (
      <ul className="results">
        <li className="popularWordIndex">인기검색어</li>
        {searchList.map(item => (
          <li className="result">{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <label class="searchWrap">
          <input
            value={searchValue}
            className="searchInput"
            type="search"
            onChange={this.onTextChanged}
            placeholder="작품 제목,배우,감독을 검색해보세요."
          />
        </label>
        <div className="searchWrap-dropdown">{this.renderSuggestions()}</div>
      </>
    );
  }
}

export default Search;
