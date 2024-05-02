import React, {useMemo, useState, useCallback, useRef} from "react";


/*
 * useRef > 함수형 컴포넌트에서 ref를 더 쉽게 사용할 수 있도록 함.
 * ref 안의 값이 바뀌어도, 컴포넌트가 렌더링되지 않음.
 * 목표: 등록 버튼을 클릭한 경우, 포커스가 인풋쪽으로 넘어가도록 함
 */


const getAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    // 빈 배열을 사용하는 경우, 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    // 차 있는 배열을 사용하는 경우,  number | list 가 변경될 때만,  새로 생성됨
    const onClick = useCallback(() => {
        const newList = [...list, parseInt(number)];
        setList(newList);
        setNumber('');
        inputEl.current.focus(); // 객체 안의 current 값이 실제 element를 가리켜, 포커스가 인풋쪽으로 넘어감.
    }, [number, list]); // number | list 가 변했을 때만 수행

    // []안의 내용이 바뀔 때만, getAverage 함수 수행. 여기서는 list 변할 때만, getAverage() 호출
    const avg = useMemo(() => getAverage(list), [list]);


    const listArr = list.map((item, index) => {
        return (<li key={index}>{item}</li>);
    });

    return (
        <div>
            <input type="number" value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onClick}>등록</button>
            <ul>{listArr}</ul>
            <div>
                {/*<b>평균값: </b> {getAverage(list)}*/}
                {/*이 상태로 사용되면, 인풋이 수정될 때마다 호출됨으로 메모리 낭비*/}
                {/* useMemo를 사용하여 최적화 작업 수행*/}
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;
