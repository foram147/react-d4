import React from "react";
import { Card, Button } from "react-bootstrap";

import Model from "./Model";

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
          <Card.Text>{this.props.book.price}</Card.Text>
          <Button
          /*onClick={() => {
              this.setState({ colStatus: !this.state.colStatus });
              console.log(this.state.colStatus);
            }}*/
          >
            Comments
          </Button>
          <Model book={this.props.book} />
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
