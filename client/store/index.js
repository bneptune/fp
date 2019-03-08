import { createStore, combineReducers } from "redux";

import locations from "./locations";

const reducer = combineReducers({ locations });
const store = createStore(reducer);

export default store;
