import React, { Component } from 'react';
import DetailMainCommentWithoutValue from './Components/DetailMainComment/DetailMainCommentWithoutValue/DetailMainCommentWithoutValue';
import DetailMainCommentWithValue from './Components/DetailMainComment/DetailMainCommentWithValue/DetailMainCommentWithValue';
import DetailMainCommentModal from './Components/DetailMainComment/DetailMainCommentModal/DetailMainCommentModal';
import DeleteCommentCheckModal from './Components/DetailMainComment/DeleteCommentCheckModal/DeleteCommentCheckModal';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import DetailMainCommentRead from './Components/DetailMainCommentRead/DetailMainCommentRead';
import { ACRIVE_USER_COMMENT, MOVIE_CAST } from '../../../config';

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

  getMovieCast() {
    fetch(`${MOVIE_CAST}${this.props.Id}`)
      .then(response => response.json())
      .then(response => this.setState({ castingMembers: response.RESULT }));
  }

  getMovieComments() {
    fetch(`${ACRIVE_USER_COMMENT}${this.props.Id}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ UserComments: response.result });
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
      Id,
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
            Id={Id}
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
          <DetailMainCommentRead Id={Id} />
        </div>
      </main>
    );
  }
}

export default DetailMain;
