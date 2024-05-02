import React from "react";
import styled, {css} from "styled-components";


/*
* Styled Component
* JS 파일 안에서 스타일을 선언하는 방식 (CSS-in-JS)
*/

// styled.div 및 styled.button: styled-components의 스타일 컴포넌트를 생성합니다. 이를 통해 JSX에서 사용할 수 있는 스타일링된 React 컴포넌트를 생성할 수 있습니다
const Box = styled.div`
    /* props 로 넣어준 값을 직접 전달해줄 수 있습니다. */
    // 컴포넌트의 color 속성을 사용하여 배경색을 지정합니다. 만약 color 속성이 지정되지 않았을 경우 기본값으로 'blue'를 사용
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    //width: 1024px;
    //margin: 0 auto;
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

    /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 다음 코드는 inverted 값이 true 일 때 특정 스타일을 부여해줍니다. */
    // 속성 값에 따라 동적으로 스타일을 변경할 수 있습니다. 예를 들어, inverted 속성이 true인 경우 버튼의 배경색을 투명하게 하고 테두리만 표시하도록 스타일이 변경
    ${props =>
            props.inverted &&
            // css 함수: styled-components 패키지에서 제공하는 함수로, 템플릿 리터럴을 사용하여 스타일을 동적으로 생성할 수 있습니다.
            css`
                background: none;
                border: 2px solid white;
                color: white;
                // &:hover: CSS에서 사용하는 :hover와 같은 방식으로 마우스 오버 상태일 때의 스타일을 지정
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
            <Button>안녕하세요</Button>
            <Button inverted={true}>테두리만</Button>
        </Box>
    );
};

export default StyledComponent;