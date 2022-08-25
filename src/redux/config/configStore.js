// src/redux/modules/config/configStore.js


// 원래 있던 코드
import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;