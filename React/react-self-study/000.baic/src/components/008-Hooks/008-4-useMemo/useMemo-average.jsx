import React, {useMemo, useState} from "react";


/*
 * useMemo > 내부에서 발생하는 연산을 최적화
 * useEffect 와 비슷하게, [] 안의 값을 줘서, 해당 값이 변경될 때만 수행
 */

const getAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const onChange = e => {
        setNumber(e.target.value)
    };
    const onClick = () => {
        const newList = [...list, parseInt(number)];
        setList(newList);
        setNumber('');
    };

    const listArr = list.map((item, index) => {
        return (<li key={index}>{item}</li>);
    });

    const avg = useMemo(() => getAverage(list), [list]);
    // []안의 내용이 바뀔 때만, getAverage 함수 수행. 여기서는 list 변할 때만, getAverage() 호출


    return (
        <div>
            <input type="number" value={number} onChange={onChange}/>
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