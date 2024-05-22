import React from "react";
import * as HeaderStyles from "@/styles/components/Header.styles";

const Header = () => {
    return (
            <HeaderStyles.HeaderMain>
                <HeaderStyles.Logo></HeaderStyles.Logo>
                <HeaderStyles.SearchInput></HeaderStyles.SearchInput>
                <HeaderStyles.UlButtons className="nav-buttons">

                    <div>
                        <li>H</li>
                        <li>H</li>
                        <li>H</li>
                        <li>H</li>
                    </div>

                </HeaderStyles.UlButtons>
            </HeaderStyles.HeaderMain>
    )
}

export default Header;