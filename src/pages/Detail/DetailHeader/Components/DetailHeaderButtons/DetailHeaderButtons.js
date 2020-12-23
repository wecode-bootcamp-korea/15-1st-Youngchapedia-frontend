import React, { Component } from 'react';
import {
  ICON_PLUS,
  ICON_BOOKMARK,
  ICON_EYE,
  ICON_SORT,
} from '../../../../../config';
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

  onDetailHeaderWannaWatchingModal = () => {
    this.props.onWannaWatchingModalToggle();
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
                  <svg className="plus" viewBox="0 0 20 20">
                    <path fill="none" d={ICON_PLUS}></path>
                  </svg>
                ) : isActiveBTN ? (
                  <svg className="bookmark" viewBox="0 0 20 20">
                    <path d={ICON_BOOKMARK}></path>
                  </svg>
                ) : (
                  <svg className="eye" viewBox="0 0 20 20">
                    <path d={ICON_EYE}></path>
                  </svg>
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
            onClick={this.onDetailHeaderWannaWatchingModal}
          >
            <span>
              <svg className="sort" viewBox="0 0 20 20">
                <path d={ICON_SORT}></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default DetailHeaderButtons;
