import {call, put, takeLatest} from 'redux-saga/effects';
import {peopleActions} from "./people.slice";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {PeopleDTO, PeopleState} from "../../../types/people.type";
import {PayloadAction} from "@reduxjs/toolkit";

// header 설정
const stateConfig: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}


const API_SW_URL = process.env.REACT_APP_STAR_WARS_URL;
const API_FB_URL = process.env.REACT_APP_FIREBASE_URL;


// saga-watcher
function* peopleSaga() {
    // takeEvery 이펙트를 사용해 마지막에 dispatch 된 fetchPeopleRequest 인 경우, fetchPeopleList generator 살행
    yield takeLatest(peopleActions.fetchPeopleRequest.type, fetchPeople);
    yield takeLatest(peopleActions.savePeopleRequest.type, savePeople)
    yield takeLatest(peopleActions.initSavedPeopleRequest.type, initSavedPeople)
}

// function
function* fetchPeople({payload}: PayloadAction<number>) {
    try {
        // axios.get 메서드를 호출해 API 호출 수행
        let config: AxiosRequestConfig = {...stateConfig};
        const response: AxiosResponse<any> = yield call(
            axios.get,
            `${API_SW_URL}/people/${payload}`,
            config
        )
        const {status, data} = response
        // 성공 시, fetchPeopleRequestSuccess action을 dispatch하여 데이터를 store 에 저장
        if (+status === 200) {
            yield put(peopleActions.fetchPeopleRequestSuccess(data))
        }
    } catch (e) {
        // 실패 시, fetchPeopleRequestFailed 호출
        console.log('error:: ', e)
        yield put(peopleActions.fetchPeopleRequestFailed())
    }
}
function* savePeople({payload}: PayloadAction<PeopleDTO>) {
    let config: AxiosRequestConfig = {...stateConfig};
    const params = {
        ...payload,
        id: Math.floor(Math.random()*1000000)
    }
    try {
        const response: AxiosResponse<any> = yield call(
            axios.post,
            `${API_FB_URL}/starwarsList/people.json`,
            params,
            config
        )
        if (response.status === 200) {
            yield put(peopleActions.savePeopleRequestSuccess())
        }

    } catch (e) {
        console.log('error in savePeople:: ', e);
        yield put(peopleActions.savePeopleRequestFailed())
    }
}
function* initSavedPeople() {
    let config: AxiosRequestConfig = {...stateConfig};
    try {
        const response: AxiosResponse<any> = yield call(
            axios.get,
            `${API_FB_URL}/starwarsList/people.json`,
            config
        )
        const {status, data} = response
        const dataArr = [];
        for (const key in data) {
            dataArr.push(data[key]);
        }
        if (status === 200) {
            yield put(peopleActions.initSavedPeopleRequestSuccess(dataArr))
        }

    } catch (e) {
        console.log('error in savePeople:: ', e);
        yield put(peopleActions.initSavedPeopleRequestFailed())
    }
}


export default peopleSaga;
