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

  handleActiveWannaWatchingBTN = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: false,
      isActiveBTN: true,
      isclickedWannaWatchingBTN: true,
      isclickedBeingWatchingBTN: false,
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

    const {
      posterImgURL,
      movieTitle,
      movieReleaseYear,
      movieGenre,
      makeCountry,
    } = this.props;
    return (
      <header className="DetailHeader">
        <div className="DivControl">
          <div className="fixBackgournd">
            <img src={posterImgURL} alt={movieTitle} />
          </div>
          <div className="flexPosterAndDetails">
            <div className="posterConroler">
              <img src={posterImgURL} alt="poster" />
              <div className="movieNameAndsores">
                <h1>{movieTitle}</h1>
                <div className="yearGenreNation">{`${movieReleaseYear}∙${movieGenre}∙${makeCountry}`}</div>
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
                      isDefaultButton={isDefaultButton}
                      isActiveBTN={isActiveBTN}
                      isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
                      isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
                      onWannaWatchingModalToggle={
                        this.onWannaWatchingModalToggle
                      }
                      handleResetButtonStatus={this.handleResetButtonStatus}
                      handleActiveBeingWatchingBTN={
                        this.handleActiveBeingWatchingBTN
                      }
                      handleActiveWannaWatchingBTN={
                        this.handleActiveWannaWatchingBTN
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
