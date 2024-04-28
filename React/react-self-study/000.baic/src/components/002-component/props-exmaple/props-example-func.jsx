import React from "react";
import PropTypes from "prop-types";

const PropsExampleFunc = (props) => {
    console.log("what is in props:: ", props);
    let {name} = props;
    return (
        <div>
            안녕하세요! 제 이름은 {name} 입니다.
            children 에서 컴포넌트 사이값을 보여주는
            props.children -> {props.children}
        </div>
    );
};


// NOTE: 값이 아예 안주어진 경우 Default 값 설정 가능
PropsExampleFunc.defaultProps = {
    name: "React Default",
};

// NOTE: propTypes를 통해 props 검증, chain 형식으로 계속 쓸 수 있음.
//
PropsExampleFunc.propTypes = {
    name: PropTypes.string.isRequired
};


export default PropsExampleFunc;