import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

class MainPage extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="MainPage">
          <img src="images/test.png" />
        </main>
        <Footer />
      </>
    );
  }
}

export default MainPage;
