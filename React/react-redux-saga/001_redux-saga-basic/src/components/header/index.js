import './style.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <ul>
                <li>
                    <Link to='/'> Notes List</Link>
                </li>
                <li>
                    <Link to='/add-new-note'> Add new note</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;