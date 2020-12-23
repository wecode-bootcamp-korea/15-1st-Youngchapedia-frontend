import React, { Component } from 'react';
import './DetailAsideGallery.scss';

class DetailAsideGallery extends Component {
  render() {
    const { picture } = this.props;
    return (
      <li className="DetailAsideGallery">
        <img src={picture} alt="영화 그림" />
      </li>
    );
  }
}

export default DetailAsideGallery;
