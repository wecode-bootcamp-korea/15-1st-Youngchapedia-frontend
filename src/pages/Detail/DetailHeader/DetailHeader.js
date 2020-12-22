import React, { Component } from 'react';
import './DetailHeader.scss';
import DetailHeaderWannaWatchingModal from './Components/DetailHeaderWannaWatchingModal/DetailHeaderWannaWatchingModal';
import DetailHeaderStarsRate from './Components/DetailHeaderStarsRate';
import DetailHeaderButtons from './Components/DetailHeaderButtons/DetailHeaderButtons';
import { WANNAWATCHING } from '../../../config';

import { USER1_TOKEN } from '../../../config';

class DetailHeader extends React.Component {
  state = {
    isActiveWannaWatchingModal: false,
    isDefaultButton: true,
    isActiveBTN: false,
    isclickedWannaWatchingBTN: false,
    isclickedBeingWatchingBTN: false,
    dontCareMovie: false,
    starsRatingPoint: '',
    archive_type: '',
  };

  componentDidMount() {
    fetch(WANNAWATCHING, {
      headers: { Authorization: USER1_TOKEN },
    })
      .then(res => res.json())
      .then(res => this.setState({ archive_type: res.archive_type }));
  }

  PostArchiveTypeWannerWatching = () => {
    fetch(WANNAWATCHING, {
      method: 'POST',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 1 }),
    }).then(response => response.json());
  };

  PostArchiveTypeBeingWatching = () => {
    fetch(WANNAWATCHING, {
      method: 'POST',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 2 }),
    }).then(response => response.json());
  };

  PostArchiveTypeDontCare = () => {
    fetch(WANNAWATCHING, {
      method: 'POST',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 3 }),
    }).then(response => response.json());
  };

  patchArchiveTypeWannerWatching = () => {
    fetch(WANNAWATCHING, {
      method: 'PATCH',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 1 }),
    }).then(response => response.json());
  };

  patchArchiveTypeBeingWatching = () => {
    fetch(WANNAWATCHING, {
      method: 'PATCH',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 2 }),
    }).then(response => response.json());
  };

  patchArchiveTypeDontCare = () => {
    fetch(WANNAWATCHING, {
      method: 'PATCH',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({ archive_type: 3 }),
    }).then(response => response.json());
  };

  DeleteArchiveType = () => {
    fetch(WANNAWATCHING, {
      method: 'Delete',
      headers: { Authorization: USER1_TOKEN },
    });
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
      dontCareMovie: false,
    });
  };

  handleResetButtonStatus = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: true,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: false,
      dontCareMovie: false,
    });
    this.DeleteArchiveType();
  };

  handleActiveBeingWatchingBTN = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: false,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: true,
      dontCareMovie: false,
    });
  };

  handleActiveWannaWatchingBTN = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: false,
      isActiveBTN: true,
      isclickedWannaWatchingBTN: true,
      isclickedBeingWatchingBTN: false,
      dontCareMovie: false,
    });
  };

  onClickedWhenClickedBeingWatchingButton = () => {
    this.setState({
      isActiveWannaWatchingModal: true,
      isDefaultButton: false,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: true,
      dontCareMovie: false,
    });
  };

  handleControlDontCareButton = () => {
    this.setState({
      isActiveWannaWatchingModal: false,
      isDefaultButton: true,
      isActiveBTN: false,
      isclickedWannaWatchingBTN: false,
      isclickedBeingWatchingBTN: false,
      dontCareMovie: true,
    });
  };

  render() {
    const {
      isActiveWannaWatchingModal,
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
      dontCareMovie,
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
                      dontCareMovie={dontCareMovie}
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
                      handleControlDontCareButton={
                        this.handleControlDontCareButton
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
