import {all, fork} from 'redux-saga/effects';
import peopleSaga from "../slices/people/people.saga";

export default function* rootSaga(){
    yield all([
        fork(peopleSaga)
    ])
}