import React, { Component } from 'react';
import DetailMainCommentWithoutValue from './Components/DetailMainComment/DetailMainCommentWithoutValue/DetailMainCommentWithoutValue';
import DetailMainCommentWithValue from './Components/DetailMainComment/DetailMainCommentWithValue/DetailMainCommentWithValue';
import DetailMainCommentModal from './Components/DetailMainComment/DetailMainCommentModal/DetailMainCommentModal';
import DeleteCommentCheckModal from './Components/DetailMainComment/DeleteCommentCheckModal/DeleteCommentCheckModal';
import DetailMainCommentEditModal from './Components/DetailMainComment/DetailMainCommentEditModal/DetailMainCommentEditModal';
import DetailMainAct from './Components/DetailMainAct/DetailMainAct';
import DetailMainInfor from './Components/DetailMainInfor/DetailMainInfor';
import './DetailMain.scss';

class DetailMain extends React.Component {
  state = {
    isCommentValue: false,
    isCommentClicked: false,
    isCheckCommentDelete: false,
    isCommentEdited: false,
  };

  componentDidMount() {
    fetch('http://192.168.219.156:8000/review/content/1', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.T66un2Tsk42sMvfJjqY1YO9Kh4gyuCBKJib6bizw_fE',
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
          <DetailMainAct />
        </div>
      </main>
    );
  }
}

export default DetailMain;
