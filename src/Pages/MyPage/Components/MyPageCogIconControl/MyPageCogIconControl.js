import React, { Component } from 'react';
import CogIconModalControl from '../Components/CogIconModalControl/CogIconModalControl';
import { COG_ICON } from '../../../../config';
import './MyPageCogIconControl.scss';

class MyPageCogIconControl extends Component {
  constructor() {
    super();
    this.state = {
      myPageModalStatus: false,
    };
  }
  myPageModalOpen = () => {
    this.setState({ myPageModalStatus: true });
  };
  myPageModalClose = () => {
    this.setState({ myPageModalStatus: false });
  };

  render() {
    return (
      <div className="MyPageCogIconControl">
        <div className="cogIcon" onClick={this.myPageModalOpen}>
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path d={COG_ICON} />
          </svg>
          <CogIconModalControl
            myPageModalStatus={this.state.myPageModalStatus}
            myPageModalOpen={this.myPageModalOpen}
            myPageModalClose={this.myPageModalClose}
          />
        </div>
      </div>
    );
  }
}
export default MyPageCogIconControl;
