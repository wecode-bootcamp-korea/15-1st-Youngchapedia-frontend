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
    isRating: false,
  };

  componentDidMount() {
    if (this.state.starsRatingScore && sessionStorage)
      return this.getstarsRatingScore();
  }

  getstarsRatingScore() {
    const currentToken = sessionStorage.getItem('access_token');
    sessionStorage &&
      fetch(`${MOVIE_RARTING}/${this.props.Id}`, {
        headers: { Authorization: currentToken },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            starsRatingScore: res.result.rating,
            starsValue: this.state.starsRate[this.state.starsRatingScore],
          });
        });
  }

  postStarsRatingScore(newValue) {
    const currentToken = sessionStorage.getItem('access_token');
    sessionStorage &&
      fetch(`${MOVIE_RARTING}/${this.props.Id}`, {
        method: 'POST',
        headers: { Authorization: currentToken },
        body: JSON.stringify({
          rating: newValue,
        }),
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ ratedStar: true, starsRatingScore: res });
        });
  }

  petchStarsRatingScore(newValue) {
    const currentToken = sessionStorage.getItem('access_token');
    sessionStorage &&
      fetch(`${MOVIE_RARTING}/${this.props.Id}`, {
        method: 'PATCH',
        headers: { Authorization: currentToken },
        body: JSON.stringify({
          rating: newValue,
        }),
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ ratedStar: true, starsRatingScore: res });
        });
  }

  deleteStarsRatingScore() {
    const currentToken = sessionStorage.getItem('access_token');
    sessionStorage &&
      fetch(`${MOVIE_RARTING}/${this.Id}`, {
        method: 'DELETE',
        headers: { Authorization: currentToken },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ ratedStar: false });
        });
  }

  activeStarRateFunction = newValue => {
    const { starsRatingScore, ratedStar } = this.state;
    this.setState({
      starsValue: this.state.starsRate[newValue],
      starsRatingScore: newValue,
    });

    if (starsRatingScore === 0 && ratedStar === false)
      return sessionStorage && this.postStarsRatingScore(newValue);

    if (
      starsRatingScore !== 0 &&
      ratedStar === true &&
      starsRatingScore !== newValue
    )
      return sessionStorage && this.petchStarsRatingScore(newValue);
  };

  deleteActiveStarRate = () => {
    const { starsRatingScore, ratedStar } = this.state;
    if (ratedStar === true && starsRatingScore !== 0)
      return sessionStorage && this.deleteStarsRatingScore();
  };

  render() {
    const { starsValue, starsRatingScore } = this.state;

    return (
      <section className="DetailHeaderStarsRate">
        <div className="evaluation">
          <div>
            <div className="evaluating">{starsValue}</div>
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
