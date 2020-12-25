import React, { Component } from 'react';
import DetailMainCommentReadList from '../DetailMainCommentReadList/DetailMainCommentReadList';
import { USER2_TOKEN, MOVIE_REVIEW } from '../../../../../config';
import './DetailMainCommentRead.scss';

class DetailMainCommentRead extends Component {
  state = {
    UserComments: '',
  };

  componentDidMount() {
    this.getMovieReview();
  }

  getMovieReview() {
    const currentToken = sessionStorage.getItem('access_token');
    fetch(`${MOVIE_REVIEW}${this.props.Id}`, {
      headers: {
        Authorization: currentToken,
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          UserComments: response.result,
        });
      });
  }
  render() {
    const { UserComments } = this.state;
    return (
      <section className="DetailMainCommentRead">
        <div className="commentReadHeader">
          <p>코멘트</p>
        </div>
        <div className="commentReadOverflow">
          {UserComments &&
            UserComments.map(comment => {
              return (
                <DetailMainCommentReadList
                  key={comment.user_id}
                  userName={comment.user}
                  userProfileImg={comment.user_profile}
                  review={comment.review}
                  likes={comment.likes}
                  commentId={comment.id}
                />
              );
            })}
        </div>
      </section>
    );
  }
}

export default DetailMainCommentRead;
