import React, { Component } from 'react';
import './DetailHeader.scss';
import DetailHeaderWannaWatchingModal from './Components/DetailHeaderWannaWatchingModal/DetailHeaderWannaWatchingModal';
import DetailHeaderStarsRate from './Components/DetailHeaderStarsRate';
import DetailHeaderButtons from './Components/DetailHeaderButtons/DetailHeaderButtons';

class DetailHeader extends React.Component {
  state = {
    isActiveWannaWatchingModal: false,
    isDefaultButton: true,
    isActiveBTN: false,
    isclickedWannaWatchingBTN: false,
    isclickedBeingWatchingBTN: false,
  };

  onWannaWatchingModalToggle = () => {
    this.setState({
      isActiveWannaWatchingModal: !this.state.isActiveWannaWatchingModal,
    });
  };

  handleWannaWatchingModalToggle = () => {
    this.setState({
      isDefaultButton: false,
      isActiveBTN: true,
      isclickedWannaWatchingBTN: true,
    });
  };

  handleResetButtonStatus = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: true,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: false,
    });
  };

  handleActiveBeingWatchingBTN = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: false,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: true,
    });
  };

  onClickedWhenClickedBeingWatchingButton = () => {
    this.setState({
      isActiveWannaWatchingModal: true,
      isDefaultButton: false,
      isActiveBTN: false,

      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: true,
    });
  };

  render() {
    const {
      isActiveWannaWatchingModal,
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
    } = this.state;
    return (
      <header className="DetailHeader">
        <div className="DivControl">
          <div className="fixBackgournd">
            <img
              src="https://img.yts.mx/assets/images/movies/gabriels_rapture_2020/medium-cover.jpg"
              alt="background"
            />
          </div>
          <div className="flexPosterAndDetails">
            <div className="posterConroler">
              <img
                src="https://img.yts.mx/assets/images/movies/gabriels_rapture_2020/medium-cover.jpg"
                alt="poster"
              />
              <div className="movieNameAndsores">
                <h1>아람피터와 진실의방</h1>
                <div className="yearGenreNation">2020∙액션∙한국∙미국</div>
                <div className="score">평균 ★5.0 (41명)</div>
                <div className="buttonsAndEvaluation">
                  <DetailHeaderButtons
                    isActiveWannaWatchingModal={isActiveWannaWatchingModal}
                    isDefaultButton={isDefaultButton}
                    isActiveBTN={isActiveBTN}
                    isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
                    isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
                    onWannaWatchingModalToggle={this.onWannaWatchingModalToggle}
                    onClickedWhenClickedBeingWatchingButton={
                      this.onClickedWhenClickedBeingWatchingButton
                    }
                    handleWannaWatchingModalToggle={
                      this.handleWannaWatchingModalToggle
                    }
                  />
                  <div className="evaluation">
                    <DetailHeaderStarsRate />
                  </div>
                  {isActiveWannaWatchingModal && (
                    <DetailHeaderWannaWatchingModal
                      isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
                      isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
                      onWannaWatchingModalToggle={
                        this.onWannaWatchingModalToggle
                      }
                      handleResetButtonStatus={this.handleResetButtonStatus}
                      handleActiveBeingWatchingBTN={
                        this.handleActiveBeingWatchingBTN
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default DetailHeader;
