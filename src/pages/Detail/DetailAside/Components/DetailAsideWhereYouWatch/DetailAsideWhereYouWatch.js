import React, { Component } from 'react';
import './DetailAsideWhereYouWatch.scss';

class DetailAsideWhereYouWatch extends React.Component {
  render() {
    return (
      <div className="DetailAsideWhereYouWatch">
        <h1>감상가능한곳</h1>
        <div className="DetailAsideWhereYouWatchLogo">
          <img
            src="https://pbs.twimg.com/profile_images/1281108496927186945/hUDSh-vc_400x400.jpg"
            alt="로고"
          />
          <div>왓챠</div>
        </div>
      </div>
    );
  }
}

export default DetailAsideWhereYouWatch;
