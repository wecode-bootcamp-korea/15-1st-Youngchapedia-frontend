import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoviePage from './Compontents/MoviePages/MoviePage';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../MainPage/MainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <MoviePage />
        <Footer />
      </>
    );
  }
}

export default withRouter(MainPage);
