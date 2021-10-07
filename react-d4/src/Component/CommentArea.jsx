import { Component } from "react";
import CommentList from "./CommentList";
class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzI5OTY2NjAsImV4cCI6MTYzNDIwNjI2MH0.vI8rqpM89GMD9kO9T6EiPc1QsRLj9alr0aq5ByB0Mgk",
          },
        }
      );
      const comments = await response.json();
      this.setState({ comments });
    } catch (err) {
      console.log(err);
    }
  };

  onNewComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  onDeleteComment = (commentID) => {
    this.setState({
      comments: this.state.comments.filter(
        (comment) => comment._id !== commentID
      ),
    });
  };

  updateComment = (updatedComment) => {
    const toUpdate = this.state.comments
      .map((x) => x._id)
      .indexOf(updatedComment._id);
    this.state.comments[toUpdate] = updatedComment;
    this.setState({ comments: this.state.comments });
  };
  render() {
    return (
      <div>
        <CommentList
          commentsToShow={this.state.comments}
          asin={this.props.asin}
          onNewComment={this.onNewComment}
          onDeleteComment={this.onDeleteComment}
          updateComment={this.updateComment}
        />
      </div>
    );
  }
}

export default CommentArea;
