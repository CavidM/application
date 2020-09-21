import { combineReducers } from 'redux'
import customerInformation from 'store/reducers/customerInformation'
import notification from 'store/reducers/notification'

export default combineReducers({
    customerInformation,
    notification
})