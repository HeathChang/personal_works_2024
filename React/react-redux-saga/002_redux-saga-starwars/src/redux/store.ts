import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from "./root/rootReducer";
import rootSaga from "./root/rootSaga";



const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
        serializableCheck: false
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;