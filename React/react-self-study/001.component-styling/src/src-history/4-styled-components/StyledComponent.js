import React from "react";
import styled, {css} from "styled-components";

/*
* Styled Component
* JS 파일 안에서 스타일을 선언하는 방식 (CSS-in-JS)
*/

// styled.div 및 styled.button: styled-components의 스타일 컴포넌트를 생성
const Box = styled.div`
    // props 로 넣어준 값을 직접 전달: 컴포넌트의 color 속성을 사용하여 배경색을 지정, color 속성이 지정되지 않았을 경우 기본값으로 'blue'를 사용
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    

    // & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
            // 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여
            props.inverted &&

            // css 함수:  템플릿 리터럴을 사용하여 스타일을 동적으로 생성.
            css`
                background: none;
                border: 2px solid white;
                color: white;
                // &:hover: 마우스 오버 상태일 때의 스타일을 지정

                &:hover {
                    background: white;
                    color: black;
                }
            `};

    // & + button: 인접 형제 선택자를 사용하여 해당 스타일이 적용된 버튼 다음에 오는 버튼에 대해 추가적인 스타일을 지정
    & + button {
        margin-left: 1rem;
    }
`;


const StyledComponent = () => {
    return (
        <Box color="black">
            {/* Styled Components에서  inverted props에 따라서만 활성화되는 조건부 스타일*/}
            <Button>안녕하세요</Button>
            <Button inverted="true">테두리만</Button>
        </Box>
    );
};

export default StyledComponent;