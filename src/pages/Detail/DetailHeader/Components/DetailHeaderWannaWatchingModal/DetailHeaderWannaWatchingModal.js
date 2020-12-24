import React, { Component } from 'react';
import WannaWatchingModalMovieDetail from '../WannaWatchingModalMovieDetail/WannaWatchingModalMovieDetail';
import WannaWatchingBTN from '../WannaWatchingBTN/WannaWatchingBTN';
import BeingWatchingBTN from '../BeingWatchingBTN/BeingWatchingBTN';
import DontCareBTN from '../DontCareBTN/DontCareBTN';
import './DetailHeaderWannaWatchingModal.scss';

class DetailHeaderWannaWatchingModal extends React.Component {
  render() {
    const {
      isDefaultButton,
      isActiveBTN,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
      handleResetButtonStatus,
      handleActiveBeingWatchingBTN,
      handleActiveWannaWatchingBTN,
      onWannaWatchingModalToggle,
      dontCareMovie,
      handleControlDontCareButton,
    } = this.props;

    const passingProps = {
      isDefaultButton: isDefaultButton,
      isActiveBTN: isActiveBTN,
      isclickedWannaWatchingBTN: isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN: isclickedBeingWatchingBTN,
      handleResetButtonStatus: handleResetButtonStatus,
      handleActiveWannaWatchingBTN: handleActiveWannaWatchingBTN,
    };
    return (
      <section className="DetailHeaderModal">
        <div className="DetailHeaderModalBackGround">
          <WannaWatchingModalMovieDetail />
          <div className="DetailHeaderModalBTNs">
            <WannaWatchingBTN {...passingProps} />
            <BeingWatchingBTN
              {...passingProps}
              handleControlDontCareButton={handleControlDontCareButton}
              handleActiveBeingWatchingBTN={handleActiveBeingWatchingBTN}
            />
          </div>
          <DontCareBTN
            {...passingProps}
            dontCareMovie={dontCareMovie}
            handleControlDontCareButton={handleControlDontCareButton}
          />
          <div
            className="DetailHeaderModalCancel"
            onClick={onWannaWatchingModalToggle}
          >
            <p>취소</p>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailHeaderWannaWatchingModal;
