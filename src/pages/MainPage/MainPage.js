import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { COLLECTION_DIRECTOR_LIST } from '../../config';
import FilterPage from '../FilterPage/FilterPage';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
<<<<<<< HEAD
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
=======
    return (
      <>
        <Nav />
        <MoviePage />
>>>>>>> 335232c96bc1ad9cf2e1f9c525f745e948c9b7fb
        <Footer />
      </>
    );
  }
}

export default withRouter(MainPage);
