import {combineReducers} from "@reduxjs/toolkit";
import PeopleReducer from "../slices/people/people.slice";

const rootReducer =  combineReducers({
    peopleReducer : PeopleReducer,
})

export default rootReducer;

