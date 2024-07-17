import {call, put, takeEvery} from 'redux-saga/effects';
import {peopleActions} from "./people.slice";
import axios from "axios";
import { ServerResponse } from "http";

const header = {
    'content-type': 'application/json'
}

const API_BASE_URL = process.env.REACT_APP_STAR_WARS_URL;

console.log(1, API_BASE_URL)

// saga-watcher
function* peopleSaga() {
    yield takeEvery(peopleActions.fetchPeopleRequest, fetchPeopleList)
}

// function
function* fetchPeopleList({ payload  }: any) {
    console.log('action:: ', payload)
    try {
        const response: ServerResponse = yield call(
            axios.get,
            `${API_BASE_URL}/people/${payload}`
        )
        console.log(`person for ${payload} ::: `, response)
    } catch (e) {
        console.log('error')
        // yield put(peopleActions.fetchPeopleRequestFailed)
    }
}

export default peopleSaga;
