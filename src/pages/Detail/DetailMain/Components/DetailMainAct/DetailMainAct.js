import React, { Component } from 'react';
import './DetailMainAct.scss';
import DetailMainActList from '../DetailMainActList/DetailMainActList';

class DetailMainAct extends React.Component {
  render() {
    const { castingMembers } = this.props;

    return (
      <div className="DetailMainAct">
        <h1>출연/제작</h1>
        <div>
          <ul>
            {castingMembers.map(member => (
              <DetailMainActList
                key={member.people_id}
                id={member.people_id}
                name={member.people_name}
                role={member.role}
                imgURL={member.people_image_url}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DetailMainAct;
