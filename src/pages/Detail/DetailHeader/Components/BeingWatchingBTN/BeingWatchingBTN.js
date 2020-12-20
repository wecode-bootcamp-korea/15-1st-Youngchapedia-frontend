import React, { Component } from 'react';
import './BeingWatchingBTN.scss';

class BeingWatchingBTN extends Component {
  onActiveBeingWatchingBTN = () => {
    const {
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
    } = this.props;
    this.props.handleActiveBeingWatchingBTN();
    if (
      isDefaultButton === false &&
      isActiveBTN === false &&
      isclickedWannaWatchingBTN === false &&
      isclickedBeingWatchingBTN === true
    ) {
      this.props.handleResetButtonStatus();
    }
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
