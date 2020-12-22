import React, { Component } from 'react';
import Nav from '../../../../Components/Nav/Nav';
import './MyPageEval.scss';

class MyPageEval extends Component {
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
