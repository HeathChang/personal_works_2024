import React from "react";
import {Link, useSearchParams} from 'react-router-dom';

const About = () => {
    // 직접적으로 location 프로퍼티에 접근하는 대신에, useSearchParams 훅을 사용하여 쿼리 파라미터에 접근해야함 (@react-router v6)
    const [searchParams] = useSearchParams();
    const query = searchParams.get('detail');

    return (
        <div>
            <Link to="/about/about-us">Info Page</Link>
            <h1>About</h1>
            <p>You searched for: {query}</p>
        </div>
    );
};

export default About;
