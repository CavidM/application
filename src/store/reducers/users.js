import { SAVE_USER } from "store/actions/actionTypes";

const initialState = []

export default function(state = initialState, action) {

    switch(action.type) {
        case SAVE_USER: {
            return [
                ...state,
                action.data
            ]
        }
        default: {
            return state;
        }
    }
}