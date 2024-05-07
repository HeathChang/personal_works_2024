import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {counterState} from "../recoil/CounterState";

const ChildComponent = () => {
    const finalValue = useRecoilValue(counterState);


    return (
        <div>
            {finalValue}
        </div>
    );
};

export default ChildComponent;