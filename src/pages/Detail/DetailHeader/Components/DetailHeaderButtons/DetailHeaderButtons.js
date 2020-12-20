import React, { Component } from 'react';
import './DetailHeaderButtons.scss';

class DetailHeaderButtons extends React.Component {
  handleDetailHeaderButtons = () => {
    this.onWannaWatchingModalToggle();
    this.onWannaWatchingCheckedModal();
    this.onClickedWhenClickedBeingWatchingButton();
  };

  onWannaWatchingModalToggle = () => {
    this.props.handleWannaWatchingModalToggle();
  };

  onWannaWatchingCheckedModal = () => {
    const {
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
    } = this.props;
    if (
      isDefaultButton === false &&
      isActiveBTN === true &&
      isclickedWannaWatchingBTN === true &&
      isclickedBeingWatchingBTN === false
    ) {
      return this.props.onWannaWatchingModalToggle();
    }
  };

  onClickedWhenClickedBeingWatchingButton = () => {
    const {
      isActiveWannaWatchingModal,
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
    } = this.props;
    if (
      isActiveWannaWatchingModal === false &&
      isDefaultButton === false &&
      isActiveBTN === false &&
      isclickedWannaWatchingBTN === false &&
      isclickedBeingWatchingBTN === true
    ) {
      return this.props.onClickedWhenClickedBeingWatchingButton();
    }
  };

  render() {
    const { isDefaultButton, isActiveBTN } = this.props;

    return (
      <div className="bottonsDivControl">
        <div className="bottonsRooms">
          <button
            className={
              isDefaultButton
                ? 'activebutton pulsAndwannaWatchButton'
                : 'inactivebutton pulsAndwannaWatchButton'
            }
            onClick={this.handleDetailHeaderButtons}
          >
            <div className="wannaWatch">
              <span>
                {isDefaultButton ? (
                  <p>플러스</p>
                ) : //   <i className="fas fa-plus" />
                isActiveBTN ? (
                  //   <i className="far fa-bookmark" />
                  <p>북마크</p>
                ) : (
                  //   <i className="far fa-eye" />
                  <p>눈알</p>
                )}
              </span>
              <div>보고싶어요</div>
            </div>
          </button>

          <button
            className={
              isDefaultButton
                ? 'activebutton sortDownButton'
                : 'inactivebutton sortDownButton'
            }
          >
            <span>
              <i className="fas fa-sort-down"></i>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default DetailHeaderButtons;
