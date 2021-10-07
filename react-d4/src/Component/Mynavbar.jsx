import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const Mynavbar = ({ location, history, match }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Strive Bookstore</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">
              <div className="nav-link">Home</div>
            </Link>
          </Nav>
          <Nav>
            <Link to="/browse-books">
              <div className="nav-link">Books</div>
            </Link>
          </Nav>
          <Nav>
            <Link to="/register">
              <div className="nav-link">Register</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Mynavbar);
