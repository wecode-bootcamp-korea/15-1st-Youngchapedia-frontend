import React, { Component } from 'react';
import './DontCareBTN.scss';

class DontCareBTN extends Component {
  onActiveDontCareButton = () => {
    const {
      // isDefaultButton,
      // isActiveBTN,
      // isclickedWannaWatchingBTN,
      // sclickedBeingWatchingBTN,
      // isActivedontCareMovie,
      dontCareMovie,
    } = this.props;
    this.props.handleControlDontCareButton();
    if (dontCareMovie) {
      this.props.handleResetButtonStatus();
    }
  };

  render() {
    const { dontCareMovie } = this.props;
    return (
      <div className="DontCareBTN" onClick={this.onActiveDontCareButton}>
        <div
          className={
            dontCareMovie ? 'activeDontCareBTN' : 'inactiveDontCareBTN'
          }
        >
          <span>관심없어요</span>
          <i className="fas fa-ban " />
        </div>
      </div>
    );
  }
}

export default DontCareBTN;
