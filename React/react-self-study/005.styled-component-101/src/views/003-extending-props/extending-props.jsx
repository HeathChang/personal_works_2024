import styled, {css} from "styled-components";

const ExtendingProps = () => {
    // The Button from the last section without the interpolations
    const Button = styled.button`
        color: #BF4F74;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;
    `;

    // A new component based on Button, but with some override styles
    const TomatoButton = styled(Button)`
        color: tomato;
        border-color: tomato;
    `;

    //  ReversedButton 함수는 주어진 Button 컴포넌트를 사용하며, props를 전달하고 children prop의 문자열을 반전시킵니다.
    // 중요 포인트
    // 1. ReversedButton 함수는 props를 매개변수로 받아, 기존에 설정된 Button 컴포넌트를 사용하여 새로운 버튼을 생성.
    // 2. ReversedButton 함수는 children prop을 반전
    const ReversedButton = props => {
        // props: {children : "Custom Button", className : "sc-ispPvw hKckZl"}
        return <Button {...props} children={props.children.split('').reverse()}/>;
    };

    return (<div>
        <Button>Normal Button</Button>
        {/* "as" 다형성(prop)을 사용해 스타일이 적용되는 요소 또는 컴포넌트를 변경 > button tag -> a tag 로 변경하되, css 유지*/}
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as={ReversedButton}>Reversed Custom Button</TomatoButton>
        <TomatoButton>Tomato Button</TomatoButton>
    </div>);
};


export default ExtendingProps;