import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const {counter} = useSelector(state => state); // redux store 의 state 조회하며, 변화를 감지하는 hook
    const dispatch = useDispatch();
    const toggleCounterHandler = () => {

    };

    const increment = () => {dispatch({type: 'increment'})}
    const decrement = () =>  {dispatch({type: 'decrement'})}

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
