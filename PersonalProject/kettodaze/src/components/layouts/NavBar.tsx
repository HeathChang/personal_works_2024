import React from "react";
import * as N from "@/styles/components/Layout.styles";

interface NavBarProps {
    activeItem: string,
    onMouseEnter: (item: string) => void,
    onMouseLeave: () => void
}

const NavBar: React.FC<NavBarProps> = ({activeItem, onMouseEnter}) => {
    const columnNameDefs = ['인기 갓챠', '최신 갓챠', '제품별', '이벤트 갓챠', '랜덤 갓챠', '구해줘 갓챠', '입고예정 갓챠', '입고 임박 갓챠'];


    return (
        <N.NavbarContainer>
            <N.NavbarList>
                {columnNameDefs.map((item, index) => (
                    <N.NavbarItem key={index}
                                  isActive={item === activeItem}
                                  onMouseOver={() => onMouseEnter(item)}
                                  onMouseLeave={() => onMouseEnter('')}
                    >{item}</N.NavbarItem>
                ))}
            </N.NavbarList>
        </N.NavbarContainer>
    );
}

export default NavBar;
