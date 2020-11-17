import React, { Component } from "react";
import { AuthUserContext } from "../components/Session/Session";
import { Card, Form, Image, Button, Table } from "react-bootstrap";

class ProfileInfo extends Component {
  state = {
    email: "",
    phone: "",
    parish: "",
    about: "",
    isEdit: true,
  };

  handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isEdit: false,
    });
    //add firebase ref//
  };

  render() {
    const email = this.state.email;

    return (
      <>
        <Image className="profile-image-card" />

        <Card.Body style={{ padding: "0.25rem" }}>
          <h2 className="card-title">Name</h2>
          {/* {this.props.authUser.displayName} */}
        </Card.Body>

        <Form className="list-group-flush" style={{ padding: "20px" }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address {email}</Form.Label>
            {this.state.isEdit ? (
              <Form.Control
                type="email"
                name="email"
                // value={this.state.email}
                onChange={this.handleChange}
              />
            ) : (
              <p>{email}</p>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Parish</Form.Label>
            <Form.Control
              as="select"
              name="select"
              onChange={this.handleChange}
            >
              <option>St. Nickolas Cathedral</option>
              <option>St. Joseph Church</option>
              <option>Immaculate Conception Church</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About me</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="about"
              value={this.state.about}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Email Newsletter" />
          </Form.Group>
          {this.state.isEdit && (
            <Button
              style={{ maxWidth: "max-content" }}
              className="ml-auto"
              variant="dark"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Save
            </Button>
          )}
        </Form>
      </>
    );
  }
}

export default ProfileInfo;
