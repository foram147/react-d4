import { ListGroup, Button, Form } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { Component } from "react";

class SingleComment extends Component {
  state = {
    isEditing: false,
    comment: {
      rate: 0,
      comment: "",
    },
  };
  deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` +
          this.props.comment._id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI3ODhjNTYzOTI4ZTAwMTU5YzViZTAiLCJpYXQiOjE2MzAzMzM0MTksImV4cCI6MTYzMTU0MzAxOX0.WNHy8rSe0WiehbzJHj6RVtkgdDBzWUaVx-vKNYX0yac",
          },
        }
      );
      if (response.ok) {
        this.props.onDeleteComment(this.props.comment._id);
        console.log("Comment Deleted");
      }
    } catch (err) {}
  };

  setEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  updateComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/` +
          this.props.comment._id,
        {
          method: "PUT",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTI3ODhjNTYzOTI4ZTAwMTU5YzViZTAiLCJpYXQiOjE2MzAzMzM0MTksImV4cCI6MTYzMTU0MzAxOX0.WNHy8rSe0WiehbzJHj6RVtkgdDBzWUaVx-vKNYX0yac",
          },
        }
      );
      if (response.ok) {
        const comments = await response.json();
        this.setState({ isEditing: !this.state.isEditing });
        this.props.updateComment(comments);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ListGroup.Item>
        {this.state.isEditing ? (
          <>
            <Form>
              <Form.Group>
                <Form.Label>Your comment:</Form.Label>
                <Form.Control
                  value={this.state.comment.comment}
                  type="text"
                  placeholder="Add Comment"
                  onChange={(e) =>
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        comment: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rate:</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    this.setState({
                      comment: {
                        ...this.state.comment,
                        rate: e.target.value,
                      },
                    })
                  }
                  value={this.state.comment.rate}
                  as="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={this.updateComment}>
              Update
            </Button>
          </>
        ) : (
          <>
            {this.props.comment.comment}
            <p>
              <small>Rating: {this.props.comment.rate}</small>
            </p>
          </>
        )}
        <Button
          variant="secondary"
          onClick={() => this.setEdit()}
          className="ml-3 btn-sm"
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => this.deleteComment()}
          className="ml-3 btn-sm"
        >
          <Trash />
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
