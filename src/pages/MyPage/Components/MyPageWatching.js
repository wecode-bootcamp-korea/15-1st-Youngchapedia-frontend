import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './MyPageWatching.scss';

class MyPageWatching extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="MyPageWatching">
        <Nav />
        <div className="myPageWatchingWrapper"></div>
      </div>
    );
  }
}
export default MyPageWatching;
