import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

let middleware = [thunk]
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store;