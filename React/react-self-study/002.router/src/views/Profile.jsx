import React from "react";
import NonUser from "./NonUser";
import {useParams} from "react-router-dom";


const data = {
    heath: {
        name: 'Heath Jann',
        description: 'React 초보'
    },
    gildong: {
        name: 'Gildong Hong',
        description: '홍길동'
    },
};
// react-router에서 useParams Hook을 통해서 parameter 가져옴
const Profile = (props) => {
    let { username } = useParams();
    const profile = data[username];
    if (!profile) {
        return <NonUser/>;
    }
    return (
        <div>
            <h3>{username}({profile?.name})</h3>
            <p>{profile?.description}</p>
        </div>
    );
};


export default Profile;