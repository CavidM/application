import { combineReducers } from 'redux'
import customerInformation from 'store/reducers/customerInformation'
import notification from 'store/reducers/notification'
import users from 'store/reducers/users'

export default combineReducers({
    customerInformation,
    notification,
    users
})