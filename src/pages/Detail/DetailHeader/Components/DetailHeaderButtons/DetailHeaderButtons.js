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
                    <path
                      fill="none"
                      d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
                    ></path>
                  </svg>
                ) : isActiveBTN ? (
                  <svg className="bookmark" viewBox="0 0 20 20">
                    <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                  </svg>
                ) : (
                  <svg className="eye" viewBox="0 0 20 20">
                    <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
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
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default DetailHeaderButtons;
