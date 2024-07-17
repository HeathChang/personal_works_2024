import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PeopleState, PeopleDTO} from "../../../types/people.type";

const initialState: PeopleState = {
    people: [],
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
        fetchPeopleRequestSuccess(state: PeopleState, action: PayloadAction<PeopleDTO[]>) {
            state.isLoading = false;
            state.isError = false;
            state.people = [...action.payload];
        },
        fetchPeopleRequestFailed(state, action: PayloadAction<null>) {
            state.isLoading = false;
            state.isError = true;
            state.people = [];

        }
    }
})

export const peopleActions = peopleSlice.actions;
export default peopleSlice.reducer;


