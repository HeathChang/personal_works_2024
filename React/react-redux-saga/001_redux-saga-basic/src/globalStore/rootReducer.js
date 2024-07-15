import {combineReducers} from "redux";
import AddNotesReducer from "../containers/addNotes/store/reducers";

const rootReducer =  combineReducers({
    AddNotesReducer: AddNotesReducer,
})

export default rootReducer;