import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './MyPageEval.scss';

class MyPageEval extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    return (
      <div className="MyPageEval">
        <Nav />
        <div className="myPageEvalWrapper"></div>
      </div>
    );
  }
}
export default MyPageEval;
