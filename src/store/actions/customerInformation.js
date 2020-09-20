import { SAVE_CUSTOMER_INFORMATION } from "./actionTypes"


export const saveCustomerInformation = (data) => {

    return {
        type: SAVE_CUSTOMER_INFORMATION,
        data
    }
}