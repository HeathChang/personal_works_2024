import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PeopleState, PeopleDTO} from "../../../types/people.type";

const initialState: PeopleState = {
    person: null,
    peopleList: [],
    isLoading: false,
    isError: null
}

const peopleSlice = createSlice({
    name: 'people',
    initialState: initialState,
    reducers: {
        fetchPeopleRequest(state, action: PayloadAction<number>) {
            state.isLoading = true;
            state.isError = null;
        },
        fetchPeopleRequestSuccess(state: PeopleState, action: PayloadAction<PeopleDTO>) {
            state.isLoading = false;
            state.isError = false;
            state.person = action.payload;
        },
        fetchPeopleRequestFailed(state) {
            state.isLoading = false;
            state.isError = true;
            state.person = null;
        },
        savePeopleRequest(state, action: PayloadAction<PeopleDTO>) {
            state.isLoading = true;
            state.isError = null;
        },
        savePeopleRequestSuccess(state: PeopleState) {
            state.isLoading = false;
            state.isError = false;
        },
        savePeopleRequestFailed(state: PeopleState) {
            state.isLoading = false;
            state.isError = true;
        },
        initSavedPeopleRequest(state) {
            state.isLoading = true;
            state.isError = null;
        },
        initSavedPeopleRequestSuccess(state: PeopleState, action: PayloadAction<PeopleDTO[]>) {
            state.isLoading = false;
            state.isError = false;
            state.peopleList = action.payload;
        },
        initSavedPeopleRequestFailed(state) {
            state.isLoading = false;
            state.isError = true;
            state.peopleList = null;
        }
    }
})

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;


