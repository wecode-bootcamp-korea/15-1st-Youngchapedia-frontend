import React, { Component } from 'react';
import './WannaWatchingBTN.scss';

class WannaWatchingBTN extends Component {
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
          onClick={this.props.handleResetButtonStatus}
        >
          <i className="far fa-bookmark" />

          <span>보고싶어요</span>
        </div>
      </div>
    );
  }
}

export default WannaWatchingBTN;
