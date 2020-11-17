import React, { Component } from "react";
import { AuthUserContext } from "../components/Session/Session";
import { Button, Table, Card, Image } from "react-bootstrap";
import { withFirebase } from "../components/Firebase/Firebase";

class Account extends Component {
  state = {
    events: [],
    inputs: [],
    name: "",
    description: "",
    place: "",
    date: "",
    link: "",
    isEdit: false,
    id: "",
    button: "+",
    phone: "",
    username: "",
    parish: "",
    about: "",
  };

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          id: user.uid,
          email: user.email,
        });
      }
      this.props.firebase.db
        .ref("/users/" + this.state.id)
        .once("value")
        .then((snapshot) => {
          const username =
            (snapshot.val() && snapshot.val().username) || "Anonymous";
          const phone = snapshot.val() && snapshot.val().phone;
          const parish = snapshot.val() && snapshot.val().parish;
          const about = snapshot.val() && snapshot.val().about;
          this.setState({ username, phone, parish, about });
        });
      this.props.firebase.db
        .ref("/users/" + this.state.id + "/events")
        .once("value")
        .then((snapshot) => {
          const events = snapshot.val() || [];
          this.setState({ events: Object.values(events) });
        });
    });
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  addTrip = () => {
    if (this.state.button === "+") {
      this.setState({
        isEdit: true,
        button: "x",
      });
    } else {
      this.setState({
        isEdit: false,
        button: "+",
      });
    }
  };

  // handdleRemove = (e) => {
  //   e.preventDefault();
  // };

  handleSubmit = (event) => {
    event.preventDefault();

    let inputs = [...this.state.inputs];

    inputs.push({
      name: this.state.name,
      place: this.state.place,
      date: this.state.date,
      link: this.state.link,
      description: this.state.description,
    });

    this.props.firebase.db.ref("users/" + this.state.id + "/events").push(
      {
        name: this.state.name,
        date: this.state.date,
        place: this.state.place,
        link: this.state.link,
        description: this.state.description,
      },
      function (error) {
        if (error) {
          console.log("there has been an error", error);
        } else {
          console.log("Data saved successfully!");
        }
      }
    );

    this.setState({
      inputs,
      name: "",
      place: "",
      date: "",
      link: "",
      description: "",
    });
  };

  render() {
    return (
      <>
        <div
          style={{ minHeight: "75vh", marginLeft: "inherit" }}
          className="container"
        >
          <div className="row">
            <Card
              className="col-4 profile-card "
              style={{
                backgroundColor: "#80583038",
                justifyContent: "center",
                padding: "10px",
                height: "75vh",
              }}
            >
              <Image className="profile-image-card" />

              <h2 className="card-title">{this.state.username}</h2>

              <div>
                <h4>Phone number</h4>
                <p>{this.state.phone}</p>
              </div>

              <div>
                <h4>Parish</h4>
                <p>{this.state.parish}</p>
              </div>

              <div>
                <h4>About me</h4>
                <p>{this.state.about}</p>
              </div>
            </Card>

            <div className="col-8">
              <div className="row ml-3">
                <h1>
                  Your Events{" "}
                  <button onClick={this.addTrip}>{this.state.button}</button>
                </h1>
              </div>
              <div className="row ml-2" style={{ minHeight: "42vh" }}>
                <Table striped bordered hover responsive="md">
                  <thead>
                    <tr>
                      <th style={{ width: "2em" }}>#</th>
                      <th> Name</th>
                      <th>Place</th>
                      <th>Date</th>
                      <th>Link</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.events.map((event, index) => (
                      <tr>
                        <td style={{ width: "2em" }}>{index + 1}</td>
                        <td>{event.name}</td>
                        <td>{event.place}</td>
                        <td>{event.date}</td>
                        <td>{event.link}</td>
                        <td>{event.description}</td>
                      </tr>
                    ))}
                    <EventTable inputs={this.state.inputs} />
                  </tbody>
                </Table>
              </div>
              {this.state.isEdit ? (
                <div className="form">
                  <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    newName={this.state.name}
                    newPlace={this.state.place}
                    newDate={this.state.date}
                    newLink={this.state.link}
                    newDescription={this.state.description}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

class EventTable extends Component {
  render() {
    const inputs = this.props.inputs;

    return (
      <>
        {inputs.map((item, index) => {
          return (
            <tr>
              <td style={{ width: "2em" }}>{index + 2}</td>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.date}</td>
              <td>{item.link}</td>
              <td>{item.description}</td>
            </tr>
          );
        })}
      </>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new event to the table:</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="name" className="m-1">
            Name:
            <input
              id="name"
              value={this.props.newName}
              type="text"
              name="name"
              onChange={this.props.handleChange}
            />
          </label>
          <label for="place" className="m-1">
            Place:
            <input
              id="place"
              value={this.props.newPlace}
              type="place"
              name="place"
              onChange={this.props.handleChange}
            />
          </label>
          <label for="date" className="m-1">
            Date:
            <input
              id="date"
              value={this.props.newDate}
              type="date"
              name="date"
              onChange={this.props.handleChange}
            />
          </label>
          <label for="link" className="m-1">
            Link:
            <input
              id="link"
              value={this.props.newLink}
              type="link"
              name="link"
              onChange={this.props.handleChange}
            />
          </label>
          <label for="description" className="m-1">
            Description:
            <input
              id="description"
              value={this.props.newDescription}
              type="description"
              name="description"
              onChange={this.props.handleChange}
            />
          </label>
          <button className="mr-auto ml-auto btn btn-dark">
            {" "}
            Add new Event
          </button>{" "}
        </form>
      </div>
    );
  }
}

const AccountWrapper = (props) => (
  <AuthUserContext.Consumer>
    {(authUser) => <Account authUser={authUser} firebase={props.firebase} />}
  </AuthUserContext.Consumer>
);

export default withFirebase(AccountWrapper);
