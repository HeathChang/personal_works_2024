// ParentComponent.js
import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
    // useState
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    const onClickEnter = () => setMessage('Hello World');
    const onClickLeave = () => setMessage('Goodbye World');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    )


    /*
    * Event Handler 주의 사항.
    * 1. 카멜 표기법 (e.g. onClick)
    * 2. 함수형태의 값을 전달 (HTML 이벤트 전달 시는 큰따옴표 안에 실행할 코드를 전달했지만, 리엑트에서는 함수 형태의 객체 전달)
    * 3. DOM 요소에만 이벤트 설정가능하고, 직접 만든 컴포넌트에는 이벤트 자체 생성 불가
    * */


};

export default App;