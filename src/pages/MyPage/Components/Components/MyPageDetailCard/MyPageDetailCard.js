import React, { Component } from 'react';
import './MyPageDetailCard.scss';

class MyPageDetailCard extends Component {
  render() {
    const { rateMovie } = this.props;
    const { rateTitle } = this.props;

    return (
      <>
        {rateMovie.map((el, id) => {
          return (
            <div className="MyPageDetailCard" key={id}>
              <div className="cardWrapper">
                <img
                  className="cardImage"
                  src={el.content_image}
                  alt="movieImage"
                />
                <div className="cardTitle">{el.content_title}</div>
                <div className="cardRate">
                  {rateTitle} &#9733; {el.rating.toFixed(1)}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default MyPageDetailCard;
