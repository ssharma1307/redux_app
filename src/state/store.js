import reducer  from "./reducer/amountreducer";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import thunk from "redux-thunk";


export const store = createStore(reducer,{},applyMiddleware(thunk))