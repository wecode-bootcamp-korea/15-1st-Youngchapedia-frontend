import React, { Component } from 'react';
import './WannaWatchingBTN.scss';

class WannaWatchingBTN extends Component {
  onActiveWannaWatchingBTN = () => {
    const {
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
    } = this.props;

    this.props.handleActiveWannaWatchingBTN();

    if (
      isDefaultButton === false &&
      isActiveBTN === true &&
      isclickedWannaWatchingBTN === true &&
      isclickedBeingWatchingBTN === false
    ) {
      this.props.handleResetButtonStatus();
    }
  };

  render() {
    const { isclickedWannaWatchingBTN } = this.props;
    return (
      <div className="WannaWatchingBTN">
        <div
          className={
            isclickedWannaWatchingBTN
              ? 'activeannaWatching'
              : 'inactiveWannaWatching'
          }
          onClick={this.onActiveWannaWatchingBTN}
        >
          <i className="far fa-bookmark" />

          <span>보고싶어요</span>
        </div>
      </div>
    );
  }
}

export default WannaWatchingBTN;
