import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/postActions";
import { Table } from "react-bootstrap";
import "../App.css";

class Users extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  componentDidMount() {
    console.log("calling fetchUsers");
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.map(user => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    ));

    return (
      <div className={"users-container"}>
        <h3>Contributing Users:</h3>
        <Table hover striped className={"users-table"}>
          <thead>
            <tr>
              <td>
                <h3>Name</h3>
              </td>
              <td>
                <h3>Email Address</h3>
              </td>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.props.users
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
