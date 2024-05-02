import React, {useState} from 'react';


const Info = () => {
    // useState: 변수명, 설정 함수 , 초기 값
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };


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
    )

};

export default Info;