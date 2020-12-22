import React, { Component } from 'react';
import './MyPageDetailCard.scss';

class MyPageDetailCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { rateMovie } = this.props;
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
                ></img>
                <div className="cardTitle">{el.content_title}</div>
                <div className="cardRate">평가함 &#9733; {el.rating}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default MyPageDetailCard;
