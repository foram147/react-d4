import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  createComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form key={this.props.asin}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Add Comment"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                ...this.setState.comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate"
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                ...this.setState.comment,
                rate: e.target.value,
              })
            }
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onChange={(e) => this.createComment(e)}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
