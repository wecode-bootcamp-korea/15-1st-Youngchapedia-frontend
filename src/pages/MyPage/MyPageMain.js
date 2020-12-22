import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { COG_ICON } from '../../config';
import './MyPageMain.scss';

class MyPageMain extends Component {
  constructor() {
    super();
    this.state = {};

  //   handleClick = () => {
  //     console.log('clicked');
  //   };
  // }
  render() {
    return (
      <div className="MyPageMain">
        <Nav />
        <div className="myPageMainWrapper">
          <div className="myPageComponent">
            <div className="myPageUpper">
              <div className="cogIcon">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d={COG_ICON} onClick={this.handleClick}></path>
                </svg>
              </div>
            </div>
            <div className="myPageProfileSec">
              <div className="myPageProfileWrapper">
                <div className="myPageProfile">
                  <img src="images/profile.jpg" alt="profile" />
                  <div className="myPageProfileText">username</div>
                </div>
              </div>
            </div>
            <div className="myPageFooter">
              <div className="myPageEval">
                <div className="myPageEvalText">평가 &#9733; #</div>
              </div>
              <div className="myPageLikeTo">
                <div className="myPageLikeToText">보고싶어요 &#9733; #</div>
              </div>
              <div className="myPageWatching">
                <div className="myPageWatchingText">보는중 &#9733; #</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default MyPageMain;
