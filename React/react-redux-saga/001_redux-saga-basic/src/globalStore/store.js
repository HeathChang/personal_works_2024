import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// DESC: Creates a Redux middleware and connects the Sagas to the Redux Store
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        thunk: false, // redux-saga가 아닌 redux-thunk 사용할 경우
        serializableCheck: false
    }), sagaMiddleware // redux-saga 사용시
    ],
});


sagaMiddleware.run(rootSaga);

export default store





