import { FETCH_POSTS, NEW_POST, FETCH_USER_POSTS } from '../actions/types';

export default function(state={
    items: [],
    item: {},
    userPosts: []
}, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case FETCH_USER_POSTS: 
            return {
                ...state,
                userPosts: action.payload
            }
        default:
            return state;
    }
}