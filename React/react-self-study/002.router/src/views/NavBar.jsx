import React from "react";
import {Link, NavLink} from "react-router-dom";



const NavBar = () => {
    return (
        <div className="nav-bar-main">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/profile/heath">Heath Profile</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong Profile</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
        </div>
    )

};

export default NavBar;