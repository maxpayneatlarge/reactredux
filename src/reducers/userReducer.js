import { FETCH_USERS, SET_SELECTED_USER } from '../actions/types';

export default function(state={users: [], selectedUser: {}}, action){
    switch(action.type){
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_SELECTED_USER: 
            return {
                ...state,
                selectedUser: action.payload
            }
        default:
            return state;
    }
}