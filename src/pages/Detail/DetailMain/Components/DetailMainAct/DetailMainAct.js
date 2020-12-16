import React, { Component } from 'react';
import './DetailMainAct.scss';

class DetailMainAct extends React.Component {
  render() {
    return (
      <div className="DetailMainAct">
        <h1>출연/제작</h1>
        <div>
          <ul>
            <li>
              <img
                src="https://i.pinimg.com/originals/39/20/e0/3920e08123f469ab9e7d4d867992f699.jpg"
                alt="actor"
              />
              <div>
                <h2>켄델제너</h2>
                <h3>예쁨</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DetailMainAct;
