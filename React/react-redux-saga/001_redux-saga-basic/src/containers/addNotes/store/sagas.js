import {takeEvery, call, put} from 'redux-saga/effects';
import {
    GET_NOTES_VALUE,
    INIT_SAVE_NOTES_VALUE,
    SAVE_NOTES_VALUE_SUCCESSFUL,
    SAVE_NOTES_VALUE_FAILED
} from "./actionTypes";
import axios, {create} from "axios";
import {initSaveNotesValueSuccessful, initSaveNotsValueFailed} from "./actions";


const url = 'https://react-notes-app-2024-6a2d5-default-rtdb.asia-southeast1.firebasedatabase.app/';

function* getNotesSaga(action) {
    console.log('default call:: ', action);
}

function* saveNotesSaga(action) {
    // API call and get response back

    const headerParams = {
        'content-type': 'application/json',
    };

    const createFinalNotesData = {
        name: action.noteValue,
        id: Math.floor(Math.random() * 10000)
    };
    try {
        const response = yield call(
            axios.post,
            url + 'noteList.json',
            createFinalNotesData,
            {header: headerParams}
        );
        if (response.status === 200) {
            yield put(initSaveNotesValueSuccessful(true));
        }
    } catch (error) {
        yield put(initSaveNotsValueFailed(true));
    }
    console.log('createFinalNotesData:: ', createFinalNotesData);
}


// watcher saga :  액션이 디스패치될 때마다 실행
// put > put value into your action and dispatch action > reducers
// call > calling any api ... and MORE
export default function* AddNotesSaga() {
    yield takeEvery(GET_NOTES_VALUE, getNotesSaga);
    yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga);
}





