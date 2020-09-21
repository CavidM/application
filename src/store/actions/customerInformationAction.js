import { SAVE_CUSTOMER_INFORMATION } from "./actionTypes"
import store from 'store';
import { saveCustomerInformationService } from 'services/customerInformationService';
import { addNotification } from "./notificationAction";
import { DANGER, SUCCESS } from "config/constants";

export async function saveCustomerInformation(data) {

    try {
        let res = await saveCustomerInformationService();

        store.dispatch({
            type: SAVE_CUSTOMER_INFORMATION,
            data
        });

        addNotification({
            type: SUCCESS,
            message: 'Yadda saxlanıldı'
        })

        return res;
    }
    catch(err) {

        addNotification({
            type: DANGER,
            message: err.message
        })

        return err;
    }
}