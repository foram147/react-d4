import React from "react";
import SingleBook from "./SingleBook";

import { Nav, Col, Container, Form, Row } from "react-bootstrap";

import romanceBooks from "../data/romance.json";
import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import scifiBooks from "../data/scifi.json";

class BookList extends React.Component {
  state = {
    category: romanceBooks,
    searchQuery: "",
    Comment: null,
  };

  render() {
    return (
      <Container>
        <Nav
          className="mt-5"
          id="category-nav"
          fill
          variant="tabs"
          defaultActiveKey="#"
        >
          <Nav.Item>
            <Nav.Link onClick={() => this.setState({ category: romanceBooks })}>
              History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ category: horrorBooks })}
              eventKey="link-1"
            >
              Horror
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ category: fantasyBooks })}
              eventKey="link-2"
            >
              Fantasy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ category: historyBooks })}
              eventKey="link-3"
            >
              Romance
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => this.setState({ category: scifiBooks })}
              eventKey="link-4"
            >
              Scifi
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.state.category
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={3}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
