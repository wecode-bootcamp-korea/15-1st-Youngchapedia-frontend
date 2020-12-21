import React, { Component } from 'react';
import './MyPageWatching.scss';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';

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
