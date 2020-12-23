import React, { Component } from 'react';
import DetailAsideGallery from './Components/DetailAsideGallery/DetailAsideGallery';
import './DetailAside.scss';

class DetailAside extends React.Component {
  render() {
    const { moivesGallery } = this.props;
    return (
      <aside className="DetailAside">
        <div>
          <h1>갤러리</h1>
        </div>
        <ul>
          {moivesGallery &&
            moivesGallery.map((picture, index) => {
              return <DetailAsideGallery key={index} picture={picture} />;
            })}
        </ul>
      </aside>
    );
  }
}

export default DetailAside;
