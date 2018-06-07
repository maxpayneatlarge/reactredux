import { FETCH_POSTS, NEW_POST, FETCH_USERS } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    users: []
}

export default function(state=initialState, action){
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
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}