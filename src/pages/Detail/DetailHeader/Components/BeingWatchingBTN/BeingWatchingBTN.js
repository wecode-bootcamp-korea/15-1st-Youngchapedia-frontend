import React, { Component } from 'react';
import './BeingWatchingBTN.scss';

class BeingWatchingBTN extends Component {
  onActiveBeingWatchingBTN = () => {
    this.props.handleActiveBeingWatchingBTN();
  };
  render() {
    const { isclickedBeingWatchingBTN } = this.props;
    return (
      <div className="BeingWatchingBTN">
        <div
          className={
            isclickedBeingWatchingBTN
              ? 'activeBeingWatchingBTN'
              : 'inactiveBeingWatchingBTN'
          }
          onClick={this.onActiveBeingWatchingBTN}
        >
          <i className="far fa-eye" />
          <span>보는중</span>
        </div>
      </div>
    );
  }
}

export default BeingWatchingBTN;
