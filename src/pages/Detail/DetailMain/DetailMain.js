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
    comment: '',
    isCommentValue: false,
    isCommentClicked: false,
    isCheckCommentDelete: false,
    isCommentEdited: false,
  };

  handleLeaveComment = () => {
    this.setState({ isCommentClicked: true });
  };

  handleCloseComment = () => {
    this.setState({ isCommentClicked: false });
  };

  handleCommentValue = comment => {
    this.setState({ comment, isCommentValue: true, isCommentClicked: false });
  };

  handleEditCommentValue = comment => {
    this.setState({ comment, isCommentValue: true, isCommentEdited: false });
  };

  handleDeleteValue = () => {
    this.setState({ isCheckCommentDelete: true });
  };

  handleCancelDelete = () => {
    this.setState({ isCheckCommentDelete: false });
  };

  handleCommentDelete = () => {
    this.setState({ isCommentValue: false, isCheckCommentDelete: false });
  };

  handleCommentEdit = () => {
    this.setState({ isCommentEdited: true });
  };

  handleRemoveEditComment = () => {
    this.setState({ isCommentEdited: false });
  };

  render() {
    const {
      comment,
      isCommentValue,
      isCommentClicked,
      isCheckCommentDelete,
      isCommentEdited,
    } = this.state;
    return (
      <main className="DetailMain">
        {isCommentClicked && (
          <DetailMainCommentModal
            handleCloseComment={this.handleCloseComment}
            handleCommentValue={this.handleCommentValue}
          />
        )}

        {isCheckCommentDelete && (
          <DeleteCommentCheckModal
            isCheckCommentDelete={this.isCheckCommentDelete}
            handleCancelDelete={this.handleCancelDelete}
            handleCommentDelete={this.handleCommentDelete}
          />
        )}

        {isCommentEdited && (
          <DetailMainCommentEditModal
            comment={comment}
            handleRemoveEditComment={this.handleRemoveEditComment}
            handleCommentValue={this.handleCommentValue}
            handleEditCommentValue={this.handleEditCommentValue}
          />
        )}

        {isCommentValue ? (
          <DetailMainCommentWithValue
            comment={comment}
            handleDeleteValue={this.handleDeleteValue}
            handleCommentEdit={this.handleCommentEdit}
            handleEditValueComponentWithValue={
              this.handleEditValueComponentWithValue
            }
          />
        ) : (
          <DetailMainCommentWithoutValue
            handleLeaveComment={this.handleLeaveComment}
            handleCloseComment={this.handleCloseComment}
          />
        )}

        <div className="detailMainInforAndAct">
          <DetailMainInfor />
          <DetailMainAct />
        </div>
      </main>
    );
  }
}

export default DetailMain;
