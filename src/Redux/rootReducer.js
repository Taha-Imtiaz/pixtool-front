import { combineReducers } from "redux";
import projectAccountReducer from "./account/accountReducer";
import assetReducer from "./assets/assetReducer";
import projectReducer from "./project/projectReducer";
import teamReducer from "./team/teamReducer";
import userReducer from "./user/userReducer";
import utilityReducer from "./utility/utilityReducer";

let rootReducer = combineReducers({
    users:userReducer,
    utilities: utilityReducer,
    accounts: projectAccountReducer,
    teams:teamReducer,
    projects:projectReducer,
    assets: assetReducer
})
export default rootReducer