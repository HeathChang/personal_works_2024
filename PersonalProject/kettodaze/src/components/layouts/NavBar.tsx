import React from "react";
import {useNavigate} from 'react-router-dom';
import * as N from "@/styles/components/Layout.styles";
import {Simulate} from "react-dom/test-utils";

interface NavBarProps {
    activeItem: string,
    onMouseEnter: (item: string) => void,
    onMouseLeave: () => void
}

const NavBar: React.FC<NavBarProps> = ({activeItem, onMouseEnter, onMouseLeave}) => {
    const columnNameDefs = ['인기 갓챠', '최신 갓챠', '제품별', '이벤트 갓챠', '랜덤 갓챠', '구해줘 갓챠', '입고예정 갓챠', '입고 임박 갓챠'];
    const navigate = useNavigate();


    const onMouseClick = (item: string) => {
        let path = '/'; // 기본 경로를 지정합니다.
        if(item === '인기 갓챠') path = '/popular';
        navigate(path);
    }


    return (
        <N.NavbarContainer>
            <N.NavbarList>
                {columnNameDefs.map((item, index) => (
                    <N.NavbarItem key={index}
                                  isActive={item === activeItem}
                                  onMouseOver={() => onMouseEnter(item)}
                                  onMouseLeave={() => onMouseLeave()}
                                  onClick={() => onMouseClick(item)}
                    >{item}</N.NavbarItem>
                ))}
            </N.NavbarList>
        </N.NavbarContainer>
    );
}

export default NavBar;
