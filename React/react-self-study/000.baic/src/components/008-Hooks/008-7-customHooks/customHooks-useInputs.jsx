import React, {useReducer} from "react";

/*
 * customHooks > 스스로 만든 Hooks
 * 목표: 여러 개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을 useInputs라는 Hook으로 분리
 */


const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
};


const useInputs = (initialForms) => {
    const [state, dispatch] = useReducer(reducer, initialForms);
    const onChange = e => dispatch(e.target);
    return [state, onChange];
};

export default useInputs;


