import React, { Component } from 'react';
import DetailHeaderWannaWatchingModal from './Components/DetailHeaderWannaWatchingModal/DetailHeaderWannaWatchingModal';
import DetailHeaderStarsRate from './Components/DetailHeaderStarsRate';
import DetailHeaderButtons from './Components/DetailHeaderButtons/DetailHeaderButtons';
import { WANNAWATCHING, USER1_TOKEN } from '../../../config';
import './DetailHeader.scss';

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
      moivesGallery,
    } = this.props;

    const detailHeaderpassingProps = {
      isDefaultButton: isDefaultButton,
      isActiveBTN: isActiveBTN,
      isclickedWannaWatchingBTN: isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN: isclickedBeingWatchingBTN,
    };
    return (
      <header className="DetailHeader">
        <div className="DivControl">
          <div className="fixBackgournd">
            <img src={moivesGallery[0]} alt={movieTitle} />
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
                    {...detailHeaderpassingProps}
                    onWannaWatchingModalToggle={this.onWannaWatchingModalToggle}
                    isActiveWannaWatchingModal={isActiveWannaWatchingModal}
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
                      {...detailHeaderpassingProps}
                      movieTitle={movieTitle}
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
