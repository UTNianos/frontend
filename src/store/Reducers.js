import { combineReducers } from "redux";
import seguidor from "./Reducers/Seguidor";
import { reducer as userReducer } from "./Reducers/user";

const rootReducer = combineReducers({ seguidor, userReducer });

export default rootReducer;
