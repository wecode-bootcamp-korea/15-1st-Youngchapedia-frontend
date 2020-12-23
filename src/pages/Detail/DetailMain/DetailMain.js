import React, { Component } from 'react';
import DetailMainCommentWithoutValue from './Components/DetailMainComment/DetailMainCommentWithoutValue/DetailMainCommentWithoutValue';
import DetailMainCommentWithValue from './Components/DetailMainComment/DetailMainCommentWithValue/DetailMainCommentWithValue';
import DetailMainCommentModal from './Components/DetailMainComment/DetailMainCommentModal/DetailMainCommentModal';
import DeleteCommentCheckModal from './Components/DetailMainComment/DeleteCommentCheckModal/DeleteCommentCheckModal';
import DetailMainCommentEditModal from './Components/DetailMainComment/DetailMainCommentEditModal/DetailMainCommentEditModal';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import {
  MOVIE_REVIEW,
  MOVIE_CAST,
  USER1_TOKEN,
  USER2_TOKEN,
} from '../../../config';

import './DetailMain.scss';

class DetailMain extends React.Component {
  state = {
    comment: '',
    isCommentValue: false,
    isCommentClicked: false,
    isCommentEdited: false,
    isCheckCommentDelete: false,
    castingMembers: [],
  };

  componentDidMount() {
    if (this.state.comment) return this.getMovieReview();
    this.getMovieCast();
  }

  getMovieReview() {
    fetch(MOVIE_REVIEW, {
      headers: {
        Authorization: USER2_TOKEN,
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

  getMovieCast() {
    // MOVIE_CAST
    fetch('./data/cast.json')
      .then(response => response.json())
      .then(response => this.setState({ castingMembers: response.RESULT }));
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
    this.setState({
      comment,
      isCommentValue: true,
      isCommentClicked: false,
      isCommentEdited: false,
    });
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
      castingMembers,
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
            closeModal={this.handleLeaveCommentToggle}
            currentComment={''}
            apiMethod={'POST'}
            btnType={'코멘트 작성'}
            handleCommentValue={this.handleCommentValue}
          />
        )}

        {isCommentEdited && (
          <DetailMainCommentModal
            closeModal={this.handleCommentEditToggle}
            currentComment={comment}
            apiMethod={'PATCH'}
            btnType={'코멘트 수정'}
            handleCommentValue={this.handleCommentValue}
          />
        )}

        {isCheckCommentDelete && (
          <DeleteCommentCheckModal
            isCheckCommentDelete={this.isCheckCommentDelete}
            handleCommentDelete={this.handleCommentDelete}
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
          <DetailMainAct castingMembers={castingMembers} />
        </div>
      </main>
    );
  }
}

export default DetailMain;
