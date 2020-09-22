import store from 'store';
import { SAVE_USER } from './actionTypes';
import {saveUserService} from 'services/userService';
import { addNotification } from './notificationAction';
import { DANGER, SUCCESS } from 'config/constants';

export async function saveUser (data) {

    try {

        let res = await saveUserService();

        store.dispatch({
            type: SAVE_USER,
            data
        })

        addNotification({
            type: SUCCESS,
            message: res
        })

        return res;
    }
    catch (err) {
        addNotification({
            type: DANGER,
            message: err.message
        })

        return err;
    }
}