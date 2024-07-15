import {takeEvery, call, put} from 'redux-saga/effects';
import {INIT_GET_LIST_DATA} from "./actionTypes";


export default function* NotesListSaga(){
    yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga)
}

function* getNotesListSaga(){
    console.log('list saga')
}