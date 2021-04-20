import { combineReducers } from "redux";
import accountReducer from "./account/accountReducer";
import assetReducer from "./assets/assetReducer";
import projectReducer from "./project/projectReducer";
import reviewReducer from "./review/reviewReducer";
import teamReducer from "./team/teamReducer";
import userReducer from "./user/userReducer";
import utilityReducer from "./utility/utilityReducer";

let rootReducer = combineReducers({
 
    users:userReducer,
    utilities: utilityReducer,
    accounts: accountReducer,
    teams:teamReducer,
    project:projectReducer,
    assets: assetReducer,
    reviewAssets: reviewReducer
})
export default (state, action) =>
// check user auth (if user is logged out then clear redux store)
  rootReducer(action.type === 'LOGOUT' ? undefined : state, action);