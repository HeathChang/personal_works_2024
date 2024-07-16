import {FETCHING_GET_LIST_DATA, FETCHING_GET_LIST_DATA_FAILED, FETCHING_GET_LIST_DATA_SUCCESS} from "./actionTypes";

const initialState = {
    notesList: [],
    isNotesDataFetching: false,
    isNotesDataFetchingFailed: false,
};

const NotesListReducer = (state = initialState, action) => {
    // console.log('from reducer.js => state:: ', state)
    // console.log('from reducer.js => action:: ', action)
    switch (action.type) {
        case FETCHING_GET_LIST_DATA:
            return {
                ...state,
                isNotesDataFetching: true
            };

        case FETCHING_GET_LIST_DATA_SUCCESS:
            return {
                ...state,
                notesList: action.notesListData,
                isNotesDataFetching: false,
                isNotesDataFetchingFailed: false
            };

        case FETCHING_GET_LIST_DATA_FAILED:
            return {
                ...state,
                notesList: [],
                isNotesDataFetching: false,
                isNotesDataFetchingFailed: true
            };

        default:
            return state;
    }
};

export default NotesListReducer;
