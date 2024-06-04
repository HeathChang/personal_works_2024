import React from "react";
import * as N from "@/styles/components/Layout.styles";

const NavBar = () => {

    const columnNameDefs = ['인기 갓챠' , '최신 갓챠',  '제품별' , '이벤트 갓챠' , '랜덤 갓챠', '구해줘 갓챠', '입고예정 갓챠', '입고 임박 갓챠']
    return (
        <N.NavbarContainer>
            <ul>
                {
                    columnNameDefs.map(item => {
                        return <li> {item} </li>
                    })
                }
            </ul>


        </N.NavbarContainer>
    )
}

export default NavBar;