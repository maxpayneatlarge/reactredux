import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUserPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
import '../App.css';

class UserPosts extends Component{

    componentDidMount(){ 
        this.props.fetchUserPosts(this.props.user.id);
    }

    handleClick = () => {
        this.props.navigate('users');
    }

    render(){
        const postItems = this.props.userPosts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return(
            <div>
                <h2> { this.props.user.name }'s Posts </h2>
                <h4><a onClick = {() => this.handleClick()} className="link">(Go back to users)</a></h4>
                <hr />
                { postItems }
            </div>

        )
    }

}

UserPosts.propTypes = {
    fetchUserPosts: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.users.selectedUser,
    userPosts: state.posts.userPosts
});

export default connect(mapStateToProps, {fetchUserPosts})(UserPosts);
