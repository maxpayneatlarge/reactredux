import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
          <button className="navbarbutton" onClick={() => this.props.navigate("users")}>View Contributing Users</button><button className="navbarbutton" onClick={() => this.props.navigate("posts")}>View Posts</button>
      </div>
    )
  }
}
