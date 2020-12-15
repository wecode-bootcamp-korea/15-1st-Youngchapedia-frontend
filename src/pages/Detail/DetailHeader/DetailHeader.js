import React, { Component } from 'react';
import './DetailHeader.scss';

class DetailHeader extends React.Component {
  render() {
    return (
      <header className="DetailHeader">
        <div className="headerImg">
          <img
            src="https://img.yts.mx/assets/images/movies/gabriels_rapture_2020/medium-cover.jpg"
            alt="headerMovieImg"
          ></img>
        </div>
        <div className="headerDescription">
          <h1>해리포터와 비밀의 방</h1>
          <h3>2002∙모험∙영국∙미국∙독일</h3>
          <p>평균 ★4.0 (65만명)</p>

          <div className="headerDescriptionFlex">
            <div className="buttons">
              <button className="botton1">
                <div className="botton1Div">
                  <span>+</span>
                  <div>보고싶어요</div>
                </div>
              </button>
              <button className="botton2">
                <i className="fas fa-sort-down"></i>
              </button>
            </div>

            <div className="starts">
              <p>평가하기</p>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>

        <img
          className="headerDescriptionImg"
          src="https://img.yts.mx/assets/images/movies/gabriels_rapture_2020/medium-cover.jpg"
          alt="img"
        />
      </header>
    );
  }
}

export default DetailHeader;
