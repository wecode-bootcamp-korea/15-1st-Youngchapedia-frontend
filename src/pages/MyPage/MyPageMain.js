import React, { Component } from 'react';
import './MyPageMain.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

class MyPageMain extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="MyPageMain">
        <Nav />
        <div className="myPageMainWrapper">
          <div className="myPageComponent">
            <div className="myPageUpper">
              <img src="images/film.jpg" alt="film" />
              {/* <i class="fas fa-cog"></i> */}
            </div>
            <div className="mPageProfile">profile</div>
            <div className="myPageFooter">
              footer
              <div className="myPageMovieBtn"></div>
              <div className="myPageTVBtn"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default MyPageMain;
