import React, { Component } from 'react';
import { NavItem, Nav, Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar fixedTop className={'navbar-left'}>
        <Nav>
          <Button onClick={() => this.props.navigate("users")}>View Contributing Users</Button>
          <Button onClick={() => this.props.navigate("posts")}>View Posts</Button>
        </Nav>
      </Navbar>
    )
  }
}
