import React from 'react';
import styles from "../../assets/styling/3-css-module/CSSModule.module.css";

/*
* CSS MODULE 은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값으로 설정
* [파일 이름]_[쿨래스 이름]_[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지
* */

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요 저는
            <span className="something">CSS MODULE !</span>
        </div>
    );
};

export default CSSModule;