import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { withFirebase } from "../components/Firebase/Firebase";

class TableofEvents extends Component {
  state = {
    loading: false,
    users: [],
    events: [],
  };

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const usersObject = snapshot.val();
      console.log(`this is a admin usersobject`, usersObject);
      const usersList = Object.keys(usersObject).map((key) => ({
        ...usersObject[key],
        uid: key,
      }));
      console.log(usersList);

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <>
    <div
      style={{ minHeight: "73vh", marginTop: "1.5em", paddingBottom: "4em" }}
      className="container"
    >
      <div className="row ml-3">
        <h1>Events </h1>
      </div>
      <div className="row ml-2" style={{ minHeight: "42vh" }}>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th style={{ width: "2em" }}>#</th>
              <th> Name</th>
              <th>Place</th>
              <th>Date</th>
              <th>Link</th>
              <th>Description</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) =>
              user.events && Object.values(user.events).length > 0
                ? Object.values(user.events).map((event) => (
                    <tr>
                      <td style={{ width: "2em" }}>{index + 1}</td>
                      <td>{event.name}</td>
                      <td>{event.place}</td>
                      <td>{event.date}</td>
                      <td>{event.link}</td>
                      <td>{event.description}</td>
                      <td>{user.username}</td>
                    </tr>
                  ))
                : null
            )}
          </tbody>
        </Table>
      </div>
    </div>
  </>
);

export default withFirebase(TableofEvents);
