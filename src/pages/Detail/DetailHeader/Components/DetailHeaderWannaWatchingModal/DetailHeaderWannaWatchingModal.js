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
      onWannaWatchingModalToggle,
      isclickedWannaWatchingBTN,
      isclickedBeingWatchingBTN,
      handleResetButtonStatus,
      handleActiveBeingWatchingBTN,
    } = this.props;
    return (
      <section className="DetailHeaderWannaWatchingModal">
        <div className="DetailHeaderWannaWatchingModalBackGround">
          <WannaWatchingModalMovieDetail />
          <div className="DetailHeaderWannaWatchingModalBTNs">
            <WannaWatchingBTN
              isclickedWannaWatchingBTN={isclickedWannaWatchingBTN}
              handleResetButtonStatus={handleResetButtonStatus}
            />
            <BeingWatchingBTN
              isclickedBeingWatchingBTN={isclickedBeingWatchingBTN}
              handleActiveBeingWatchingBTN={handleActiveBeingWatchingBTN}
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
