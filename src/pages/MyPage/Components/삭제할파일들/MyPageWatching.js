import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import './MyPageWatching.scss';

class MyPageWatching extends Component {
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
