import React, { Component } from 'react';
import MoviePage from './components/MainPages/MoviePage';
import TvProgramPage from './components/MainPages/TvProgramPage';
import BookPage from './components/MainPages/BookPage';
import Footer from '../../Components/Footer/Footer';

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
