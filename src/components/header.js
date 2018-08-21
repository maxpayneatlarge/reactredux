import React, { Component } from 'react';
import { NavItem, Nav, Navbar, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar fixedTop className={'navbar-left'}>
      <Navbar.Header>
        <Navbar.Brand>
          Goad Users and Posts
        </Navbar.Brand>
      </Navbar.Header>
        <Nav>
          <NavItem onClick={() => this.props.navigate("users")}>View Contributing Users</NavItem>
          <NavItem onClick={() => this.props.navigate("posts")}>View Posts</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
