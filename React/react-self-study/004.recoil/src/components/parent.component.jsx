import React from "react";
import {useRecoilState} from "recoil";
import {atomB} from "../recoil/CounterState";
import ChildComponent from "./child.component";

const ParentComponent = () => {
    const [valueB, setAtomB] = useRecoilState(atomB);


    const onClickButton = () => {
        setAtomB(valueB + 1);
    };

    return (
        <div>
            <ChildComponent/>
            <button onClick={onClickButton}>Increment</button>
        </div>
    )
};

export default ParentComponent;