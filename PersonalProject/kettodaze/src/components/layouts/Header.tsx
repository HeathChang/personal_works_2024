import React from "react";
import * as HeaderStyles from "@/styles/components/Header.styles";

const Header = () => {
    return (
        // <HeaderStyles.HeaderStyle>
            <div className="Header-container">
                <HeaderStyles.Logo></HeaderStyles.Logo>
                <HeaderStyles.UlButtons className="nav-buttons">
                    <div>
                        <li>H</li>
                        <li>H</li>
                        <li>H</li>
                        <li>H</li>
                    </div>
                </HeaderStyles.UlButtons>
            </div>
        // </HeaderStyles.HeaderStyle>
    )
}

export default Header;