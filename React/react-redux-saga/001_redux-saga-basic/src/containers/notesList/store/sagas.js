import {takeEvery, call, put} from 'redux-saga/effects';
import {INIT_GET_LIST_DATA} from "./actionTypes";
import axios from "axios";
import {fetchingGetListData, fetchingGetListDataFailed, fetchingGetListDataSuccess} from "./actions";

const url = 'https://react-notes-app-2024-6a2d5-default-rtdb.asia-southeast1.firebasedatabase.app/';
const headerParams = {
    'content-type': 'application/json',
};

export default function* NotesListSaga() {
    // 처음 한번 실행됨
    yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga(action) {
    console.log('checking action:: ', action)
    yield put(fetchingGetListData());
    try {
        const response = yield call(
            axios.get,
            url + 'noteList.json',
            {header: headerParams}
        );
        if (response && response.status === 200) {
            const {data} = response;
            const createData = [];
            for (const key in data) {
                createData.push(data[key]);
            }
            // console.log('checking createData:: ', createData);
            yield put(fetchingGetListDataSuccess(createData));
        }
    } catch (e) {
        yield put(fetchingGetListDataFailed());
    }
}