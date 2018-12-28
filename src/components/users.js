import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/postActions';
import { setSelectedUser } from '../actions/postActions';
import { Table} from 'react-bootstrap';
import '../App.css';


class Users extends Component {

    componentDidMount(){ 
        this.props.fetchUsers();
    }

    handleClick = (user) => {
        this.props.setSelectedUser(user);
        this.props.navigate("userPosts");
    }

    render() {
        const users = this.props.users.map(user => (
            <tr key={user.id}>
                <td><a onClick={() => this.handleClick(user)} className="link">{user.name}</a></td><td>{user.email}</td>
            </tr>
        ));
        
        return (
            <div className={'users-container'}>
                <h3>Contributing Users:</h3>
                <Table hover striped className={'users-table'}>
                    <thead>
                        <tr>
                            <td><h3>Name</h3></td><td><h3>Email Address</h3></td>
                        </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </Table>
            </div>
        )
  }
}

Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
    users: state.users.users
})

export default connect(mapStateToProps, { fetchUsers, setSelectedUser } )(Users);
