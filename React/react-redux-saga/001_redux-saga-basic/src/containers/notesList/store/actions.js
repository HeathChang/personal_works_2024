import {
    FETCHING_GET_LIST_DATA,
    FETCHING_GET_LIST_DATA_FAILED,
    FETCHING_GET_LIST_DATA_SUCCESS,
    INIT_GET_LIST_DATA
} from "./actionTypes";

export const initGetListData = () => {
    return {
        type: INIT_GET_LIST_DATA
    };
};

export const fetchingGetListData = () => {
    return {
        type: FETCHING_GET_LIST_DATA
    };
};

export const fetchingGetListDataSuccess = () => {
    return {
        type: FETCHING_GET_LIST_DATA_SUCCESS
    };
};

export const fetchingGetListDataFailed = () => {
    return {
        type: FETCHING_GET_LIST_DATA_FAILED
    };
};