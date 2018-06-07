import { NEW_POST, FETCH_POSTS, FETCH_USERS } from './types';

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