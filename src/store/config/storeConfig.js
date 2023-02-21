import {rootReducer}  from "../reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from 'redux-devtools-extension';

export const createAppStore=()=>{
    const store = configureStore({rootReducer,composeWithDevTools});
    return store;
}