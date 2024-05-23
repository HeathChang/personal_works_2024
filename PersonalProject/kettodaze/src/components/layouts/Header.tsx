import React from "react";
import * as HeaderStyles from "@/styles/components/Header.styles";

const Header = () => {
    return (
            <HeaderStyles.HeaderMain>
                <HeaderStyles.Logo><h1>k-ettodaze</h1></HeaderStyles.Logo>
                <HeaderStyles.SearchInputs>
                    <HeaderStyles.SearchInput></HeaderStyles.SearchInput>
                    <HeaderStyles.SearchInputBtn></HeaderStyles.SearchInputBtn>
                </HeaderStyles.SearchInputs>




                <HeaderStyles.UlButtons className="nav-buttons">
                    <div>
                        <li><h3>Home</h3></li>
                        <li><h3>Gotchas</h3></li>
                        <li><h3>Near</h3></li>
                        <li><h3>My Page</h3></li>
                    </div>

                </HeaderStyles.UlButtons>
            </HeaderStyles.HeaderMain>
    )
}

export default Header;