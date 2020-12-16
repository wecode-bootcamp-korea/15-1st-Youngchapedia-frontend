import React, { Component } from 'react';
import './DetailAside.scss';
import DetailAsideWhereYouWatch from './Components/DetailAsideWhereYouWatch/DetailAsideWhereYouWatch';
import DetailAsideGallery from './Components/DetailAsideGallery/DetailAsideGallery';
import DetailAsideVideos from './Components/DetailAsideVideos/DetailAsideVideos';
import './DetailAside.scss';

class DetailAside extends React.Component {
  render() {
    return (
      <aside className="DetailAside">
        <DetailAsideWhereYouWatch />
        <DetailAsideGallery />
        <DetailAsideVideos />
      </aside>
    );
  }
}

export default DetailAside;
