import React, { Component } from 'react';
import './MyPageMain.scss';

class MyPageMain extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="MyPageMain">
        <div className="MyPageUpper">
          upper
          <i class="fas fa-cog"></i>
        </div>
        <div className="MyPageProfile">profile</div>
        <div className="MyPageFooter">
          footer
          <div className="MyPageMovieBtn"></div>
          <div className="MyPageTVBtn"></div>
        </div>
      </div>
    );
  }
}
export default MyPageMain;
