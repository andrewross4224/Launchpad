import { NavLink } from "react-router-dom";
import Dropdown from './Dropdown'

function Header({ loggedIn }) {
    return (
        <header className="fixed-top">
            <h1 className="text-center">Launch Pad</h1>
            <ul className="nav nav-tabs justify-content-center py-2">
                <li className="nav-item">
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <Dropdown className="nav-item" />
                </li>
                <li className="nav-item">
                    <NavLink to='/login' className='nav-link'>Login</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Header;