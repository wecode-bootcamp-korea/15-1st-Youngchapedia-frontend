import React, { Component } from 'react';
import './DetailMainActList.scss';

class DetailMainActList extends Component {
  render() {
    const { name, role, imgURL } = this.props;
    return (
      <div className="DetailMainActList">
        <li>
          <img src={imgURL} alt={name} />
          <div>
            <h2>{name}</h2>
            <h3>{role}</h3>
          </div>
        </li>
      </div>
    );
  }
}

export default DetailMainActList;
