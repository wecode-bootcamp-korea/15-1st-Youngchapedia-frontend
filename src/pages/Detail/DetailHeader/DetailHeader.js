import React, { Component } from 'react';
import './DetailHeader.scss';

import DetailHeaderStarsRate from './DetailHeaderStarsRate';

class DetailHeader extends React.Component {
  render() {
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
                  <div className="bottonsDivControl">
                    <div className="bottonsRooms">
                      <button className="pulsAndwannaWatchButton">
                        <div className="wannaWatch">
                          <span>
                            <i className="fas fa-plus"></i>
                          </span>
                          <div>보고싶어요</div>
                        </div>
                      </button>
                      <button className="sortDownButton">
                        <span>
                          <i className="fas fa-sort-down"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="evaluation">
                    <DetailHeaderStarsRate />
                  </div>
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
