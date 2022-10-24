import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Form, FloatingLabel, Button, Card } from "react-bootstrap";

const FormPage = (props) => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    description: "",
    email: "",
    focus: "",
    file: [],
  });
  const initUserInput = useRef();

  useEffect(() => {
    initUserInput.current = userInput;
  }, []);

  useEffect(() => {
    console.log(props.submitted);
    setUserInput(initUserInput.current);
  }, [props.submitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    props.handleSendEmail(userInput);
    
  };

  const handleChange = (event) => {
    setUserInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFocus = (event) => {
    setUserInput((prev) => ({ ...prev, focus: event.target.name }));
  };

  const handleImageUpload = (event) => {
    if (event.target.files.length > 0) {
      setUserInput((prev) => ({
        ...prev,
        file: [...prev.file, URL.createObjectURL(event.target.files[0])],
      }));
    }
  };

  const handleDeleteImage = (event) => {
    setUserInput((prev) => ({
      ...prev,
      file: prev.file.filter((i) => i !== event.target.src),
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="text-center mt-3">
        <h4 className="mb-3">Simple Form</h4>
      </Row>
      <FloatingLabel label="First Name" className="mb-3">
        <Form.Control
          required
          name="firstName"
          value={userInput.firstName}
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          onFocus={handleFocus}
          isInvalid={!userInput.firstName && userInput.focus === "firstName"}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          First Name is required.
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel label="Last Name" className="mb-3">
        <Form.Control
          required
          name="lastName"
          value={userInput.lastName}
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          onFocus={handleFocus}
          isInvalid={!userInput.lastName && userInput.focus === "lastName"}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Last Name is required.
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel label="Small Description" className="mb-3">
        <Form.Control
          required
          name="description"
          value={userInput.description}
          as="textarea"
          placeholder="Small Description"
          style={{ height: "200px" }}
          onChange={handleChange}
          onFocus={handleFocus}
          isInvalid={
            !userInput.description && userInput.focus === "description"
          }
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Small Description is required.
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel label="Email Address" className="mb-3">
        <Form.Control
          required
          name="email"
          value={userInput.email}
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          onFocus={handleFocus}
          isInvalid={!userInput.email && userInput.focus === "email"}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Please Enter a valid email.
        </Form.Control.Feedback>
      </FloatingLabel>
      <Row>
        {userInput.file.map((m) => {
          return (
            <Card onClick={handleDeleteImage} style={{ width: "400px" }}>
              <Card.Img src={m} key={m}></Card.Img>
            </Card>
          );
        })}
      </Row>
      <Row>
        <Col xs={{ span: 4, offset: 7 }}>
          <Form.Control
            as="input"
            type="file"
            className="mb-3"
            onChange={handleImageUpload}
            accept=".png"
            multiple
          ></Form.Control>
        </Col>
        <Col xs="1">
          <Button
            type="submit"
            disabled={
              userInput.firstName &&
              userInput.lastName &&
              userInput.description &&
              userInput.email
                ? false
                : true
            }
          >
            SAVE
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormPage;
