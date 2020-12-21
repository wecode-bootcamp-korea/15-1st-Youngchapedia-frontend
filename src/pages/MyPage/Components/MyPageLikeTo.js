import React, { Component } from 'react';
import './MyPageMain.scss';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';

class MyPageLikeTo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="MyPageLikeTo">
        <Nav />
        <div className="myPageLikeToWrapper"></div>
      </div>
    );
  }
}
export default MyPageLikeTo;
