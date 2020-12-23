import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import MyPageCogIconControl from './Components/MyPageCogIconControl/MyPageCogIconControl';
import { TEST_TOKEN, API_MY_PAGE_MAIN } from '../../config';
import './MyPageMain.scss';

class MyPageMain extends Component {
  constructor() {
    super();
    this.state = {
      myPageInfo: [],
      titleSection: '',
    };
  }
  componentDidMount = () => {
    fetch(API_MY_PAGE_MAIN, {
      method: 'GET',
      headers: {
        Authorization: TEST_TOKEN,
      },
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ myPageInfo: result });
      });
  };

  handleClickEval = () => {
    this.props.history.push({
      pathname: '/mypagefooterdetail',
      state: { titleSection: '평가한 작품들' },
    });
  };

  handleClickWish = () => {
    this.props.history.push({
      pathname: '/mypagefooterdetail',
      state: { titleSection: '보고싶어요' },
    });
  };

  handleClickWatching = () => {
    this.props.history.push({
      pathname: '/mypagefooterdetail',
      state: { titleSection: '보는중' },
    });
  };

  render() {
    return (
      <div className="MyPageMain">
        <Nav />
        <div className="myPageMainWrapper">
          <div className="myPageComponent">
            <div className="myPageUpper">
              <div className="cogIcon">
                <MyPageCogIconControl />
              </div>
            </div>
            <div className="myPageProfileSec">
              <div className="myPageProfileWrapper">
                <div className="myPageProfile">
                  <img src="images/profile.jpg" alt="profile" />
                  <div className="myPageProfileText">{`${this.state.myPageInfo.username}`}</div>
                </div>
              </div>
            </div>
            <div className="myPageFooter">
              <div className="myPageEval" onClick={this.handleClickEval}>
                <div className="myPageEvalText">
                  {`평가`} &#9733; {`${this.state.myPageInfo.rate}`}
                </div>
              </div>
              <div className="myPageLikeTo" onClick={this.handleClickWish}>
                <div className="myPageLikeToText">
                  {`보고싶어요`} &#9733; {`${this.state.myPageInfo.wish}`}
                </div>
              </div>
              <div
                className="myPageWatching"
                onClick={this.handleClickWatching}
              >
                <div className="myPageWatchingText">
                  {`보는중`} &#9733; {`${this.state.myPageInfo.watching}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />

    this.state = {};
  }
  render() {
    return (
      <div className="MyPageMain">
        <div className="MyPageUpper">
          upper
          <i class="fas fa-cog"></i>
        </div>
        <div className="MyPageProfile">profile</div>
        <div className="MyPageFooter">
          footer
          <div className="MyPageMovieBtn"></div>
          <div className="MyPageTVBtn"></div>
        </div>
      </div>
    );
  }
}
export default MyPageMain;
