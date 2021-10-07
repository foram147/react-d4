import {
  Container,
  Row,
  Form,
  Button,
  Alert,
  ListGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const Registration = ({ history, location }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirmedPassword, setConfirmedPassword] = useState(false);
  let reviewDetails = {
    firstName,
    lastName,
    email,
    password,
  };
  useEffect(() => {
    reviewDetails = {
      firstName,
      lastName,
      email,
      password,
    };
  }, [firstName, lastName, email, password]);

  function alertConfirmedPassowrd() {
    return (
      <Alert variant="danger">
        <small>Your password should match...</small>
      </Alert>
    );
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePassword(password) {
    const pass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return pass.test(password);
  }

  console.log(validateEmail("email.com"));
  const alert = (char) => {
    return (
      <small>
        <Alert variant={"danger"}>
          Please type at least {char} characters!
        </Alert>
      </small>
    );
  };
  const alertPassword = () => {
    return (
      <small>
        <Alert variant={"danger"}>
          <h4>
            Please enter a valid password. Required password should inclucde:
          </h4>
          <ListGroup>
            <ListGroup.Item>Min 1 uppercase letter</ListGroup.Item>
            <ListGroup.Item>Min 1 lowercase letter</ListGroup.Item>
            <ListGroup.Item>Min 1 special letter</ListGroup.Item>
            <ListGroup.Item>Min 1 number</ListGroup.Item>
            <ListGroup.Item>Min 8 characters</ListGroup.Item>
            <ListGroup.Item>Max 30 characters</ListGroup.Item>
          </ListGroup>
        </Alert>
      </small>
    );
  };
  const alertEmail = () => {
    return (
      <small>
        <Alert variant={"danger"}>Please enter a valid email</Alert>
      </small>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Form id="form" className="w-50 my-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your First Name: </Form.Label>
            {errorName && alert(2)}
            <Form.Control
              required
              value={firstName}
              onChange={(e) => (
                e.target.value.length >= 2
                  ? setErrorName(false)
                  : setErrorName(true),
                setFirstName(e.target.value)
              )}
              type="text"
              placeholder="Enter your first name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mr-auto">Your Last Name:</Form.Label>
            {errorLastName && alert(3)}
            <Form.Control
              required
              value={lastName}
              onChange={(e) => (
                e.target.value.length >= 3
                  ? setErrorLastName(false)
                  : setErrorLastName(true),
                setLastName(e.target.value)
              )}
              type="email"
              placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mr-auto">Email address</Form.Label>
            {errorEmail && alertEmail()}
            <Form.Control
              required
              value={email}
              onChange={(e) => (
                validateEmail(e.target.value)
                  ? setErrorEmail(false)
                  : setErrorEmail(true),
                setEmail(e.target.value)
              )}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {errorPassword && alertPassword()}
            <Form.Control
              required
              value={password}
              onChange={(e) => (
                validatePassword(e.target.value)
                  ? setErrorPassword(false)
                  : setErrorPassword(true),
                setPassword(e.target.value)
              )}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            {confirmedPassword && alertConfirmedPassowrd()}
            <Form.Control
              required
              value={confirmPassword}
              onChange={(e) => (
                e.target.value === password
                  ? setConfirmedPassword(false)
                  : setConfirmedPassword(true),
                setConfirmPassword(e.target.value)
              )}
              type="password"
              placeholder="Type your Password again to confirm"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              required
              defaultChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              type="checkbox"
              label="I accept terms and regulations"
            />
          </Form.Group>
          <Button
            onClick={() =>
              history.push({
                pathname: "/review",
                state: { details: reviewDetails },
              })
            }
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default withRouter(Registration);
