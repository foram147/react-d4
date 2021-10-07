import { Component } from "react";
import { ListGroup, ListGroupItem, Spinner } from "react-bootstrap";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  getComments = async () => {
    if (this.state.isLoading) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzI5OTY2NjAsImV4cCI6MTYzNDIwNjI2MH0.vI8rqpM89GMD9kO9T6EiPc1QsRLj9alr0aq5ByB0Mgk",
            },
          }
        );
        if (response.ok) {
          let data = await response.json;
          console.log(data);
          this.setState({
            comments: data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  componentDidMount() {
    this.getComments();
  }
  render() {
    console.log("rendered");
    return (
      <ListGroup key={this.props.asin}>
        {this.state.isLoading ? (
          <Spinner className={"mx-auto"} animation="border" variant="dark" />
        ) : this.state.comments.length ? (
          this.state.comments.map((comment) => {
            return (
              <ListGroup>
                <ListGroupItem key={comment._id}>
                  {comment.rate}/5,{comment.comment} by
                  <ListGroupItem>{comment.author}</ListGroupItem>
                </ListGroupItem>
              </ListGroup>
            );
          })
        ) : (
          <ListGroup.Item>This book has no comments!</ListGroup.Item>
        )}
      </ListGroup>
    );
  }
}

export default CommentList;
