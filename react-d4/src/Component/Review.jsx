import { Link, withRouter } from "react-router-dom";
import { ListGroup, Container, Row, Button } from "react-bootstrap";
import { useState } from "react";

const Review = ({ history, location }) => {
  const user = location.state.details;
  const [confirmedDetails, setConfirmedDetails] = useState(true);
  const confirmed = () => {
    return (
      <h1 className="text-light my-3"> Your Details have been confirmed</h1>
    );
  };
  return (
    <>
      <Container>
        {confirmedDetails ? (
          <>
            <h1 className="text-light mt-3">Your Details</h1>
            <Row className="justify-content-center">
              <ListGroup className="w-50 m-3">
                <ListGroup.Item className="my-2">
                  First Name: {user.firstName}
                </ListGroup.Item>
                <ListGroup.Item className="my-2">
                  Last Name: {user.lastName}
                </ListGroup.Item>
                <ListGroup.Item className="my-2">
                  Email: {user.email}
                </ListGroup.Item>
                <ListGroup.Item className="my-2">
                  Password: {user.password}
                </ListGroup.Item>
              </ListGroup>
            </Row>
            <Button
              onClick={() => (
                setConfirmedDetails(false),
                setTimeout(() => {
                  history.push("/");
                }, 3000)
              )}
              className="mb-3"
            >
              Confirm Details
            </Button>
          </>
        ) : (
          confirmed()
        )}
      </Container>
    </>
  );
};

export default withRouter(Review);
