import { combineReducers } from "redux";
import projectAccountReducer from "./account/accountReducer";
import userReducer from "./user/userReducer";
import utilityReducer from "./utility/utilityReducer";

let rootReducer = combineReducers({
    users:userReducer,
    utilities: utilityReducer,
    accounts: projectAccountReducer
})
export default rootReducer