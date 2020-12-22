import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './MyPageFooterDetail.scss';

class MyPageFooterDetail extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    return (
      <div className="MyPageFooterDetail">
        <Nav />
        <div className="myPageFooterDetailWrapper"></div>
      </div>
    );
  }
}
export default MyPageFooterDetail;
