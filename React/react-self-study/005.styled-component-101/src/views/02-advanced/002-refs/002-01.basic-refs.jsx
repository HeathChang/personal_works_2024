import React, {useRef} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: #BF4F74;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

const BasicRefs = () => {
    const inputRef = useRef(null);

    const handleMouseEnter = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleMouseLeave = () => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    return (
        <Input
            ref={inputRef}
            placeholder="Hover to focus"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
};

export default BasicRefs;