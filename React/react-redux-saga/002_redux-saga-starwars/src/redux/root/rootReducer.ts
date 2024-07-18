import {combineReducers} from "@reduxjs/toolkit";
import PeopleReducer from "../slices/people/people.slice";

const rootReducer =  combineReducers({
    people : PeopleReducer,
})

export default rootReducer;

