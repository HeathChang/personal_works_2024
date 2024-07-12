import {createSlice, configureStore} from "@reduxjs/toolkit";


const initCounterState = {counter: 0, showCounter: true};
const initAuthState = {isAuthenticated: false};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initCounterState,
    reducers: {
        increment(state) {
            console.log('check increment:: ', state);
            state.counter++;
        },
        decrement(state) {
            console.log('check decrement:: ', state);
            state.counter--;
        },
        increase(state, action) {
            console.log('check increase:: ', state, action);
            state.counter += action.payload;
        },
        toggle(state) {
            console.log('check toggle:: ', state);
            state.showCounter = !state.showCounter;
        }
    }
});
const authSlice = createSlice({
    name: 'authentication',
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;