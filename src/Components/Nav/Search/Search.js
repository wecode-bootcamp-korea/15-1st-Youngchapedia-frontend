import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchResultPage.scss';
import '../Search/Search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchList: [],
      searchValue: '',
      searchResult: '',
      isListActive: false,
      searchCheck: false,
    };
  }

  onTextChanged = event => {
    this.setState({ searchValue: event.target.value });
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      fetch(
        `http://192.168.219.113:8000/contents/search?keyword=${event.target.value}`,
        {
          method: 'GET',
        }
      )
        .then(result => result.json())
        .then(result =>
          this.setState({
            searchList: result.RESULT[0],
            searchCheck: true,
            searchResult: event.target.value,
          })
        );
    }
  };

  handleSearchEvent = () => {
    this.props.history.push({
      pathname: `/search/${this.state.searchResult}`,
      state: { searchList: this.state.searchList },
    });
  };

  render() {
    const { searchValue, searchList, searchCheck } = this.state;
    console.log(searchList);
    return (
      <>
        <label className="searchWrap">
          <input
            value={searchValue}
            className="searchInput"
            type="search"
            onChange={this.onTextChanged}
            onKeyPress={this.onKeyPress}
            placeholder="작품 제목,배우,감독을 검색해보세요."
          />
        </label>
        {!searchCheck ? null : this.handleSearchEvent()}
      </>
    );
  }
}

export default withRouter(Search);
