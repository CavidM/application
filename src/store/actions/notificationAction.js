import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "./actionTypes"
import store from 'store';

export const addNotification = (data) => {

    store.dispatch({
        type: ADD_NOTIFICATION,
        data
    })
}

export const removeNotification = () => {

    store.dispatch({
        type: REMOVE_NOTIFICATION
    })
}