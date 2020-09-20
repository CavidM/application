import { SAVE_CUSTOMER_INFORMATION } from "store/actions/actionTypes";

const initialState = {}

export default function(state = initialState, action) {

    switch(action.type) {
        case SAVE_CUSTOMER_INFORMATION: {
            return action.data
        }
        default: {
            return state;
        }
    }
}