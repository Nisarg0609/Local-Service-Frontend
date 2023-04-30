import { combineReducers } from "redux";
import users from './userReducer'
import categories from './categoryReducer'
import services from './serviceReducer'

export default combineReducers({
    users, categories, services
})