import React, {useState, useEffect} from 'react';


const Info = () => {
    // useState: 변수명, 설정 함수 , 초기 값
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect는 기본적으로 랜더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 다름.

    // 1.  랜더링 될때 (생성 및 업데이트)될때마다 실행 > 값이 변경되면 재실행
    useEffect(() => {
        console.log('기본 useEffect', name, nickname);
    });

    // 2. 빈 [] > 마운트 될때만 실행 값이 변경되어도 재실행 X >
    useEffect(() => {
        console.log('[] 사용한 useEffect', name, nickname);
    }, []);

    // 3. []안 명시 > 특정 값이 업데이트될때만 실행
    useEffect(() => {
        console.log('특정 값이 업데이트 될때만 실행되는 useEffect', name, nickname);
    }, [name]);

    // 4. cleanUp -1 > 빈 배열 사용한 경우 : unMounted 될 경우 호출
    useEffect(() => {
        // 컴포넌트가 unMounted / update 되기 직전에 어떠한 작업을 수행하고 싶을 경우 cleanUp 함수 반환
        return () => {
            console.log("cleanUp 함수 사용하여, unMounted 되기 전에 실행:: ");
        };
    }, []);

    // 5. cleanUp -2 > [] 안 특정 값 사용: unMounted 될 경우 호출
    useEffect(() => {
        // 컴포넌트가 unMounted / update 되기 직전에 어떠한 작업을 수행하고 싶을 경우 cleanUp 함수 반환
        return () => {
            console.log("cleanUp 함수 사용하여, name 이 update 되기 전에 실행::", name);
        };
    }, [name]);


    const onChangeName = e => setName(e.target.value);
    const onChangeNickname = e => setNickname(e.target.value);


    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName} placeholder="이름"/>
                <input type="text" value={nickname} onChange={onChangeNickname} placeholder="닉네임"/>
            </div>
            <div>
                <div>
                    <b> 이름 : </b> {name}
                </div>
                <div>
                    <b> 닉네임 : </b> {nickname}
                </div>
            </div>

        </div>
    );

};

export default Info;