import React, {useReducer} from "react";


/*
 * useReducer 는 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해 주고 싶을 때 사용.
 * reducer 는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태로 반환하는 함수.
 * reducer 에서 새로운 상태를 만들 때는 반드신 불변성을 지켜야 함.
 */


const reducer = (state, action) => {
    // action.type 에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
};

const Counter = () => {
    /**
     *  useReducer(reducer 함수, 해당 리듀서의 기본값)을 parameter를 받아서, state & dispatch 함수를 받아옴.
     *  State > 현재 가리키고 있는 상태
     *  Dispatch >  Action 을 발생시키는 함수
     * */
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p> 현재 카운터 값은 {state.value} 입니다</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    )
};


export default Counter;