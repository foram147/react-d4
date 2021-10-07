import { Modal, Button } from "react-bootstrap";
import React from "react";
import { Component } from "react";
import CommentArea from "./CommentArea";

const arr = [];

class Model extends Component {
  state = {
    show: false,
    arr: [],
    obj: {
      comment: "",
      rate: "",
      elementId: this.props.book.asin,
    },
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  getComment = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzI5OTY2NjAsImV4cCI6MTYzNDIwNjI2MH0.vI8rqpM89GMD9kO9T6EiPc1QsRLj9alr0aq5ByB0Mgk",
        },
      }
    );
    const comments = await response.json();
    comments.map((comment) => arr.push(comment));
  };

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={async () => {
            await this.getComment();
            this.handleShow();
          }}
        >
          Details
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.book.title}</Modal.Title>
            <img src={this.props.book.img} style={{ height: 300 }} alt="" />
          </Modal.Header>
          <Modal.Body>
            <div>Book Category: {this.props.book.category.toUpperCase()}</div>
            <div>Book Price: ${this.props.book.price}</div>
            <div>Asin: {this.props.book.asin}</div>
            <hr />
            <h4>Comments</h4>
            <CommentArea asin={this.props.book.asin} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Model;
