import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
        </Card.Body>

        <AddComment asin={this.props.book.asin} />
        <ListGroupItem>
          {this.props.selected === this.props.book.asin ? (
            <CommentList asin={this.props.book.asin} />
          ) : (
            console.log("ok")
          )}
        </ListGroupItem>
      </Card>
    );
  }
}

export default SingleBook;
