import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter); // redux store 의 state 조회하며, 변화를 감지하는 hook
    const show = useSelector(state => state.showCounter); // redux store 의 state 조회하며, 변화를 감지하는 hook
    // useSelector.js:76 Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
    // useSelector 은 1:1 로 매칭해야함 > 안할 시, 모든 변경 사항으로 인해 불필요한 재렌더링 유발 가능

    const dispatch = useDispatch();

    const increment = () => {dispatch({type: 'increment',})}
    const decrement = () =>  {dispatch({type: 'decrement'})}
    const increase = () =>  {dispatch({type: 'increase', amount: 5})}

    const toggleCounterHandler = () => {dispatch({type: 'toggle'})}

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={increase}>increase</button>
                <button onClick={decrement}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
