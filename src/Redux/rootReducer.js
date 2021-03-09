import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import utilityReducer from "./utility/utilityReducer";

let rootReducer = combineReducers({
    users:userReducer,
    utilities: utilityReducer
})
export default rootReducer