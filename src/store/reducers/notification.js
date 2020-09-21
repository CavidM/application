
// const 

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "store/actions/actionTypes"

const initialState = {
    type: '',
    message: '' 
}

export default function(state = initialState, action) {

    switch(action.type) {
        case ADD_NOTIFICATION: {
            return action.data
        }
        case REMOVE_NOTIFICATION: {
            return initialState
        }
        default: {
            return state;
        }
    }
}