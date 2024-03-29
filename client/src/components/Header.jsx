import { NavLink } from "react-router-dom";
import Dropdown from './Dropdown'
import Auth from '../utils/auth'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {

    return (
        <header>
            <h1 className="text-center title">LaunchPad</h1>
            <Row className="nav nav-tabs justify-content-center">
                <Col md={2}>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </Col>
                {Auth.loggedIn() ? (
                    <>
                        <Col md={2}>
                            <NavLink to='/launches' className='nav-link'>Saved Launches</NavLink>
                        </Col>
                        <Col md={2}>
                            <NavLink onClick={Auth.logout} to='/404' className='nav-link'>Logout</NavLink>
                        </Col>
                    </>
                )
                    :
                    (
                        <Col md={2}>
                            <NavLink to='/login' className='nav-link'>Login</NavLink>
                        </Col>
                    )}
                <Col md={2} className="dropdown">
                    <Dropdown className="nav-link" />
                </Col>
            </Row>
        </header>
    )
}
export default Header;