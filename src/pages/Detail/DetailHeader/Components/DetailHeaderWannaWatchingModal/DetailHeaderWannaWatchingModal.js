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
    return (
      <section className="DetailHeaderModal">
        <div className="DetailHeaderModalBackGround">
          <WannaWatchingModalMovieDetail />
          <div className="DetailHeaderModalBTNs">
            <WannaWatchingBTN
              isDefaultButton={isDefaultButton}
              isActiveBTN={isActiveBTN}
              isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
              isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
              handleResetButtonStatus={handleResetButtonStatus}
              handleActiveWannaWatchingBTN={handleActiveWannaWatchingBTN}
            />
            <BeingWatchingBTN
              isDefaultButton={isDefaultButton}
              isActiveBTN={isActiveBTN}
              isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
              isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
              handleActiveBeingWatchingBTN={handleActiveBeingWatchingBTN}
              handleResetButtonStatus={handleResetButtonStatus}
              handleControlDontCareButton={handleControlDontCareButton}
            />
          </div>

          <DontCareBTN
            isDefaultButton={isDefaultButton}
            isActiveBTN={isActiveBTN}
            isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
            isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
            dontCareMovie={dontCareMovie}
            handleResetButtonStatus={handleResetButtonStatus}
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
