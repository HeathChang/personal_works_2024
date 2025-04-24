import { combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";

const rootReducer = combineReducers({
    ui: uiSlice,
});

export default rootReducer;