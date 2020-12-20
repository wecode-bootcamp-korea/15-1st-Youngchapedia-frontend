import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';

class DetailHeaderStarsRate extends React.Component {
  state = {
    ratedStar: false,
    starsRate: {
      0.5: '최악이에요',
      1.0: '싫어요',
      1.5: '재미없어요',
      2.0: '별로에요',
      2.5: '부족해요',
      3.0: '보통이에요',
      3.5: '볼만해요',
      4.0: '재미있어요',
      4.5: '훌륭해요',
      5.0: '최고에요',
    },
    starsValue: '',
  };

  activeStarRateFunction = newValue => {
    this.onChange(newValue);
  };

  forRatingSetState = newValue => {
    const { starsRate } = this.state;
    this.setState({
      starsValue: starsRate[newValue],
      ratedStar: true,
    });
  };

  // CheckcancelMessage=(newValue)=>{

  // }

  render() {
    const DetailStars = {
      size: 60,
      isHalf: true,
      char: '★',
      value: 0,

      onChange: newValue => {
        this.forRatingSetState(newValue);
        // this.CheckcancelMessage(newValue);
      },
    };

    const { ratedStar, starsValue } = this.state;

    return (
      <section className="DetailHeaderStarsRate">
        <div className="evaluation">
          <div>
            {ratedStar ? (
              <div className="evaluating">{starsValue}</div>
            ) : (
              <div className="evaluating">평가하기</div>
            )}
          </div>
          <div className="starsRoomControl">
            <div className="starsRoom">
              <ReactStars
                {...DetailStars}
                onClick={this.activeStarRateFunction}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailHeaderStarsRate;
