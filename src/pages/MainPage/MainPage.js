import React, { Component } from 'react';
import MoviePage from './Compontents/MoviePages/MoviePage';
import Footer from '../../Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MainPage extends Component {
  render() {
    return (
      <>
        <MoviePage />
        <Footer />
      </>
    );
  }
}

export default MainPage;
