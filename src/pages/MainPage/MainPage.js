import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { COLLECTION_DIRECTOR_LIST } from '../../config';
import Footer from '../../Components/Footer/Footer';
import FilterPage from '../FilterPage/FilterPage';
import '../MainPage/MainPage.scss';

class MainPage extends Component {
  state = {
    movieList: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(COLLECTION_DIRECTOR_LIST)
      .then(response => response.json())
      .then(response =>
        this.setState({ movieList: response.RESULT[0], isLoading: false })
      )
      .catch(error => console.log(error));
  };

  goToFilter = () => {
    this.props.history.push({
      pathname: `/filter/${this.state.movieList.id}`,
      state: { movies: this.state.movieList },
    });
  };

  render() {
    const { movieList, isLoading } = this.state;
    console.log(movieList);
    return (
      <>
        {isLoading ? (
          <div className="lds-heart">
            <div></div>
          </div>
        ) : (
          <>
            <p onClick={this.goToFilter}>{movieList.name}</p>
          </>
        )}
        <Footer />
      </>
    );
  }
}

export default withRouter(MainPage);
