import React, { Component } from "react";
import { withFirebase } from "../components/Firebase/Firebase";
import { Button, Card, Form } from "react-bootstrap";
import { AuthUserContext } from "../components/Session/Session";

class EditProfile extends Component {
  state = {
    id: "",
    name: "",
    phone: "",
    about: "",
    parish: "",
    inputs: [],
  };

  componentDidUpdate(prevProps) {
    console.log("test", prevProps.authUser, this.props.authUser);
    if (
      prevProps.authUser !== this.props.authUser &&
      this.props.authUser &&
      prevProps.authUser !== null
    ) {
      this.setState({
        id: this.props.authUser.uid,
      });
    } else if (prevProps.authUser == null) {
      this.setState({
        id: this.props.authUser.uid,
      });
    }

    console.log(this.props.authUser.uid);
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.authUser.uid);
    this.props.firebase.db
      .ref("users/" + this.props.authUser.uid)
      .update({
        username: this.state.name,
        phone: this.state.phone,
        about: this.state.about,
        parish: this.state.parish,
      })
      .then(function () {
        alert("Your have updates your information");
      })
      .catch(function (error) {
        alert("Ooops, something went wrong, please try again.");
        console.log(error);
      });

    this.setState({
      name: "",
      phone: "",
      about: "",
      parish: "",
    });
  };

  render() {
    return (
      <div className="row">
        <Card
          className="col-6 profile-card  mr-auto ml-auto "
          style={{
            width: "26rem",
            backgroundColor: "gray",
            justifyContent: "center",
            padding: "1px",
            height: "auto",
            marginBottom: "13px",
          }}
        >
          <Card.Body style={{ padding: "0.25rem" }}>
            <h2 className="card-title">{this.props.userName}</h2>
          </Card.Body>

          <Form
            id="form1"
            className="list-group-flush"
            style={{ padding: "20px" }}
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="name"
                name="name"
                onChange={this.handleChange}
              />
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
                name="parish"
                onChange={this.handleChange}
              >
                <option></option>
                <option>St. Nickolas Cathedral</option>
                <option>St. Joseph Church</option>
                <option>Immaculate Conception Church</option>
                <option>St Olga church</option>
                <option>none</option>
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

            <Button
              style={{ maxWidth: "max-content" }}
              className="ml-auto"
              variant="dark"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Save
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

const EditFormWrapper = (props) => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <EditProfile authUser={authUser} firebase={props.firebase} />
    )}
  </AuthUserContext.Consumer>
);

export default withFirebase(EditFormWrapper);
