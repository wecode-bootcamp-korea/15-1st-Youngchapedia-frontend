import React, { Component } from 'react';
import WannaWatchingModalMovieDetail from '../WannaWatchingModalMovieDetail/WannaWatchingModalMovieDetail';
import WannaWatchingBTN from '../WannaWatchingBTN/WannaWatchingBTN';
import BeingWatchingBTN from '../BeingWatchingBTN/BeingWatchingBTN';
import WritingCommentBTN from '../WritingCommentBTN/WritingCommentBTN';
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
    } = this.props;
    return (
      <section className="DetailHeaderWannaWatchingModal">
        <div className="DetailHeaderWannaWatchingModalBackGround">
          <WannaWatchingModalMovieDetail />
          <div className="DetailHeaderWannaWatchingModalBTNs">
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
            />
          </div>
          <WritingCommentBTN />
          <DontCareBTN />
          <div
            className="DetailHeaderWannaWatchingModalCancel"
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
