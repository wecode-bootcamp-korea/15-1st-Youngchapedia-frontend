import React, { Component } from 'react';
import './DontCareBTN.scss';

class DontCareBTN extends Component {
  render() {
    return (
      <div className="DontCareBTN">
        <span>관심없어요</span>
        <i className="fas fa-ban" />
      </div>
    );
  }
}

export default DontCareBTN;
