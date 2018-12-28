import { NEW_POST, FETCH_POSTS, FETCH_USERS, FETCH_USER_POSTS, SET_SELECTED_USER } from './types';

export const fetchPosts = () => async(dispatch) => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        dispatch({
            type: FETCH_POSTS,
            payload: data
        });
}

export const createPost = (post) => async(dispatch) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    const data = await resp.json();
    dispatch({
        type: NEW_POST,
        payload: data
    });
}

export const fetchUsers = () => async(dispatch) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    dispatch({
        type: FETCH_USERS,
        payload: data
    });
}

export const fetchUserPosts = (userId) => async(dispatch) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    const data = await resp.json();
    dispatch({
        type: FETCH_USER_POSTS,
        payload: data
    });
}

export const setSelectedUser = (user) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_USER,
        payload: user
    });
}