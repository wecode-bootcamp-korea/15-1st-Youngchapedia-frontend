import React, { Component } from 'react';
import Nav from '../../../../Components/Nav/Nav';
import MyPageDetailCard from '../Components/MyPageDetailCard/MyPageDetailCard';
import './MyPageFooterDetail.scss';
import { ARROW_ICON } from '../../../../config';
import { TEST_TOKEN, API_MY_PAGE_EVAL } from '../../../../config';

class MyPageFooterDetail extends Component {
  constructor() {
    super();
    this.state = {
      rateMovie: [],
    };
  }

  componentDidMount = () => {
    fetch(API_MY_PAGE_EVAL, {
      method: 'GET',
      headers: {
        Authorization: TEST_TOKEN,
      },
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ rateMovie: result.result });
      });
  };
  render() {
    console.log(this.props);

    return (
      <div className="MyPageFooterDetail">
        <Nav />
        <div className="myPageFooterDetailWrapper">
          <div className="myPageFooterArrow">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="none" d={ARROW_ICON}></path>
            </svg>
          </div>
          <div className="myPageFooterTitle">평가한 작품들</div>
          <div className="cardSection">
            <MyPageDetailCard rateMovie={this.state.rateMovie} />
          </div>
        </div>
      </div>
    );
  }
}
export default MyPageFooterDetail;
