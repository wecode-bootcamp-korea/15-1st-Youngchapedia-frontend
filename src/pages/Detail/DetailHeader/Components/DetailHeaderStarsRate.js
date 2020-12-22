import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import { MOVIE_RARTING, USER1_TOKEN } from '../../../../config';

class DetailHeaderStarsRate extends React.Component {
  state = {
    ratedStar: false,
    starsRate: {
      0: '평가하기',
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
    starsRatingScore: 0,
  };

  componentDidMount() {
    if (this.state.starsRatingScore) return this.getstarsRatingScore();
  }

  getstarsRatingScore() {
    fetch(MOVIE_RARTING, {
      headers: { Authorization: USER1_TOKEN },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          starsRatingScore: res.result.rating,
          starsValue: this.state.starsRate[this.state.starsRatingScore],
        });
        console.log(this.state.starsRatingScore);
      });
  }

  postStarsRatingScore(newValue) {
    fetch(MOVIE_RARTING, {
      method: 'POST',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({
        rating: newValue,
      }),
    }).then(res => res.json());
  }

  petchStarsRatingScore(newValue) {
    fetch(MOVIE_RARTING, {
      method: 'PATCH',
      headers: { Authorization: USER1_TOKEN },
      body: JSON.stringify({
        rating: newValue,
      }),
    }).then(res => res.json());
  }

  deleteStarsRatingScore() {
    fetch(MOVIE_RARTING, {
      method: 'DELETE',
      headers: { Authorization: USER1_TOKEN },
    });
  }

  activeStarRateFunction = newValue => {
    const { starsRatingScore } = this.state;
    this.setState({
      starsValue: this.state.starsRate[newValue],
      starsRatingScore: newValue,
      ratedStar: true,
    });
    console.log(newValue, starsRatingScore);
    if (starsRatingScore === 0) return this.postStarsRatingScore(newValue);

    if (starsRatingScore !== newValue)
      return this.petchStarsRatingScore(newValue);
  };

  deleteActiveStarRate = click => {
    const starsRatingClientX = {
      0.5: 532,
      1.0: 552,
      1.5: 586,
      2.0: 611,
      2.5: 640,
      3.0: 666,
      3.5: 693,
      4.0: 715,
      4.5: 746,
      5.0: 761,
    };
    if (click.clientX === starsRatingClientX[this.state.starsRatingScore])
      return this.deleteStarsRatingScore();
    console.log(click);
  };

  render() {
    const { ratedStar, starsValue, starsRatingScore } = this.state;

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
            <div className="starsRoom" onClick={this.deleteActiveStarRate}>
              <ReactStars
                size={60}
                isHalf={true}
                char={'★'}
                value={starsRatingScore}
                onChange={newValue => {
                  this.activeStarRateFunction(newValue);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailHeaderStarsRate;
