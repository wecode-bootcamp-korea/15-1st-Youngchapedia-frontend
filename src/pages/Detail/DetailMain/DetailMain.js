import React, { Component } from 'react';
import DetailMainCommentWithoutValue from './Components/DetailMainComment/DetailMainCommentWithoutValue/DetailMainCommentWithoutValue';
import DetailMainCommentWithValue from './Components/DetailMainComment/DetailMainCommentWithValue/DetailMainCommentWithValue';
import DetailMainCommentModal from './Components/DetailMainComment/DetailMainCommentModal/DetailMainCommentModal';
import DeleteCommentCheckModal from './Components/DetailMainComment/DeleteCommentCheckModal/DeleteCommentCheckModal';
import DetailMainCommentEditModal from './Components/DetailMainComment/DetailMainCommentEditModal/DetailMainCommentEditModal';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import { MOVIE_REVIEW } from '../../../config';
import { USER1_TOKEN } from '../../../config';

import './DetailMain.scss';

class DetailMain extends React.Component {
  state = {
    comment: '',
    isCommentValue: false,
    isCommentClicked: false,
    isCheckCommentDelete: false,
    isCommentEdited: false,
    castingMember: '',
  };

  componentDidMount() {
    fetch(MOVIE_REVIEW, {
      headers: {
        Authorization: { USER1_TOKEN },
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          comment: response.my_result.review,
          isCommentValue: true,
        });
      });
  }

  handleLeaveCommentToggle = () => {
    this.setState({ isCommentClicked: !this.state.isCommentClicked });
  };

  handleDeleteValueToggle = () => {
    this.setState({ isCheckCommentDelete: !this.state.isCheckCommentDelete });
  };

  handleCommentEditToggle = () => {
    this.setState({ isCommentEdited: !this.state.isCommentEdited });
  };

  handleCommentValue = comment => {
    this.setState({ comment, isCommentValue: true, isCommentClicked: false });
  };

  handleEditCommentValue = comment => {
    this.setState({ comment, isCommentValue: true, isCommentEdited: false });
  };

  handleCommentDelete = () => {
    this.setState({ isCommentValue: false, isCheckCommentDelete: false });
  };

  render() {
    const {
      comment,
      isCommentValue,
      isCommentClicked,
      isCheckCommentDelete,
      isCommentEdited,
      castingMember,
    } = this.state;

    const {
      movieTitle,
      movieReleaseYear,
      makeCountry,
      movieGenre,
      descriptionValue,
    } = this.props;
    return (
      <main className="DetailMain">
        {isCommentClicked && (
          <DetailMainCommentModal
            handleLeaveCommentToggle={this.handleLeaveCommentToggle}
            handleCommentValue={this.handleCommentValue}
          />
        )}

        {isCheckCommentDelete && (
          <DeleteCommentCheckModal
            isCheckCommentDelete={this.isCheckCommentDelete}
            handleCommentDelete={this.handleCommentDelete}
          />
        )}

        {isCommentEdited && (
          <DetailMainCommentEditModal
            comment={comment}
            handleCommentEditToggle={this.handleCommentEditToggle}
            handleCommentValue={this.handleCommentValue}
            handleEditCommentValue={this.handleEditCommentValue}
          />
        )}

        {isCommentValue ? (
          <DetailMainCommentWithValue
            comment={comment}
            handleDeleteValueToggle={this.handleDeleteValueToggle}
            handleCommentEditToggle={this.handleCommentEditToggle}
            handleEditValueComponentWithValue={
              this.handleEditValueComponentWithValue
            }
          />
        ) : (
          <DetailMainCommentWithoutValue
            handleLeaveCommentToggle={this.handleLeaveCommentToggle}
          />
        )}

        <div className="detailMainInforAndAct">
          <DetailMainInfor
            movieTitle={movieTitle}
            movieReleaseYear={movieReleaseYear}
            makeCountry={makeCountry}
            movieGenre={movieGenre}
            descriptionValue={descriptionValue}
          />
          <DetailMainAct castingMember={castingMember} />
        </div>
      </main>
    );
  }
}

export default DetailMain;
