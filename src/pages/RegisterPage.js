import React, { useState } from "react";
import "./RegisterPage.css";
import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  Container,
  Form,
  FormGroup,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const saveData = (data, file) => {
  //   const finished = (error) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }
  //   }
  //     const jsonData = JSON.stringify(data, null, 2);
  //     fs.writeFile(file, jsonData, finished);
  // };

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    console.log(name, "name");
    console.log(value, "value");

    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
    const jsonData = JSON.stringify(state, null, 2);
    const fileName = "venkat.json";

    const fetchData = () => {
      return fetch(
        "http://localhost:8080/?fileName=" + fileName + "&data=" + jsonData
      ).then((response) => response.json());
    };
    fetchData();
  };

  return (
    <Card className="mt-3 w-50 mx-auto">
      <div className="flex-center">
        <Form onSubmit={handleSubmit}>
          <Card.Title>Register Page</Card.Title>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />

            <Form.Control.Feedback type="invalid">
              Please choose a first name.
            </Form.Control.Feedback>
            {state.firstName == "" && (
              <span style={{ color: "red" }}>First Name is required</span>
            )}

            {state.firstName.length < 7 && state.firstName.length > 0 && (
              <span style={{ color: "red" }}> firstName is lessthan seven</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={state.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a last name.
            </Form.Control.Feedback>
            {state.lastName == "" && (
              <span style={{ color: "red" }}>Last Name is required</span>
            )}
            {state.lastName.length < 5 && state.lastName.length > 0 && (
              <span style={{ color: "red" }}> Last Name is lessthan five</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter a email"
              value={state.email}
              onChange={handleChange}
            />

            <Form.Control.Feedback type="invalid">
              Please enter valid email address.
            </Form.Control.Feedback>
            {state.email == "" && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Enter a password"
              value={state.password}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter password
            </Form.Control.Feedback>
            {state.password.length < 8 && (
              <span style={{ color: "red" }}> password is lessthan eigth</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmPassword"
              placeholder=" Confirm password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please confirm password.
            </Form.Control.Feedback>
            {state.confirmPassword.length < 8 && (
              <span style={{ color: "red" }}> password is lessthan eigth</span>
            )}
            {state.password != state.confirmPassword &&
              state.confirmPassword.length > 8 && (
                <span style={{ color: "red" }}> password does not match</span>
              )}
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="success" size="sm">
              Apply
            </Button>
            <Form.Text>
              Already Have An Account? <a href="/login">Sign In</a>
            </Form.Text>
          </div>
        </Form>
      </div>
    </Card>
  );
};
export default RegisterPage;
