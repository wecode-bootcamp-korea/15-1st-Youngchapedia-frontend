import React, { Component } from 'react';
import Nav from '../../../../Components/Nav/Nav';
import MyPageDetailCard from '../Components/MyPageDetailCard/MyPageDetailCard';
import {
  ARROW_ICON,
  TEST_TOKEN,
  API_MY_PAGE_EVAL,
  API_MY_PAGE_WISH,
  API_MY_PAGE_WATCHING,
} from '../../../../config';
import './MyPageFooterDetail.scss';

class MyPageFooterDetail extends Component {
  constructor() {
    super();
    this.state = {
      rateMovie: [],
      rateTitle: '',
    };
  }

  componentDidMount = () => {
    const { titleSection } = this.props.location.state;
    if (titleSection === '평가한 작품들') {
      console.log('평작');
      fetch(API_MY_PAGE_EVAL, {
        method: 'GET',
        headers: {
          Authorization: TEST_TOKEN,
        },
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          this.setState({ rateMovie: result.result, rateTitle: '평가함' });
        });
    }
    if (titleSection === '보고싶어요') {
      console.log('보고싶어요');
      fetch(API_MY_PAGE_WISH, {
        method: 'GET',
        headers: {
          Authorization: TEST_TOKEN,
        },
      })
        .then(response => response.json())
        .then(result => {
          this.setState({ rateMovie: result.result, rateTitle: '평균' });
        });
    }
    if (titleSection === '보는중') {
      console.log('보는중');
      fetch(API_MY_PAGE_WATCHING, {
        method: 'GET',
        headers: {
          Authorization: TEST_TOKEN,
        },
      })
        .then(response => response.json())
        .then(result => {
          this.setState({ rateMovie: result.result, rateTitle: '평균' });
        });
    }
  };

  handleGoBack = () => {
    this.props.history.push('/mypage');
  };

  render() {
    const { titleSection } = this.props.location.state;
    return (
      <div className="MyPageFooterDetail">
        <Nav />
        <div className="myPageFooterDetailWrapper">
          <div className="myPageFooterArrow" onClick={this.handleGoBack}>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="none" d={ARROW_ICON}></path>
            </svg>
          </div>
          <div className="myPageFooterTitle">{titleSection}</div>
          <div className="cardSection">
            <MyPageDetailCard
              rateMovie={this.state.rateMovie}
              rateTitle={this.state.rateTitle}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MyPageFooterDetail;
