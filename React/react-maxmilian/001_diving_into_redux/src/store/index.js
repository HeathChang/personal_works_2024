import {createStore} from 'redux';

const initState = {counter: 0, showCounter: true};
const counterReducer = (state = initState, action) => {
    if (action.type === 'increment') {
        return { ...state , counter: state.counter + 1};
    } else if (action.type === 'decrement') {
        // return state < X
        // return { counter: state.counter + 1, counter: state.counter - 1}; < O
        // never mutate original state, but return brand-new state

        // IMPORTANT::  these returned object will not be merged with the existing state but overwrite the existing state.
        return { ...state, counter: state.counter - 1};
    } else if (action.type === 'increase') {
        return { ...state, counter: state.counter + action.amount};
    } else if (action.type === 'toggle'){
        console.log('action', state, action)
        return { ...state, showCounter: !state.showCounter}
    }

    return state;
};

const store = createStore(counterReducer);

export default store;