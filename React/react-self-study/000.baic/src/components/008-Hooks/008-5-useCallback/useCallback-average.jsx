import React, {useMemo, useCallback, useState} from "react";


/*
 * useCallback > 랜더링 성능 최적화를 위해 사용되며, 컴포넌트가 리렌더링될 때마다, 새로 만들어진 함수를 사용해주는데 이를 막기 위해 사용되는 메모이제이션 기술 (함수의 반환 값을 캐시하여 동일한 인자가 입력될 때 이전에 계산된 값을 반환하는 기술)
 * 1번째 parameter > 생성하고 싶은 함수
 * 2번째 parameter > 배열을 넣어, 어떤 값이 바뀌었을 때 함수를 새로 생성하는지 명시
 * 빈 배열 [] 인 경우, 컴포넌트가 랜더링될 때 만들었던 함수를 계속 사용 (매 렌더링마다 새로 생성)
 * 배열안에 값을 넣을 경우 [number, list] 인 경우, number 혹은 list가 바뀔 때 새로 만들어진 함수를 사용
 */

const getAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    // 빈 배열을 사용하는 경우, 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    // 차 있는 배열을 사용하는 경우,  number | list 가 변경될 때만,  새로 생성됨
    const onClick = useCallback(() => {
        const newList = [...list, parseInt(number)];
        setList(newList);
        setNumber('');
    }, [number, list]); // number | list 가 변했을 때만 수행

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