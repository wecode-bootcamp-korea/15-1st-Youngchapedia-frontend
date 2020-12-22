import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import MyPageCogIconControl from './Components/MyPageCogIconControl/MyPageCogIconControl';
import {
  TEST_TOKEN,
  API_MY_PAGE_MAIN,
  API_MY_PAGE_EVAL,
  API_MY_PAGE_WISH,
  API_MY_PAGE_WATCHING,
} from '../../config';
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
        // console.log(result);
        // console.log(this.state.myPageInfo);
      });
  };

  // componentDidMount = () => {
  //   fetch(API_MY_PAGE_WISH, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: TEST_TOKEN,
  //     },
  //     body: {
  //       archive_type: '1',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => this.setState({ myPageInfo: result }));
  // };

  handleClickEval = () => {
    // this.props.history.push('/mypagefooterdetail');
    this.props.history.push({
      pathname: '/mypagefooterdetail',
      state: { titleSection: '평가' },
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
              <div className="myPageLikeTo">
                <div className="myPageLikeToText">
                  {`보고싶어요`} &#9733; {`${this.state.myPageInfo.wish}`}
                </div>
              </div>
              <div className="myPageWatching">
                <div className="myPageWatchingText">
                  {`보는중`} &#9733; {`${this.state.myPageInfo.watching}`}
                </div>
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
